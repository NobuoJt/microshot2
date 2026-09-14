"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// build/package.json
var require_package = __commonJS({
  "build/package.json"(exports2, module2) {
    module2.exports = {
      name: "microshot",
      version: "2.1.1_i",
      description: "Take some screen shot. and detect difference.",
      main: "index.js",
      scripts: {
        start: "npm run build:live",
        "build:live": `nodemon --watch 'index.ts' --exec "tsx" index.ts & tsc -p .`,
        build_j: "tsc -p .",
        build_i: '".\\node_modules\\.bin\\esbuild" --bundle build/index.js --outfile=build/index_integrated.js --platform=node --external:node-screenshots --external:node-screenshots-*',
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
        "@esbuild/win32-x64": "^0.28.2",
        "@types/node": "^26.4.0",
        "console-log-colors": "^0.5.0",
        esbuild: "^0.28.2",
        "license-checker": "^25.0.1",
        "looks-same": "^10.0.1",
        "node-screenshots": "^0.2.8",
        nodemon: "^3.1.14",
        sharp: "^0.35.4"
      },
      devDependencies: {
        tsx: "^4.23.12",
        typescript: "^6.0.3"
      }
    };
  }
});

// node_modules/.pnpm/console-log-colors@0.5.0/node_modules/console-log-colors/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/console-log-colors@0.5.0/node_modules/console-log-colors/src/index.js"(exports, module) {
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
var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
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
})();
var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var fs_1 = require("fs");
var module_1 = require("module");
var path = __importStar(require("path"));
var requireFromDisk = (0, module_1.createRequire)(__filename);
var package_json_1 = __importDefault(require_package());
var process_1 = require("process");
var child_process_1 = require("child_process");
var console_log_colors_1 = __importDefault(require_src());
var screenshots;
var screenshotsAvailable = false;
try {
  const screenshotModulePaths = [
    path.join(__dirname, "node_modules", "node-screenshots"),
    // １：このスクリプトのディレクトリ内のnode_modules
    path.join(process.cwd(), "node_modules", "node-screenshots"),
    // ２：実行ディレクトリのnode_modules
    path.join(__dirname, "..", "node_modules", "node-screenshots")
    // ３：このスクリプトの親ディレクトリのnode_modules
  ];
  const screenshotModulePath = screenshotModulePaths.find((candidate) => fs.existsSync(candidate));
  if (!screenshotModulePath) {
    throw new Error("node-screenshots module not found");
  }
  screenshots = requireFromDisk(screenshotModulePath);
  screenshotsAvailable = true;
} catch (err) {
  console.warn(console_log_colors_1.default.yellow("node-screenshots not available \u2014 capture features disabled."));
}
var looksSame;
var looksSameAvailable = false;
try {
  const looksSameModulePaths = [
    path.join(__dirname, "node_modules", "looks-same"),
    // １：このスクリプトのディレクトリ内のnode_modules
    path.join(process.cwd(), "node_modules", "looks-same"),
    // ２：実行ディレクトリのnode_modules
    path.join(__dirname, "..", "node_modules", "looks-same")
    // ３：このスクリプトの親ディレクトリのnode_modules
  ];
  const looksSameModulePath = looksSameModulePaths.find((candidate) => fs.existsSync(candidate));
  if (!looksSameModulePath) {
    throw new Error("looks-same module not found");
  }
  looksSame = requireFromDisk(looksSameModulePath);
  looksSameAvailable = true;
} catch (err) {
  console.warn(console_log_colors_1.default.yellow("looks-same not available \u2014 diff notification disabled."));
}
var version = package_json_1.default.version;
var prevImage = /* @__PURE__ */ new Map();
var configObj;
var URL;
var configPath = "";
function showConfigInfo() {
  console.log(console_log_colors_1.default.blue(`.secret.json path: ${configPath}`));
  try {
    console.log((0, fs_1.readFileSync)(configPath, "utf-8"));
  } catch (err) {
    console.error(console_log_colors_1.default.red(`Failed to read ${configPath}: ${err}`));
  }
}
load();
function load() {
  console.log(console_log_colors_1.default.yellowBG(" ") + console_log_colors_1.default.italic(` microShot v${version} ` + console_log_colors_1.default.yellowBG(" ")) + console_log_colors_1.default.gray(" nobuoJT"));
  console.log(console_log_colors_1.default.blue("\n (On console) Key input "));
  console.log(console_log_colors_1.default.green("'l'") + " : print window List. " + console_log_colors_1.default.green("'L'") + " : print window table.");
  console.log(console_log_colors_1.default.green("'v'") + " : show .secret.json path and content. " + console_log_colors_1.default.green("'e'") + " : open .secret.json.");
  console.log(console_log_colors_1.default.green("'r'") + " : reload .secret.json, show path/content and reInit");
  console.log(console_log_colors_1.default.green("'c'") + " : Capture.");
  console.log(console_log_colors_1.default.green("'on'") + " : start auto diff." + console_log_colors_1.default.green("'off'") + " : stop.");
  console.log(console_log_colors_1.default.green("'exit'") + " : exit.");
  console.log(console_log_colors_1.default.blue("\n (Tray / Global hotkey) input"));
  console.log("System Tray menu: " + console_log_colors_1.default.yellow("Capture / Start / Stop / Exit"));
  console.log(console_log_colors_1.default.green("Ctrl+Alt+PrintScreen") + " : Capture. " + console_log_colors_1.default.green("Ctrl+Alt+F10") + " : start. " + console_log_colors_1.default.green("Ctrl+Alt+F9") + " : stop.");
  console.log("");
  const foundConfigPath = [
    path.join(__dirname, ".secret.json"),
    // １：カレントディレクトリ
    path.join(process.cwd(), ".secret.json"),
    // ２：実行ディレクトリ
    path.join(__dirname, "..", ".secret.json")
    // ３：親ディレクトリ
  ].find((candidate) => fs.existsSync(candidate));
  if (!foundConfigPath) {
    throw new Error("Could not find .secret.json");
  }
  configPath = foundConfigPath;
  configObj = JSON.parse((0, fs_1.readFileSync)(configPath, "utf-8"));
  URL = configObj === null || configObj === void 0 ? void 0 : configObj.WEBHOOK_POST_URL;
  showConfigInfo();
}
var windows = [];
function windowValue(target, property) {
  const value = target[property];
  return typeof value === "function" ? value.call(target) : value;
}
if (screenshotsAvailable) {
  try {
    windows = screenshots.Window.all();
  } catch (err) {
    console.warn(console_log_colors_1.default.yellow("Failed to enumerate windows from node-screenshots."));
    windows = [];
    screenshotsAvailable = false;
  }
} else {
  windows = [];
}
var auto_diff_flag = false;
function windowTargetLabels(item) {
  var _a, _b, _c, _d;
  const appName = windowValue(item, "appName");
  const oneShot = (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.ONE_SHOT) === null || _b === void 0 ? void 0 : _b.includes(appName);
  const auto = (_d = (_c = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _c === void 0 ? void 0 : _c.AUTO) === null || _d === void 0 ? void 0 : _d.includes(appName);
  const labels = [];
  if (oneShot) {
    labels.push("ONE_SHOT");
  }
  if (auto) {
    labels.push("AUTO");
  }
  return labels;
}
function windowDisplayName(item) {
  const appName = windowValue(item, "appName");
  const labels = windowTargetLabels(item);
  return labels.length > 0 ? `\u2605 ${appName} [${labels.join(", ")}]` : appName;
}
function openConfigFile() {
  const opener = process.platform === "win32" ? "cmd.exe" : process.platform === "darwin" ? "open" : "xdg-open";
  const args = process.platform === "win32" ? ["/c", "start", "", configPath] : [configPath];
  (0, child_process_1.spawn)(opener, args, { detached: true, stdio: "ignore" }).unref();
  console.log(`Opening ${configPath}`);
}
function handleConsoleCommand(command) {
  if (command === "L") {
    windows.forEach((item) => {
      console.table({
        id: windowValue(item, "id"),
        appName: windowDisplayName(item),
        configTarget: windowTargetLabels(item).join(", "),
        title: windowValue(item, "title"),
        currentMonitor: windowValue(windowValue(item, "currentMonitor"), "id"),
        x: windowValue(item, "x"),
        y: windowValue(item, "y"),
        width: windowValue(item, "width"),
        height: windowValue(item, "height"),
        //rotation: item.rotation(),
        //scaleFactor: item.scaleFactor(),
        //isPrimary: item.isPrimary(),
        isMinimized: windowValue(item, "isMinimized"),
        isMaximized: windowValue(item, "isMaximized")
      });
    });
  }
  if (command === "l") {
    windows.forEach((item) => {
      console.log({
        appName: windowDisplayName(item)
      });
    });
  }
  if (command.toLowerCase() === "exit") {
    console.log('stdin:"exit" detected , exiting...');
    process.exit();
  }
  if (command.toLowerCase() === "r") {
    load();
    console.log(".secret.json reloaded");
  }
  if (command.toLowerCase() === "v") {
    showConfigInfo();
  }
  if (command.toLowerCase() === "e") {
    openConfigFile();
  }
  if (/^(c|capture)$/i.test(command)) {
    captureOneShot();
  }
  if (/^(on|start|F10)$/i.test(command)) {
    startAutoDiff();
  }
  if (/^(off|stop|F9)$/i.test(command)) {
    stopAutoDiff();
  }
}
process_1.stdin.addListener("data", (e) => {
  e === null || e === void 0 ? void 0 : e.toString().split(/\r?\n/).map((line) => line.trim()).filter(Boolean).forEach(handleConsoleCommand);
});
function captureOneShot() {
  var _a, _b;
  let date = /* @__PURE__ */ new Date();
  if (!screenshotsAvailable) {
    console.error(console_log_colors_1.default.red("Capture skipped: node-screenshots not available."));
    return;
  }
  (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.ONE_SHOT) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
    windows.forEach((item, i2) => {
      if (windowValue(item, "appName") == tg_window) {
        let image = windowValue(item, "captureImageSync");
        let filename = `${__dirname}/pix/${windowValue(item, "appName")}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")} ${i2}.png`;
        if (!fs.existsSync(`${__dirname}/pix`)) {
          fs.mkdirSync(`${__dirname}/pix`);
        }
        if (image === void 0 || image.width === 0 || image.height === 0) {
          console.error(console_log_colors_1.default.red("Capture failed: image is invalid."));
          return;
        }
        fs.writeFileSync(filename, image.toPngSync());
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
var trayProcess;
if (process.platform === "win32") {
  const trayScriptPath = [
    path.join(__dirname, "scripts", "microshot-tray.ps1"),
    path.join(__dirname, "..", "scripts", "microshot-tray.ps1"),
    path.join(process.cwd(), "scripts", "microshot-tray.ps1")
  ].find((candidate) => fs.existsSync(candidate));
  if (trayScriptPath) {
    const currentTrayProcess = (0, child_process_1.spawn)("powershell.exe", [
      "-NoProfile",
      "-STA",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      trayScriptPath
    ], { stdio: ["ignore", "pipe", "pipe"] });
    trayProcess = currentTrayProcess;
    currentTrayProcess.stdout.setEncoding("utf8");
    currentTrayProcess.stdout.on("data", (data) => {
      data.split(/\r?\n/).map((command) => command.trim()).filter(Boolean).forEach((command) => {
        if (command === "capture") {
          captureOneShot();
        }
        if (command === "start") {
          startAutoDiff();
        }
        if (command === "stop") {
          stopAutoDiff();
        }
        if (command === "exit") {
          process.exit(0);
        }
      });
    });
    currentTrayProcess.stderr.setEncoding("utf8");
    currentTrayProcess.stderr.on("data", (data) => console.warn(data.trim()));
    currentTrayProcess.on("error", (err) => console.warn(console_log_colors_1.default.yellow(`Tray helper unavailable: ${err.message}`)));
    currentTrayProcess.on("close", (code) => {
      if (code !== 0) {
        console.warn(console_log_colors_1.default.yellow(`Tray helper exited with code ${code}.`));
      }
    });
    process.on("exit", () => trayProcess === null || trayProcess === void 0 ? void 0 : trayProcess.kill());
  } else {
    console.warn(console_log_colors_1.default.yellow("Tray script not found \u2014 use CLI commands: capture, start, stop, exit."));
  }
} else {
  console.log(console_log_colors_1.default.yellow("Tray and global hotkeys are available on Windows only \u2014 use CLI commands: 'capture', 'start', 'stop', 'exit'."));
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
    windows.forEach((item, i2) => __awaiter(void 0, void 0, void 0, function* () {
      if (windowValue(item, "appName") == tg_window) {
        let image = windowValue(item, "captureImageSync");
        if (image === void 0 || image.width === 0 || image.height === 0) {
          console.error(console_log_colors_1.default.red("Capture failed: image is invalid."));
          return;
        }
        let result;
        if (prevImage.get(i2) !== void 0) {
          try {
            result = yield looksSame(prevImage.get(i2), image.toPngSync(), { tolerance: configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE, ignoreAntialiasing: false, antialiasingTolerance: 3 });
          } catch (err) {
            console.error("Error running looks-same:", err);
            return;
          }
          console.log(`result:${result === null || result === void 0 ? void 0 : result.equal} diffBounds:${result === null || result === void 0 ? void 0 : result.diffBounds} diffClusters:${result === null || result === void 0 ? void 0 : result.diffClusters} `);
          if (false === (result === null || result === void 0 ? void 0 : result.equal)) {
            try {
              const formData = new FormData();
              const png = image.toPngSync();
              const pngBuffer = new ArrayBuffer(png.byteLength);
              new Uint8Array(pngBuffer).set(png);
              formData.append("file", new Blob([pngBuffer], { type: "image/png" }), "file.png");
              const response = yield fetch(URL, {
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
    }));
  });
}), 5e3);
