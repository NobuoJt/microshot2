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
      version: "2.0.1_m",
      description: "Take some screen shot. and detect difference.",
      main: "index.js",
      scripts: {
        start: "npm run build:live",
        "build:live": `nodemon --watch 'index.ts' --exec "ts-node" index.ts & tsc -p .`,
        build_j: "tsc -p .",
        build_i: '".\\node_modules\\.bin\\esbuild" --bundle build/index.js --outfile=build/index_integrated.js --platform=node --external:*.node',
        build_e: "powershell -c build\\compile_exe.ps1",
        build_after: "powershell -c build\\getNativeModule_4minimum.ps1",
        compile: "npm run build_j | npm run build_i | npm run build_e | npm run build_after"
      },
      keywords: [
        "screenshot"
      ],
      author: "nobuoJT",
      license: "ISC",
      dependencies: {
        "@types/node": "^22.13.14",
        esbuild: "^0.25.3",
        "looks-same": "^9.0.1",
        microshot: "file:",
        "node-global-key-listener": "^0.3.0",
        "node-screenshots": "^0.2.1",
        nodemon: "^3.1.9",
        "ts-node": "^10.9.2",
        typescript: "^5.8.2"
      }
    };
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
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  };
}();
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
var module_1 = require("module");
var requireFromDisk = (0, module_1.createRequire)(__filename);
var package_json_1 = __importDefault(require_package());
var screenshots = requireFromDisk(__dirname + "\\node_modules\\node-screenshots\\index.js");
var GlobalKeyboardListener = requireFromDisk(__dirname + "\\node_modules\\node-global-key-listener\\build\\index.js");
var looksSame = requireFromDisk(__dirname + "\\node_modules\\looks-same\\index.js");
var version = package_json_1.default.version;
var prevImage = /* @__PURE__ */ new Map();
var configObj = JSON.parse(fs.readFileSync(__dirname + "/.secret.json").toString());
var URL = configObj === null || configObj === void 0 ? void 0 : configObj.DISCORD_POST_URL;
var windows = screenshots.Window.all();
var keyboard = new GlobalKeyboardListener.GlobalKeyboardListener();
var auto_diff_flag = false;
console.log(`microShot v${version}`);
console.log("'L' key to print window List.\n'R Ctrl' to Capture.\n'F10' to start auto diff notice. 'F9' to stop.\n'Esc' to exit.");
keyboard.addListener((event) => {
  var _a, _b;
  if (event.name === "ESCAPE" && event.state === "DOWN") {
    console.log("Esc key pressed, exiting...");
    process.exit();
  }
  if (event.name === "L" && event.state === "DOWN") {
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
    windows.forEach((item) => {
      console.log({
        appName: item.appName
      });
    });
  }
  let date = /* @__PURE__ */ new Date();
  if (event.name === "RIGHT CTRL" && event.state === "DOWN") {
    (_b = (_a = configObj === null || configObj === void 0 ? void 0 : configObj.TARGET_WINDOW) === null || _a === void 0 ? void 0 : _a.ONE_SHOT) === null || _b === void 0 ? void 0 : _b.forEach((tg_window) => {
      windows.forEach((item) => {
        if (item.appName == tg_window) {
          let image = item.captureImageSync();
          let filename = `${__dirname}/pix/${item.appName}_${date.toLocaleString().replace(/\//g, "_").replace(/:/g, "_")}.png`;
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
    windows.forEach((item, i) => __awaiter(void 0, void 0, void 0, function* () {
      if (item.appName == tg_window) {
        let image = item.captureImageSync();
        let result;
        if (prevImage.get(i) !== void 0) {
          result = yield looksSame(prevImage.get(i), image.toPngSync(), { tolerance: configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE, ignoreAntialiasing: false, antialiasingTolerance: 3 });
          if (!(result === null || result === void 0 ? void 0 : result.equal)) {
            try {
              const formData = new FormData();
              formData.append("file", new Blob([image.toPngSync()], { type: "image/png" }), "file.png");
              const response = yield fetch(URL, {
                method: "POST",
                body: formData
              });
            } catch (error) {
              console.error(error);
            }
          }
        }
        prevImage.set(i, image.toPngSync());
      }
    }));
  });
}, 5e3);
