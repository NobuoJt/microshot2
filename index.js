"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fs_1 = require("fs");
var createRequire = require("module").createRequire;
var requireFromDisk = createRequire(__filename);
//import { screenshots } from 'node-screenshots';
var screenshots = requireFromDisk('C:\\Users\\user\\Desktop\\開発\\microShot\\node_modules\\node-screenshots\\index.js');
//import { GlobalKeyboardListener } from 'node-global-key-listener';
var keyboardListener = requireFromDisk('C:\\Users\\user\\Desktop\\開発\\microShot\\node_modules\\node-global-key-listener\\build\\index.js');
//const looksSame =require('looks-same');
var looksSame = requireFromDisk('C:\\Users\\user\\Desktop\\開発\\microShot\\node_modules\\looks-same\\index.js');
var version = "1.0.4_0";
var prevImage = new Map();
var urlObj = JSON.parse(fs.readFileSync(__dirname + "/url.secret").toString());
var URL = urlObj.discord;
console.log(URL);
var windows = screenshots.Window.all();
var keyboard = new keyboardListener.GlobalKeyboardListener();
var auto_diff_flag = false;
console.log("microShot v".concat(version));
console.log("'L' key to print window List.\n'R Ctrl' to Capture.\n'F10' to start auto diff notice. 'F9' to stop.\n'Esc' to exit.");
//説明
keyboard.addListener(function (event) {
    //console.log(event); //キーイベント表示
    if (event.name === 'ESCAPE' && event.state === 'DOWN') {
        console.log('Esc key pressed, exiting...');
        process.exit();
    }
    if (event.name === 'L' && event.state === 'DOWN') { //L ウィンドウリストの表示
        windows.forEach(function (item) {
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
        windows.forEach(function (item) {
            console.log({
                appName: item.appName,
            });
        });
    }
    var date = new Date();
    if (event.name === 'RIGHT CTRL' && event.state === 'DOWN') { //右コントロール　スクショ
        (0, fs_1.readFileSync)(__dirname + "/targetWindows.secret", { encoding: "utf-8" }).split("\r\n").forEach(function (tg_window, i, a) {
            windows.forEach(function (item) {
                if (item.appName == tg_window) {
                    var image = item.captureImageSync();
                    var filename = "".concat(__dirname, "/pix/").concat(item.appName, "_").concat(date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_"), ".png");
                    if (!fs.existsSync("".concat(__dirname, "/pix"))) {
                        fs.mkdirSync("".concat(__dirname, "/pix"));
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
setInterval(function () {
    if (!auto_diff_flag) {
        return;
    }
    (0, fs_1.readFileSync)(__dirname + "/targetAutoWindows.secret", { encoding: "utf-8" }).split("\r\n").forEach(function (tg_window, i, a) {
        windows.forEach(function (item, i) { return __awaiter(void 0, void 0, void 0, function () {
            var image, result, formData, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item.appName == tg_window)) return [3 /*break*/, 6];
                        image = item.captureImageSync();
                        result = void 0;
                        if (!(prevImage.get(i) !== undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, looksSame(prevImage.get(i), image.toPngSync())];
                    case 1:
                        result = _a.sent(), { tolerance: 5 };
                        if (!!(result === null || result === void 0 ? void 0 : result.equal)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        formData = new FormData();
                        formData.append('file', new Blob([image.toPngSync()], { type: 'image/png' }), 'file.png');
                        return [4 /*yield*/, fetch(URL, {
                                method: 'POST',
                                body: formData
                            })];
                    case 3:
                        response = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5:
                        prevImage.set(i, image.toPngSync());
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    });
}, 5000);
