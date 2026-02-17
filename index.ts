import * as fs from "fs";
import { existsSync, mkdir, mkdirSync, readFileSync } from "fs";
import { createRequire } from "module";
import * as path from "path";
const requireFromDisk = createRequire(__filename);
import packageJson from "./package.json"
import { stdin } from "process";
import lc from "console-log-colors"

//import { screenshots } from 'node-screenshots';
let screenshots: any = undefined;
let screenshotsAvailable = false;
try {
    screenshots = requireFromDisk(__dirname+'\\node_modules\\node-screenshots\\index.js');
    screenshotsAvailable = true;
} catch (err) {
    console.warn(lc.yellow("node-screenshots not available — capture features disabled."));
}

//import { GlobalKeyboardListener } from 'node-global-key-listener';
let GlobalKeyboardListener: any;
let globalHookAvailable = false;
try {
    GlobalKeyboardListener = requireFromDisk(__dirname+'\\node_modules\\node-global-key-listener\\build\\index.js');
    globalHookAvailable = true;
} catch (err) {
    console.warn(lc.yellow("Global keyboard hook module not available, falling back to CLI input."));
}
//import looksSame from 'looks-same';
let looksSame: any = undefined;
let looksSameAvailable = false;
try {
    looksSame = requireFromDisk(__dirname+'\\node_modules\\looks-same\\index.js');
    looksSameAvailable = true;
} catch (err) {
    console.warn(lc.yellow("looks-same not available — diff notification disabled."));
}

const version=packageJson.version


let prevImage=new Map();

interface config {"DISCORD_POST_URL":string,"TARGET_WINDOW":{"ONE_SHOT":string[],"AUTO":string[]},"TOLERANCE":number}

let configObj: config; // Configuration will be initialized in the load() function
let URL:string
load()

function load(){
    console.log(lc.yellowBG(" ")+lc.italic(` microShot v${version} `+lc.yellowBG(" "))+lc.gray(" nobuoJT"))
    console.log(lc.blue("\n (On console) Key input "))
    console.log("'l' : print window List.\n'L' : print window table.\n'r' : reload .secret.json and reInit")
    console.log("'c' : Capture.\n'on' : start auto diff. 'off' : stop.\n'exit' : exit.")
    console.log(lc.blue("\n (Global) Key input"))
    console.log("'R Ctrl' : Capture.\n'F10' : start auto diff notice. 'F9' : stop.")
    console.log("")
    configObj = JSON.parse(readFileSync(__dirname + '\\.secret.json', 'utf-8')); // Initialize configuration
    URL=configObj?.DISCORD_POST_URL
}



let windows: any[] = [];
if (screenshotsAvailable) {
    try {
        windows = screenshots.Window.all();
    } catch (err) {
        console.warn(lc.yellow("Failed to enumerate windows from node-screenshots."));
        windows = [];
        screenshotsAvailable = false;
    }
} else {
    windows = [];
}
let keyboard: any = undefined;
if (globalHookAvailable) {
    // Prevent spawn error if native binary was removed by AV or packaging
    const winKeyExe = path.join(__dirname, 'node_modules', 'node-global-key-listener', 'bin', 'WinKeyServer.exe');
    if (!fs.existsSync(winKeyExe)) {
        console.warn(lc.yellow(`WinKeyServer.exe not found at ${winKeyExe} — disabling global key hook.`));
        globalHookAvailable = false;
        keyboard = undefined;
    } else {
        try {
            keyboard = new GlobalKeyboardListener.GlobalKeyboardListener();
        } catch (err) {
            console.warn(lc.yellow("Failed to initialize global keyboard hook, falling back to CLI input."));
            globalHookAvailable = false;
            keyboard = undefined;
        }
    }
}

// Catch spawn ENOENT from background native helper and prevent process crash
process.on('uncaughtException', (err: any) => {
    if (err && err.code === 'ENOENT' && typeof err.path === 'string' && err.path.toLowerCase().includes('winkeyserver.exe')) {
        console.error(lc.red(`Ignored missing native helper: ${err.path}`));
        return;
    }
    // rethrow other errors so they are not silently ignored
    throw err;
});
let auto_diff_flag=false


//説明

