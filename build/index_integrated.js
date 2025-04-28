"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// build/package.json
var require_package = __commonJS({
  "build/package.json"(exports2, module2) {
    module2.exports = {
      name: "microshot",
      version: "2.0.3_x",
      description: "Take some screen shot. and detect difference.",
      main: "index.js",
      scripts: {
        start: "npm run build:live",
        "build:live": `nodemon --watch 'index.ts' --exec "ts-node" index.ts & tsc -p .`,
        build_j: "tsc -p .",
        build_i: '".\\node_modules\\.bin\\esbuild" --bundle build/index.js --outfile=build/index_integrated.js --platform=node --external:*.node',
        build_e: "powershell -c build\\compile_exe.ps1",
        build_after: "powershell -c build\\getNativeModule_4minimum.ps1",
        compile: "npm run build_j && npm run build_i && npm run build_e && npm run build_after"
      },
      keywords: [
        "screenshot"
      ],
      author: "nobuoJT",
      license: "ISC",
      dependencies: {
        "@types/node": "^22.13.14",
        "console-log-colors": "^0.5.0",
        esbuild: "^0.25.3",
        "license-checker": "^25.0.1",
        "looks-same": "^9.0.1",
        "node-global-key-listener": "^0.3.0",
        "node-screenshots": "^0.2.1",
        nodemon: "^3.1.9",
        "ts-node": "^10.9.2",
        typescript: "^5.8.2"
      }
    };
  }
});

// node_modules/console-log-colors/src/index.js
var require_src = __commonJS({
  "node_modules/console-log-colors/src/index.js"(exports, module) {
    var colorList = {
      // modifier
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      // color
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      // Bright color
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39],
      // bgColor
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // bgColor - legacy styles
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49],
      // Bright bgColor
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    };
    var c256List = {};
    if (typeof process === "undefined" || !process.env) {
      globalThis.process = { env: {}, argv: ["--color"] };
    }
    var isLowMemory = process.env.CLC_LOW_MEMORY == "1";
    var isC256Disabled = process.env.CLC_C256 == "0";
    var isDisabled = process.env.NO_COLOR || process.argv.includes("--no-color");
    var isSupported = !isDisabled && (process.env.FORCE_COLOR || process.platform === "win32" || process.argv.includes("--color") || eval(`require('tty')`).isatty(1) && process.env.TERM !== "dumb" || process.env.CI);
    var TObject = typeof Reflect === "undefined" ? Object : Reflect;
    var fncache = {};
    function extend(fn, keys) {
      var prefix = keys.join("");
      Object.keys(clc.list).forEach(function(key) {
        var cachekey = prefix + key;
        TObject.defineProperty(fn, key, {
          get() {
            if (!fncache[cachekey]) {
              fncache[cachekey] = extend(function m(s) {
                return fn(color[key](s));
              }, keys.concat(key));
            }
            return fncache[cachekey];
          }
        });
      });
      return fn;
    }
    function replaceClose(str, open, close, idx) {
      var rest = str.substring(idx + close.length);
      var nextIdx = rest.indexOf(close);
      return str.substring(0, idx) + open + (~nextIdx ? replaceClose(rest, open, close, nextIdx) : rest);
    }
    function toString(s) {
      return s;
    }
    function getFn(colorType) {
      var cfg = clc.list[colorType];
      if (!cfg || !isSupported) return toString;
      var open = cfg[0], close = cfg[1];
      return function(str) {
        if (str === "" || str == null) return "";
        str = "" + str;
        var idx = str.indexOf(close, open.length);
        return open + (idx > -1 && idx < str.length - 1 ? replaceClose(str, open, close, idx) : str) + close;
      };
    }
    function color(str, colorType) {
      return getFn(colorType)(str);
    }
    function init() {
      var cache = {};
      if (!isLowMemory) {
        Object.keys(colorList).forEach(function(key) {
          clc[key] = color[key] = extend(getFn(key), [key]);
        });
      }
      Object.keys(clc.list).forEach(function(key) {
        if (!color[key]) {
          Object.defineProperty(color, key, {
            get() {
              if (!cache[key]) cache[key] = extend(getFn(key), [key]);
              return cache[key];
            }
          });
        }
        if (!clc[key]) {
          Object.defineProperty(clc, key, {
            get() {
              return cache[key] || color[key];
            }
          });
        }
      });
    }
    if (!isC256Disabled) {
      for (i = 0; i < 256; i++) {
        c256List["c" + i] = ["38;5;" + i, 0];
        c256List["bg" + i] = ["48;5;" + i, 0];
      }
    }
    var i;
    var clc = {
      color,
      list: Object.assign({}, colorList, c256List),
      log(str, colorType) {
        console.log(color(str, colorType));
      },
      isSupported() {
        return isSupported;
      },
      enable() {
        isSupported = true;
        init();
      },
      disable() {
        isSupported = false;
        init();
      },
      strip(str) {
        return str.replace(/\x1b\[\d+m/gm, "");
      }
    };
    color.list = clc.list;
    Object.keys(clc.list).forEach(function(key) {
      clc.list[key] = clc.list[key].map(function(n) {
        return "\x1B[" + n + "m";
      });
      clc.log[key] = function() {
        var arr = [];
        for (var i2 = 0; i2 < arguments.length; i2++) arr.push(arguments[i2]);
        console.log(color[key](arr.join(" ")));
      };
    });
    init();
    if (typeof module === "object") module.exports = clc;
  }
});

