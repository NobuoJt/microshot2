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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const fs_1 = require("fs");
const module_1 = require("module");
const requireFromDisk = (0, module_1.createRequire)(__filename);
const package_json_1 = __importDefault(require("./package.json"));
const process_1 = require("process");
const console_log_colors_1 = __importDefault(require("console-log-colors"));
//import { screenshots } from 'node-screenshots';
const screenshots = requireFromDisk(__dirname + '\\node_modules\\node-screenshots\\index.js');
//import { GlobalKeyboardListener } from 'node-global-key-listener';
const GlobalKeyboardListener = requireFromDisk(__dirname + '\\node_modules\\node-global-key-listener\\build\\index.js');
//import looksSame from 'looks-same';
const looksSame = requireFromDisk(__dirname + '\\node_modules\\looks-same\\index.js');
const version = package_json_1.default.version;
let prevImage = new Map();
let configObj = JSON.parse((0, fs_1.readFileSync)(__dirname + '\\.secret.json').toString()); //.secret.jsonの読み込み
load();
function load() {
    console.log(console_log_colors_1.default.yellowBG(" ") + console_log_colors_1.default.italic(` microShot v${version} ` + console_log_colors_1.default.yellowBG(" ")) + console_log_colors_1.default.gray(" nobuoJT"));
    console.log(console_log_colors_1.default.blue("\n (On console) Key input "));
    console.log("'l' : print window List.\n'L' : print window table.\n'r' : reload .secret.json and reInit \n'exit' : exit.");
    console.log(console_log_colors_1.default.blue("\n (Global) Key input"));
    console.log("'R Ctrl' : Capture.\n'F10' : start auto diff notice. 'F9' : stop.");
    console.log("");
    configObj = JSON.parse((0, fs_1.readFileSync)(__dirname + '\\.secret.json').toString()); //.secret.jsonの読み込み
}
const URL = configObj === null || configObj === void 0 ? void 0 : configObj.DISCORD_POST_URL;
let windows = screenshots.Window.all();
const keyboard = new GlobalKeyboardListener.GlobalKeyboardListener();
let auto_diff_flag = false;
//説明
//標準入力割り込み
process_1.stdin.addListener("data", (e) => {
    if (e === null || e === void 0 ? void 0 : e.toString().match("L")) { ///L ウィンドウリストの表示
        windows.forEach((item) => {
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
    if (e === null || e === void 0 ? void 0 : e.toString().match("l")) { ///l アプリ名のみ
        windows.forEach((item) => {
            console.log({
                appName: item.appName,
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
    //console.log(e?.toString())
});
//キーボードイベント割り込み(フォーカス無視)
keyboard.addListener((event) => {
    var _a, _b;
    let date = new Date();
    if (event.name === 'RIGHT CTRL' && event.state === 'DOWN') { //右コントロール　スクショ
        (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.ONE_SHOT) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
            windows.forEach((item) => {
                if (item.appName == tg_window) {
                    let image = item.captureImageSync();
                    let filename = `${__dirname}/pix/${item.appName}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")}.png`;
                    if (!fs.existsSync(`${__dirname}/pix`)) {
                        fs.mkdirSync(`${__dirname}/pix`);
                    }
                    fs.writeFileSync(filename, image.toPngSync()); //pix以下に保存
                    console.log("saved " + filename);
                }
            });
        });
    }
    if (event.name === 'F10' && event.state === 'DOWN') { //F10
        auto_diff_flag = true;
        console.log("auto_diff_flag=true");
    }
    if (event.name === 'F9' && event.state === 'DOWN') { //F9
        auto_diff_flag = false;
        console.log("auto_diff_flag=false");
    }
});
setInterval(() => {
    var _a, _b;
    if (!auto_diff_flag) {
        return;
    }
    (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.AUTO) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
        windows.forEach((item, i) => {
            if (item.appName == tg_window) {
                let image = item.captureImageSync();
                let result;
                if (prevImage.get(i) !== undefined) {
                    result = looksSame(prevImage.get(i), image.toPngSync(), { tolerance: configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE, ignoreAntialiasing: false, antialiasingTolerance: 3 });
                    if (!(result === null || result === void 0 ? void 0 : result.equal)) {
                        try {
                            const formData = new FormData();
                            formData.append('file', new Blob([image.toPngSync()], { type: 'image/png' }), 'file.png');
                            const response = fetch(URL, {
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
        });
    });
}, 5000);
