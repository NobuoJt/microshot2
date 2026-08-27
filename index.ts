import * as fs from "fs";
import { existsSync, mkdir, mkdirSync, readFileSync } from "fs";
import { createRequire } from "module";
import * as path from "path";
const requireFromDisk = createRequire(__filename);
import packageJson from "./package.json"
import { stdin } from "process";
import lc from "console-log-colors"

type ScreenshotsModule = typeof import('node-screenshots');        // node-screenshotsの型
type ScreenshotWindow = InstanceType<ScreenshotsModule['Window']>; // Windowクラスのインスタンス型
let screenshots: ScreenshotsModule | undefined;                    // node-screenshotsモジュールのインスタンスを格納する変数
let screenshotsAvailable = false;
try {
    const screenshotModulePaths = [ // node-screenshotsのモジュールパスを複数候補として指定
        path.join(__dirname, 'node_modules', 'node-screenshots'),           // １：このスクリプトのディレクトリ内のnode_modules
        path.join(process.cwd(), 'node_modules', 'node-screenshots'),       // ２：実行ディレクトリのnode_modules
        path.join(__dirname, '..', 'node_modules', 'node-screenshots'),     // ３：このスクリプトの親ディレクトリのnode_modules
    ];
    const screenshotModulePath = screenshotModulePaths.find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!screenshotModulePath) { throw new Error('node-screenshots module not found'); }
    screenshots = requireFromDisk(screenshotModulePath);
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
    const configPath = [
        path.join(__dirname, '.secret.json'),     // １：カレントディレクトリ
        path.join(process.cwd(), '.secret.json'), // ２：実行ディレクトリ
        path.join(__dirname, '..', '.secret.json'), // ３：親ディレクトリ
    ].find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!configPath) { throw new Error('Could not find .secret.json'); }
    configObj = JSON.parse(readFileSync(configPath, 'utf-8')); // Initialize configuration
    URL=configObj?.DISCORD_POST_URL
}



let windows: ScreenshotWindow[] = [];       // ウィンドウの配列

/*** ウィンドウのプロパティを取得する */
function windowValue<T>(target: object, property: string): T {                      // Tは取得するプロパティの型(ジェネリクス)
    const value = (target as Record<string, T | (() => T)>)[property];              // 指定されたプロパティの値を取得
    return typeof value === 'function' ? (value as () => T).call(target) : value;   // 値が関数の場合には実行して結果を返す
}

if (screenshotsAvailable) {
    try {
        windows = screenshots!.Window.all(); // ウィンドウの配列を取得(windowを持たない場合は空配列)
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
        windows.forEach((item: ScreenshotWindow) => { // ウィンドウのプロパティを取得して表示
            console.table({
                id: windowValue<number>(item, 'id'),
                appName: windowValue<string>(item, 'appName'),
                title: windowValue<string>(item, 'title'),
                currentMonitor: windowValue<number>(windowValue<object>(item, 'currentMonitor'), 'id'),
                x: windowValue<number>(item, 'x'),
                y: windowValue<number>(item, 'y'),
                width: windowValue<number>(item, 'width'),
                height: windowValue<number>(item, 'height'),
                //rotation: item.rotation(),
                //scaleFactor: item.scaleFactor(),
                //isPrimary: item.isPrimary(),
                isMinimized: windowValue<boolean>(item, 'isMinimized'),
                isMaximized: windowValue<boolean>(item, 'isMaximized'),
            });
        });
    }
    if (e?.toString().match("l")){///l アプリ名のみ
        windows.forEach((item: ScreenshotWindow) => {
            console.log({
                appName: windowValue<string>(item, 'appName'),
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
        windows.forEach((item: ScreenshotWindow, i: number) => {
            if (windowValue<string>(item, 'appName') == tg_window) {          // ターゲットウィンドウのアプリ名と一致する場合にキャプチャ
                let image = windowValue<ReturnType<ScreenshotWindow['captureImageSync']>>(item, 'captureImageSync') // キャプチャ画像を取得(型はScreenshotWindow.captureImageSyncの戻り値)
                let filename = `${__dirname}/pix/${windowValue<string>(item, 'appName')}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")} ${i}.png` // 保存するファイル名を作成
                if (!fs.existsSync(`${__dirname}/pix`)) { fs.mkdirSync(`${__dirname}/pix`) }
                if (image === undefined || image.width === 0 || image.height === 0) { console.error(lc.red("Capture failed: image is invalid.")); return }
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
        windows.forEach(async (item: ScreenshotWindow, i: number) => { // ターゲットウィンドウのアプリ名と一致する場合にキャプチャ
            if(windowValue<string>(item, 'appName')==tg_window){       // ターゲットウィンドウのアプリ名と一致する場合
                let image=windowValue<ReturnType<ScreenshotWindow['captureImageSync']>>(item, 'captureImageSync') // キャプチャ画像を取得(型はScreenshotWindow.captureImageSyncの戻り値)
                if (image === undefined || image.width === 0 || image.height === 0) { console.error(lc.red("Capture failed: image is invalid.")); return } // 画像が無効な場合エラーを表示
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
                            const png = image.toPngSync() // Capture the current image as PNG
                            const pngBuffer: ArrayBuffer = new ArrayBuffer(png.byteLength) // Create an ArrayBuffer of the same length
                            new Uint8Array(pngBuffer).set(png) // Copy the PNG data into the ArrayBuffer
                            formData.append('file', new Blob([pngBuffer], { type: 'image/png' }), 'file.png')
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