//標準入力割り込み
stdin.addListener("data",(e)=>{
    if (e?.toString().match("L")){///L ウィンドウリストの表示
        windows.forEach((item:any) => {
            console.table({
                id: item.id,
                appName: item.appName,
                title: item.title,
                currentMonitor: item.currentMonitor.id,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                //rotation: item.rotation,
                //scaleFactor: item.scaleFactor,
                //isPrimary: item.isPrimary,
                isMinimized: item.isMinimized,
                isMaximized: item.isMaximized,
            });
        });
    }
    if (e?.toString().match("l")){///l アプリ名のみ
        windows.forEach((item:any) => {
            console.log({
                appName: item.appName,
            });
        });
    }
    if (e?.toString().match(/exit/gi)){///exit 終了
        console.log('stdin:"exit" detected , exiting...');
        process.exit();
    }
    if (e?.toString().match(/r/gi)){//reload .secret
        load()
        console.log(".secret.json reloaded")
    }
    // CLI commands (always enabled)
    if (e?.toString().match(/^\s*c\s*$/i) || e?.toString().match(/^\s*capture\s*$/i)){
        captureOneShot()
    }
    if (e?.toString().match(/^\s*(on|start|F10)\s*$/i)){
        startAutoDiff()
    }
    if (e?.toString().match(/^\s*(off|stop|F9)\s*$/i)){
        stopAutoDiff()
    }
    //console.log(e?.toString())
});

//キーボードイベント割り込み(フォーカス無視)
function captureOneShot() {
    let date = new Date();
    if (!screenshotsAvailable) { console.error(lc.red("Capture skipped: node-screenshots not available.")); return }
    configObj?.TARGET_WINDOW?.ONE_SHOT?.forEach((tg_window) => {
        windows.forEach((item: any, i: Number) => {
            if (item.appName == tg_window) {
                let image = item.captureImageSync()
                let filename = `${__dirname}/pix/${item.appName}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")} ${i}.png`
                if (!fs.existsSync(`${__dirname}/pix`)) { fs.mkdirSync(`${__dirname}/pix`) }
                fs.writeFileSync(filename, image.toPngSync());//pix以下に保存
                console.log("saved " + filename)
            }
        });
    })
}

function startAutoDiff() {
    auto_diff_flag = true
    console.log(`auto_diff_flag=true (tolerance:${configObj?.TOLERANCE}, target:${configObj?.TARGET_WINDOW?.AUTO})`)
}

function stopAutoDiff() {
    auto_diff_flag = false
    console.log("auto_diff_flag=false")
}

if (globalHookAvailable && keyboard) {
    keyboard.addListener((event: any) => {
        if (!event) { return }
        if (event.name === 'RIGHT CTRL' && event.state === 'DOWN') {
            captureOneShot()
        }
        if (event.name === 'F10' && event.state === 'DOWN') {
            startAutoDiff()
        }
        if (event.name === 'F9' && event.state === 'DOWN') {
            stopAutoDiff()
        }
    });
} else {
    console.log(lc.yellow("Global keyboard hook not in use — use CLI commands: 'capture', 'auto on', 'auto off', 'exit'."));
}


setInterval(async () => {
    if(!auto_diff_flag){return}
    if (!screenshotsAvailable || !looksSameAvailable) { return }
    configObj?.TARGET_WINDOW?.AUTO?.forEach((tg_window)=>{
        windows.forEach(async (item:any,i:number) => {
            if(item.appName==tg_window){
                let image=item.captureImageSync()
                let result
                if(prevImage.get(i)!==undefined){
                    try{
                        result = await looksSame(prevImage.get(i),image.toPngSync(),{tolerance:configObj?.TOLERANCE,ignoreAntialiasing:false,antialiasingTolerance:3})
                    } catch (err) {
                        console.error("Error running looks-same:", err)
                        return
                    }
                    console.log(""+`result:${result?.equal} metaInfo:${result?.metaInfo} diffBounds:${result?.diffBounds} diffClusters:${result?.diffClusters} `)
                    
                    if(false===result?.equal){
                        try{
                            const formData = new FormData()
                            formData.append('file', new Blob([image.toPngSync()], { type: 'image/png' }), 'file.png')
                            const response = await fetch(URL, {
                                method: 'POST',
                                body: formData
                            });
                        } catch (error) {console.error(error)}
                    }
                }
                prevImage.set(i,image.toPngSync())
            }
        });
    })
}, 5000);