// build/index.js
var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = exports && exports.__importStar || /* @__PURE__ */ function() {
  var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o2) {
      var ar = [];
      for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i2 = 0; i2 < k.length; i2++) if (k[i2] !== "default") __createBinding(result, mod, k[i2]);
    }
    __setModuleDefault(result, mod);
    return result;
  };
}();
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var fs_1 = require("fs");
var module_1 = require("module");
var requireFromDisk = (0, module_1.createRequire)(__filename);
var package_json_1 = __importDefault(require_package());
var process_1 = require("process");
var console_log_colors_1 = __importDefault(require_src());
var screenshots = requireFromDisk(__dirname + "\\node_modules\\node-screenshots\\index.js");
var GlobalKeyboardListener = requireFromDisk(__dirname + "\\node_modules\\node-global-key-listener\\build\\index.js");
var looksSame = requireFromDisk(__dirname + "\\node_modules\\looks-same\\index.js");
var version = package_json_1.default.version;
var prevImage = /* @__PURE__ */ new Map();
var configObj;
var URL;
load();
function load() {
  console.log(console_log_colors_1.default.yellowBG(" ") + console_log_colors_1.default.italic(` microShot v${version} ` + console_log_colors_1.default.yellowBG(" ")) + console_log_colors_1.default.gray(" nobuoJT"));
  console.log(console_log_colors_1.default.blue("\n (On console) Key input "));
  console.log("'l' : print window List.\n'L' : print window table.\n'r' : reload .secret.json and reInit \n'exit' : exit.");
  console.log(console_log_colors_1.default.blue("\n (Global) Key input"));
  console.log("'R Ctrl' : Capture.\n'F10' : start auto diff notice. 'F9' : stop.");
  console.log("");
  configObj = JSON.parse((0, fs_1.readFileSync)(__dirname + "\\.secret.json", "utf-8"));
  URL = configObj === null || configObj === void 0 ? void 0 : configObj.DISCORD_POST_URL;
}
var windows = screenshots.Window.all();
var keyboard = new GlobalKeyboardListener.GlobalKeyboardListener();
var auto_diff_flag = false;
process_1.stdin.addListener("data", (e) => {
  if (e === null || e === void 0 ? void 0 : e.toString().match("L")) {
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
        isMaximized: item.isMaximized
      });
    });
  }
  if (e === null || e === void 0 ? void 0 : e.toString().match("l")) {
    windows.forEach((item) => {
      console.log({
        appName: item.appName
      });
    });
  }
  if (e === null || e === void 0 ? void 0 : e.toString().match(/exit/gi)) {
    console.log('stdin:"exit" detected , exiting...');
    process.exit();
  }
  if (e === null || e === void 0 ? void 0 : e.toString().match(/r/gi)) {
    load();
    console.log(".secret.json reloaded");
  }
});
keyboard.addListener((event) => {
  var _a, _b;
  let date = /* @__PURE__ */ new Date();
  if (event.name === "RIGHT CTRL" && event.state === "DOWN") {
    (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.ONE_SHOT) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
      windows.forEach((item, i2) => {
        if (item.appName == tg_window) {
          let image = item.captureImageSync();
          let filename = `${__dirname}/pix/${item.appName}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")} ${i2}.png`;
          if (!fs.existsSync(`${__dirname}/pix`)) {
            fs.mkdirSync(`${__dirname}/pix`);
          }
          fs.writeFileSync(filename, image.toPngSync());
          console.log("saved " + filename);
        }
      });
    });
  }
  if (event.name === "F10" && event.state === "DOWN") {
    auto_diff_flag = true;
    console.log("auto_diff_flag=true");
  }
  if (event.name === "F9" && event.state === "DOWN") {
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
    windows.forEach((item, i2) => {
      if (item.appName == tg_window) {
        let image = item.captureImageSync();
        let result;
        if (prevImage.get(i2) !== void 0) {
          result = looksSame(prevImage.get(i2), image.toPngSync(), { tolerance: configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE, ignoreAntialiasing: false, antialiasingTolerance: 3 });
          if (!(result === null || result === void 0 ? void 0 : result.equal)) {
            try {
              const formData = new FormData();
              formData.append("file", new Blob([image.toPngSync()], { type: "image/png" }), "file.png");
              const response = fetch(URL, {
                method: "POST",
                body: formData
              });
            } catch (error) {
              console.error(error);
            }
          }
        }
        prevImage.set(i2, image.toPngSync());
      }
    });
  });
}, 5e3);
