"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const fs_1 = require("fs");
const module_1 = require("module");
const path = __importStar(require("path"));
const requireFromDisk = (0, module_1.createRequire)(__filename);
const package_json_1 = __importDefault(require("./package.json"));
const process_1 = require("process");
const console_log_colors_1 = __importDefault(require("console-log-colors"));
let screenshots; // node-screenshotsモジュールのインスタンスを格納する変数
let screenshotsAvailable = false;
try {
    const screenshotModulePaths = [
        path.join(__dirname, 'node_modules', 'node-screenshots'), // １：このスクリプトのディレクトリ内のnode_modules
        path.join(process.cwd(), 'node_modules', 'node-screenshots'), // ２：実行ディレクトリのnode_modules
        path.join(__dirname, '..', 'node_modules', 'node-screenshots'), // ３：このスクリプトの親ディレクトリのnode_modules
    ];
    const screenshotModulePath = screenshotModulePaths.find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!screenshotModulePath) {
        throw new Error('node-screenshots module not found');
    }
    screenshots = requireFromDisk(screenshotModulePath);
    screenshotsAvailable = true;
}
catch (err) {
    console.warn(console_log_colors_1.default.yellow("node-screenshots not available — capture features disabled."));
}
let GlobalKeyboardListener; // node-global-key-listenerモジュールのインスタンスを格納する変数
let globalHookAvailable = false;
try {
    const globalKeyboardListenerModulePaths = [
        path.join(__dirname, 'node_modules', 'node-global-key-listener'), // １：このスクリプトのディレクトリ内のnode_modules
        path.join(process.cwd(), 'node_modules', 'node-global-key-listener'), // ２：実行ディレクトリのnode_modules
        path.join(__dirname, '..', 'node_modules', 'node-global-key-listener'), // ３：このスクリプトの親ディレクトリのnode_modules
    ];
    const globalKeyboardListenerModulePath = globalKeyboardListenerModulePaths.find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!globalKeyboardListenerModulePath) {
        throw new Error('node-global-key-listener module not found');
    }
    GlobalKeyboardListener = requireFromDisk(globalKeyboardListenerModulePath);
    globalHookAvailable = true;
}
catch (err) {
    console.warn(console_log_colors_1.default.yellow("Global keyboard hook module not available, falling back to CLI input."));
}
let looksSame; // looks-sameモジュールのインスタンスを格納する変数
let looksSameAvailable = false;
try {
    const looksSameModulePaths = [
        path.join(__dirname, 'node_modules', 'looks-same'), // １：このスクリプトのディレクトリ内のnode_modules
        path.join(process.cwd(), 'node_modules', 'looks-same'), // ２：実行ディレクトリのnode_modules
        path.join(__dirname, '..', 'node_modules', 'looks-same'), // ３：このスクリプトの親ディレクトリのnode_modules
    ];
    const looksSameModulePath = looksSameModulePaths.find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!looksSameModulePath) {
        throw new Error('looks-same module not found');
    }
    looksSame = requireFromDisk(looksSameModulePath);
    looksSameAvailable = true;
}
catch (err) {
    console.warn(console_log_colors_1.default.yellow("looks-same not available — diff notification disabled."));
}
const version = package_json_1.default.version;
let prevImage = new Map();
let configObj; // Configuration will be initialized in the load() function
let URL;
load();
function load() {
    console.log(console_log_colors_1.default.yellowBG(" ") + console_log_colors_1.default.italic(` microShot v${version} ` + console_log_colors_1.default.yellowBG(" ")) + console_log_colors_1.default.gray(" nobuoJT"));
    console.log(console_log_colors_1.default.blue("\n (On console) Key input "));
    console.log("'l' : print window List.\n'L' : print window table.\n'r' : reload .secret.json and reInit");
    console.log("'c' : Capture.\n'on' : start auto diff. 'off' : stop.\n'exit' : exit.");
    console.log(console_log_colors_1.default.blue("\n (Global) Key input"));
    console.log("'R Ctrl' : Capture.\n'F10' : start auto diff notice. 'F9' : stop.");
    console.log("");
    const configPath = [
        path.join(__dirname, '.secret.json'), // １：カレントディレクトリ
        path.join(process.cwd(), '.secret.json'), // ２：実行ディレクトリ
        path.join(__dirname, '..', '.secret.json'), // ３：親ディレクトリ
    ].find((candidate) => fs.existsSync(candidate)); // 最初の存在するパスを取得
    if (!configPath) {
        throw new Error('Could not find .secret.json');
    }
    configObj = JSON.parse((0, fs_1.readFileSync)(configPath, 'utf-8')); // Initialize configuration
    URL = configObj === null || configObj === void 0 ? void 0 : configObj.DISCORD_POST_URL;
}
let windows = []; // ウィンドウの配列
/*** ウィンドウのプロパティを取得する */
function windowValue(target, property) {
    const value = target[property]; // 指定されたプロパティの値を取得
    return typeof value === 'function' ? value.call(target) : value; // 値が関数の場合には実行して結果を返す
}
if (screenshotsAvailable) {
    try {
        windows = screenshots.Window.all(); // ウィンドウの配列を取得(windowを持たない場合は空配列)
    }
    catch (err) {
        console.warn(console_log_colors_1.default.yellow("Failed to enumerate windows from node-screenshots."));
        windows = [];
        screenshotsAvailable = false;
    }
}
else {
    windows = [];
}
let keyboard = undefined;
if (globalHookAvailable) {
    // Prevent spawn error if native binary was removed by AV or packaging
    const winKeyExe = path.join(__dirname, 'node_modules', 'node-global-key-listener', 'bin', 'WinKeyServer.exe');
    if (!fs.existsSync(winKeyExe)) {
        console.warn(console_log_colors_1.default.yellow(`WinKeyServer.exe not found at ${winKeyExe} — disabling global key hook.`));
        globalHookAvailable = false;
        keyboard = undefined;
    }
    else {
        try {
            keyboard = new GlobalKeyboardListener.GlobalKeyboardListener();
        }
        catch (err) {
            console.warn(console_log_colors_1.default.yellow("Failed to initialize global keyboard hook, falling back to CLI input."));
            globalHookAvailable = false;
            keyboard = undefined;
        }
    }
}
// Catch spawn ENOENT from background native helper and prevent process crash
process.on('uncaughtException', (err) => {
    if (err && err.code === 'ENOENT' && typeof err.path === 'string' && err.path.toLowerCase().includes('winkeyserver.exe')) {
        console.error(console_log_colors_1.default.red(`Ignored missing native helper: ${err.path}`));
        return;
    }
    // rethrow other errors so they are not silently ignored
    throw err;
});
let auto_diff_flag = false;
//説明
//標準入力割り込み
process_1.stdin.addListener("data", (e) => {
    if (e === null || e === void 0 ? void 0 : e.toString().match("L")) { ///L ウィンドウリストの表示
        windows.forEach((item) => {
            console.table({
                id: windowValue(item, 'id'),
                appName: windowValue(item, 'appName'),
                title: windowValue(item, 'title'),
                currentMonitor: windowValue(windowValue(item, 'currentMonitor'), 'id'),
                x: windowValue(item, 'x'),
                y: windowValue(item, 'y'),
                width: windowValue(item, 'width'),
                height: windowValue(item, 'height'),
                //rotation: item.rotation(),
                //scaleFactor: item.scaleFactor(),
                //isPrimary: item.isPrimary(),
                isMinimized: windowValue(item, 'isMinimized'),
                isMaximized: windowValue(item, 'isMaximized'),
            });
        });
    }
    if (e === null || e === void 0 ? void 0 : e.toString().match("l")) { ///l アプリ名のみ
        windows.forEach((item) => {
            console.log({
                appName: windowValue(item, 'appName'),
            });
        });
    }
    if (e === null || e === void 0 ? void 0 : e.toString().match(/exit/gi)) { ///exit 終了
        console.log('stdin:"exit" detected , exiting...');
        process.exit();
    }
    if (e === null || e === void 0 ? void 0 : e.toString().match(/r/gi)) { //reload .secret
        load();
        console.log(".secret.json reloaded");
    }
    // CLI commands (always enabled)
    if ((e === null || e === void 0 ? void 0 : e.toString().match(/^\s*c\s*$/i)) || (e === null || e === void 0 ? void 0 : e.toString().match(/^\s*capture\s*$/i))) {
        captureOneShot();
    }
    if (e === null || e === void 0 ? void 0 : e.toString().match(/^\s*(on|start|F10)\s*$/i)) {
        startAutoDiff();
    }
    if (e === null || e === void 0 ? void 0 : e.toString().match(/^\s*(off|stop|F9)\s*$/i)) {
        stopAutoDiff();
    }
    //console.log(e?.toString())
});
//キーボードイベント割り込み(フォーカス無視)
function captureOneShot() {
    var _a, _b;
    let date = new Date();
    if (!screenshotsAvailable) {
        console.error(console_log_colors_1.default.red("Capture skipped: node-screenshots not available."));
        return;
    }
    (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.ONE_SHOT) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
        windows.forEach((item, i) => {
            if (windowValue(item, 'appName') == tg_window) { // ターゲットウィンドウのアプリ名と一致する場合にキャプチャ
                let image = windowValue(item, 'captureImageSync'); // キャプチャ画像を取得(型はScreenshotWindow.captureImageSyncの戻り値)
                let filename = `${__dirname}/pix/${windowValue(item, 'appName')}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")} ${i}.png`; // 保存するファイル名を作成
                if (!fs.existsSync(`${__dirname}/pix`)) {
                    fs.mkdirSync(`${__dirname}/pix`);
                }
                if (image === undefined || image.width === 0 || image.height === 0) {
                    console.error(console_log_colors_1.default.red("Capture failed: image is invalid."));
                    return;
                }
                fs.writeFileSync(filename, image.toPngSync()); //pix以下に保存
                console.log("saved " + filename);
            }
        });
    });
}
function startAutoDiff() {
    var _a;
    auto_diff_flag = true;
    console.log(`auto_diff_flag=true (tolerance:${configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE}, target:${(_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.AUTO})`);
}
function stopAutoDiff() {
    auto_diff_flag = false;
    console.log("auto_diff_flag=false");
}
if (globalHookAvailable && keyboard) {
    keyboard.addListener((event) => {
        if (!event) {
            return;
        }
        if (event.name === 'RIGHT CTRL' && event.state === 'DOWN') {
            captureOneShot();
        }
        if (event.name === 'F10' && event.state === 'DOWN') {
            startAutoDiff();
        }
        if (event.name === 'F9' && event.state === 'DOWN') {
            stopAutoDiff();
        }
    });
}
else {
    console.log(console_log_colors_1.default.yellow("Global keyboard hook not in use — use CLI commands: 'capture', 'auto on', 'auto off', 'exit'."));
}
setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!auto_diff_flag) {
        return;
    }
    if (!screenshotsAvailable || !looksSameAvailable) {
        return;
    }
    (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.AUTO) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
        windows.forEach((item, i) => __awaiter(void 0, void 0, void 0, function* () {
            if (windowValue(item, 'appName') == tg_window) { // ターゲットウィンドウのアプリ名と一致する場合
                let image = windowValue(item, 'captureImageSync'); // キャプチャ画像を取得(型はScreenshotWindow.captureImageSyncの戻り値)
                if (image === undefined || image.width === 0 || image.height === 0) {
                    console.error(console_log_colors_1.default.red("Capture failed: image is invalid."));
                    return;
                } // 画像が無効な場合エラーを表示
                let result;
                if (prevImage.get(i) !== undefined) {
                    try {
                        result = yield looksSame(prevImage.get(i), image.toPngSync(), { tolerance: configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE, ignoreAntialiasing: false, antialiasingTolerance: 3 });
                    }
                    catch (err) {
                        console.error("Error running looks-same:", err);
                        return;
                    }
                    console.log("" + `result:${result === null || result === void 0 ? void 0 : result.equal} diffBounds:${result === null || result === void 0 ? void 0 : result.diffBounds} diffClusters:${result === null || result === void 0 ? void 0 : result.diffClusters} `);
                    if (false === (result === null || result === void 0 ? void 0 : result.equal)) {
                        try {
                            const formData = new FormData();
                            const png = image.toPngSync(); // Capture the current image as PNG
                            const pngBuffer = new ArrayBuffer(png.byteLength); // Create an ArrayBuffer of the same length
                            new Uint8Array(pngBuffer).set(png); // Copy the PNG data into the ArrayBuffer
                            formData.append('file', new Blob([pngBuffer], { type: 'image/png' }), 'file.png');
                            const response = yield fetch(URL, {
                                method: 'POST',
                                body: formData
                            });
                        }
                        catch (error) {
                            console.error(error);
                        }
                    }
                }
                prevImage.set(i, image.toPngSync());
            }
        }));
    });
}), 5000);
