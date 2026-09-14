import * as fs from "fs";
import { existsSync, mkdir, mkdirSync, readFileSync } from "fs";
import { createRequire } from "module";
import * as path from "path";
const requireFromDisk = createRequire(__filename);
import packageJson from "./package.json"
import { stdin } from "process";
import { spawn, ChildProcess } from "child_process";
import lc from "console-log-colors"



type ScreenshotsModule = typeof import('node-screenshots');        // node-screenshotsの型
type ScreenshotWindow = InstanceType<ScreenshotsModule['Window']>; // Windowクラスのインスタンス型
let screenshots: ScreenshotsModule;                    // node-screenshotsモジュールのインスタンスを格納する変数
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

//import looksSame from 'looks-same';
type LooksSameModule = typeof import('looks-same'); // looks-sameの型
let looksSame: LooksSameModule; // looks-sameモジュールのインスタンスを格納する変数
let looksSameAvailable = false;
try {
    const looksSameModulePaths = [ // looks-sameのモジュールパスを複数候補として指定
        path.join(__dirname, 'node_modules', 'looks-same'),           // １：このスクリプトのディレクトリ内のnode_modules
        path.join(process.cwd(), 'node_modules', 'looks-same'),       // ２：実行ディレクトリのnode_modules
        path.join(__dirname, '..', 'node_modules', 'looks-same'),     // ３：このスクリプトの親ディレクトリのnode_modules
    ];
    const looksSameModulePath = looksSameModulePaths.find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!looksSameModulePath) { throw new Error('looks-same module not found'); }
    looksSame = requireFromDisk(looksSameModulePath);
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
    console.log(lc.green("'l'")+" : print window List. "+ lc.green("'L'")+" : print window table.")
    console.log(lc.green("'r'")+" : reload .secret.json and reInit")
    console.log(lc.green("'c'")+" : Capture.")
    console.log(lc.green("'on'")+" : start auto diff."+lc.green("'off'")+" : stop.")
    console.log(lc.green("'exit'")+" : exit.")
    console.log(lc.blue("\n (Tray / Global hotkey) input"))
    console.log("System Tray menu: "+lc.yellow("Capture / Start / Stop / Exit"))
    console.log(lc.green("Ctrl+Alt+PrintScreen")+" : Capture. "+lc.green("Ctrl+Alt+F10")+" : start. "+lc.green("Ctrl+Alt+F9")+" : stop.")
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

let trayProcess: ChildProcess | undefined;
if (process.platform === 'win32') {
    const trayScriptPath = [
        path.join(__dirname, 'scripts', 'microshot-tray.ps1'),
        path.join(__dirname, '..', 'scripts', 'microshot-tray.ps1'),
        path.join(process.cwd(), 'scripts', 'microshot-tray.ps1'),
    ].find((candidate) => fs.existsSync(candidate));

    if (trayScriptPath) {
        const currentTrayProcess = spawn('powershell.exe', [
            '-NoProfile',
            '-STA',
            '-ExecutionPolicy', 'Bypass',
            '-File', trayScriptPath,
        ], { stdio: ['ignore', 'pipe', 'pipe'] });
        trayProcess = currentTrayProcess;

        currentTrayProcess.stdout.setEncoding('utf8');
        currentTrayProcess.stdout.on('data', (data: string) => {
            data.split(/\r?\n/).map((command) => command.trim()).filter(Boolean).forEach((command) => {
                if (command === 'capture') { captureOneShot(); }
                if (command === 'start') { startAutoDiff(); }
                if (command === 'stop') { stopAutoDiff(); }
                if (command === 'exit') { process.exit(0); }
            });
        });
        currentTrayProcess.stderr.setEncoding('utf8');
        currentTrayProcess.stderr.on('data', (data: string) => console.warn(data.trim()));
        currentTrayProcess.on('error', (err) => console.warn(lc.yellow(`Tray helper unavailable: ${err.message}`)));
        currentTrayProcess.on('close', (code) => {
            if (code !== 0) { console.warn(lc.yellow(`Tray helper exited with code ${code}.`)); }
        });
        process.on('exit', () => trayProcess?.kill());
    } else {
        console.warn(lc.yellow('Tray script not found — use CLI commands: capture, start, stop, exit.'));
    }
} else {
    console.log(lc.yellow("Tray and global hotkeys are available on Windows only — use CLI commands: 'capture', 'start', 'stop', 'exit'."));
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
                    console.log(""+`result:${result?.equal} diffBounds:${result?.diffBounds} diffClusters:${result?.diffClusters} `)
                    
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