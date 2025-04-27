"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// package.json
var require_package = __commonJS({
  "package.json"(exports2, module2) {
    module2.exports = {
      name: "microshot",
      version: "2.0.1_k",
      description: "Take some screen shot. and detect difference.",
      main: "index.js",
      scripts: {
        start: "npm run build:live",
        build: "tsc -p .",
        "build:live": `nodemon --watch 'index.ts' --exec "ts-node" index.ts & tsc -p .`,
        oneFile: '".\\node_modules\\.bin\\esbuild" --bundle index.js --outfile=out.js --platform=node --external:*.node'
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

// node_modules/node-global-key-listener/build/ts/_data/MacGlobalKeyLookup.js
var require_MacGlobalKeyLookup = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_data/MacGlobalKeyLookup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacGlobalKeyLookup = void 0;
    exports2.MacGlobalKeyLookup = {
      /* keycodes for keys that are dependent of keyboard layout*/
      0: { _nameRaw: "kVK_ANSI_A", name: "A", standardName: "A" },
      11: { _nameRaw: "kVK_ANSI_B", name: "B", standardName: "B" },
      8: { _nameRaw: "kVK_ANSI_C", name: "C", standardName: "C" },
      2: { _nameRaw: "kVK_ANSI_D", name: "D", standardName: "D" },
      14: { _nameRaw: "kVK_ANSI_E", name: "E", standardName: "E" },
      3: { _nameRaw: "kVK_ANSI_F", name: "F", standardName: "F" },
      5: { _nameRaw: "kVK_ANSI_G", name: "G", standardName: "G" },
      4: { _nameRaw: "kVK_ANSI_H", name: "H", standardName: "H" },
      34: { _nameRaw: "kVK_ANSI_I", name: "I", standardName: "I" },
      38: { _nameRaw: "kVK_ANSI_J", name: "J", standardName: "J" },
      40: { _nameRaw: "kVK_ANSI_K", name: "K", standardName: "K" },
      37: { _nameRaw: "kVK_ANSI_L", name: "L", standardName: "L" },
      46: { _nameRaw: "kVK_ANSI_M", name: "M", standardName: "M" },
      45: { _nameRaw: "kVK_ANSI_N", name: "N", standardName: "N" },
      31: { _nameRaw: "kVK_ANSI_O", name: "O", standardName: "O" },
      35: { _nameRaw: "kVK_ANSI_P", name: "P", standardName: "P" },
      12: { _nameRaw: "kVK_ANSI_Q", name: "Q", standardName: "Q" },
      15: { _nameRaw: "kVK_ANSI_R", name: "R", standardName: "R" },
      1: { _nameRaw: "kVK_ANSI_S", name: "S", standardName: "S" },
      17: { _nameRaw: "kVK_ANSI_T", name: "T", standardName: "T" },
      32: { _nameRaw: "kVK_ANSI_U", name: "U", standardName: "U" },
      9: { _nameRaw: "kVK_ANSI_V", name: "V", standardName: "V" },
      13: { _nameRaw: "kVK_ANSI_W", name: "W", standardName: "W" },
      7: { _nameRaw: "kVK_ANSI_X", name: "X", standardName: "X" },
      16: { _nameRaw: "kVK_ANSI_Y", name: "Y", standardName: "Y" },
      6: { _nameRaw: "kVK_ANSI_Z", name: "Z", standardName: "Z" },
      29: { _nameRaw: "kVK_ANSI_0", name: "0", standardName: "0" },
      18: { _nameRaw: "kVK_ANSI_1", name: "1", standardName: "1" },
      19: { _nameRaw: "kVK_ANSI_2", name: "2", standardName: "2" },
      20: { _nameRaw: "kVK_ANSI_3", name: "3", standardName: "3" },
      21: { _nameRaw: "kVK_ANSI_4", name: "4", standardName: "4" },
      23: { _nameRaw: "kVK_ANSI_5", name: "5", standardName: "5" },
      22: { _nameRaw: "kVK_ANSI_6", name: "6", standardName: "6" },
      26: { _nameRaw: "kVK_ANSI_7", name: "7", standardName: "7" },
      28: { _nameRaw: "kVK_ANSI_8", name: "8", standardName: "8" },
      25: { _nameRaw: "kVK_ANSI_9", name: "9", standardName: "9" },
      24: { _nameRaw: "kVK_ANSI_Equal", name: "Equal", standardName: "EQUALS" },
      27: { _nameRaw: "kVK_ANSI_Minus", name: "Minus", standardName: "MINUS" },
      30: { _nameRaw: "kVK_ANSI_RightBracket", name: "RightBracket", standardName: "SQUARE BRACKET OPEN" },
      33: { _nameRaw: "kVK_ANSI_LeftBracket", name: "LeftBracket", standardName: "SQUARE BRACKET CLOSE" },
      39: { _nameRaw: "kVK_ANSI_Quote", name: "Quote", standardName: "QUOTE" },
      41: { _nameRaw: "kVK_ANSI_Semicolon", name: "Semicolon", standardName: "SEMICOLON" },
      42: { _nameRaw: "kVK_ANSI_Backslash", name: "Backslash", standardName: "BACKSLASH" },
      43: { _nameRaw: "kVK_ANSI_Comma", name: "Comma", standardName: "COMMA" },
      44: { _nameRaw: "kVK_ANSI_Slash", name: "Slash", standardName: "FORWARD SLASH" },
      47: { _nameRaw: "kVK_ANSI_Period", name: "Period", standardName: "DOT" },
      50: { _nameRaw: "kVK_ANSI_Grave", name: "Grave", standardName: "BACKTICK" },
      65: { _nameRaw: "kVK_ANSI_KeypadDecimal", name: "KeypadDecimal", standardName: "NUMPAD DOT" },
      67: { _nameRaw: "kVK_ANSI_KeypadMultiply", name: "KeypadMultiply", standardName: "NUMPAD MULTIPLY" },
      69: { _nameRaw: "kVK_ANSI_KeypadPlus", name: "KeypadPlus", standardName: "NUMPAD PLUS" },
      71: { _nameRaw: "kVK_ANSI_KeypadClear", name: "KeypadClear", standardName: "NUMPAD CLEAR" },
      75: { _nameRaw: "kVK_ANSI_KeypadDivide", name: "KeypadDivide", standardName: "NUMPAD DIVIDE" },
      76: { _nameRaw: "kVK_ANSI_KeypadEnter", name: "KeypadEnter", standardName: "NUMPAD RETURN" },
      78: { _nameRaw: "kVK_ANSI_KeypadMinus", name: "KeypadMinus", standardName: "NUMPAD MINUS" },
      81: { _nameRaw: "kVK_ANSI_KeypadEquals", name: "KeypadEquals", standardName: "NUMPAD EQUALS" },
      82: { _nameRaw: "kVK_ANSI_Keypad0", name: "Keypad0", standardName: "NUMPAD 0" },
      83: { _nameRaw: "kVK_ANSI_Keypad1", name: "Keypad1", standardName: "NUMPAD 1" },
      84: { _nameRaw: "kVK_ANSI_Keypad2", name: "Keypad2", standardName: "NUMPAD 2" },
      85: { _nameRaw: "kVK_ANSI_Keypad3", name: "Keypad3", standardName: "NUMPAD 3" },
      86: { _nameRaw: "kVK_ANSI_Keypad4", name: "Keypad4", standardName: "NUMPAD 4" },
      87: { _nameRaw: "kVK_ANSI_Keypad5", name: "Keypad5", standardName: "NUMPAD 5" },
      88: { _nameRaw: "kVK_ANSI_Keypad6", name: "Keypad6", standardName: "NUMPAD 6" },
      89: { _nameRaw: "kVK_ANSI_Keypad7", name: "Keypad7", standardName: "NUMPAD 7" },
      91: { _nameRaw: "kVK_ANSI_Keypad8", name: "Keypad8", standardName: "NUMPAD 8" },
      92: { _nameRaw: "kVK_ANSI_Keypad9", name: "Keypad9", standardName: "NUMPAD 9" },
      10: { _nameRaw: "kVK_ANSI_SECTION", name: "SECTION", standardName: "SECTION" },
      /* keycodes for keys that are independent of keyboard layout*/
      36: { _nameRaw: "kVK_Return", name: "Return", standardName: "RETURN" },
      48: { _nameRaw: "kVK_Tab", name: "Tab", standardName: "TAB" },
      49: { _nameRaw: "kVK_Space", name: "Space", standardName: "SPACE" },
      51: { _nameRaw: "kVK_Delete", name: "Delete", standardName: "BACKSPACE" },
      117: { _nameRaw: "kVK_ForwardDelete", name: "ForwardDelete", standardName: "DELETE" },
      53: { _nameRaw: "kVK_Escape", name: "Escape", standardName: "ESCAPE" },
      55: { _nameRaw: "kVK_Command", name: "Command", standardName: "LEFT META" },
      56: { _nameRaw: "kVK_Shift", name: "Shift", standardName: "LEFT SHIFT" },
      57: { _nameRaw: "kVK_CapsLock", name: "CapsLock", standardName: "CAPS LOCK" },
      58: { _nameRaw: "kVK_Option", name: "Option", standardName: "LEFT ALT" },
      59: { _nameRaw: "kVK_Control", name: "Control", standardName: "LEFT CTRL" },
      54: { _nameRaw: "kVK_RightCommand", name: "RightCommand", standardName: "RIGHT META" },
      60: { _nameRaw: "kVK_RightShift", name: "RightShift", standardName: "RIGHT SHIFT" },
      61: { _nameRaw: "kVK_RightOption", name: "RightOption", standardName: "RIGHT ALT" },
      62: { _nameRaw: "kVK_RightControl", name: "RightControl", standardName: "RIGHT CTRL" },
      63: { _nameRaw: "kVK_Function", name: "Function", standardName: "FN" },
      72: { _nameRaw: "kVK_VolumeUp", name: "VolumeUp", standardName: "" },
      73: { _nameRaw: "kVK_VolumeDown", name: "VolumeDown", standardName: "" },
      74: { _nameRaw: "kVK_Mute", name: "Mute", standardName: "" },
      122: { _nameRaw: "kVK_F1", name: "F1", standardName: "F1" },
      120: { _nameRaw: "kVK_F2", name: "F2", standardName: "F2" },
      99: { _nameRaw: "kVK_F3", name: "F3", standardName: "F3" },
      118: { _nameRaw: "kVK_F4", name: "F4", standardName: "F4" },
      96: { _nameRaw: "kVK_F5", name: "F5", standardName: "F5" },
      97: { _nameRaw: "kVK_F6", name: "F6", standardName: "F6" },
      98: { _nameRaw: "kVK_F7", name: "F7", standardName: "F7" },
      100: { _nameRaw: "kVK_F8", name: "F8", standardName: "F8" },
      101: { _nameRaw: "kVK_F9", name: "F9", standardName: "F9" },
      109: { _nameRaw: "kVK_F10", name: "F10", standardName: "F10" },
      103: { _nameRaw: "kVK_F11", name: "F11", standardName: "F11" },
      111: { _nameRaw: "kVK_F12", name: "F12", standardName: "F12" },
      105: { _nameRaw: "kVK_F13", name: "F13", standardName: "F13" },
      107: { _nameRaw: "kVK_F14", name: "F14", standardName: "F14" },
      113: { _nameRaw: "kVK_F15", name: "F15", standardName: "F15" },
      106: { _nameRaw: "kVK_F16", name: "F16", standardName: "F16" },
      64: { _nameRaw: "kVK_F17", name: "F17", standardName: "F17" },
      79: { _nameRaw: "kVK_F18", name: "F18", standardName: "F18" },
      80: { _nameRaw: "kVK_F19", name: "F19", standardName: "F19" },
      90: { _nameRaw: "kVK_F20", name: "F20", standardName: "F20" },
      114: { _nameRaw: "kVK_Help", name: "Help", standardName: "" },
      115: { _nameRaw: "kVK_Home", name: "Home", standardName: "HOME" },
      119: { _nameRaw: "kVK_End", name: "End", standardName: "END" },
      116: { _nameRaw: "kVK_PageUp", name: "PageUp", standardName: "PAGE UP" },
      121: { _nameRaw: "kVK_PageDown", name: "PageDown", standardName: "PAGE DOWN" },
      123: { _nameRaw: "kVK_LeftArrow", name: "LeftArrow", standardName: "LEFT ARROW" },
      124: { _nameRaw: "kVK_RightArrow", name: "RightArrow", standardName: "RIGHT ARROW" },
      125: { _nameRaw: "kVK_DownArrow", name: "DownArrow", standardName: "DOWN ARROW" },
      126: { _nameRaw: "kVK_UpArrow", name: "UpArrow", standardName: "UP ARROW" },
      145: { _nameRaw: "kVK_BrightnessDown", name: "BrightnessDown", standardName: "" },
      144: { _nameRaw: "kVK_BrightnessUp", name: "BrightnessUp", standardName: "" },
      160: { _nameRaw: "kVK_WindowOverview", name: "WindowOverview", standardName: "" },
      179: { _nameRaw: "kVK_AppOverview", name: "AppOverview", standardName: "" },
      // Mouse button codes are artificially offset by 0xFFFF0000 in `MacKeyServer`.
      // Original mouse button codes: https://developer.apple.com/documentation/coregraphics/cgmousebutton
      4294901760: { _nameRaw: "CGMouseButton.left", name: "left", standardName: "MOUSE LEFT" },
      4294901761: { _nameRaw: "CGMouseButton.right", name: "right", standardName: "MOUSE RIGHT" },
      4294901762: { _nameRaw: "CGMouseButton.center", name: "center", standardName: "MOUSE MIDDLE" }
    };
  }
});

// node_modules/sudo-prompt/index.js
var require_sudo_prompt = __commonJS({
  "node_modules/sudo-prompt/index.js"(exports2, module2) {
    var Node = {
      child: require("child_process"),
      crypto: require("crypto"),
      fs: require("fs"),
      os: require("os"),
      path: require("path"),
      process,
      util: require("util")
    };
    function Attempt(instance, end) {
      var platform = Node.process.platform;
      if (platform === "darwin") return Mac(instance, end);
      if (platform === "linux") return Linux(instance, end);
      if (platform === "win32") return Windows(instance, end);
      end(new Error("Platform not yet supported."));
    }
    function EscapeDoubleQuotes(string) {
      if (typeof string !== "string") throw new Error("Expected a string.");
      return string.replace(/"/g, '\\"');
    }
    function Exec() {
      if (arguments.length < 1 || arguments.length > 3) {
        throw new Error("Wrong number of arguments.");
      }
      var command = arguments[0];
      var options = {};
      var end = function() {
      };
      if (typeof command !== "string") {
        throw new Error("Command should be a string.");
      }
      if (arguments.length === 2) {
        if (Node.util.isObject(arguments[1])) {
          options = arguments[1];
        } else if (Node.util.isFunction(arguments[1])) {
          end = arguments[1];
        } else {
          throw new Error("Expected options or callback.");
        }
      } else if (arguments.length === 3) {
        if (Node.util.isObject(arguments[1])) {
          options = arguments[1];
        } else {
          throw new Error("Expected options to be an object.");
        }
        if (Node.util.isFunction(arguments[2])) {
          end = arguments[2];
        } else {
          throw new Error("Expected callback to be a function.");
        }
      }
      if (/^sudo/i.test(command)) {
        return end(new Error('Command should not be prefixed with "sudo".'));
      }
      if (typeof options.name === "undefined") {
        var title = Node.process.title;
        if (ValidName(title)) {
          options.name = title;
        } else {
          return end(new Error("process.title cannot be used as a valid name."));
        }
      } else if (!ValidName(options.name)) {
        var error = "";
        error += "options.name must be alphanumeric only ";
        error += "(spaces are allowed) and <= 70 characters.";
        return end(new Error(error));
      }
      if (typeof options.icns !== "undefined") {
        if (typeof options.icns !== "string") {
          return end(new Error("options.icns must be a string if provided."));
        } else if (options.icns.trim().length === 0) {
          return end(new Error("options.icns must not be empty if provided."));
        }
      }
      if (typeof options.env !== "undefined") {
        if (typeof options.env !== "object") {
          return end(new Error("options.env must be an object if provided."));
        } else if (Object.keys(options.env).length === 0) {
          return end(new Error("options.env must not be empty if provided."));
        } else {
          for (var key in options.env) {
            var value = options.env[key];
            if (typeof key !== "string" || typeof value !== "string") {
              return end(
                new Error("options.env environment variables must be strings.")
              );
            }
            if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key)) {
              return end(
                new Error(
                  "options.env has an invalid environment variable name: " + JSON.stringify(key)
                )
              );
            }
            if (/[\r\n]/.test(value)) {
              return end(
                new Error(
                  "options.env has an invalid environment variable value: " + JSON.stringify(value)
                )
              );
            }
          }
        }
      }
      var platform = Node.process.platform;
      if (platform !== "darwin" && platform !== "linux" && platform !== "win32") {
        return end(new Error("Platform not yet supported."));
      }
      var instance = {
        command,
        options,
        uuid: void 0,
        path: void 0
      };
      Attempt(instance, end);
    }
    function Linux(instance, end) {
      LinuxBinary(
        instance,
        function(error, binary) {
          if (error) return end(error);
          var command = [];
          command.push('cd "' + EscapeDoubleQuotes(Node.process.cwd()) + '";');
          for (var key in instance.options.env) {
            var value = instance.options.env[key];
            command.push("export " + key + '="' + EscapeDoubleQuotes(value) + '";');
          }
          command.push('"' + EscapeDoubleQuotes(binary) + '"');
          if (/kdesudo/i.test(binary)) {
            command.push(
              "--comment",
              '"' + instance.options.name + ' wants to make changes. Enter your password to allow this."'
            );
            command.push("-d");
            command.push("--");
          } else if (/pkexec/i.test(binary)) {
            command.push("--disable-internal-agent");
          }
          var magic = "SUDOPROMPT\n";
          command.push(
            '/bin/bash -c "echo ' + EscapeDoubleQuotes(magic.trim()) + "; " + EscapeDoubleQuotes(instance.command) + '"'
          );
          command = command.join(" ");
          Node.child.exec(
            command,
            { encoding: "utf-8", maxBuffer: MAX_BUFFER },
            function(error2, stdout, stderr) {
              var elevated = stdout && stdout.slice(0, magic.length) === magic;
              if (elevated) stdout = stdout.slice(magic.length);
              if (error2 && !elevated) {
                if (/No authentication agent found/.test(stderr)) {
                  error2.message = NO_POLKIT_AGENT;
                } else {
                  error2.message = PERMISSION_DENIED;
                }
              }
              end(error2, stdout, stderr);
            }
          );
        }
      );
    }
    function LinuxBinary(instance, end) {
      var index = 0;
      var paths = ["/usr/bin/kdesudo", "/usr/bin/pkexec"];
      function test() {
        if (index === paths.length) {
          return end(new Error("Unable to find pkexec or kdesudo."));
        }
        var path = paths[index++];
        Node.fs.stat(
          path,
          function(error) {
            if (error) {
              if (error.code === "ENOTDIR") return test();
              if (error.code === "ENOENT") return test();
              end(error);
            } else {
              end(void 0, path);
            }
          }
        );
      }
      test();
    }
    function Mac(instance, callback) {
      var temp = Node.os.tmpdir();
      if (!temp) return callback(new Error("os.tmpdir() not defined."));
      var user = Node.process.env.USER;
      if (!user) return callback(new Error("env['USER'] not defined."));
      UUID(
        instance,
        function(error, uuid) {
          if (error) return callback(error);
          instance.uuid = uuid;
          instance.path = Node.path.join(
            temp,
            instance.uuid,
            instance.options.name + ".app"
          );
          function end(error2, stdout, stderr) {
            Remove(
              Node.path.dirname(instance.path),
              function(errorRemove) {
                if (error2) return callback(error2);
                if (errorRemove) return callback(errorRemove);
                callback(void 0, stdout, stderr);
              }
            );
          }
          MacApplet(
            instance,
            function(error2, stdout, stderr) {
              if (error2) return end(error2, stdout, stderr);
              MacIcon(
                instance,
                function(error3) {
                  if (error3) return end(error3);
                  MacPropertyList(
                    instance,
                    function(error4, stdout2, stderr2) {
                      if (error4) return end(error4, stdout2, stderr2);
                      MacCommand(
                        instance,
                        function(error5) {
                          if (error5) return end(error5);
                          MacOpen(
                            instance,
                            function(error6, stdout3, stderr3) {
                              if (error6) return end(error6, stdout3, stderr3);
                              MacResult(instance, end);
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
    function MacApplet(instance, end) {
      var parent = Node.path.dirname(instance.path);
      Node.fs.mkdir(
        parent,
        function(error) {
          if (error) return end(error);
          var zip = Node.path.join(parent, "sudo-prompt-applet.zip");
          Node.fs.writeFile(
            zip,
            APPLET,
            "base64",
            function(error2) {
              if (error2) return end(error2);
              var command = [];
              command.push("/usr/bin/unzip");
              command.push("-o");
              command.push('"' + EscapeDoubleQuotes(zip) + '"');
              command.push('-d "' + EscapeDoubleQuotes(instance.path) + '"');
              command = command.join(" ");
              Node.child.exec(command, { encoding: "utf-8" }, end);
            }
          );
        }
      );
    }
    function MacCommand(instance, end) {
      var path = Node.path.join(
        instance.path,
        "Contents",
        "MacOS",
        "sudo-prompt-command"
      );
      var script = [];
      script.push('cd "' + EscapeDoubleQuotes(Node.process.cwd()) + '"');
      for (var key in instance.options.env) {
        var value = instance.options.env[key];
        script.push("export " + key + '="' + EscapeDoubleQuotes(value) + '"');
      }
      script.push(instance.command);
      script = script.join("\n");
      Node.fs.writeFile(path, script, "utf-8", end);
    }
    function MacIcon(instance, end) {
      if (!instance.options.icns) return end();
      Node.fs.readFile(
        instance.options.icns,
        function(error, buffer) {
          if (error) return end(error);
          var icns = Node.path.join(
            instance.path,
            "Contents",
            "Resources",
            "applet.icns"
          );
          Node.fs.writeFile(icns, buffer, end);
        }
      );
    }
    function MacOpen(instance, end) {
      var binary = Node.path.join(instance.path, "Contents", "MacOS", "applet");
      var options = {
        cwd: Node.path.dirname(binary),
        encoding: "utf-8"
      };
      Node.child.exec("./" + Node.path.basename(binary), options, end);
    }
    function MacPropertyList(instance, end) {
      var plist = Node.path.join(instance.path, "Contents", "Info.plist");
      var path = EscapeDoubleQuotes(plist);
      var key = EscapeDoubleQuotes("CFBundleName");
      var value = instance.options.name + " Password Prompt";
      if (/'/.test(value)) {
        return end(new Error("Value should not contain single quotes."));
      }
      var command = [];
      command.push("/usr/bin/defaults");
      command.push("write");
      command.push('"' + path + '"');
      command.push('"' + key + '"');
      command.push("'" + value + "'");
      command = command.join(" ");
      Node.child.exec(command, { encoding: "utf-8" }, end);
    }
    function MacResult(instance, end) {
      var cwd = Node.path.join(instance.path, "Contents", "MacOS");
      Node.fs.readFile(
        Node.path.join(cwd, "code"),
        "utf-8",
        function(error, code) {
          if (error) {
            if (error.code === "ENOENT") return end(new Error(PERMISSION_DENIED));
            end(error);
          } else {
            Node.fs.readFile(
              Node.path.join(cwd, "stdout"),
              "utf-8",
              function(error2, stdout) {
                if (error2) return end(error2);
                Node.fs.readFile(
                  Node.path.join(cwd, "stderr"),
                  "utf-8",
                  function(error3, stderr) {
                    if (error3) return end(error3);
                    code = parseInt(code.trim(), 10);
                    if (code === 0) {
                      end(void 0, stdout, stderr);
                    } else {
                      error3 = new Error(
                        "Command failed: " + instance.command + "\n" + stderr
                      );
                      error3.code = code;
                      end(error3, stdout, stderr);
                    }
                  }
                );
              }
            );
          }
        }
      );
    }
    function Remove(path, end) {
      if (typeof path !== "string" || !path.trim()) {
        return end(new Error("Argument path not defined."));
      }
      var command = [];
      if (Node.process.platform === "win32") {
        if (/"/.test(path)) {
          return end(new Error("Argument path cannot contain double-quotes."));
        }
        command.push('rmdir /s /q "' + path + '"');
      } else {
        command.push("/bin/rm");
        command.push("-rf");
        command.push('"' + EscapeDoubleQuotes(Node.path.normalize(path)) + '"');
      }
      command = command.join(" ");
      Node.child.exec(command, { encoding: "utf-8" }, end);
    }
    function UUID(instance, end) {
      Node.crypto.randomBytes(
        256,
        function(error, random) {
          if (error) random = Date.now() + "" + Math.random();
          var hash = Node.crypto.createHash("SHA256");
          hash.update("sudo-prompt-3");
          hash.update(instance.options.name);
          hash.update(instance.command);
          hash.update(random);
          var uuid = hash.digest("hex").slice(-32);
          if (!uuid || typeof uuid !== "string" || uuid.length !== 32) {
            return end(new Error("Expected a valid UUID."));
          }
          end(void 0, uuid);
        }
      );
    }
    function ValidName(string) {
      if (!/^[a-z0-9 ]+$/i.test(string)) return false;
      if (string.trim().length === 0) return false;
      if (string.length > 70) return false;
      return true;
    }
    function Windows(instance, callback) {
      var temp = Node.os.tmpdir();
      if (!temp) return callback(new Error("os.tmpdir() not defined."));
      UUID(
        instance,
        function(error, uuid) {
          if (error) return callback(error);
          instance.uuid = uuid;
          instance.path = Node.path.join(temp, instance.uuid);
          if (/"/.test(instance.path)) {
            return callback(
              new Error("instance.path cannot contain double-quotes.")
            );
          }
          instance.pathElevate = Node.path.join(instance.path, "elevate.vbs");
          instance.pathExecute = Node.path.join(instance.path, "execute.bat");
          instance.pathCommand = Node.path.join(instance.path, "command.bat");
          instance.pathStdout = Node.path.join(instance.path, "stdout");
          instance.pathStderr = Node.path.join(instance.path, "stderr");
          instance.pathStatus = Node.path.join(instance.path, "status");
          Node.fs.mkdir(
            instance.path,
            function(error2) {
              if (error2) return callback(error2);
              function end(error3, stdout, stderr) {
                Remove(
                  instance.path,
                  function(errorRemove) {
                    if (error3) return callback(error3);
                    if (errorRemove) return callback(errorRemove);
                    callback(void 0, stdout, stderr);
                  }
                );
              }
              WindowsWriteExecuteScript(
                instance,
                function(error3) {
                  if (error3) return end(error3);
                  WindowsWriteCommandScript(
                    instance,
                    function(error4) {
                      if (error4) return end(error4);
                      WindowsElevate(
                        instance,
                        function(error5, stdout, stderr) {
                          if (error5) return end(error5, stdout, stderr);
                          WindowsWaitForStatus(
                            instance,
                            function(error6) {
                              if (error6) return end(error6);
                              WindowsResult(instance, end);
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
    function WindowsElevate(instance, end) {
      var command = [];
      command.push("powershell.exe");
      command.push("Start-Process");
      command.push("-FilePath");
      command.push(`"'` + instance.pathExecute.replace(/'/g, "`'") + `'"`);
      command.push("-WindowStyle hidden");
      command.push("-Verb runAs");
      command = command.join(" ");
      var child = Node.child.exec(
        command,
        { encoding: "utf-8" },
        function(error, stdout, stderr) {
          if (error) return end(new Error(PERMISSION_DENIED), stdout, stderr);
          end();
        }
      );
      child.stdin.end();
    }
    function WindowsResult(instance, end) {
      Node.fs.readFile(
        instance.pathStatus,
        "utf-8",
        function(error, code) {
          if (error) return end(error);
          Node.fs.readFile(
            instance.pathStdout,
            "utf-8",
            function(error2, stdout) {
              if (error2) return end(error2);
              Node.fs.readFile(
                instance.pathStderr,
                "utf-8",
                function(error3, stderr) {
                  if (error3) return end(error3);
                  code = parseInt(code.trim(), 10);
                  if (code === 0) {
                    end(void 0, stdout, stderr);
                  } else {
                    error3 = new Error(
                      "Command failed: " + instance.command + "\r\n" + stderr
                    );
                    error3.code = code;
                    end(error3, stdout, stderr);
                  }
                }
              );
            }
          );
        }
      );
    }
    function WindowsWaitForStatus(instance, end) {
      Node.fs.stat(
        instance.pathStatus,
        function(error, stats) {
          if (error && error.code === "ENOENT" || stats.size < 2) {
            setTimeout(
              function() {
                Node.fs.stat(
                  instance.pathStdout,
                  function(error2) {
                    if (error2) return end(new Error(PERMISSION_DENIED));
                    WindowsWaitForStatus(instance, end);
                  }
                );
              },
              1e3
            );
          } else if (error) {
            end(error);
          } else {
            end();
          }
        }
      );
    }
    function WindowsWriteCommandScript(instance, end) {
      var cwd = Node.process.cwd();
      if (/"/.test(cwd)) {
        return end(new Error("process.cwd() cannot contain double-quotes."));
      }
      var script = [];
      script.push("@echo off");
      script.push("chcp 65001>nul");
      script.push('cd /d "' + cwd + '"');
      for (var key in instance.options.env) {
        var value = instance.options.env[key];
        script.push("set " + key + "=" + value.replace(/([<>\\|&^])/g, "^$1"));
      }
      script.push(instance.command);
      script = script.join("\r\n");
      Node.fs.writeFile(instance.pathCommand, script, "utf-8", end);
    }
    function WindowsWriteExecuteScript(instance, end) {
      var script = [];
      script.push("@echo off");
      script.push(
        'call "' + instance.pathCommand + '" > "' + instance.pathStdout + '" 2> "' + instance.pathStderr + '"'
      );
      script.push('(echo %ERRORLEVEL%) > "' + instance.pathStatus + '"');
      script = script.join("\r\n");
      Node.fs.writeFile(instance.pathExecute, script, "utf-8", end);
    }
    module2.exports.exec = Exec;
    var APPLET = "UEsDBAoAAAAAAO1YcEcAAAAAAAAAAAAAAAAJABwAQ29udGVudHMvVVQJAAPNnElWLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACACgeXBHlHaGqKEBAAC+AwAAEwAcAENvbnRlbnRzL0luZm8ucGxpc3RVVAkAA1zWSVYtkRBXdXgLAAEE9QEAAAQUAAAAfZNRb5swFIWfl1/BeA9OpSmqJkqVBCJFop1VyKQ9Ta59S6wa27NNCfv1M0naJWTsEXO+c8+9vo7v97UI3sBYruRdeBPNwgAkVYzL6i7cluvpbXifTOLP6bdV+QNngRbcugBvl/lmFYRThBZaC0AoLdMA55uiDLwHQtljGIQ75/RXhNq2jUiviqiqe6FF2CgNxnW5N5t6IGKOhb7M0f0ijj9lnLpk8il+hS5ZrZeNZAIWQqj2ge+B5YoSwX8T5xEbo17ktc40gIZQCm8glK5BuieovP5Dbp3xHSeZrHyCXYxO3wM+2wNtHHkWMAQP/bkxbkOVXPMxKuK0Dz6CMh+Wv3AwQ9gPM7INU1NtVK3Ha8sXlfoB+m6J6b4fRzv0mkezMf6R1Fe5MbG2VYYF+L+lMaGvpIKy01cOC4zzMazYKeNOQYuDYkjfjMcteCWJa8w/Zi2ugubFA5e8buqisw7qU81ltzB0xx3QC5/TFh7J/e385/zL+7+/wWbR/LwIOl/dvHiCXw03YFfEPJ9dwsWu5sV2kwnod3QoeLeL0eGdJJM/UEsDBAoAAAAAAHSBjkgAAAAAAAAAAAAAAAAPABwAQ29udGVudHMvTWFjT1MvVVQJAAMbpQ9XLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACABVHBdH7Dk4KTIIAADIYQAAFQAcAENvbnRlbnRzL01hY09TL2FwcGxldFVUCQADMiPZVVOlD1d1eAsAAQT1AQAABBQAAADtnG9sHEcVwGfti7M1/rONLNVtXHqpzsipis+pHOSWFOzEm25at3XrJI2ozbK+W/suuds79vaSuCKSpaOIxRy1+NSPRPAhlWj7AVRaQCWpTRz+CEo+RSKCCho4K67kVhUyAeV4b3fWt17fXZqKFgHvp8zO3/dmdmfPmtl5L7+8/uPXGWMNELZCaGRMgmjHIlxaBCibdcoGsewCljGCIAiCIAiCIAiCIP7r+M21d67zjb/zEaAdwr1bGHuWMQH2/2wAgqqODj0kf0F+8nGfoFRbJ8p9U0C5g/KRgwEZqZLGfrfwwJx+LP2kVWkelD9zJ2NfBr1nWt2xrhNisxWZ3Ex6MpNSc1Z+soqOO+5i7JMYt7vj9BC5jiZXBwirCT2V1c0qOgZAxwMYt9cbRyxnmUljusa9mKBjGON2tgG/PlXNGyeSRlxNGlOZKjpeBR0KxsFx+MB7VJy5GB46OOSrCLPKfEjrH3/gFry+4zOpuH8sm+VF5srW6ltVjZQ3HVnL3KRDDLsflMSADpyDyjuR0urp6AAdHRgHdOD9iOs6Ypl0OmPUupeecOW19OsQAmn3tzBy4LFH5OED3jz0MbYouM8D460BOdTXCaEF6tsgLkF8GeJPQBj16Rb4PTf5xl2NH4J8a5Vy1N3F3OcZzefMaCo5GeVTuJ2P4cUf/aH5qbbP73/utpfeevdbLzwfYfy+Q80woGan/1E+ljo/703g77IaOJY479t5rqFLDag9OjaTs/R0dCQ5aWrmTHS/qaX1ExnzWC66L2PqY7p5PBnTc71TXnn0sG7mkhkjFx3a0IL30e/rQxB+EXL68J4BBLe73r298DySk5tlGPtJY1BmOhZTc727PBH2Ke+ZhF35nTyP80oQBEEQBPFRcJTZVwpvrxZWpLmJkN0VKT4q2iORUGFBOPfnBuFX9nhELOG67f1D9pWxpw4XVrrmTklz+ZY5Wfwurm/t3ffi9cE+uM41vYbbj2fP5kNXt9sXiopwVRj6xhPlr160mttfuVi4Fs2vXv2rfc5u7UeZfxQ+y4pPh/JrpyUUBjmrofzmadGXKf0eui7KK/ZwJLQUiuRAe+mLUFQ+tFKUV3npd7AU9ytz8iqIiXYoUnoBsqdxDbXk3CXcRov9lYhoW5EQjBxb4NoSY9iQsvn5+QSuusrduAybL3eHIIIbLqyIS9CHlY3loB8rldVKuLfyOsE1+a6zhUVxYsFp3Amqz8tr7Lz8dza1JF8TmC3/syivYVtcfxcWOycWQDvuLcrdnc61y7mGnWsErgmsXDbK5TKkscnypJvGhsuH3TQ2X37YTaPQ8ucw7W6t1LR2TFfjekqb0SGTiedTOmz0klZSSyWf0U01pqVSufXGmThsjs20OpU3Yrjuxbnu4u+GP8b1LO6PcX2L4Q6+v8Q07u9aQFLy71Ckt54TIfjfNdzfDkMYhTAOIXHXh39vCYIgCIIgCIIgCIL4z3Nm+84/Ci1Nn8b0ryHsgbBX1rbgOXD7LZJzNtrC0/gFqYOn8csQ/GONguQchPXzcvy+9CBzvk84HxkO+tJH3bRz5Fb0pb/nS3/fl/6BL/2aL43faLzz3Wbmju8W5p6pttaoR9THjgyZ0zEeH2eqqmbNzLShpXVIpxOqflKP5S1dTehaXDeZqhvHk2bGYOo+LZXal0lnM4ZuWMPJXFazYgmmPp7VjWF9SsunrPVa1HpMn0lPm2r8hGZO3aea+nQyZ+mmmtNjFp5i4oG0lTChE+eDj2pm8lbSgDFoln4yCRp00zQyEDmZtBZLbGxnanHzgWh092d29e/uv+/f+DIQBEEQBEEQBEEQ/7P81rX/FxoZm/Xs/5UmtP8PO/W3M9fGvKoPAEfYXLQJ1HOpmk+AJx80OOb5m/URGG9z9c378rVs9F15tPXP1dS3wvVtC+Q9/H4DFX21fQcY9zvo9eXrj6++D0Af1zfqy9eyx3f16QnVMayufr+zXN+sL99YRx/O69er+RdIgXkNxJv9DfBTDIxLPa6Zudr6enz5euO6ke9Bj7TRzr0noK+JbczfyA9hgOvr9OX98t57XNFX3ydhlOsL+2T8+oK/ucrvNOCfEHbbXhAqeebLB/0V7oYp7+Pt8PsZWnl1+urRpAn7SUCcYBX/hkth95kd2cFYllX3bxB4+xCrzcCO6v4PbXzo1fwbEM/H4ds/f/nCgZH+8k+j0vNPv7Jlz7qPQ1PFx+FVPoZ76ozj42K87YP9/cT7xuf9UfpSeP0MsJvzp0A8/4g3w+78ef4R+F4QBEEQBPH/w1Gm2FeUwturytwpUSnmJfta4Q3h3J8aFeE9xf7d1ZBSOCcqhftZ/m+YKuG6wV4qaQzdGED0Z2jJ/zpa9ZcegjIF7fkVaIBrt11nJxYOOepXpPPyKjsvvytOLcnvCWxJfh87V+xTa0rx1Kpj0a8UFqWJhXL3fgHt9xXn+rCz7Bop3rkTEkNj5e7bIZ7HNRZb/ku5XE6g58HyZUzdj6mLjh1/Pbt7XMt5dvfvtLl1Fbv7BtbhrtyEPW6V038H1yE88yQTTkqC1LJVnIeaCNe7dr3sEPEe6lCb9LWGfa3efvNG8pe5fF8NeW8g3n7jCI+/xOOEVH19KvF9oudHH2n/YOtYgiAIgiAIgiAIgiA+fm69mx3aO8bYtkHn/xlwDq8nkwaavz9h9swzc+DWwRrm71A5CJVVjeChTtk26Fqwu0fxQjUL+9vqHVV/KC53OUd+bJxVfBkw7/gzCO5pr3dOK/g+WUQDeZlV/A2QRwJ5THjn1/xcd9BfhlT1KbgpVwLn+W2amGr2//8CUEsDBBQAAAAIAAVHj0ga7FYjfQEAAKoCAAAhABwAQ29udGVudHMvTWFjT1Mvc3Vkby1wcm9tcHQtc2NyaXB0VVQJAAOJkBBXipAQV3V4CwABBPUBAAAEFAAAAI1SO08cMRDu91cMHIKGxUB5xSGEUqTlFKWMvPYca+EXnjGXy6/PeNcg0qVay+PvObs5U5OLatI0DxvYIwNVm4BdQGIdMhxSkauJ8K1i7FOjvSdwB2A+/WJnXpEJdEGwjvTk0W6HhTW8WldgzKDedVF2Ug2tLn7svz3DDpTFdxWr93C/u7wbVKWyoDhVM/8XZAOPOXvcm+IyXxGcizeaUca0XJ1D0CfQnlEysE2VwbuII0br4gvdCMF37m9IoC39+oxTO2EpS8oZJdtRS0aIKY5/sCQoyLVEMMki6Ghl0BGN9SeuICkPIctXDHDDSB9oGEQi1yZWUAda8EZnIcR/eIOOVao+9TrbkpYFjLmkkHk0KYSGvdt12/e71cP6Hs2c4OJBemtsYusplVX+GLHQ7DKkQ098/ZF38dLEpRCeNUMlMW90BIseeQkWtuu2qKmIyDHCuqFuo1N11Ud/1Cf6CHb7Sfxld2ATklQoUGEDActfZ5326WU74G/HcDv8BVBLAwQKAAAAAADtWHBHqiAGewgAAAAIAAAAEAAcAENvbnRlbnRzL1BrZ0luZm9VVAkAA82cSVYqkRBXdXgLAAEE9QEAAAQUAAAAQVBQTGFwbHRQSwMECgAAAAAAm3lwRwAAAAAAAAAAAAAAABMAHABDb250ZW50cy9SZXNvdXJjZXMvVVQJAANW1klWLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACACAeXBHfrnysfYGAAAf3AAAHgAcAENvbnRlbnRzL1Jlc291cmNlcy9hcHBsZXQuaWNuc1VUCQADH9ZJVnGlD1d1eAsAAQT1AQAABBQAAADt3Xk81Hkcx/Hvb5yVo5bGsVlKbcpRRqFlGZGS5JikRBIdI0OZttMZloqiYwrVjD1UqJaUokTRubG72bZVjqR1VZNjp2XEGo9H+9gt+9h/9tHx8H7N4/fw5MHjYeaPz+P7+P7x/bL9griEPNBm+001J0S+ZbvL/NmKwzWHE0IUHebYuRFCEckjL9v/xSvk2EpCpBXZtrYuDra2Oi4hwSvZgSsIMU9MdPdePcZd1aqQu0p3fDkrcFrs+mPWihMU9y6clp5XEFFdbRrEczCtGtfkL3pWfvBGublJ4ct051kuocYtaaqll/IjdfR+V75vlTdl//AJVZU6elZ5f0S7NO3MaE2xMElhF+TUrHgW2nFYeGTrs/OrhDJN5zMX8ZJVKXrqSUM1Rj03bnf85/pJMXECNdl0D1ctfe/j82imziM2nllSa3t5q8+vP1f38k/k22uN1lmnvfz0b8dGxO+mnh91v7WB2tKdrG3d4vmJaHlTvjGzdMqWcw/9frnCtQpPZK9sMKi/Ey/jzgqIPzBy9/dlf9griI2/u+sjcApozWx6/NXytC+qBTlrhb69fE7J6tgOzpWjFSl8qxihr5dYf/qExoeupY6Ze/j2PfL1azhhZ8fU3eelJY+ylk16UJN6KmOU0M4r+75cZhH/mxNndowNb4wx7TCoN4yvMGu8ySq5l5W5t+xQyYbS/Ome7e0W0sXbC5aktl0LEXNYR9obH7dMT721dbNdT/eFzXNEYSH8GU+bQ5s6YniGcj3fHtgXPbo0Oj4i3d5G1Fjfm/Ng7kgpjQDNxw4RRnu+Vloy5ZE3J6OpwlFBzaxS25He2h3lJuizO70zJPLUYtks14RE5yrD8y2tXa5l5Wqh/NBY06yoiCLF08Nk9A5Ojbs43GmR1Ch/PaZsLf3e6uPRSrIM1ROqGjt80leqfdxYbNn+WV7K7ZKiy/t6r1/3ie46V5432T/Oahs9V7NnVzb9zoq2rFgvPxXrcAMzmvWnGjof/RpdsZThIEpex6DGbd5h6STaOyZXxV/YfW9u4KyllmZ3X15IMHHLSJtVPSOvULCsz2TyPC/WL9kGSme/1L01SSzjfbHnqk+OV7OBmevZeo3DBR7lXT5drT0MkX5PwDd1EQ0ebfkh1zy/L8ydd+VJ4CLuRndNjuwj+vMfU8q2l2l1rGtr8FC2D+fdSGk81eltuTjYSMk++4BMd0DXQo35iXbZndGdcXkGFyeG6b28evF22M2w22HlYSXetGSLW4cfFT00WqvN9bkqCujQ9KzdSt+snr+qmbcme+5Y3cDRn9BDLps+dPVltE9UkPeb6XovineiVUznTznyuZaSn/ZvR8VeRUYLqe3iHFqnU6+7+4LmtfsmaS0MdjIvslFJGG/rn7DPdMGLcx4d6eP2Oz92Y49kWbBUjudU2ijHnc7YIODQxD1aPx8PynVr+cmvJoy2+M5nQa2Kt0dvdPxp73LNU6aTeaktTfHH1L+8Pm/XalZcFcfzYxlhTefuzjRGobLKEqPZh8QKxUXWbU/ERvW78ghvTGTUNd0g9YqbcjUy5h0xVbn3S7SS54SOqKt88UR0qZuxKfxlZfODUm52o2HkGTOLw5dqhevvWjH7ssiqxAhKwA91d1nWG9w/GJIc7GwWbKKe/mAsGRqXBb87P10jH8/0LY6kpGQV1KcuAwAAeCt4LiVFWRJKs4DJ6p9GxGHWfLuTM5dt61/pzCCE7vLmSodGJM/ASqdzU2U3VjpY6WClg5XOICudUaI3VjocuWCsdAAAAAAAAAAAAAAAAD5o1Gmr054TSoqWxPvnfrLxVEIc29/cT5YmkmdgPzlCSz8a+8nYT8Z+MvaTB9lPZpJX+8lRktFyRdDF0m6IdcF2MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8ddD8G5oJkUuQnAXwnvxLAAAAADDkEFURRckVE6rIv+Tb1078MiZEetubJ34RHckzcOIXd8uWTpz4hRO/cOIXTvwa5MQvoidZ5S8a9h8nfl1QVhipQ6jyyWeuvTaBGP3D5fwgE4gpeQYmUCZ7XQ0mECYQJhAm0GATyOfVmYOU4sAdNi+cOUpm/9cdNv2Di8kkFN3mYOtrg8sE14xicGFwYXDhmlEAAD5w/Os1o8bTcM0oVjpY6WClg2tGAQAAAAAAAAAAAAAAgL/wb9eMBpow+r817yN/fwnJf33P5g78nWofEZNXD3u95GdSkh3o135/aL2i3vl/gHf/7t59oDlnDSHS8gQhNGQL8uWs6P+iwPYLDuIOzARqyM+E9QOfA3PIfw4IIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhND70J9QSwMEFAAAAAgA7VhwR/dYplZAAAAAagEAAB4AHABDb250ZW50cy9SZXNvdXJjZXMvYXBwbGV0LnJzcmNVVAkAA82cSVZTpQ9XdXgLAAEE9QEAAAQUAAAAY2BgZGBgYFQBEiDsxjDygJQDPlkmEIEaRpJAQg8kLAMML8bi5OIqIFuouKA4A0jLMTD8/w+S5AdrB7PlBIAEAFBLAwQKAAAAAADtWHBHAAAAAAAAAAAAAAAAJAAcAENvbnRlbnRzL1Jlc291cmNlcy9kZXNjcmlwdGlvbi5ydGZkL1VUCQADzZxJVi2REFd1eAsAAQT1AQAABBQAAABQSwMEFAAAAAgA7VhwRzPLNU9TAAAAZgAAACsAHABDb250ZW50cy9SZXNvdXJjZXMvZGVzY3JpcHRpb24ucnRmZC9UWFQucnRmVVQJAAPNnElWU6UPV3V4CwABBPUBAAAEFAAAACWJOw6AIBAFe08DCBVX2QbWhZgQ1vCpCHcXtHkzkzegtCDB5Xp/g0+UyihARnb70kL/UbvffYpjQODcmk9zKXListxCoUsZA7EQ5S0+dVq085gvUEsDBAoAAAAAAIeBjkgAAAAAAAAAAAAAAAAbABwAQ29udGVudHMvUmVzb3VyY2VzL1NjcmlwdHMvVVQJAAM9pQ9XLZEQV3V4CwABBPUBAAAEFAAAAFBLAwQUAAAACAAJgI5ICl5liTUBAADMAQAAJAAcAENvbnRlbnRzL1Jlc291cmNlcy9TY3JpcHRzL21haW4uc2NwdFVUCQADcaIPV1OlD1d1eAsAAQT1AQAABBQAAAB9UMtOAkEQrNldd9dhH3Dz6NGYiPIJHjTxLCZeF9iDcXEJC0RvfoI/4sEfIvoHPEQEhbIHvOok01U16emu7vOkaF2dXu7XqrUTcyMATkxCwYKthCAUbmciAQ8O11yFcGBfbF/4jR24WmCvWjwUeXqfNutn13XyEeYYHkqKam+kghdJGfUCvwIfB6jiGAX6aCHHETroCrYFe6IKNEXfGOXChc0v7HKpBRzdSFrtELvbumKVC80F/FIjzwe9bj91uZRuXJuwAiLjNi7DlsxPaJSUAMrCFOeac3GfpINennQ6d/0sA4z7JxzKiVCCV+YHAs74LuuIONUi//4RIoC63czrIbYQS3PFicWJcTMTv1JHmocmROLJ45gjzfHvXJqjf7ZZ4RT+61uaBbDipGh2ZanBcjh8/gFQSwECHgMKAAAAAADtWHBHAAAAAAAAAAAAAAAACQAYAAAAAAAAABAA7UEAAAAAQ29udGVudHMvVVQFAAPNnElWdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAoHlwR5R2hqihAQAAvgMAABMAGAAAAAAAAQAAAKSBQwAAAENvbnRlbnRzL0luZm8ucGxpc3RVVAUAA1zWSVZ1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAAB0gY5IAAAAAAAAAAAAAAAADwAYAAAAAAAAABAA7UExAgAAQ29udGVudHMvTWFjT1MvVVQFAAMbpQ9XdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAVRwXR+w5OCkyCAAAyGEAABUAGAAAAAAAAAAAAO2BegIAAENvbnRlbnRzL01hY09TL2FwcGxldFVUBQADMiPZVXV4CwABBPUBAAAEFAAAAFBLAQIeAxQAAAAIAAVHj0ga7FYjfQEAAKoCAAAhABgAAAAAAAEAAADtgfsKAABDb250ZW50cy9NYWNPUy9zdWRvLXByb21wdC1zY3JpcHRVVAUAA4mQEFd1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAADtWHBHqiAGewgAAAAIAAAAEAAYAAAAAAABAAAApIHTDAAAQ29udGVudHMvUGtnSW5mb1VUBQADzZxJVnV4CwABBPUBAAAEFAAAAFBLAQIeAwoAAAAAAJt5cEcAAAAAAAAAAAAAAAATABgAAAAAAAAAEADtQSUNAABDb250ZW50cy9SZXNvdXJjZXMvVVQFAANW1klWdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgAgHlwR3658rH2BgAAH9wAAB4AGAAAAAAAAAAAAKSBcg0AAENvbnRlbnRzL1Jlc291cmNlcy9hcHBsZXQuaWNuc1VUBQADH9ZJVnV4CwABBPUBAAAEFAAAAFBLAQIeAxQAAAAIAO1YcEf3WKZWQAAAAGoBAAAeABgAAAAAAAAAAACkgcAUAABDb250ZW50cy9SZXNvdXJjZXMvYXBwbGV0LnJzcmNVVAUAA82cSVZ1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAADtWHBHAAAAAAAAAAAAAAAAJAAYAAAAAAAAABAA7UFYFQAAQ29udGVudHMvUmVzb3VyY2VzL2Rlc2NyaXB0aW9uLnJ0ZmQvVVQFAAPNnElWdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgA7VhwRzPLNU9TAAAAZgAAACsAGAAAAAAAAQAAAKSBthUAAENvbnRlbnRzL1Jlc291cmNlcy9kZXNjcmlwdGlvbi5ydGZkL1RYVC5ydGZVVAUAA82cSVZ1eAsAAQT1AQAABBQAAABQSwECHgMKAAAAAACHgY5IAAAAAAAAAAAAAAAAGwAYAAAAAAAAABAA7UFuFgAAQ29udGVudHMvUmVzb3VyY2VzL1NjcmlwdHMvVVQFAAM9pQ9XdXgLAAEE9QEAAAQUAAAAUEsBAh4DFAAAAAgACYCOSApeZYk1AQAAzAEAACQAGAAAAAAAAAAAAKSBwxYAAENvbnRlbnRzL1Jlc291cmNlcy9TY3JpcHRzL21haW4uc2NwdFVUBQADcaIPV3V4CwABBPUBAAAEFAAAAFBLBQYAAAAADQANANwEAABWGAAAAAA=";
    var PERMISSION_DENIED = "User did not grant permission.";
    var NO_POLKIT_AGENT = "No polkit authentication agent found.";
    var MAX_BUFFER = 134217728;
  }
});

// node_modules/node-global-key-listener/build/ts/isSpawnEventSupported.js
var require_isSpawnEventSupported = __commonJS({
  "node_modules/node-global-key-listener/build/ts/isSpawnEventSupported.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isSpawnEventSupported = void 0;
    function isSpawnEventSupported() {
      const nodeVersion = process.versions.node;
      const nums = nodeVersion.match(/(\d+)\.(\d+)\.(\d+)/);
      if (!nums)
        return false;
      const major = Number(nums[1]);
      const minor = Number(nums[2]);
      const spawnEventSupported = major > 15 || major == 15 && minor >= 1;
      return spawnEventSupported;
    }
    exports2.isSpawnEventSupported = isSpawnEventSupported;
  }
});

// node_modules/node-global-key-listener/build/ts/MacKeyServer.js
var require_MacKeyServer = __commonJS({
  "node_modules/node-global-key-listener/build/ts/MacKeyServer.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MacKeyServer = void 0;
    var child_process_1 = require("child_process");
    var MacGlobalKeyLookup_1 = require_MacGlobalKeyLookup();
    var path_1 = __importDefault2(require("path"));
    var sudo_prompt_1 = __importDefault2(require_sudo_prompt());
    var isSpawnEventSupported_1 = require_isSpawnEventSupported();
    var sPath = "../../bin/MacKeyServer";
    var MacKeyServer = class {
      /**
       * Creates a new key server for mac
       * @param listener The callback to report key events to
       * @param config Additional optional configuration for the server
       */
      constructor(listener, config = {}) {
        this.running = false;
        this.restarting = false;
        this.listener = listener;
        this.config = config;
      }
      /**
       * Start the Key server and listen for keypresses
       * @param skipPerms Whether to skip attempting to add permissions
       */
      start(skipPerms) {
        this.running = true;
        const serverPath = this.config.serverPath || path_1.default.join(__dirname, sPath);
        this.proc = child_process_1.execFile(serverPath);
        if (this.config.onInfo)
          this.proc.stderr.on("data", (data) => {
            var _a, _b;
            return (_b = (_a = this.config).onInfo) === null || _b === void 0 ? void 0 : _b.call(_a, data.toString());
          });
        const onError = this.config.onError;
        if (onError)
          this.proc.on("close", (code) => {
            if (!this.restarting && this.running)
              onError(code);
          });
        this.proc.stdout.on("data", (data) => {
          const events = this._getEventData(data);
          for (let { event, eventId } of events) {
            const stopPropagation = !!this.listener(event);
            this.proc.stdin.write(`${stopPropagation ? "1" : "0"},${eventId}
`);
          }
        });
        return this.handleStartup(skipPerms !== null && skipPerms !== void 0 ? skipPerms : false);
      }
      /**
       * Deals with the startup process of the server, possibly adding perms if required and restarting
       * @param skipPerms Whether to skip attempting to add permissions
       */
      handleStartup(skipPerms) {
        return new Promise((res, rej) => {
          let errored = false;
          const serverPath = this.config.serverPath || path_1.default.join(__dirname, sPath);
          this.proc.on("error", async (err) => {
            errored = true;
            if (skipPerms) {
              rej(err);
            } else {
              try {
                this.restarting = true;
                this.proc.kill();
                await this.addPerms(serverPath);
                if (!this.running) {
                  res();
                  return;
                }
                res(this.start(true));
              } catch (e) {
                rej(e);
              } finally {
                this.restarting = false;
              }
            }
          });
          if (isSpawnEventSupported_1.isSpawnEventSupported())
            this.proc.on("spawn", res);
          else
            setTimeout(() => {
              if (!errored)
                res();
            }, 200);
        });
      }
      /**
       * Makes sure that the given path is executable
       * @param path The path to add the perms to
       */
      addPerms(path) {
        const options = {
          name: "Global key listener"
        };
        return new Promise((res, err) => {
          sudo_prompt_1.default.exec(`chmod +x "${path}"`, options, (error, stdout, stderr) => {
            if (error) {
              err(error);
              return;
            }
            if (stderr) {
              err(stderr);
              return;
            }
            res();
          });
        });
      }
      /** Stop the Key server */
      stop() {
        this.running = false;
        this.proc.stdout.pause();
        this.proc.kill();
      }
      /**
       * Obtains a IGlobalKeyEvent from stdout buffer data
       * @param data Data from stdout
       * @returns The standardized key event data
       */
      _getEventData(data) {
        const sData = data.toString();
        const lines = sData.trim().split(/\n/);
        return lines.map((line) => {
          const lineData = line.replace(/\s+/, "");
          const [mouseKeyboard, downUp, sKeyCode, sLocationX, sLocationY, eventId] = lineData.split(",");
          const isMouse = mouseKeyboard === "MOUSE";
          const isDown = downUp === "DOWN";
          const keyCode = Number.parseInt(sKeyCode, 10);
          const locationX = Number.parseFloat(sLocationX);
          const locationY = Number.parseFloat(sLocationY);
          const key = MacGlobalKeyLookup_1.MacGlobalKeyLookup[isMouse ? 4294901760 + keyCode : keyCode];
          return {
            event: {
              vKey: keyCode,
              rawKey: key,
              name: key === null || key === void 0 ? void 0 : key.standardName,
              state: isDown ? "DOWN" : "UP",
              scanCode: keyCode,
              location: [locationX, locationY],
              _raw: sData
            },
            eventId
          };
        });
      }
    };
    exports2.MacKeyServer = MacKeyServer;
  }
});

// node_modules/node-global-key-listener/build/ts/_data/WinGlobalKeyLookup.js
var require_WinGlobalKeyLookup = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_data/WinGlobalKeyLookup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WinGlobalKeyLookup = void 0;
    exports2.WinGlobalKeyLookup = {
      48: { _nameRaw: "VK_0", name: "0", standardName: "0" },
      49: { _nameRaw: "VK_1", name: "1", standardName: "1" },
      50: { _nameRaw: "VK_2", name: "2", standardName: "2" },
      51: { _nameRaw: "VK_3", name: "3", standardName: "3" },
      52: { _nameRaw: "VK_4", name: "4", standardName: "4" },
      53: { _nameRaw: "VK_5", name: "5", standardName: "5" },
      54: { _nameRaw: "VK_6", name: "6", standardName: "6" },
      55: { _nameRaw: "VK_7", name: "7", standardName: "7" },
      56: { _nameRaw: "VK_8", name: "8", standardName: "8" },
      57: { _nameRaw: "VK_9", name: "9", standardName: "9" },
      65: { _nameRaw: "VK_A", name: "A", standardName: "A" },
      66: { _nameRaw: "VK_B", name: "B", standardName: "B" },
      67: { _nameRaw: "VK_C", name: "C", standardName: "C" },
      68: { _nameRaw: "VK_D", name: "D", standardName: "D" },
      69: { _nameRaw: "VK_E", name: "E", standardName: "E" },
      70: { _nameRaw: "VK_F", name: "F", standardName: "F" },
      71: { _nameRaw: "VK_G", name: "G", standardName: "G" },
      72: { _nameRaw: "VK_H", name: "H", standardName: "H" },
      73: { _nameRaw: "VK_I", name: "I", standardName: "I" },
      74: { _nameRaw: "VK_J", name: "J", standardName: "J" },
      75: { _nameRaw: "VK_K", name: "K", standardName: "K" },
      76: { _nameRaw: "VK_L", name: "L", standardName: "L" },
      77: { _nameRaw: "VK_M", name: "M", standardName: "M" },
      78: { _nameRaw: "VK_N", name: "N", standardName: "N" },
      79: { _nameRaw: "VK_O", name: "O", standardName: "O" },
      80: { _nameRaw: "VK_P", name: "P", standardName: "P" },
      81: { _nameRaw: "VK_Q", name: "Q", standardName: "Q" },
      82: { _nameRaw: "VK_R", name: "R", standardName: "R" },
      83: { _nameRaw: "VK_S", name: "S", standardName: "S" },
      84: { _nameRaw: "VK_T", name: "T", standardName: "T" },
      85: { _nameRaw: "VK_U", name: "U", standardName: "U" },
      86: { _nameRaw: "VK_V", name: "V", standardName: "V" },
      87: { _nameRaw: "VK_W", name: "W", standardName: "W" },
      88: { _nameRaw: "VK_X", name: "X", standardName: "X" },
      89: { _nameRaw: "VK_Y", name: "Y", standardName: "Y" },
      90: { _nameRaw: "VK_Z", name: "Z", standardName: "Z" },
      1: { _nameRaw: "VK_LBUTTON", name: "LBUTTON", standardName: "MOUSE LEFT" },
      2: { _nameRaw: "VK_RBUTTON", name: "RBUTTON", standardName: "MOUSE RIGHT" },
      3: { _nameRaw: "VK_CANCEL", name: "CANCEL", standardName: "" },
      4: { _nameRaw: "VK_MBUTTON", name: "MBUTTON", standardName: "MOUSE MIDDLE" },
      5: { _nameRaw: "VK_XBUTTON1", name: "XBUTTON1", standardName: "MOUSE X1" },
      6: { _nameRaw: "VK_XBUTTON2", name: "XBUTTON2", standardName: "MOUSE X2" },
      8: { _nameRaw: "VK_BACK", name: "BACK", standardName: "BACKSPACE" },
      9: { _nameRaw: "VK_TAB", name: "TAB", standardName: "TAB" },
      13: { _nameRaw: "VK_RETURN", name: "RETURN", standardName: "RETURN" },
      16: { _nameRaw: "VK_SHIFT", name: "SHIFT", standardName: "" },
      17: { _nameRaw: "VK_CONTROL", name: "CONTROL", standardName: "" },
      18: { _nameRaw: "VK_MENU", name: "MENU", standardName: "" },
      19: { _nameRaw: "VK_PAUSE", name: "PAUSE", standardName: "" },
      20: { _nameRaw: "VK_CAPITAL", name: "CAPSLOCK", standardName: "CAPS LOCK" },
      21: { _nameRaw: "VK_KANA", name: "KANA", standardName: "" },
      22: { _nameRaw: "VK_IME_ON", name: "IME_ON", standardName: "" },
      23: { _nameRaw: "VK_JUNJA", name: "JUNJA", standardName: "" },
      24: { _nameRaw: "VK_FINAL", name: "FINAL", standardName: "" },
      25: { _nameRaw: "VK_HANJA", name: "HANJA", standardName: "" },
      26: { _nameRaw: "VK_IME_OFF", name: "IME_OFF", standardName: "" },
      27: { _nameRaw: "VK_ESCAPE", name: "ESCAPE", standardName: "ESCAPE" },
      28: { _nameRaw: "VK_CONVERT", name: "CONVERT", standardName: "" },
      29: { _nameRaw: "VK_NONCONVERT", name: "NONCONVERT", standardName: "" },
      30: { _nameRaw: "VK_ACCEPT", name: "ACCEPT", standardName: "" },
      31: { _nameRaw: "VK_MODECHANGE", name: "MODECHANGE", standardName: "" },
      32: { _nameRaw: "VK_SPACE", name: "SPACE", standardName: "SPACE" },
      33: { _nameRaw: "VK_PRIOR", name: "PRIOR", standardName: "PAGE UP" },
      34: { _nameRaw: "VK_NEXT", name: "NEXT", standardName: "PAGE DOWN" },
      35: { _nameRaw: "VK_END", name: "END", standardName: "END" },
      36: { _nameRaw: "VK_HOME", name: "HOME", standardName: "HOME" },
      37: { _nameRaw: "VK_LEFT", name: "LEFT", standardName: "LEFT ARROW" },
      38: { _nameRaw: "VK_UP", name: "UP", standardName: "UP ARROW" },
      39: { _nameRaw: "VK_RIGHT", name: "RIGHT", standardName: "RIGHT ARROW" },
      40: { _nameRaw: "VK_DOWN", name: "DOWN", standardName: "DOWN ARROW" },
      41: { _nameRaw: "VK_SELECT", name: "SELECT", standardName: "" },
      42: { _nameRaw: "VK_PRINT", name: "PRINT", standardName: "" },
      43: { _nameRaw: "VK_EXECUTE", name: "EXECUTE", standardName: "" },
      44: { _nameRaw: "VK_SNAPSHOT", name: "SNAPSHOT", standardName: "PRINT SCREEN" },
      45: { _nameRaw: "VK_INSERT", name: "INSERT", standardName: "INS" },
      46: { _nameRaw: "VK_DELETE", name: "DELETE", standardName: "DELETE" },
      47: { _nameRaw: "VK_HELP", name: "HELP", standardName: "" },
      91: { _nameRaw: "VK_LWIN", name: "LWIN", standardName: "LEFT META" },
      92: { _nameRaw: "VK_RWIN", name: "RWIN", standardName: "RIGHT META" },
      93: { _nameRaw: "VK_APPS", name: "APPS", standardName: "" },
      95: { _nameRaw: "VK_SLEEP", name: "SLEEP", standardName: "" },
      96: { _nameRaw: "VK_NUMPAD0", name: "NUMPAD0", standardName: "NUMPAD 0" },
      97: { _nameRaw: "VK_NUMPAD1", name: "NUMPAD1", standardName: "NUMPAD 1" },
      98: { _nameRaw: "VK_NUMPAD2", name: "NUMPAD2", standardName: "NUMPAD 2" },
      99: { _nameRaw: "VK_NUMPAD3", name: "NUMPAD3", standardName: "NUMPAD 3" },
      100: { _nameRaw: "VK_NUMPAD4", name: "NUMPAD4", standardName: "NUMPAD 4" },
      101: { _nameRaw: "VK_NUMPAD5", name: "NUMPAD5", standardName: "NUMPAD 5" },
      102: { _nameRaw: "VK_NUMPAD6", name: "NUMPAD6", standardName: "NUMPAD 6" },
      103: { _nameRaw: "VK_NUMPAD7", name: "NUMPAD7", standardName: "NUMPAD 7" },
      104: { _nameRaw: "VK_NUMPAD8", name: "NUMPAD8", standardName: "NUMPAD 8" },
      105: { _nameRaw: "VK_NUMPAD9", name: "NUMPAD9", standardName: "NUMPAD 9" },
      106: { _nameRaw: "VK_MULTIPLY", name: "MULTIPLY", standardName: "NUMPAD MULTIPLY" },
      107: { _nameRaw: "VK_ADD", name: "ADD", standardName: "NUMPAD PLUS" },
      12: { _nameRaw: "VK_CLEAR", name: "CLEAR", standardName: "NUMPAD CLEAR" },
      109: { _nameRaw: "VK_SUBTRACT", name: "SUBTRACT", standardName: "NUMPAD MINUS" },
      110: { _nameRaw: "VK_DECIMAL", name: "DECIMAL", standardName: "NUMPAD DOT" },
      111: { _nameRaw: "VK_DIVIDE", name: "DIVIDE", standardName: "NUMPAD DIVIDE" },
      108: { _nameRaw: "VK_SEPARATOR", name: "SEPARATOR", standardName: "" },
      112: { _nameRaw: "VK_F1", name: "F1", standardName: "F1" },
      113: { _nameRaw: "VK_F2", name: "F2", standardName: "F2" },
      114: { _nameRaw: "VK_F3", name: "F3", standardName: "F3" },
      115: { _nameRaw: "VK_F4", name: "F4", standardName: "F4" },
      116: { _nameRaw: "VK_F5", name: "F5", standardName: "F5" },
      117: { _nameRaw: "VK_F6", name: "F6", standardName: "F6" },
      118: { _nameRaw: "VK_F7", name: "F7", standardName: "F7" },
      119: { _nameRaw: "VK_F8", name: "F8", standardName: "F8" },
      120: { _nameRaw: "VK_F9", name: "F9", standardName: "F9" },
      121: { _nameRaw: "VK_F10", name: "F10", standardName: "F10" },
      122: { _nameRaw: "VK_F11", name: "F11", standardName: "F11" },
      123: { _nameRaw: "VK_F12", name: "F12", standardName: "F12" },
      124: { _nameRaw: "VK_F13", name: "F13", standardName: "F13" },
      125: { _nameRaw: "VK_F14", name: "F14", standardName: "F14" },
      126: { _nameRaw: "VK_F15", name: "F15", standardName: "F15" },
      127: { _nameRaw: "VK_F16", name: "F16", standardName: "F16" },
      128: { _nameRaw: "VK_F17", name: "F17", standardName: "F17" },
      129: { _nameRaw: "VK_F18", name: "F18", standardName: "F18" },
      130: { _nameRaw: "VK_F19", name: "F19", standardName: "F19" },
      131: { _nameRaw: "VK_F20", name: "F20", standardName: "F20" },
      132: { _nameRaw: "VK_F21", name: "F21", standardName: "F21" },
      133: { _nameRaw: "VK_F22", name: "F22", standardName: "F22" },
      134: { _nameRaw: "VK_F23", name: "F23", standardName: "F23" },
      135: { _nameRaw: "VK_F24", name: "F24", standardName: "F24" },
      144: { _nameRaw: "VK_NUMLOCK", name: "NUMLOCK", standardName: "NUM LOCK" },
      145: { _nameRaw: "VK_SCROLL", name: "SCROLL", standardName: "SCROLL LOCK" },
      160: { _nameRaw: "VK_LSHIFT", name: "LSHIFT", standardName: "LEFT SHIFT" },
      161: { _nameRaw: "VK_RSHIFT", name: "RSHIFT", standardName: "RIGHT SHIFT" },
      162: { _nameRaw: "VK_LCONTROL", name: "LCONTROL", standardName: "LEFT CTRL" },
      163: { _nameRaw: "VK_RCONTROL", name: "RCONTROL", standardName: "RIGHT CTRL" },
      164: { _nameRaw: "VK_LMENU", name: "LALT", standardName: "LEFT ALT" },
      165: { _nameRaw: "VK_RMENU", name: "RALT", standardName: "RIGHT ALT" },
      166: { _nameRaw: "VK_BROWSER_BACK", name: "BROWSER_BACK", standardName: "" },
      167: { _nameRaw: "VK_BROWSER_FORWARD", name: "BROWSER_FORWARD", standardName: "" },
      168: { _nameRaw: "VK_BROWSER_REFRESH", name: "BROWSER_REFRESH", standardName: "" },
      169: { _nameRaw: "VK_BROWSER_STOP", name: "BROWSER_STOP", standardName: "" },
      170: { _nameRaw: "VK_BROWSER_SEARCH", name: "BROWSER_SEARCH", standardName: "" },
      171: { _nameRaw: "VK_BROWSER_FAVORITES", name: "BROWSER_FAVORITES", standardName: "" },
      172: { _nameRaw: "VK_BROWSER_HOME", name: "BROWSER_HOME", standardName: "" },
      173: { _nameRaw: "VK_VOLUME_MUTE", name: "VOLUME_MUTE", standardName: "" },
      174: { _nameRaw: "VK_VOLUME_DOWN", name: "VOLUME_DOWN", standardName: "" },
      175: { _nameRaw: "VK_VOLUME_UP", name: "VOLUME_UP", standardName: "" },
      176: { _nameRaw: "VK_MEDIA_NEXT_TRACK", name: "MEDIA_NEXT_TRACK", standardName: "" },
      177: { _nameRaw: "VK_MEDIA_PREV_TRACK", name: "MEDIA_PREV_TRACK", standardName: "" },
      178: { _nameRaw: "VK_MEDIA_STOP", name: "MEDIA_STOP", standardName: "" },
      179: { _nameRaw: "VK_MEDIA_PLAY_PAUSE", name: "MEDIA_PLAY_PAUSE", standardName: "" },
      180: { _nameRaw: "VK_LAUNCH_MAIL", name: "LAUNCH_MAIL", standardName: "" },
      181: { _nameRaw: "VK_LAUNCH_MEDIA_SELECT", name: "LAUNCH_MEDIA_SELECT", standardName: "" },
      182: { _nameRaw: "VK_LAUNCH_APP1", name: "LAUNCH_APP1", standardName: "" },
      183: { _nameRaw: "VK_LAUNCH_APP2", name: "LAUNCH_APP2", standardName: "" },
      186: { _nameRaw: "VK_OEM_1", name: "OEM_1", standardName: "SEMICOLON" },
      187: { _nameRaw: "VK_OEM_PLUS", name: "OEM_PLUS", standardName: "EQUALS" },
      188: { _nameRaw: "VK_OEM_COMMA", name: "OEM_COMMA", standardName: "COMMA" },
      189: { _nameRaw: "VK_OEM_MINUS", name: "OEM_MINUS", standardName: "MINUS" },
      190: { _nameRaw: "VK_OEM_PERIOD", name: "OEM_PERIOD", standardName: "DOT" },
      191: { _nameRaw: "VK_OEM_2", name: "OEM_2", standardName: "FORWARD SLASH" },
      192: { _nameRaw: "VK_OEM_3", name: "OEM_3", standardName: "SECTION" },
      219: { _nameRaw: "VK_OEM_4", name: "OEM_4", standardName: "SQUARE BRACKET OPEN" },
      220: { _nameRaw: "VK_OEM_5", name: "OEM_5", standardName: "BACKSLASH" },
      221: { _nameRaw: "VK_OEM_6", name: "OEM_6", standardName: "SQUARE BRACKET CLOSE" },
      222: { _nameRaw: "VK_OEM_7", name: "OEM_7", standardName: "QUOTE" },
      223: { _nameRaw: "VK_OEM_8", name: "OEM_8", standardName: "" },
      226: { _nameRaw: "VK_OEM_102", name: "OEM_102", standardName: "BACKTICK" },
      229: { _nameRaw: "VK_PROCESSKEY", name: "PROCESSKEY", standardName: "" },
      231: { _nameRaw: "VK_PACKET", name: "PACKET", standardName: "" },
      246: { _nameRaw: "VK_ATTN", name: "ATTN", standardName: "" },
      247: { _nameRaw: "VK_CRSEL", name: "CRSEL", standardName: "" },
      248: { _nameRaw: "VK_EXSEL", name: "EXSEL", standardName: "" },
      249: { _nameRaw: "VK_EREOF", name: "EREOF", standardName: "" },
      250: { _nameRaw: "VK_PLAY", name: "PLAY", standardName: "" },
      251: { _nameRaw: "VK_ZOOM", name: "ZOOM", standardName: "" },
      252: { _nameRaw: "VK_NONAME", name: "NONAME", standardName: "" },
      253: { _nameRaw: "VK_PA1", name: "PA1", standardName: "" },
      254: { _nameRaw: "VK_OEM_CLEAR", name: "OEM_CLEAR", standardName: "" }
    };
  }
});

// node_modules/node-global-key-listener/build/ts/WinKeyServer.js
var require_WinKeyServer = __commonJS({
  "node_modules/node-global-key-listener/build/ts/WinKeyServer.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WinKeyServer = void 0;
    var child_process_1 = require("child_process");
    var WinGlobalKeyLookup_1 = require_WinGlobalKeyLookup();
    var path_1 = __importDefault2(require("path"));
    var isSpawnEventSupported_1 = require_isSpawnEventSupported();
    var sPath = "../../bin/WinKeyServer.exe";
    var WinKeyServer = class {
      /**
       * Creates a new key server for windows
       * @param listener The callback to report key events to
       * @param windowsConfig The optional windows configuration
       */
      constructor(listener, config = {}) {
        this.listener = listener;
        this.config = config;
      }
      /** Start the Key server and listen for keypresses */
      async start() {
        var _a, _b;
        const serverPath = this.config.serverPath || path_1.default.join(__dirname, sPath);
        this.proc = child_process_1.execFile(serverPath, { maxBuffer: Infinity });
        if (this.config.onInfo)
          (_a = this.proc.stderr) === null || _a === void 0 ? void 0 : _a.on("data", (data) => {
            var _a2, _b2;
            return (_b2 = (_a2 = this.config).onInfo) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, data.toString());
          });
        if (this.config.onError)
          this.proc.on("close", this.config.onError);
        (_b = this.proc.stdout) === null || _b === void 0 ? void 0 : _b.on("data", (data) => {
          var _a2;
          const events = this._getEventData(data);
          for (let { event, eventId } of events) {
            const stopPropagation = !!this.listener(event);
            (_a2 = this.proc.stdin) === null || _a2 === void 0 ? void 0 : _a2.write(`${stopPropagation ? "1" : "0"},${eventId}
`);
          }
        });
        return new Promise((res, err) => {
          this.proc.on("error", err);
          if (isSpawnEventSupported_1.isSpawnEventSupported())
            this.proc.on("spawn", res);
          else
            setTimeout(res, 200);
        });
      }
      /** Stop the Key server */
      stop() {
        var _a;
        (_a = this.proc.stdout) === null || _a === void 0 ? void 0 : _a.pause();
        this.proc.kill();
      }
      /**
       * Obtains a IGlobalKeyEvent from stdout buffer data
       * @param data Data from stdout
       * @returns The standardized key event data
       */
      _getEventData(data) {
        const sData = data.toString();
        const lines = sData.trim().split(/\n/);
        return lines.map((line) => {
          const lineData = line.replace(/\s+/, "");
          const [_mouseKeyboard, downUp, sKeyCode, sScanCode, sLocationX, sLocationY, eventId] = lineData.split(",");
          const isDown = downUp === "DOWN";
          const keyCode = Number.parseInt(sKeyCode, 10);
          const scanCode = Number.parseInt(sScanCode, 10);
          const locationX = Number.parseFloat(sLocationX);
          const locationY = Number.parseFloat(sLocationY);
          const key = WinGlobalKeyLookup_1.WinGlobalKeyLookup[keyCode];
          return {
            event: {
              vKey: keyCode,
              rawKey: key,
              name: key === null || key === void 0 ? void 0 : key.standardName,
              state: isDown ? "DOWN" : "UP",
              scanCode,
              location: [locationX, locationY],
              _raw: sData
            },
            eventId
          };
        });
      }
    };
    exports2.WinKeyServer = WinKeyServer;
  }
});

// node_modules/node-global-key-listener/build/ts/_data/X11GlobalKeyLookup.js
var require_X11GlobalKeyLookup = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_data/X11GlobalKeyLookup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.X11GlobalKeyLookup = void 0;
    exports2.X11GlobalKeyLookup = {
      0: { _nameRaw: "KEY_RESERVED", name: "RESERVED", standardName: "" },
      1: { _nameRaw: "KEY_ESC", name: "ESCAPE", standardName: "ESCAPE" },
      2: { _nameRaw: "KEY_1", name: "1", standardName: "1" },
      3: { _nameRaw: "KEY_2", name: "2", standardName: "2" },
      4: { _nameRaw: "KEY_3", name: "3", standardName: "3" },
      5: { _nameRaw: "KEY_4", name: "4", standardName: "4" },
      6: { _nameRaw: "KEY_5", name: "5", standardName: "5" },
      7: { _nameRaw: "KEY_6", name: "6", standardName: "6" },
      8: { _nameRaw: "KEY_7", name: "7", standardName: "7" },
      9: { _nameRaw: "KEY_8", name: "8", standardName: "8" },
      10: { _nameRaw: "KEY_9", name: "9", standardName: "9" },
      11: { _nameRaw: "KEY_0", name: "0", standardName: "0" },
      12: { _nameRaw: "KEY_MINUS", name: "MINUS", standardName: "MINUS" },
      13: { _nameRaw: "KEY_EQUAL", name: "EQUALS", standardName: "EQUALS" },
      14: { _nameRaw: "KEY_BACKSPACE", name: "BACKSPACE", standardName: "BACKSPACE" },
      15: { _nameRaw: "KEY_TAB", name: "TAB", standardName: "TAB" },
      16: { _nameRaw: "KEY_Q", name: "Q", standardName: "Q" },
      17: { _nameRaw: "KEY_W", name: "W", standardName: "W" },
      18: { _nameRaw: "KEY_E", name: "E", standardName: "E" },
      19: { _nameRaw: "KEY_R", name: "R", standardName: "R" },
      20: { _nameRaw: "KEY_T", name: "T", standardName: "T" },
      21: { _nameRaw: "KEY_Y", name: "Y", standardName: "Y" },
      22: { _nameRaw: "KEY_U", name: "U", standardName: "U" },
      23: { _nameRaw: "KEY_I", name: "I", standardName: "I" },
      24: { _nameRaw: "KEY_O", name: "O", standardName: "O" },
      25: { _nameRaw: "KEY_P", name: "P", standardName: "P" },
      26: { _nameRaw: "KEY_LEFTBRACE", name: "LEFTBRACE", standardName: "SQUARE BRACKET OPEN" },
      27: { _nameRaw: "KEY_RIGHTBRACE", name: "RIGHTBRACE", standardName: "SQUARE BRACKET CLOSE" },
      28: { _nameRaw: "KEY_ENTER", name: "ENTER", standardName: "RETURN" },
      29: { _nameRaw: "KEY_LEFTCTRL", name: "LEFTCTRL", standardName: "LEFT CTRL" },
      30: { _nameRaw: "KEY_A", name: "A", standardName: "A" },
      31: { _nameRaw: "KEY_S", name: "S", standardName: "S" },
      32: { _nameRaw: "KEY_D", name: "D", standardName: "D" },
      33: { _nameRaw: "KEY_F", name: "F", standardName: "F" },
      34: { _nameRaw: "KEY_G", name: "G", standardName: "G" },
      35: { _nameRaw: "KEY_H", name: "H", standardName: "H" },
      36: { _nameRaw: "KEY_J", name: "J", standardName: "J" },
      37: { _nameRaw: "KEY_K", name: "K", standardName: "K" },
      38: { _nameRaw: "KEY_L", name: "L", standardName: "L" },
      39: { _nameRaw: "KEY_SEMICOLON", name: "SEMICOLON", standardName: "SEMICOLON" },
      40: { _nameRaw: "KEY_APOSTROPHE", name: "APOSTROPHE", standardName: "QUOTE" },
      41: { _nameRaw: "KEY_GRAVE", name: "GRAVE", standardName: "BACKTICK" },
      42: { _nameRaw: "KEY_LEFTSHIFT", name: "LEFTSHIFT", standardName: "LEFT SHIFT" },
      43: { _nameRaw: "KEY_BACKSLASH", name: "BACKSLASH", standardName: "BACKSLASH" },
      44: { _nameRaw: "KEY_Z", name: "Z", standardName: "Z" },
      45: { _nameRaw: "KEY_X", name: "X", standardName: "X" },
      46: { _nameRaw: "KEY_C", name: "C", standardName: "C" },
      47: { _nameRaw: "KEY_V", name: "V", standardName: "V" },
      48: { _nameRaw: "KEY_B", name: "B", standardName: "B" },
      49: { _nameRaw: "KEY_N", name: "N", standardName: "N" },
      50: { _nameRaw: "KEY_M", name: "M", standardName: "M" },
      51: { _nameRaw: "KEY_COMMA", name: "COMMA", standardName: "COMMA" },
      52: { _nameRaw: "KEY_DOT", name: "DOT", standardName: "DOT" },
      53: { _nameRaw: "KEY_SLASH", name: "SLASH", standardName: "FORWARD SLASH" },
      54: { _nameRaw: "KEY_RIGHTSHIFT", name: "RIGHTSHIFT", standardName: "RIGHT SHIFT" },
      55: { _nameRaw: "KEY_KPASTERISK", name: "KPASTERISK", standardName: "NUMPAD MULTIPLY" },
      56: { _nameRaw: "KEY_LEFTALT", name: "LEFTALT", standardName: "LEFT ALT" },
      57: { _nameRaw: "KEY_SPACE", name: "SPACE", standardName: "SPACE" },
      58: { _nameRaw: "KEY_CAPSLOCK", name: "CAPSLOCK", standardName: "CAPS LOCK" },
      59: { _nameRaw: "KEY_F1", name: "F1", standardName: "F1" },
      60: { _nameRaw: "KEY_F2", name: "F2", standardName: "F2" },
      61: { _nameRaw: "KEY_F3", name: "F3", standardName: "F3" },
      62: { _nameRaw: "KEY_F4", name: "F4", standardName: "F4" },
      63: { _nameRaw: "KEY_F5", name: "F5", standardName: "F5" },
      64: { _nameRaw: "KEY_F6", name: "F6", standardName: "F6" },
      65: { _nameRaw: "KEY_F7", name: "F7", standardName: "F7" },
      66: { _nameRaw: "KEY_F8", name: "F8", standardName: "F8" },
      67: { _nameRaw: "KEY_F9", name: "F9", standardName: "F9" },
      68: { _nameRaw: "KEY_F10", name: "F10", standardName: "F10" },
      69: { _nameRaw: "KEY_NUMLOCK", name: "NUMLOCK", standardName: "NUM LOCK" },
      70: { _nameRaw: "KEY_SCROLLLOCK", name: "SCROLLLOCK", standardName: "SCROLL LOCK" },
      71: { _nameRaw: "KEY_KP7", name: "KP7", standardName: "NUMPAD 7" },
      72: { _nameRaw: "KEY_KP8", name: "KP8", standardName: "NUMPAD 8" },
      73: { _nameRaw: "KEY_KP9", name: "KP9", standardName: "NUMPAD 9" },
      74: { _nameRaw: "KEY_KPMINUS", name: "KPMINUS", standardName: "NUMPAD MINUS" },
      75: { _nameRaw: "KEY_KP4", name: "KP4", standardName: "NUMPAD 4" },
      76: { _nameRaw: "KEY_KP5", name: "KP5", standardName: "NUMPAD 5" },
      77: { _nameRaw: "KEY_KP6", name: "KP6", standardName: "NUMPAD 6" },
      78: { _nameRaw: "KEY_KPPLUS", name: "KPPLUS", standardName: "NUMPAD PLUS" },
      79: { _nameRaw: "KEY_KP1", name: "KP1", standardName: "NUMPAD 1" },
      80: { _nameRaw: "KEY_KP2", name: "KP2", standardName: "NUMPAD 2" },
      81: { _nameRaw: "KEY_KP3", name: "KP3", standardName: "NUMPAD 3" },
      82: { _nameRaw: "KEY_KP0", name: "KP0", standardName: "NUMPAD 0" },
      83: { _nameRaw: "KEY_KPDOT", name: "KPDOT", standardName: "NUMPAD DOT" },
      85: { _nameRaw: "KEY_ZENKAKUHANKAKU", name: "ZENKAKUHANKAKU", standardName: "" },
      86: { _nameRaw: "KEY_102ND", name: "102ND", standardName: "" },
      87: { _nameRaw: "KEY_F11", name: "F11", standardName: "F11" },
      88: { _nameRaw: "KEY_F12", name: "F12", standardName: "F12" },
      89: { _nameRaw: "KEY_RO", name: "RO", standardName: "" },
      90: { _nameRaw: "KEY_KATAKANA", name: "KATAKANA", standardName: "" },
      91: { _nameRaw: "KEY_HIRAGANA", name: "HIRAGANA", standardName: "" },
      92: { _nameRaw: "KEY_HENKAN", name: "HENKAN", standardName: "" },
      93: { _nameRaw: "KEY_KATAKANAHIRAGANA", name: "KATAKANAHIRAGANA", standardName: "" },
      94: { _nameRaw: "KEY_MUHENKAN", name: "MUHENKAN", standardName: "" },
      95: { _nameRaw: "KEY_KPJPCOMMA", name: "KPJPCOMMA", standardName: "" },
      96: { _nameRaw: "KEY_KPENTER", name: "KPENTER", standardName: "NUMPAD RETURN" },
      97: { _nameRaw: "KEY_RIGHTCTRL", name: "RIGHTCTRL", standardName: "RIGHT CTRL" },
      98: { _nameRaw: "KEY_KPSLASH", name: "KPSLASH", standardName: "" },
      99: { _nameRaw: "KEY_SYSRQ", name: "SYSRQ", standardName: "" },
      100: { _nameRaw: "KEY_RIGHTALT", name: "RIGHTALT", standardName: "RIGHT ALT" },
      101: { _nameRaw: "KEY_LINEFEED", name: "LINEFEED", standardName: "" },
      102: { _nameRaw: "KEY_HOME", name: "HOME", standardName: "HOME" },
      103: { _nameRaw: "KEY_UP", name: "UP", standardName: "UP ARROW" },
      104: { _nameRaw: "KEY_PAGEUP", name: "PAGEUP", standardName: "PAGE UP" },
      105: { _nameRaw: "KEY_LEFT", name: "LEFT", standardName: "LEFT ARROW" },
      106: { _nameRaw: "KEY_RIGHT", name: "RIGHT", standardName: "RIGHT ARROW" },
      107: { _nameRaw: "KEY_END", name: "END", standardName: "END" },
      108: { _nameRaw: "KEY_DOWN", name: "DOWN", standardName: "DOWN ARROW" },
      109: { _nameRaw: "KEY_PAGEDOWN", name: "PAGEDOWN", standardName: "PAGE DOWN" },
      110: { _nameRaw: "KEY_INSERT", name: "INSERT", standardName: "INS" },
      111: { _nameRaw: "KEY_DELETE", name: "DELETE", standardName: "DELETE" },
      112: { _nameRaw: "KEY_MACRO", name: "MACRO", standardName: "" },
      113: { _nameRaw: "KEY_MUTE", name: "MUTE", standardName: "" },
      114: { _nameRaw: "KEY_VOLUMEDOWN", name: "VOLUMEDOWN", standardName: "" },
      115: { _nameRaw: "KEY_VOLUMEUP", name: "VOLUMEUP", standardName: "" },
      116: { _nameRaw: "KEY_POWER", name: "POWER", standardName: "" },
      117: { _nameRaw: "KEY_KPEQUAL", name: "KPEQUAL", standardName: "NUMPAD EQUALS" },
      118: { _nameRaw: "KEY_KPPLUSMINUS", name: "KPPLUSMINUS", standardName: "" },
      119: { _nameRaw: "KEY_PAUSE", name: "PAUSE", standardName: "" },
      120: { _nameRaw: "KEY_SCALE", name: "SCALE", standardName: "" },
      121: { _nameRaw: "KEY_KPCOMMA", name: "KPCOMMA", standardName: "" },
      122: { _nameRaw: "KEY_HANGEUL", name: "HANGEUL", standardName: "" },
      123: { _nameRaw: "KEY_HANJA", name: "HANJA", standardName: "" },
      124: { _nameRaw: "KEY_YEN", name: "YEN", standardName: "" },
      125: { _nameRaw: "KEY_LEFTMETA", name: "LEFTMETA", standardName: "LEFT META" },
      126: { _nameRaw: "KEY_RIGHTMETA", name: "RIGHTMETA", standardName: "RIGHT META" },
      127: { _nameRaw: "KEY_COMPOSE", name: "COMPOSE", standardName: "" },
      // Mouse button codes are artificially offset by 0xFFFF0000 in `X11KeyServer`.
      4294901761: { _nameRaw: "1", name: "Button1", standardName: "MOUSE LEFT" },
      4294901762: { _nameRaw: "2", name: "Button2", standardName: "MOUSE MIDDLE" },
      4294901763: { _nameRaw: "3", name: "Button3", standardName: "MOUSE RIGHT" }
    };
  }
});

// node_modules/node-global-key-listener/build/ts/X11KeyServer.js
var require_X11KeyServer = __commonJS({
  "node_modules/node-global-key-listener/build/ts/X11KeyServer.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.X11KeyServer = void 0;
    var child_process_1 = require("child_process");
    var X11GlobalKeyLookup_1 = require_X11GlobalKeyLookup();
    var path_1 = __importDefault2(require("path"));
    var sudo_prompt_1 = __importDefault2(require_sudo_prompt());
    var isSpawnEventSupported_1 = require_isSpawnEventSupported();
    var sPath = "../../bin/X11KeyServer";
    var X11KeyServer = class {
      /**
       * Creates a new key server for x11
       * @param listener The callback to report key events to
       * @param config Additional optional configuration for the server
       */
      constructor(listener, config = {}) {
        this.running = false;
        this.restarting = false;
        this.listener = listener;
        this.config = config;
      }
      /**
       * Start the Key server and listen for keypresses
       * @param skipPerms Whether to skip attempting to add permissions
       */
      start(skipPerms) {
        this.running = true;
        const serverPath = this.config.serverPath || path_1.default.join(__dirname, sPath);
        this.proc = child_process_1.execFile(serverPath);
        if (this.config.onInfo)
          this.proc.stderr.on("data", (data) => {
            var _a, _b;
            return (_b = (_a = this.config).onInfo) === null || _b === void 0 ? void 0 : _b.call(_a, data.toString());
          });
        const onError = this.config.onError;
        if (onError)
          this.proc.on("close", (code) => {
            if (!this.restarting && this.running)
              onError(code);
          });
        this.proc.stdout.on("data", (data) => {
          const events = this._getEventData(data);
          for (let { event, eventId } of events) {
            const stopPropagation = !!this.listener(event);
            this.proc.stdin.write(`${stopPropagation ? "1" : "0"},${eventId}
`);
          }
        });
        return this.handleStartup(skipPerms !== null && skipPerms !== void 0 ? skipPerms : false);
      }
      /**
       * Deals with the startup process of the server, possibly adding perms if required and restarting
       * @param skipPerms Whether to skip attempting to add permissions
       */
      handleStartup(skipPerms) {
        return new Promise((res, rej) => {
          let errored = false;
          const serverPath = this.config.serverPath || path_1.default.join(__dirname, sPath);
          this.proc.on("error", async (err) => {
            errored = true;
            if (skipPerms) {
              rej(err);
            } else {
              try {
                this.restarting = true;
                this.proc.kill();
                await this.addPerms(serverPath);
                if (!this.running) {
                  res();
                  return;
                }
                res(this.start(true));
              } catch (e) {
                rej(e);
              } finally {
                this.restarting = false;
              }
            }
          });
          if (isSpawnEventSupported_1.isSpawnEventSupported())
            this.proc.on("spawn", res);
          else
            setTimeout(() => {
              if (!errored)
                res();
            }, 200);
        });
      }
      /**
       * Makes sure that the given path is executable
       * @param path The path to add the perms to
       */
      addPerms(path) {
        const options = {
          name: "Global key listener"
        };
        return new Promise((res, err) => {
          sudo_prompt_1.default.exec(`chmod +x "${path}"`, options, (error, stdout, stderr) => {
            if (error) {
              err(error);
              return;
            }
            if (stderr) {
              err(stderr);
              return;
            }
            res();
          });
        });
      }
      /** Stop the Key server */
      stop() {
        this.running = false;
        this.proc.stdout.pause();
        this.proc.kill();
      }
      /**
       * Obtains a IGlobalKeyEvent from stdout buffer data
       * @param data Data from stdout
       * @returns The standardized key event data
       */
      _getEventData(data) {
        const sData = data.toString();
        const lines = sData.trim().split(/\n/);
        return lines.map((line) => {
          const lineData = line.replace(/\s+/, "");
          const [mouseKeyboard, downUp, sKeyCode, sLocationX, sLocationY, eventId] = lineData.split(",");
          const isMouse = mouseKeyboard === "MOUSE";
          const isDown = downUp === "DOWN";
          const keyCode = Number.parseInt(sKeyCode, 10);
          const locationX = Number.parseFloat(sLocationX);
          const locationY = Number.parseFloat(sLocationY);
          const key = X11GlobalKeyLookup_1.X11GlobalKeyLookup[isMouse ? 4294901760 + keyCode : keyCode - 8];
          return {
            event: {
              vKey: keyCode,
              rawKey: key,
              name: key === null || key === void 0 ? void 0 : key.standardName,
              state: isDown ? "DOWN" : "UP",
              scanCode: keyCode,
              location: [locationX, locationY],
              _raw: sData
            },
            eventId
          };
        });
      }
    };
    exports2.X11KeyServer = X11KeyServer;
  }
});

// node_modules/node-global-key-listener/build/ts/_types/IGlobalKeyListener.js
var require_IGlobalKeyListener = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_types/IGlobalKeyListener.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/node-global-key-listener/build/ts/_types/IGlobalKeyEvent.js
var require_IGlobalKeyEvent = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_types/IGlobalKeyEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/node-global-key-listener/build/ts/_types/IGlobalKey.js
var require_IGlobalKey = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_types/IGlobalKey.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/node-global-key-listener/build/ts/_types/IGlobalKeyDownMap.js
var require_IGlobalKeyDownMap = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_types/IGlobalKeyDownMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/node-global-key-listener/build/ts/_types/IWindowsConfig.js
var require_IWindowsConfig = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_types/IWindowsConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/node-global-key-listener/build/ts/_types/IConfig.js
var require_IConfig = __commonJS({
  "node_modules/node-global-key-listener/build/ts/_types/IConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/node-global-key-listener/build/index.js
var require_build = __commonJS({
  "node_modules/node-global-key-listener/build/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GlobalKeyboardListener = void 0;
    var os_1 = __importDefault2(require("os"));
    var MacKeyServer_1 = require_MacKeyServer();
    var WinKeyServer_1 = require_WinKeyServer();
    var X11KeyServer_1 = require_X11KeyServer();
    __exportStar(require_IGlobalKeyListener(), exports2);
    __exportStar(require_IGlobalKeyEvent(), exports2);
    __exportStar(require_IGlobalKey(), exports2);
    __exportStar(require_IGlobalKeyDownMap(), exports2);
    __exportStar(require_IWindowsConfig(), exports2);
    __exportStar(require_IConfig(), exports2);
    var GlobalKeyboardListener = class {
      /**
       * Creates a new keyboard listener
       * @param config The optional configuration for the key listener
       */
      constructor(config = {}) {
        this.isRunning = false;
        this.stopTimeoutID = 0;
        this.baseListener = (event) => {
          if (event.name) {
            switch (event.state) {
              case "DOWN":
                this.isDown[event.name] = true;
                break;
              case "UP":
                this.isDown[event.name] = false;
                break;
            }
          }
          let stopPropagation = false;
          for (let onKey of this.listeners) {
            try {
              const res = onKey(event, this.isDown);
              if (res instanceof Object) {
                if (res.stopPropagation)
                  stopPropagation = true;
                if (res.stopImmediatePropagation)
                  break;
              } else if (res) {
                stopPropagation = true;
              }
            } catch (e) {
              console.error(e);
            }
          }
          return stopPropagation;
        };
        this.listeners = [];
        this.isDown = {};
        this.config = config;
        switch (os_1.default.platform()) {
          case "win32":
            this.keyServer = new WinKeyServer_1.WinKeyServer(this.baseListener, config.windows);
            break;
          case "darwin":
            this.keyServer = new MacKeyServer_1.MacKeyServer(this.baseListener, config.mac);
            break;
          case "linux":
            this.keyServer = new X11KeyServer_1.X11KeyServer(this.baseListener, config.x11);
            break;
          default:
            throw Error("This OS is not supported");
        }
      }
      /**
       * Add a global keyboard listener to the global keyboard listener server.
       * @param listener The listener to add to the global keyboard listener
       * @throws An exception if the process could not be started
       */
      async addListener(listener) {
        this.listeners.push(listener);
        if (this.listeners.length == 1) {
          clearTimeout(this.stopTimeoutID);
          await this.start();
        }
      }
      /**
       * Remove a global keyboard listener from the global keyboard listener server.
       * @param listener The listener to remove from the global keyboard listener
       */
      removeListener(listener) {
        var _a;
        const index = this.listeners.indexOf(listener);
        if (index != -1) {
          this.listeners.splice(index, 1);
          if (this.listeners.length == 0) {
            if (this.config.disposeDelay == -1)
              this.stop();
            else
              this.stopTimeoutID = setTimeout(() => this.stop(), (_a = this.config.disposeDelay) !== null && _a !== void 0 ? _a : 100);
          }
        }
      }
      /** Removes all listeners and destroys the key server */
      kill() {
        this.listeners = [];
        this.stop();
      }
      /** Start the key server */
      start() {
        let promise = Promise.resolve();
        if (!this.isRunning)
          promise = this.keyServer.start();
        this.isRunning = true;
        return promise;
      }
      /** Stop the key server */
      stop() {
        if (this.isRunning)
          this.keyServer.stop();
        this.isRunning = false;
      }
    };
    exports2.GlobalKeyboardListener = GlobalKeyboardListener;
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports2, module2) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports2);
  }
});

// node_modules/color-diff/index.cjs
var require_color_diff = __commonJS({
  "node_modules/color-diff/index.cjs"(exports2) {
    "use strict";
    function rgbaToLab(c, bc) {
      bc = normalize(bc || { R: 255, G: 255, B: 255 });
      c = normalize(c);
      let newC = c;
      if (c.A !== void 0) {
        newC = {
          R: bc.R + (c.R - bc.R) * c.A,
          G: bc.G + (c.G - bc.G) * c.A,
          B: bc.B + (c.B - bc.B) * c.A
        };
      }
      return xyzToLab(rgbToXyz(newC));
    }
    function rgbToXyz(c) {
      let R = c.R / 255;
      let G = c.G / 255;
      let B = c.B / 255;
      if (R > 0.04045) R = Math.pow((R + 0.055) / 1.055, 2.4);
      else R = R / 12.92;
      if (G > 0.04045) G = Math.pow((G + 0.055) / 1.055, 2.4);
      else G = G / 12.92;
      if (B > 0.04045) B = Math.pow((B + 0.055) / 1.055, 2.4);
      else B = B / 12.92;
      R *= 100;
      G *= 100;
      B *= 100;
      const X = R * 0.4124 + G * 0.3576 + B * 0.1805;
      const Y = R * 0.2126 + G * 0.7152 + B * 0.0722;
      const Z = R * 0.0193 + G * 0.1192 + B * 0.9505;
      return { X, Y, Z };
    }
    function xyzToLab(c) {
      const refY = 100;
      const refZ = 108.883;
      const refX = 95.047;
      let Y = c.Y / refY;
      let Z = c.Z / refZ;
      let X = c.X / refX;
      if (X > 8856e-6) X = Math.pow(X, 1 / 3);
      else X = 7.787 * X + 16 / 116;
      if (Y > 8856e-6) Y = Math.pow(Y, 1 / 3);
      else Y = 7.787 * Y + 16 / 116;
      if (Z > 8856e-6) Z = Math.pow(Z, 1 / 3);
      else Z = 7.787 * Z + 16 / 116;
      const L = 116 * Y - 16;
      const a = 500 * (X - Y);
      const b2 = 200 * (Y - Z);
      return { L, a, b: b2 };
    }
    function normalize(c) {
      let r2, g2, b2, a;
      if ("R" in c) {
        r2 = c.R;
        g2 = c.G;
        b2 = c.B;
        a = c.A;
      } else {
        r2 = c.r;
        g2 = c.g;
        b2 = c.b;
        a = c.a;
      }
      const normalizedC = { R: r2, G: g2, B: b2 };
      if (a !== void 0) normalizedC.A = a;
      return normalizedC;
    }
    function ciede2000(c1, c2, bc) {
      if ("R" in c1 || "r" in c1) {
        c1 = rgbaToLab(c1, bc);
      }
      if ("R" in c2 || "r" in c2) {
        c2 = rgbaToLab(c2, bc);
      }
      const L1 = c1.L;
      const a1 = c1.a;
      const b1 = c1.b;
      const L2 = c2.L;
      const a2 = c2.a;
      const b2 = c2.b;
      const kL = 1;
      const kC = 1;
      const kH = 1;
      const C1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2));
      const C2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(b2, 2));
      const aC1C2 = (C1 + C2) / 2;
      const G = 0.5 * (1 - Math.sqrt(Math.pow(aC1C2, 7) / (Math.pow(aC1C2, 7) + Math.pow(25, 7))));
      const a1p = (1 + G) * a1;
      const a2p = (1 + G) * a2;
      const C1p = Math.sqrt(Math.pow(a1p, 2) + Math.pow(b1, 2));
      const C2p = Math.sqrt(Math.pow(a2p, 2) + Math.pow(b2, 2));
      const h1p = hpF(b1, a1p);
      const h2p = hpF(b2, a2p);
      const dLp = L2 - L1;
      const dCp = C2p - C1p;
      const dhp = dhpF(C1, C2, h1p, h2p);
      const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin(radians(dhp) / 2);
      const aL = (L1 + L2) / 2;
      const aCp = (C1p + C2p) / 2;
      const aHp = aHpF(C1, C2, h1p, h2p);
      const T = 1 - 0.17 * Math.cos(radians(aHp - 30)) + 0.24 * Math.cos(radians(2 * aHp)) + 0.32 * Math.cos(radians(3 * aHp + 6)) - 0.2 * Math.cos(radians(4 * aHp - 63));
      const dRo = 30 * Math.exp(-Math.pow((aHp - 275) / 25, 2));
      const RC = Math.sqrt(Math.pow(aCp, 7) / (Math.pow(aCp, 7) + Math.pow(25, 7)));
      const SL = 1 + 0.015 * Math.pow(aL - 50, 2) / Math.sqrt(20 + Math.pow(aL - 50, 2));
      const SC = 1 + 0.045 * aCp;
      const SH = 1 + 0.015 * aCp * T;
      const RT = -2 * RC * Math.sin(radians(2 * dRo));
      const dE = Math.sqrt(Math.pow(dLp / (SL * kL), 2) + Math.pow(dCp / (SC * kC), 2) + Math.pow(dHp / (SH * kH), 2) + RT * (dCp / (SC * kC)) * (dHp / (SH * kH)));
      return dE;
    }
    function degrees(n) {
      return n * (180 / Math.PI);
    }
    function radians(n) {
      return n * (Math.PI / 180);
    }
    function hpF(x2, y) {
      if (x2 === 0 && y === 0) return 0;
      else {
        const tmphp = degrees(Math.atan2(x2, y));
        if (tmphp >= 0) return tmphp;
        else return tmphp + 360;
      }
    }
    function dhpF(C1, C2, h1p, h2p) {
      if (C1 * C2 === 0) return 0;
      else if (Math.abs(h2p - h1p) <= 180) return h2p - h1p;
      else if (h2p - h1p > 180) return h2p - h1p - 360;
      else if (h2p - h1p < -180) return h2p - h1p + 360;
      else throw new Error();
    }
    function aHpF(C1, C2, h1p, h2p) {
      if (C1 * C2 === 0) return h1p + h2p;
      else if (Math.abs(h1p - h2p) <= 180) return (h1p + h2p) / 2;
      else if (Math.abs(h1p - h2p) > 180 && h1p + h2p < 360) return (h1p + h2p + 360) / 2;
      else if (Math.abs(h1p - h2p) > 180 && h1p + h2p >= 360) return (h1p + h2p - 360) / 2;
      else throw new Error();
    }
    function paletteMapKey(c) {
      c = normalize(c);
      if (c.A !== 1) {
        return `rgba(${c.R}, ${c.G}, ${c.B}, ${c.A})`;
      }
      return `rgb(${c.R}, ${c.G}, ${c.B})`;
    }
    function labPaletteMapKey(c) {
      return `lab(${c.L}, ${c.a}, ${c.b})`;
    }
    function mapPalette(a, b2, type, bc) {
      const c = {};
      bc = bc || { R: 255, G: 255, B: 255 };
      type = type || "closest";
      for (let idx1 = 0; idx1 < a.length; idx1 += 1) {
        const color1 = a[idx1];
        let bestColor;
        let bestColorDiff;
        for (let idx2 = 0; idx2 < b2.length; idx2 += 1) {
          const color2 = b2[idx2];
          const currentColorDiff = ciede2000(color1, color2, bc);
          if (!bestColor) {
            bestColor = color2;
            bestColorDiff = currentColorDiff;
            continue;
          }
          if (bestColorDiff !== void 0 && type === "closest" && currentColorDiff < bestColorDiff) {
            bestColor = color2;
            bestColorDiff = currentColorDiff;
            continue;
          }
          if (bestColorDiff !== void 0 && type === "furthest" && currentColorDiff > bestColorDiff) {
            bestColor = color2;
            bestColorDiff = currentColorDiff;
            continue;
          }
        }
        if (bestColor) c[paletteMapKey(color1)] = bestColor;
      }
      return c;
    }
    function matchPaletteLab(targetColor, palette, findFurthest) {
      let color2, currentColorDiff;
      let bestColor = palette[0];
      let bestColorDiff = ciede2000(targetColor, bestColor);
      for (let idx2 = 1, l = palette.length; idx2 < l; idx2 += 1) {
        color2 = palette[idx2];
        currentColorDiff = ciede2000(targetColor, color2);
        if (!findFurthest && currentColorDiff < bestColorDiff || findFurthest && currentColorDiff > bestColorDiff) {
          bestColor = color2;
          bestColorDiff = currentColorDiff;
        }
      }
      return bestColor;
    }
    function mapPaletteLab(a, b2, type) {
      const c = {};
      const findFurthest = type === "furthest";
      for (let idx1 = 0; idx1 < a.length; idx1 += 1) {
        const color1 = a[idx1];
        c[labPaletteMapKey(color1)] = matchPaletteLab(color1, b2, findFurthest);
      }
      return c;
    }
    function closest(target, relative, bc) {
      const key = paletteMapKey(target);
      bc = bc || { R: 255, G: 255, B: 255 };
      const result = mapPalette([target], relative, "closest", bc);
      return result[key];
    }
    function closestLab(target, relative) {
      return matchPaletteLab(target, relative, false);
    }
    function furthest(target, relative, bc) {
      const key = paletteMapKey(target);
      bc = bc || { R: 255, G: 255, B: 255 };
      const result = mapPalette([target], relative, "furthest", bc);
      return result[key];
    }
    function furthestLab(target, relative) {
      return matchPaletteLab(target, relative, true);
    }
    function map_palette(a, b2, type, bc) {
      return mapPalette(a, b2, type, bc);
    }
    function palette_map_key(c) {
      return paletteMapKey(c);
    }
    function rgb_to_lab(c) {
      return rgbaToLab(c);
    }
    function rgba_to_lab(c) {
      return rgbaToLab(c);
    }
    function match_palette_lab(targetColor, palette, findFurthest) {
      return matchPaletteLab(targetColor, palette, findFurthest);
    }
    function map_palette_lab(a, b2, type) {
      return mapPaletteLab(a, b2, type);
    }
    function lab_palette_map_key(c) {
      return labPaletteMapKey(c);
    }
    function closest_lab(target, relative) {
      return closestLab(target, relative);
    }
    function furthest_lab(target, relative) {
      return furthestLab(target, relative);
    }
    exports2.closest = closest;
    exports2.closestLab = closestLab;
    exports2.closest_lab = closest_lab;
    exports2.diff = ciede2000;
    exports2.furthest = furthest;
    exports2.furthestLab = furthestLab;
    exports2.furthest_lab = furthest_lab;
    exports2.labPaletteMapKey = labPaletteMapKey;
    exports2.lab_palette_map_key = lab_palette_map_key;
    exports2.mapPalette = mapPalette;
    exports2.mapPaletteLab = mapPaletteLab;
    exports2.map_palette = map_palette;
    exports2.map_palette_lab = map_palette_lab;
    exports2.matchPaletteLab = matchPaletteLab;
    exports2.match_palette_lab = match_palette_lab;
    exports2.paletteMapKey = paletteMapKey;
    exports2.palette_map_key = palette_map_key;
    exports2.rgb_to_lab = rgb_to_lab;
    exports2.rgbaToLab = rgbaToLab;
    exports2.rgba_to_lab = rgba_to_lab;
  }
});

// node_modules/universalify/index.js
var require_universalify = __commonJS({
  "node_modules/universalify/index.js"(exports2) {
    "use strict";
    exports2.fromCallback = function(fn) {
      return Object.defineProperty(function() {
        if (typeof arguments[arguments.length - 1] === "function") fn.apply(this, arguments);
        else {
          return new Promise((resolve, reject) => {
            arguments[arguments.length] = (err, res) => {
              if (err) return reject(err);
              resolve(res);
            };
            arguments.length++;
            fn.apply(this, arguments);
          });
        }
      }, "name", { value: fn.name });
    };
    exports2.fromPromise = function(fn) {
      return Object.defineProperty(function() {
        const cb = arguments[arguments.length - 1];
        if (typeof cb !== "function") return fn.apply(this, arguments);
        else fn.apply(this, arguments).then((r2) => cb(null, r2), cb);
      }, "name", { value: fn.name });
    };
  }
});

// node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/graceful-fs/polyfills.js"(exports2, module2) {
    var constants = require("constants");
    var origCwd = process.cwd;
    var cwd = null;
    var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
      if (!cwd)
        cwd = origCwd.call(process);
      return cwd;
    };
    try {
      process.cwd();
    } catch (er) {
    }
    if (typeof process.chdir === "function") {
      chdir = process.chdir;
      process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
      };
      if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
    }
    var chdir;
    module2.exports = patch;
    function patch(fs2) {
      if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
        patchLchmod(fs2);
      }
      if (!fs2.lutimes) {
        patchLutimes(fs2);
      }
      fs2.chown = chownFix(fs2.chown);
      fs2.fchown = chownFix(fs2.fchown);
      fs2.lchown = chownFix(fs2.lchown);
      fs2.chmod = chmodFix(fs2.chmod);
      fs2.fchmod = chmodFix(fs2.fchmod);
      fs2.lchmod = chmodFix(fs2.lchmod);
      fs2.chownSync = chownFixSync(fs2.chownSync);
      fs2.fchownSync = chownFixSync(fs2.fchownSync);
      fs2.lchownSync = chownFixSync(fs2.lchownSync);
      fs2.chmodSync = chmodFixSync(fs2.chmodSync);
      fs2.fchmodSync = chmodFixSync(fs2.fchmodSync);
      fs2.lchmodSync = chmodFixSync(fs2.lchmodSync);
      fs2.stat = statFix(fs2.stat);
      fs2.fstat = statFix(fs2.fstat);
      fs2.lstat = statFix(fs2.lstat);
      fs2.statSync = statFixSync(fs2.statSync);
      fs2.fstatSync = statFixSync(fs2.fstatSync);
      fs2.lstatSync = statFixSync(fs2.lstatSync);
      if (fs2.chmod && !fs2.lchmod) {
        fs2.lchmod = function(path, mode, cb) {
          if (cb) process.nextTick(cb);
        };
        fs2.lchmodSync = function() {
        };
      }
      if (fs2.chown && !fs2.lchown) {
        fs2.lchown = function(path, uid, gid, cb) {
          if (cb) process.nextTick(cb);
        };
        fs2.lchownSync = function() {
        };
      }
      if (platform === "win32") {
        fs2.rename = typeof fs2.rename !== "function" ? fs2.rename : function(fs$rename) {
          function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
              if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                setTimeout(function() {
                  fs2.stat(to, function(stater, st) {
                    if (stater && stater.code === "ENOENT")
                      fs$rename(from, to, CB);
                    else
                      cb(er);
                  });
                }, backoff);
                if (backoff < 100)
                  backoff += 10;
                return;
              }
              if (cb) cb(er);
            });
          }
          if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
          return rename;
        }(fs2.rename);
      }
      fs2.read = typeof fs2.read !== "function" ? fs2.read : function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
          var callback;
          if (callback_ && typeof callback_ === "function") {
            var eagCounter = 0;
            callback = function(er, _, __) {
              if (er && er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                return fs$read.call(fs2, fd, buffer, offset, length, position, callback);
              }
              callback_.apply(this, arguments);
            };
          }
          return fs$read.call(fs2, fd, buffer, offset, length, position, callback);
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
      }(fs2.read);
      fs2.readSync = typeof fs2.readSync !== "function" ? fs2.readSync : /* @__PURE__ */ function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
          var eagCounter = 0;
          while (true) {
            try {
              return fs$readSync.call(fs2, fd, buffer, offset, length, position);
            } catch (er) {
              if (er.code === "EAGAIN" && eagCounter < 10) {
                eagCounter++;
                continue;
              }
              throw er;
            }
          }
        };
      }(fs2.readSync);
      function patchLchmod(fs3) {
        fs3.lchmod = function(path, mode, callback) {
          fs3.open(
            path,
            constants.O_WRONLY | constants.O_SYMLINK,
            mode,
            function(err, fd) {
              if (err) {
                if (callback) callback(err);
                return;
              }
              fs3.fchmod(fd, mode, function(err2) {
                fs3.close(fd, function(err22) {
                  if (callback) callback(err2 || err22);
                });
              });
            }
          );
        };
        fs3.lchmodSync = function(path, mode) {
          var fd = fs3.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
          var threw = true;
          var ret;
          try {
            ret = fs3.fchmodSync(fd, mode);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs3.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs3.closeSync(fd);
            }
          }
          return ret;
        };
      }
      function patchLutimes(fs3) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs3.futimes) {
          fs3.lutimes = function(path, at, mt, cb) {
            fs3.open(path, constants.O_SYMLINK, function(er, fd) {
              if (er) {
                if (cb) cb(er);
                return;
              }
              fs3.futimes(fd, at, mt, function(er2) {
                fs3.close(fd, function(er22) {
                  if (cb) cb(er2 || er22);
                });
              });
            });
          };
          fs3.lutimesSync = function(path, at, mt) {
            var fd = fs3.openSync(path, constants.O_SYMLINK);
            var ret;
            var threw = true;
            try {
              ret = fs3.futimesSync(fd, at, mt);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs3.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs3.closeSync(fd);
              }
            }
            return ret;
          };
        } else if (fs3.futimes) {
          fs3.lutimes = function(_a, _b, _c, cb) {
            if (cb) process.nextTick(cb);
          };
          fs3.lutimesSync = function() {
          };
        }
      }
      function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
          return orig.call(fs2, target, mode, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
          try {
            return orig.call(fs2, target, mode);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
          return orig.call(fs2, target, uid, gid, function(er) {
            if (chownErOk(er)) er = null;
            if (cb) cb.apply(this, arguments);
          });
        };
      }
      function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
          try {
            return orig.call(fs2, target, uid, gid);
          } catch (er) {
            if (!chownErOk(er)) throw er;
          }
        };
      }
      function statFix(orig) {
        if (!orig) return orig;
        return function(target, options, cb) {
          if (typeof options === "function") {
            cb = options;
            options = null;
          }
          function callback(er, stats) {
            if (stats) {
              if (stats.uid < 0) stats.uid += 4294967296;
              if (stats.gid < 0) stats.gid += 4294967296;
            }
            if (cb) cb.apply(this, arguments);
          }
          return options ? orig.call(fs2, target, options, callback) : orig.call(fs2, target, callback);
        };
      }
      function statFixSync(orig) {
        if (!orig) return orig;
        return function(target, options) {
          var stats = options ? orig.call(fs2, target, options) : orig.call(fs2, target);
          if (stats) {
            if (stats.uid < 0) stats.uid += 4294967296;
            if (stats.gid < 0) stats.gid += 4294967296;
          }
          return stats;
        };
      }
      function chownErOk(er) {
        if (!er)
          return true;
        if (er.code === "ENOSYS")
          return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
          if (er.code === "EINVAL" || er.code === "EPERM")
            return true;
        }
        return false;
      }
    }
  }
});

// node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
  "node_modules/graceful-fs/legacy-streams.js"(exports2, module2) {
    var Stream = require("stream").Stream;
    module2.exports = legacy;
    function legacy(fs2) {
      return {
        ReadStream,
        WriteStream
      };
      function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        Stream.call(this);
        var self2 = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438;
        this.bufferSize = 64 * 1024;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.end === void 0) {
            this.end = Infinity;
          } else if ("number" !== typeof this.end) {
            throw TypeError("end must be a Number");
          }
          if (this.start > this.end) {
            throw new Error("start must be <= end");
          }
          this.pos = this.start;
        }
        if (this.fd !== null) {
          process.nextTick(function() {
            self2._read();
          });
          return;
        }
        fs2.open(this.path, this.flags, this.mode, function(err, fd) {
          if (err) {
            self2.emit("error", err);
            self2.readable = false;
            return;
          }
          self2.fd = fd;
          self2.emit("open", fd);
          self2._read();
        });
      }
      function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438;
        this.bytesWritten = 0;
        options = options || {};
        var keys = Object.keys(options);
        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];
          this[key] = options[key];
        }
        if (this.start !== void 0) {
          if ("number" !== typeof this.start) {
            throw TypeError("start must be a Number");
          }
          if (this.start < 0) {
            throw new Error("start must be >= zero");
          }
          this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
          this._open = fs2.open;
          this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
          this.flush();
        }
      }
    }
  }
});

// node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
  "node_modules/graceful-fs/clone.js"(exports2, module2) {
    "use strict";
    module2.exports = clone;
    var getPrototypeOf = Object.getPrototypeOf || function(obj) {
      return obj.__proto__;
    };
    function clone(obj) {
      if (obj === null || typeof obj !== "object")
        return obj;
      if (obj instanceof Object)
        var copy = { __proto__: getPrototypeOf(obj) };
      else
        var copy = /* @__PURE__ */ Object.create(null);
      Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
      });
      return copy;
    }
  }
});

// node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
  "node_modules/graceful-fs/graceful-fs.js"(exports2, module2) {
    var fs2 = require("fs");
    var polyfills = require_polyfills();
    var legacy = require_legacy_streams();
    var clone = require_clone();
    var util = require("util");
    var gracefulQueue;
    var previousSymbol;
    if (typeof Symbol === "function" && typeof Symbol.for === "function") {
      gracefulQueue = Symbol.for("graceful-fs.queue");
      previousSymbol = Symbol.for("graceful-fs.previous");
    } else {
      gracefulQueue = "___graceful-fs.queue";
      previousSymbol = "___graceful-fs.previous";
    }
    function noop() {
    }
    function publishQueue(context, queue2) {
      Object.defineProperty(context, gracefulQueue, {
        get: function() {
          return queue2;
        }
      });
    }
    var debug = noop;
    if (util.debuglog)
      debug = util.debuglog("gfs4");
    else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
      debug = function() {
        var m = util.format.apply(util, arguments);
        m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
        console.error(m);
      };
    if (!fs2[gracefulQueue]) {
      queue = global[gracefulQueue] || [];
      publishQueue(fs2, queue);
      fs2.close = function(fs$close) {
        function close(fd, cb) {
          return fs$close.call(fs2, fd, function(err) {
            if (!err) {
              resetQueue();
            }
            if (typeof cb === "function")
              cb.apply(this, arguments);
          });
        }
        Object.defineProperty(close, previousSymbol, {
          value: fs$close
        });
        return close;
      }(fs2.close);
      fs2.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
          fs$closeSync.apply(fs2, arguments);
          resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
          value: fs$closeSync
        });
        return closeSync;
      }(fs2.closeSync);
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
        process.on("exit", function() {
          debug(fs2[gracefulQueue]);
          require("assert").equal(fs2[gracefulQueue].length, 0);
        });
      }
    }
    var queue;
    if (!global[gracefulQueue]) {
      publishQueue(global, fs2[gracefulQueue]);
    }
    module2.exports = patch(clone(fs2));
    if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs2.__patched) {
      module2.exports = patch(fs2);
      fs2.__patched = true;
    }
    function patch(fs3) {
      polyfills(fs3);
      fs3.gracefulify = patch;
      fs3.createReadStream = createReadStream;
      fs3.createWriteStream = createWriteStream;
      var fs$readFile = fs3.readFile;
      fs3.readFile = readFile;
      function readFile(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path2, options2, cb2, startTime) {
          return fs$readFile(path2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$readFile, [path2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$writeFile = fs3.writeFile;
      fs3.writeFile = writeFile;
      function writeFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path2, data2, options2, cb2, startTime) {
          return fs$writeFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$writeFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$appendFile = fs3.appendFile;
      if (fs$appendFile)
        fs3.appendFile = appendFile;
      function appendFile(path, data, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path2, data2, options2, cb2, startTime) {
          return fs$appendFile(path2, data2, options2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$appendFile, [path2, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$copyFile = fs3.copyFile;
      if (fs$copyFile)
        fs3.copyFile = copyFile;
      function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
          cb = flags;
          flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src2, dest2, flags2, cb2, startTime) {
          return fs$copyFile(src2, dest2, flags2, function(err) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      var fs$readdir = fs3.readdir;
      fs3.readdir = readdir;
      var noReaddirOptionVersions = /^v[0-5]\./;
      function readdir(path, options, cb) {
        if (typeof options === "function")
          cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        } : function go$readdir2(path2, options2, cb2, startTime) {
          return fs$readdir(path2, options2, fs$readdirCallback(
            path2,
            options2,
            cb2,
            startTime
          ));
        };
        return go$readdir(path, options, cb);
        function fs$readdirCallback(path2, options2, cb2, startTime) {
          return function(err, files) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([
                go$readdir,
                [path2, options2, cb2],
                err,
                startTime || Date.now(),
                Date.now()
              ]);
            else {
              if (files && files.sort)
                files.sort();
              if (typeof cb2 === "function")
                cb2.call(this, err, files);
            }
          };
        }
      }
      if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs3);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
      }
      var fs$ReadStream = fs3.ReadStream;
      if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
      }
      var fs$WriteStream = fs3.WriteStream;
      if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
      }
      Object.defineProperty(fs3, "ReadStream", {
        get: function() {
          return ReadStream;
        },
        set: function(val) {
          ReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(fs3, "WriteStream", {
        get: function() {
          return WriteStream;
        },
        set: function(val) {
          WriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileReadStream = ReadStream;
      Object.defineProperty(fs3, "FileReadStream", {
        get: function() {
          return FileReadStream;
        },
        set: function(val) {
          FileReadStream = val;
        },
        enumerable: true,
        configurable: true
      });
      var FileWriteStream = WriteStream;
      Object.defineProperty(fs3, "FileWriteStream", {
        get: function() {
          return FileWriteStream;
        },
        set: function(val) {
          FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
      });
      function ReadStream(path, options) {
        if (this instanceof ReadStream)
          return fs$ReadStream.apply(this, arguments), this;
        else
          return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
      }
      function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            if (that.autoClose)
              that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
            that.read();
          }
        });
      }
      function WriteStream(path, options) {
        if (this instanceof WriteStream)
          return fs$WriteStream.apply(this, arguments), this;
        else
          return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
      }
      function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
          if (err) {
            that.destroy();
            that.emit("error", err);
          } else {
            that.fd = fd;
            that.emit("open", fd);
          }
        });
      }
      function createReadStream(path, options) {
        return new fs3.ReadStream(path, options);
      }
      function createWriteStream(path, options) {
        return new fs3.WriteStream(path, options);
      }
      var fs$open = fs3.open;
      fs3.open = open;
      function open(path, flags, mode, cb) {
        if (typeof mode === "function")
          cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path2, flags2, mode2, cb2, startTime) {
          return fs$open(path2, flags2, mode2, function(err, fd) {
            if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
              enqueue([go$open, [path2, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
            else {
              if (typeof cb2 === "function")
                cb2.apply(this, arguments);
            }
          });
        }
      }
      return fs3;
    }
    function enqueue(elem) {
      debug("ENQUEUE", elem[0].name, elem[1]);
      fs2[gracefulQueue].push(elem);
      retry();
    }
    var retryTimer;
    function resetQueue() {
      var now = Date.now();
      for (var i = 0; i < fs2[gracefulQueue].length; ++i) {
        if (fs2[gracefulQueue][i].length > 2) {
          fs2[gracefulQueue][i][3] = now;
          fs2[gracefulQueue][i][4] = now;
        }
      }
      retry();
    }
    function retry() {
      clearTimeout(retryTimer);
      retryTimer = void 0;
      if (fs2[gracefulQueue].length === 0)
        return;
      var elem = fs2[gracefulQueue].shift();
      var fn = elem[0];
      var args = elem[1];
      var err = elem[2];
      var startTime = elem[3];
      var lastTime = elem[4];
      if (startTime === void 0) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
      } else if (Date.now() - startTime >= 6e4) {
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function")
          cb.call(null, err);
      } else {
        var sinceAttempt = Date.now() - lastTime;
        var sinceStart = Math.max(lastTime - startTime, 1);
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        if (sinceAttempt >= desiredDelay) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args.concat([startTime]));
        } else {
          fs2[gracefulQueue].push(elem);
        }
      }
      if (retryTimer === void 0) {
        retryTimer = setTimeout(retry, 0);
      }
    }
  }
});

// node_modules/fs-extra/lib/fs/index.js
var require_fs = __commonJS({
  "node_modules/fs-extra/lib/fs/index.js"(exports2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var fs2 = require_graceful_fs();
    var api = [
      "access",
      "appendFile",
      "chmod",
      "chown",
      "close",
      "copyFile",
      "fchmod",
      "fchown",
      "fdatasync",
      "fstat",
      "fsync",
      "ftruncate",
      "futimes",
      "lchown",
      "lchmod",
      "link",
      "lstat",
      "mkdir",
      "mkdtemp",
      "open",
      "readFile",
      "readdir",
      "readlink",
      "realpath",
      "rename",
      "rmdir",
      "stat",
      "symlink",
      "truncate",
      "unlink",
      "utimes",
      "writeFile"
    ].filter((key) => {
      return typeof fs2[key] === "function";
    });
    Object.keys(fs2).forEach((key) => {
      if (key === "promises") {
        return;
      }
      exports2[key] = fs2[key];
    });
    api.forEach((method) => {
      exports2[method] = u(fs2[method]);
    });
    exports2.exists = function(filename, callback) {
      if (typeof callback === "function") {
        return fs2.exists(filename, callback);
      }
      return new Promise((resolve) => {
        return fs2.exists(filename, resolve);
      });
    };
    exports2.read = function(fd, buffer, offset, length, position, callback) {
      if (typeof callback === "function") {
        return fs2.read(fd, buffer, offset, length, position, callback);
      }
      return new Promise((resolve, reject) => {
        fs2.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
          if (err) return reject(err);
          resolve({ bytesRead, buffer: buffer2 });
        });
      });
    };
    exports2.write = function(fd, buffer, ...args) {
      if (typeof args[args.length - 1] === "function") {
        return fs2.write(fd, buffer, ...args);
      }
      return new Promise((resolve, reject) => {
        fs2.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
          if (err) return reject(err);
          resolve({ bytesWritten, buffer: buffer2 });
        });
      });
    };
    if (typeof fs2.realpath.native === "function") {
      exports2.realpath.native = u(fs2.realpath.native);
    }
  }
});

// node_modules/fs-extra/lib/mkdirs/win32.js
var require_win32 = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/win32.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    function getRootPath(p) {
      p = path.normalize(path.resolve(p)).split(path.sep);
      if (p.length > 0) return p[0];
      return null;
    }
    var INVALID_PATH_CHARS = /[<>:"|?*]/;
    function invalidWin32Path(p) {
      const rp = getRootPath(p);
      p = p.replace(rp, "");
      return INVALID_PATH_CHARS.test(p);
    }
    module2.exports = {
      getRootPath,
      invalidWin32Path
    };
  }
});

// node_modules/fs-extra/lib/mkdirs/mkdirs.js
var require_mkdirs = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/mkdirs.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var invalidWin32Path = require_win32().invalidWin32Path;
    var o777 = parseInt("0777", 8);
    function mkdirs(p, opts, callback, made) {
      if (typeof opts === "function") {
        callback = opts;
        opts = {};
      } else if (!opts || typeof opts !== "object") {
        opts = { mode: opts };
      }
      if (process.platform === "win32" && invalidWin32Path(p)) {
        const errInval = new Error(p + " contains invalid WIN32 path characters.");
        errInval.code = "EINVAL";
        return callback(errInval);
      }
      let mode = opts.mode;
      const xfs = opts.fs || fs2;
      if (mode === void 0) {
        mode = o777 & ~process.umask();
      }
      if (!made) made = null;
      callback = callback || function() {
      };
      p = path.resolve(p);
      xfs.mkdir(p, mode, (er) => {
        if (!er) {
          made = made || p;
          return callback(null, made);
        }
        switch (er.code) {
          case "ENOENT":
            if (path.dirname(p) === p) return callback(er);
            mkdirs(path.dirname(p), opts, (er2, made2) => {
              if (er2) callback(er2, made2);
              else mkdirs(p, opts, callback, made2);
            });
            break;
          // In the case of any other error, just see if there's a dir
          // there already.  If so, then hooray!  If not, then something
          // is borked.
          default:
            xfs.stat(p, (er2, stat) => {
              if (er2 || !stat.isDirectory()) callback(er, made);
              else callback(null, made);
            });
            break;
        }
      });
    }
    module2.exports = mkdirs;
  }
});

// node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js
var require_mkdirs_sync = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var invalidWin32Path = require_win32().invalidWin32Path;
    var o777 = parseInt("0777", 8);
    function mkdirsSync(p, opts, made) {
      if (!opts || typeof opts !== "object") {
        opts = { mode: opts };
      }
      let mode = opts.mode;
      const xfs = opts.fs || fs2;
      if (process.platform === "win32" && invalidWin32Path(p)) {
        const errInval = new Error(p + " contains invalid WIN32 path characters.");
        errInval.code = "EINVAL";
        throw errInval;
      }
      if (mode === void 0) {
        mode = o777 & ~process.umask();
      }
      if (!made) made = null;
      p = path.resolve(p);
      try {
        xfs.mkdirSync(p, mode);
        made = made || p;
      } catch (err0) {
        if (err0.code === "ENOENT") {
          if (path.dirname(p) === p) throw err0;
          made = mkdirsSync(path.dirname(p), opts, made);
          mkdirsSync(p, opts, made);
        } else {
          let stat;
          try {
            stat = xfs.statSync(p);
          } catch (err1) {
            throw err0;
          }
          if (!stat.isDirectory()) throw err0;
        }
      }
      return made;
    }
    module2.exports = mkdirsSync;
  }
});

// node_modules/fs-extra/lib/mkdirs/index.js
var require_mkdirs2 = __commonJS({
  "node_modules/fs-extra/lib/mkdirs/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var mkdirs = u(require_mkdirs());
    var mkdirsSync = require_mkdirs_sync();
    module2.exports = {
      mkdirs,
      mkdirsSync,
      // alias
      mkdirp: mkdirs,
      mkdirpSync: mkdirsSync,
      ensureDir: mkdirs,
      ensureDirSync: mkdirsSync
    };
  }
});

// node_modules/fs-extra/lib/util/utimes.js
var require_utimes = __commonJS({
  "node_modules/fs-extra/lib/util/utimes.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var os = require("os");
    var path = require("path");
    function hasMillisResSync() {
      let tmpfile = path.join("millis-test-sync" + Date.now().toString() + Math.random().toString().slice(2));
      tmpfile = path.join(os.tmpdir(), tmpfile);
      const d = /* @__PURE__ */ new Date(1435410243862);
      fs2.writeFileSync(tmpfile, "https://github.com/jprichardson/node-fs-extra/pull/141");
      const fd = fs2.openSync(tmpfile, "r+");
      fs2.futimesSync(fd, d, d);
      fs2.closeSync(fd);
      return fs2.statSync(tmpfile).mtime > 1435410243e3;
    }
    function hasMillisRes(callback) {
      let tmpfile = path.join("millis-test" + Date.now().toString() + Math.random().toString().slice(2));
      tmpfile = path.join(os.tmpdir(), tmpfile);
      const d = /* @__PURE__ */ new Date(1435410243862);
      fs2.writeFile(tmpfile, "https://github.com/jprichardson/node-fs-extra/pull/141", (err) => {
        if (err) return callback(err);
        fs2.open(tmpfile, "r+", (err2, fd) => {
          if (err2) return callback(err2);
          fs2.futimes(fd, d, d, (err3) => {
            if (err3) return callback(err3);
            fs2.close(fd, (err4) => {
              if (err4) return callback(err4);
              fs2.stat(tmpfile, (err5, stats) => {
                if (err5) return callback(err5);
                callback(null, stats.mtime > 1435410243e3);
              });
            });
          });
        });
      });
    }
    function timeRemoveMillis(timestamp) {
      if (typeof timestamp === "number") {
        return Math.floor(timestamp / 1e3) * 1e3;
      } else if (timestamp instanceof Date) {
        return new Date(Math.floor(timestamp.getTime() / 1e3) * 1e3);
      } else {
        throw new Error("fs-extra: timeRemoveMillis() unknown parameter type");
      }
    }
    function utimesMillis(path2, atime, mtime, callback) {
      fs2.open(path2, "r+", (err, fd) => {
        if (err) return callback(err);
        fs2.futimes(fd, atime, mtime, (futimesErr) => {
          fs2.close(fd, (closeErr) => {
            if (callback) callback(futimesErr || closeErr);
          });
        });
      });
    }
    function utimesMillisSync(path2, atime, mtime) {
      const fd = fs2.openSync(path2, "r+");
      fs2.futimesSync(fd, atime, mtime);
      return fs2.closeSync(fd);
    }
    module2.exports = {
      hasMillisRes,
      hasMillisResSync,
      timeRemoveMillis,
      utimesMillis,
      utimesMillisSync
    };
  }
});

// node_modules/fs-extra/lib/util/stat.js
var require_stat = __commonJS({
  "node_modules/fs-extra/lib/util/stat.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var NODE_VERSION_MAJOR_WITH_BIGINT = 10;
    var NODE_VERSION_MINOR_WITH_BIGINT = 5;
    var NODE_VERSION_PATCH_WITH_BIGINT = 0;
    var nodeVersion = process.versions.node.split(".");
    var nodeVersionMajor = Number.parseInt(nodeVersion[0], 10);
    var nodeVersionMinor = Number.parseInt(nodeVersion[1], 10);
    var nodeVersionPatch = Number.parseInt(nodeVersion[2], 10);
    function nodeSupportsBigInt() {
      if (nodeVersionMajor > NODE_VERSION_MAJOR_WITH_BIGINT) {
        return true;
      } else if (nodeVersionMajor === NODE_VERSION_MAJOR_WITH_BIGINT) {
        if (nodeVersionMinor > NODE_VERSION_MINOR_WITH_BIGINT) {
          return true;
        } else if (nodeVersionMinor === NODE_VERSION_MINOR_WITH_BIGINT) {
          if (nodeVersionPatch >= NODE_VERSION_PATCH_WITH_BIGINT) {
            return true;
          }
        }
      }
      return false;
    }
    function getStats(src, dest, cb) {
      if (nodeSupportsBigInt()) {
        fs2.stat(src, { bigint: true }, (err, srcStat) => {
          if (err) return cb(err);
          fs2.stat(dest, { bigint: true }, (err2, destStat) => {
            if (err2) {
              if (err2.code === "ENOENT") return cb(null, { srcStat, destStat: null });
              return cb(err2);
            }
            return cb(null, { srcStat, destStat });
          });
        });
      } else {
        fs2.stat(src, (err, srcStat) => {
          if (err) return cb(err);
          fs2.stat(dest, (err2, destStat) => {
            if (err2) {
              if (err2.code === "ENOENT") return cb(null, { srcStat, destStat: null });
              return cb(err2);
            }
            return cb(null, { srcStat, destStat });
          });
        });
      }
    }
    function getStatsSync(src, dest) {
      let srcStat, destStat;
      if (nodeSupportsBigInt()) {
        srcStat = fs2.statSync(src, { bigint: true });
      } else {
        srcStat = fs2.statSync(src);
      }
      try {
        if (nodeSupportsBigInt()) {
          destStat = fs2.statSync(dest, { bigint: true });
        } else {
          destStat = fs2.statSync(dest);
        }
      } catch (err) {
        if (err.code === "ENOENT") return { srcStat, destStat: null };
        throw err;
      }
      return { srcStat, destStat };
    }
    function checkPaths(src, dest, funcName, cb) {
      getStats(src, dest, (err, stats) => {
        if (err) return cb(err);
        const { srcStat, destStat } = stats;
        if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
          return cb(new Error("Source and destination must not be the same."));
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          return cb(new Error(errMsg(src, dest, funcName)));
        }
        return cb(null, { srcStat, destStat });
      });
    }
    function checkPathsSync(src, dest, funcName) {
      const { srcStat, destStat } = getStatsSync(src, dest);
      if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        throw new Error("Source and destination must not be the same.");
      }
      if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
        throw new Error(errMsg(src, dest, funcName));
      }
      return { srcStat, destStat };
    }
    function checkParentPaths(src, srcStat, dest, funcName, cb) {
      const srcParent = path.resolve(path.dirname(src));
      const destParent = path.resolve(path.dirname(dest));
      if (destParent === srcParent || destParent === path.parse(destParent).root) return cb();
      if (nodeSupportsBigInt()) {
        fs2.stat(destParent, { bigint: true }, (err, destStat) => {
          if (err) {
            if (err.code === "ENOENT") return cb();
            return cb(err);
          }
          if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
            return cb(new Error(errMsg(src, dest, funcName)));
          }
          return checkParentPaths(src, srcStat, destParent, funcName, cb);
        });
      } else {
        fs2.stat(destParent, (err, destStat) => {
          if (err) {
            if (err.code === "ENOENT") return cb();
            return cb(err);
          }
          if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
            return cb(new Error(errMsg(src, dest, funcName)));
          }
          return checkParentPaths(src, srcStat, destParent, funcName, cb);
        });
      }
    }
    function checkParentPathsSync(src, srcStat, dest, funcName) {
      const srcParent = path.resolve(path.dirname(src));
      const destParent = path.resolve(path.dirname(dest));
      if (destParent === srcParent || destParent === path.parse(destParent).root) return;
      let destStat;
      try {
        if (nodeSupportsBigInt()) {
          destStat = fs2.statSync(destParent, { bigint: true });
        } else {
          destStat = fs2.statSync(destParent);
        }
      } catch (err) {
        if (err.code === "ENOENT") return;
        throw err;
      }
      if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
        throw new Error(errMsg(src, dest, funcName));
      }
      return checkParentPathsSync(src, srcStat, destParent, funcName);
    }
    function isSrcSubdir(src, dest) {
      const srcArr = path.resolve(src).split(path.sep).filter((i) => i);
      const destArr = path.resolve(dest).split(path.sep).filter((i) => i);
      return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true);
    }
    function errMsg(src, dest, funcName) {
      return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
    }
    module2.exports = {
      checkPaths,
      checkPathsSync,
      checkParentPaths,
      checkParentPathsSync,
      isSrcSubdir
    };
  }
});

// node_modules/fs-extra/lib/util/buffer.js
var require_buffer = __commonJS({
  "node_modules/fs-extra/lib/util/buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = function(size) {
      if (typeof Buffer.allocUnsafe === "function") {
        try {
          return Buffer.allocUnsafe(size);
        } catch (e) {
          return new Buffer(size);
        }
      }
      return new Buffer(size);
    };
  }
});

// node_modules/fs-extra/lib/copy-sync/copy-sync.js
var require_copy_sync = __commonJS({
  "node_modules/fs-extra/lib/copy-sync/copy-sync.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var mkdirpSync = require_mkdirs2().mkdirsSync;
    var utimesSync = require_utimes().utimesMillisSync;
    var stat = require_stat();
    function copySync(src, dest, opts) {
      if (typeof opts === "function") {
        opts = { filter: opts };
      }
      opts = opts || {};
      opts.clobber = "clobber" in opts ? !!opts.clobber : true;
      opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
      if (opts.preserveTimestamps && process.arch === "ia32") {
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
      }
      const { srcStat, destStat } = stat.checkPathsSync(src, dest, "copy");
      stat.checkParentPathsSync(src, srcStat, dest, "copy");
      return handleFilterAndCopy(destStat, src, dest, opts);
    }
    function handleFilterAndCopy(destStat, src, dest, opts) {
      if (opts.filter && !opts.filter(src, dest)) return;
      const destParent = path.dirname(dest);
      if (!fs2.existsSync(destParent)) mkdirpSync(destParent);
      return startCopy(destStat, src, dest, opts);
    }
    function startCopy(destStat, src, dest, opts) {
      if (opts.filter && !opts.filter(src, dest)) return;
      return getStats(destStat, src, dest, opts);
    }
    function getStats(destStat, src, dest, opts) {
      const statSync = opts.dereference ? fs2.statSync : fs2.lstatSync;
      const srcStat = statSync(src);
      if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
      else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
      else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
    }
    function onFile(srcStat, destStat, src, dest, opts) {
      if (!destStat) return copyFile(srcStat, src, dest, opts);
      return mayCopyFile(srcStat, src, dest, opts);
    }
    function mayCopyFile(srcStat, src, dest, opts) {
      if (opts.overwrite) {
        fs2.unlinkSync(dest);
        return copyFile(srcStat, src, dest, opts);
      } else if (opts.errorOnExist) {
        throw new Error(`'${dest}' already exists`);
      }
    }
    function copyFile(srcStat, src, dest, opts) {
      if (typeof fs2.copyFileSync === "function") {
        fs2.copyFileSync(src, dest);
        fs2.chmodSync(dest, srcStat.mode);
        if (opts.preserveTimestamps) {
          return utimesSync(dest, srcStat.atime, srcStat.mtime);
        }
        return;
      }
      return copyFileFallback(srcStat, src, dest, opts);
    }
    function copyFileFallback(srcStat, src, dest, opts) {
      const BUF_LENGTH = 64 * 1024;
      const _buff = require_buffer()(BUF_LENGTH);
      const fdr = fs2.openSync(src, "r");
      const fdw = fs2.openSync(dest, "w", srcStat.mode);
      let pos = 0;
      while (pos < srcStat.size) {
        const bytesRead = fs2.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
        fs2.writeSync(fdw, _buff, 0, bytesRead);
        pos += bytesRead;
      }
      if (opts.preserveTimestamps) fs2.futimesSync(fdw, srcStat.atime, srcStat.mtime);
      fs2.closeSync(fdr);
      fs2.closeSync(fdw);
    }
    function onDir(srcStat, destStat, src, dest, opts) {
      if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts);
      if (destStat && !destStat.isDirectory()) {
        throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
      }
      return copyDir(src, dest, opts);
    }
    function mkDirAndCopy(srcStat, src, dest, opts) {
      fs2.mkdirSync(dest);
      copyDir(src, dest, opts);
      return fs2.chmodSync(dest, srcStat.mode);
    }
    function copyDir(src, dest, opts) {
      fs2.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
    }
    function copyDirItem(item, src, dest, opts) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      const { destStat } = stat.checkPathsSync(srcItem, destItem, "copy");
      return startCopy(destStat, srcItem, destItem, opts);
    }
    function onLink(destStat, src, dest, opts) {
      let resolvedSrc = fs2.readlinkSync(src);
      if (opts.dereference) {
        resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
      }
      if (!destStat) {
        return fs2.symlinkSync(resolvedSrc, dest);
      } else {
        let resolvedDest;
        try {
          resolvedDest = fs2.readlinkSync(dest);
        } catch (err) {
          if (err.code === "EINVAL" || err.code === "UNKNOWN") return fs2.symlinkSync(resolvedSrc, dest);
          throw err;
        }
        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest);
        }
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
        }
        if (fs2.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
        }
        return copyLink(resolvedSrc, dest);
      }
    }
    function copyLink(resolvedSrc, dest) {
      fs2.unlinkSync(dest);
      return fs2.symlinkSync(resolvedSrc, dest);
    }
    module2.exports = copySync;
  }
});

// node_modules/fs-extra/lib/copy-sync/index.js
var require_copy_sync2 = __commonJS({
  "node_modules/fs-extra/lib/copy-sync/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      copySync: require_copy_sync()
    };
  }
});

// node_modules/fs-extra/lib/path-exists/index.js
var require_path_exists = __commonJS({
  "node_modules/fs-extra/lib/path-exists/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromPromise;
    var fs2 = require_fs();
    function pathExists(path) {
      return fs2.access(path).then(() => true).catch(() => false);
    }
    module2.exports = {
      pathExists: u(pathExists),
      pathExistsSync: fs2.existsSync
    };
  }
});

// node_modules/fs-extra/lib/copy/copy.js
var require_copy = __commonJS({
  "node_modules/fs-extra/lib/copy/copy.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var mkdirp = require_mkdirs2().mkdirs;
    var pathExists = require_path_exists().pathExists;
    var utimes = require_utimes().utimesMillis;
    var stat = require_stat();
    function copy(src, dest, opts, cb) {
      if (typeof opts === "function" && !cb) {
        cb = opts;
        opts = {};
      } else if (typeof opts === "function") {
        opts = { filter: opts };
      }
      cb = cb || function() {
      };
      opts = opts || {};
      opts.clobber = "clobber" in opts ? !!opts.clobber : true;
      opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
      if (opts.preserveTimestamps && process.arch === "ia32") {
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
      }
      stat.checkPaths(src, dest, "copy", (err, stats) => {
        if (err) return cb(err);
        const { srcStat, destStat } = stats;
        stat.checkParentPaths(src, srcStat, dest, "copy", (err2) => {
          if (err2) return cb(err2);
          if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
          return checkParentDir(destStat, src, dest, opts, cb);
        });
      });
    }
    function checkParentDir(destStat, src, dest, opts, cb) {
      const destParent = path.dirname(dest);
      pathExists(destParent, (err, dirExists) => {
        if (err) return cb(err);
        if (dirExists) return startCopy(destStat, src, dest, opts, cb);
        mkdirp(destParent, (err2) => {
          if (err2) return cb(err2);
          return startCopy(destStat, src, dest, opts, cb);
        });
      });
    }
    function handleFilter(onInclude, destStat, src, dest, opts, cb) {
      Promise.resolve(opts.filter(src, dest)).then((include) => {
        if (include) return onInclude(destStat, src, dest, opts, cb);
        return cb();
      }, (error) => cb(error));
    }
    function startCopy(destStat, src, dest, opts, cb) {
      if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb);
      return getStats(destStat, src, dest, opts, cb);
    }
    function getStats(destStat, src, dest, opts, cb) {
      const stat2 = opts.dereference ? fs2.stat : fs2.lstat;
      stat2(src, (err, srcStat) => {
        if (err) return cb(err);
        if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb);
      });
    }
    function onFile(srcStat, destStat, src, dest, opts, cb) {
      if (!destStat) return copyFile(srcStat, src, dest, opts, cb);
      return mayCopyFile(srcStat, src, dest, opts, cb);
    }
    function mayCopyFile(srcStat, src, dest, opts, cb) {
      if (opts.overwrite) {
        fs2.unlink(dest, (err) => {
          if (err) return cb(err);
          return copyFile(srcStat, src, dest, opts, cb);
        });
      } else if (opts.errorOnExist) {
        return cb(new Error(`'${dest}' already exists`));
      } else return cb();
    }
    function copyFile(srcStat, src, dest, opts, cb) {
      if (typeof fs2.copyFile === "function") {
        return fs2.copyFile(src, dest, (err) => {
          if (err) return cb(err);
          return setDestModeAndTimestamps(srcStat, dest, opts, cb);
        });
      }
      return copyFileFallback(srcStat, src, dest, opts, cb);
    }
    function copyFileFallback(srcStat, src, dest, opts, cb) {
      const rs = fs2.createReadStream(src);
      rs.on("error", (err) => cb(err)).once("open", () => {
        const ws = fs2.createWriteStream(dest, { mode: srcStat.mode });
        ws.on("error", (err) => cb(err)).on("open", () => rs.pipe(ws)).once("close", () => setDestModeAndTimestamps(srcStat, dest, opts, cb));
      });
    }
    function setDestModeAndTimestamps(srcStat, dest, opts, cb) {
      fs2.chmod(dest, srcStat.mode, (err) => {
        if (err) return cb(err);
        if (opts.preserveTimestamps) {
          return utimes(dest, srcStat.atime, srcStat.mtime, cb);
        }
        return cb();
      });
    }
    function onDir(srcStat, destStat, src, dest, opts, cb) {
      if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts, cb);
      if (destStat && !destStat.isDirectory()) {
        return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
      }
      return copyDir(src, dest, opts, cb);
    }
    function mkDirAndCopy(srcStat, src, dest, opts, cb) {
      fs2.mkdir(dest, (err) => {
        if (err) return cb(err);
        copyDir(src, dest, opts, (err2) => {
          if (err2) return cb(err2);
          return fs2.chmod(dest, srcStat.mode, cb);
        });
      });
    }
    function copyDir(src, dest, opts, cb) {
      fs2.readdir(src, (err, items) => {
        if (err) return cb(err);
        return copyDirItems(items, src, dest, opts, cb);
      });
    }
    function copyDirItems(items, src, dest, opts, cb) {
      const item = items.pop();
      if (!item) return cb();
      return copyDirItem(items, item, src, dest, opts, cb);
    }
    function copyDirItem(items, item, src, dest, opts, cb) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      stat.checkPaths(srcItem, destItem, "copy", (err, stats) => {
        if (err) return cb(err);
        const { destStat } = stats;
        startCopy(destStat, srcItem, destItem, opts, (err2) => {
          if (err2) return cb(err2);
          return copyDirItems(items, src, dest, opts, cb);
        });
      });
    }
    function onLink(destStat, src, dest, opts, cb) {
      fs2.readlink(src, (err, resolvedSrc) => {
        if (err) return cb(err);
        if (opts.dereference) {
          resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs2.symlink(resolvedSrc, dest, cb);
        } else {
          fs2.readlink(dest, (err2, resolvedDest) => {
            if (err2) {
              if (err2.code === "EINVAL" || err2.code === "UNKNOWN") return fs2.symlink(resolvedSrc, dest, cb);
              return cb(err2);
            }
            if (opts.dereference) {
              resolvedDest = path.resolve(process.cwd(), resolvedDest);
            }
            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
              return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
            }
            if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
              return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
            }
            return copyLink(resolvedSrc, dest, cb);
          });
        }
      });
    }
    function copyLink(resolvedSrc, dest, cb) {
      fs2.unlink(dest, (err) => {
        if (err) return cb(err);
        return fs2.symlink(resolvedSrc, dest, cb);
      });
    }
    module2.exports = copy;
  }
});

// node_modules/fs-extra/lib/copy/index.js
var require_copy2 = __commonJS({
  "node_modules/fs-extra/lib/copy/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    module2.exports = {
      copy: u(require_copy())
    };
  }
});

// node_modules/fs-extra/lib/remove/rimraf.js
var require_rimraf = __commonJS({
  "node_modules/fs-extra/lib/remove/rimraf.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var assert = require("assert");
    var isWindows = process.platform === "win32";
    function defaults(options) {
      const methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
      ];
      methods.forEach((m) => {
        options[m] = options[m] || fs2[m];
        m = m + "Sync";
        options[m] = options[m] || fs2[m];
      });
      options.maxBusyTries = options.maxBusyTries || 3;
    }
    function rimraf(p, options, cb) {
      let busyTries = 0;
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      assert(p, "rimraf: missing path");
      assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
      assert.strictEqual(typeof cb, "function", "rimraf: callback function required");
      assert(options, "rimraf: invalid options argument provided");
      assert.strictEqual(typeof options, "object", "rimraf: options should be object");
      defaults(options);
      rimraf_(p, options, function CB(er) {
        if (er) {
          if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") && busyTries < options.maxBusyTries) {
            busyTries++;
            const time = busyTries * 100;
            return setTimeout(() => rimraf_(p, options, CB), time);
          }
          if (er.code === "ENOENT") er = null;
        }
        cb(er);
      });
    }
    function rimraf_(p, options, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.lstat(p, (er, st) => {
        if (er && er.code === "ENOENT") {
          return cb(null);
        }
        if (er && er.code === "EPERM" && isWindows) {
          return fixWinEPERM(p, options, er, cb);
        }
        if (st && st.isDirectory()) {
          return rmdir(p, options, er, cb);
        }
        options.unlink(p, (er2) => {
          if (er2) {
            if (er2.code === "ENOENT") {
              return cb(null);
            }
            if (er2.code === "EPERM") {
              return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
            }
            if (er2.code === "EISDIR") {
              return rmdir(p, options, er2, cb);
            }
          }
          return cb(er2);
        });
      });
    }
    function fixWinEPERM(p, options, er, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      if (er) {
        assert(er instanceof Error);
      }
      options.chmod(p, 438, (er2) => {
        if (er2) {
          cb(er2.code === "ENOENT" ? null : er);
        } else {
          options.stat(p, (er3, stats) => {
            if (er3) {
              cb(er3.code === "ENOENT" ? null : er);
            } else if (stats.isDirectory()) {
              rmdir(p, options, er, cb);
            } else {
              options.unlink(p, cb);
            }
          });
        }
      });
    }
    function fixWinEPERMSync(p, options, er) {
      let stats;
      assert(p);
      assert(options);
      if (er) {
        assert(er instanceof Error);
      }
      try {
        options.chmodSync(p, 438);
      } catch (er2) {
        if (er2.code === "ENOENT") {
          return;
        } else {
          throw er;
        }
      }
      try {
        stats = options.statSync(p);
      } catch (er3) {
        if (er3.code === "ENOENT") {
          return;
        } else {
          throw er;
        }
      }
      if (stats.isDirectory()) {
        rmdirSync(p, options, er);
      } else {
        options.unlinkSync(p);
      }
    }
    function rmdir(p, options, originalEr, cb) {
      assert(p);
      assert(options);
      if (originalEr) {
        assert(originalEr instanceof Error);
      }
      assert(typeof cb === "function");
      options.rmdir(p, (er) => {
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")) {
          rmkids(p, options, cb);
        } else if (er && er.code === "ENOTDIR") {
          cb(originalEr);
        } else {
          cb(er);
        }
      });
    }
    function rmkids(p, options, cb) {
      assert(p);
      assert(options);
      assert(typeof cb === "function");
      options.readdir(p, (er, files) => {
        if (er) return cb(er);
        let n = files.length;
        let errState;
        if (n === 0) return options.rmdir(p, cb);
        files.forEach((f) => {
          rimraf(path.join(p, f), options, (er2) => {
            if (errState) {
              return;
            }
            if (er2) return cb(errState = er2);
            if (--n === 0) {
              options.rmdir(p, cb);
            }
          });
        });
      });
    }
    function rimrafSync(p, options) {
      let st;
      options = options || {};
      defaults(options);
      assert(p, "rimraf: missing path");
      assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
      assert(options, "rimraf: missing options");
      assert.strictEqual(typeof options, "object", "rimraf: options should be object");
      try {
        st = options.lstatSync(p);
      } catch (er) {
        if (er.code === "ENOENT") {
          return;
        }
        if (er.code === "EPERM" && isWindows) {
          fixWinEPERMSync(p, options, er);
        }
      }
      try {
        if (st && st.isDirectory()) {
          rmdirSync(p, options, null);
        } else {
          options.unlinkSync(p);
        }
      } catch (er) {
        if (er.code === "ENOENT") {
          return;
        } else if (er.code === "EPERM") {
          return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
        } else if (er.code !== "EISDIR") {
          throw er;
        }
        rmdirSync(p, options, er);
      }
    }
    function rmdirSync(p, options, originalEr) {
      assert(p);
      assert(options);
      if (originalEr) {
        assert(originalEr instanceof Error);
      }
      try {
        options.rmdirSync(p);
      } catch (er) {
        if (er.code === "ENOTDIR") {
          throw originalEr;
        } else if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM") {
          rmkidsSync(p, options);
        } else if (er.code !== "ENOENT") {
          throw er;
        }
      }
    }
    function rmkidsSync(p, options) {
      assert(p);
      assert(options);
      options.readdirSync(p).forEach((f) => rimrafSync(path.join(p, f), options));
      if (isWindows) {
        const startTime = Date.now();
        do {
          try {
            const ret = options.rmdirSync(p, options);
            return ret;
          } catch (er) {
          }
        } while (Date.now() - startTime < 500);
      } else {
        const ret = options.rmdirSync(p, options);
        return ret;
      }
    }
    module2.exports = rimraf;
    rimraf.sync = rimrafSync;
  }
});

// node_modules/fs-extra/lib/remove/index.js
var require_remove = __commonJS({
  "node_modules/fs-extra/lib/remove/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var rimraf = require_rimraf();
    module2.exports = {
      remove: u(rimraf),
      removeSync: rimraf.sync
    };
  }
});

// node_modules/fs-extra/lib/empty/index.js
var require_empty = __commonJS({
  "node_modules/fs-extra/lib/empty/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var fs2 = require_graceful_fs();
    var path = require("path");
    var mkdir = require_mkdirs2();
    var remove = require_remove();
    var emptyDir = u(function emptyDir2(dir, callback) {
      callback = callback || function() {
      };
      fs2.readdir(dir, (err, items) => {
        if (err) return mkdir.mkdirs(dir, callback);
        items = items.map((item) => path.join(dir, item));
        deleteItem();
        function deleteItem() {
          const item = items.pop();
          if (!item) return callback();
          remove.remove(item, (err2) => {
            if (err2) return callback(err2);
            deleteItem();
          });
        }
      });
    });
    function emptyDirSync(dir) {
      let items;
      try {
        items = fs2.readdirSync(dir);
      } catch (err) {
        return mkdir.mkdirsSync(dir);
      }
      items.forEach((item) => {
        item = path.join(dir, item);
        remove.removeSync(item);
      });
    }
    module2.exports = {
      emptyDirSync,
      emptydirSync: emptyDirSync,
      emptyDir,
      emptydir: emptyDir
    };
  }
});

// node_modules/fs-extra/lib/ensure/file.js
var require_file = __commonJS({
  "node_modules/fs-extra/lib/ensure/file.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var path = require("path");
    var fs2 = require_graceful_fs();
    var mkdir = require_mkdirs2();
    var pathExists = require_path_exists().pathExists;
    function createFile(file, callback) {
      function makeFile() {
        fs2.writeFile(file, "", (err) => {
          if (err) return callback(err);
          callback();
        });
      }
      fs2.stat(file, (err, stats) => {
        if (!err && stats.isFile()) return callback();
        const dir = path.dirname(file);
        pathExists(dir, (err2, dirExists) => {
          if (err2) return callback(err2);
          if (dirExists) return makeFile();
          mkdir.mkdirs(dir, (err3) => {
            if (err3) return callback(err3);
            makeFile();
          });
        });
      });
    }
    function createFileSync(file) {
      let stats;
      try {
        stats = fs2.statSync(file);
      } catch (e) {
      }
      if (stats && stats.isFile()) return;
      const dir = path.dirname(file);
      if (!fs2.existsSync(dir)) {
        mkdir.mkdirsSync(dir);
      }
      fs2.writeFileSync(file, "");
    }
    module2.exports = {
      createFile: u(createFile),
      createFileSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/link.js
var require_link = __commonJS({
  "node_modules/fs-extra/lib/ensure/link.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var path = require("path");
    var fs2 = require_graceful_fs();
    var mkdir = require_mkdirs2();
    var pathExists = require_path_exists().pathExists;
    function createLink(srcpath, dstpath, callback) {
      function makeLink(srcpath2, dstpath2) {
        fs2.link(srcpath2, dstpath2, (err) => {
          if (err) return callback(err);
          callback(null);
        });
      }
      pathExists(dstpath, (err, destinationExists) => {
        if (err) return callback(err);
        if (destinationExists) return callback(null);
        fs2.lstat(srcpath, (err2) => {
          if (err2) {
            err2.message = err2.message.replace("lstat", "ensureLink");
            return callback(err2);
          }
          const dir = path.dirname(dstpath);
          pathExists(dir, (err3, dirExists) => {
            if (err3) return callback(err3);
            if (dirExists) return makeLink(srcpath, dstpath);
            mkdir.mkdirs(dir, (err4) => {
              if (err4) return callback(err4);
              makeLink(srcpath, dstpath);
            });
          });
        });
      });
    }
    function createLinkSync(srcpath, dstpath) {
      const destinationExists = fs2.existsSync(dstpath);
      if (destinationExists) return void 0;
      try {
        fs2.lstatSync(srcpath);
      } catch (err) {
        err.message = err.message.replace("lstat", "ensureLink");
        throw err;
      }
      const dir = path.dirname(dstpath);
      const dirExists = fs2.existsSync(dir);
      if (dirExists) return fs2.linkSync(srcpath, dstpath);
      mkdir.mkdirsSync(dir);
      return fs2.linkSync(srcpath, dstpath);
    }
    module2.exports = {
      createLink: u(createLink),
      createLinkSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/symlink-paths.js
var require_symlink_paths = __commonJS({
  "node_modules/fs-extra/lib/ensure/symlink-paths.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var fs2 = require_graceful_fs();
    var pathExists = require_path_exists().pathExists;
    function symlinkPaths(srcpath, dstpath, callback) {
      if (path.isAbsolute(srcpath)) {
        return fs2.lstat(srcpath, (err) => {
          if (err) {
            err.message = err.message.replace("lstat", "ensureSymlink");
            return callback(err);
          }
          return callback(null, {
            "toCwd": srcpath,
            "toDst": srcpath
          });
        });
      } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        return pathExists(relativeToDst, (err, exists) => {
          if (err) return callback(err);
          if (exists) {
            return callback(null, {
              "toCwd": relativeToDst,
              "toDst": srcpath
            });
          } else {
            return fs2.lstat(srcpath, (err2) => {
              if (err2) {
                err2.message = err2.message.replace("lstat", "ensureSymlink");
                return callback(err2);
              }
              return callback(null, {
                "toCwd": srcpath,
                "toDst": path.relative(dstdir, srcpath)
              });
            });
          }
        });
      }
    }
    function symlinkPathsSync(srcpath, dstpath) {
      let exists;
      if (path.isAbsolute(srcpath)) {
        exists = fs2.existsSync(srcpath);
        if (!exists) throw new Error("absolute srcpath does not exist");
        return {
          "toCwd": srcpath,
          "toDst": srcpath
        };
      } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        exists = fs2.existsSync(relativeToDst);
        if (exists) {
          return {
            "toCwd": relativeToDst,
            "toDst": srcpath
          };
        } else {
          exists = fs2.existsSync(srcpath);
          if (!exists) throw new Error("relative srcpath does not exist");
          return {
            "toCwd": srcpath,
            "toDst": path.relative(dstdir, srcpath)
          };
        }
      }
    }
    module2.exports = {
      symlinkPaths,
      symlinkPathsSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/symlink-type.js
var require_symlink_type = __commonJS({
  "node_modules/fs-extra/lib/ensure/symlink-type.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    function symlinkType(srcpath, type, callback) {
      callback = typeof type === "function" ? type : callback;
      type = typeof type === "function" ? false : type;
      if (type) return callback(null, type);
      fs2.lstat(srcpath, (err, stats) => {
        if (err) return callback(null, "file");
        type = stats && stats.isDirectory() ? "dir" : "file";
        callback(null, type);
      });
    }
    function symlinkTypeSync(srcpath, type) {
      let stats;
      if (type) return type;
      try {
        stats = fs2.lstatSync(srcpath);
      } catch (e) {
        return "file";
      }
      return stats && stats.isDirectory() ? "dir" : "file";
    }
    module2.exports = {
      symlinkType,
      symlinkTypeSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/symlink.js
var require_symlink = __commonJS({
  "node_modules/fs-extra/lib/ensure/symlink.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var path = require("path");
    var fs2 = require_graceful_fs();
    var _mkdirs = require_mkdirs2();
    var mkdirs = _mkdirs.mkdirs;
    var mkdirsSync = _mkdirs.mkdirsSync;
    var _symlinkPaths = require_symlink_paths();
    var symlinkPaths = _symlinkPaths.symlinkPaths;
    var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
    var _symlinkType = require_symlink_type();
    var symlinkType = _symlinkType.symlinkType;
    var symlinkTypeSync = _symlinkType.symlinkTypeSync;
    var pathExists = require_path_exists().pathExists;
    function createSymlink(srcpath, dstpath, type, callback) {
      callback = typeof type === "function" ? type : callback;
      type = typeof type === "function" ? false : type;
      pathExists(dstpath, (err, destinationExists) => {
        if (err) return callback(err);
        if (destinationExists) return callback(null);
        symlinkPaths(srcpath, dstpath, (err2, relative) => {
          if (err2) return callback(err2);
          srcpath = relative.toDst;
          symlinkType(relative.toCwd, type, (err3, type2) => {
            if (err3) return callback(err3);
            const dir = path.dirname(dstpath);
            pathExists(dir, (err4, dirExists) => {
              if (err4) return callback(err4);
              if (dirExists) return fs2.symlink(srcpath, dstpath, type2, callback);
              mkdirs(dir, (err5) => {
                if (err5) return callback(err5);
                fs2.symlink(srcpath, dstpath, type2, callback);
              });
            });
          });
        });
      });
    }
    function createSymlinkSync(srcpath, dstpath, type) {
      const destinationExists = fs2.existsSync(dstpath);
      if (destinationExists) return void 0;
      const relative = symlinkPathsSync(srcpath, dstpath);
      srcpath = relative.toDst;
      type = symlinkTypeSync(relative.toCwd, type);
      const dir = path.dirname(dstpath);
      const exists = fs2.existsSync(dir);
      if (exists) return fs2.symlinkSync(srcpath, dstpath, type);
      mkdirsSync(dir);
      return fs2.symlinkSync(srcpath, dstpath, type);
    }
    module2.exports = {
      createSymlink: u(createSymlink),
      createSymlinkSync
    };
  }
});

// node_modules/fs-extra/lib/ensure/index.js
var require_ensure = __commonJS({
  "node_modules/fs-extra/lib/ensure/index.js"(exports2, module2) {
    "use strict";
    var file = require_file();
    var link = require_link();
    var symlink = require_symlink();
    module2.exports = {
      // file
      createFile: file.createFile,
      createFileSync: file.createFileSync,
      ensureFile: file.createFile,
      ensureFileSync: file.createFileSync,
      // link
      createLink: link.createLink,
      createLinkSync: link.createLinkSync,
      ensureLink: link.createLink,
      ensureLinkSync: link.createLinkSync,
      // symlink
      createSymlink: symlink.createSymlink,
      createSymlinkSync: symlink.createSymlinkSync,
      ensureSymlink: symlink.createSymlink,
      ensureSymlinkSync: symlink.createSymlinkSync
    };
  }
});

// node_modules/jsonfile/index.js
var require_jsonfile = __commonJS({
  "node_modules/jsonfile/index.js"(exports2, module2) {
    var _fs;
    try {
      _fs = require_graceful_fs();
    } catch (_) {
      _fs = require("fs");
    }
    function readFile(file, options, callback) {
      if (callback == null) {
        callback = options;
        options = {};
      }
      if (typeof options === "string") {
        options = { encoding: options };
      }
      options = options || {};
      var fs2 = options.fs || _fs;
      var shouldThrow = true;
      if ("throws" in options) {
        shouldThrow = options.throws;
      }
      fs2.readFile(file, options, function(err, data) {
        if (err) return callback(err);
        data = stripBom(data);
        var obj;
        try {
          obj = JSON.parse(data, options ? options.reviver : null);
        } catch (err2) {
          if (shouldThrow) {
            err2.message = file + ": " + err2.message;
            return callback(err2);
          } else {
            return callback(null, null);
          }
        }
        callback(null, obj);
      });
    }
    function readFileSync(file, options) {
      options = options || {};
      if (typeof options === "string") {
        options = { encoding: options };
      }
      var fs2 = options.fs || _fs;
      var shouldThrow = true;
      if ("throws" in options) {
        shouldThrow = options.throws;
      }
      try {
        var content = fs2.readFileSync(file, options);
        content = stripBom(content);
        return JSON.parse(content, options.reviver);
      } catch (err) {
        if (shouldThrow) {
          err.message = file + ": " + err.message;
          throw err;
        } else {
          return null;
        }
      }
    }
    function stringify(obj, options) {
      var spaces;
      var EOL = "\n";
      if (typeof options === "object" && options !== null) {
        if (options.spaces) {
          spaces = options.spaces;
        }
        if (options.EOL) {
          EOL = options.EOL;
        }
      }
      var str = JSON.stringify(obj, options ? options.replacer : null, spaces);
      return str.replace(/\n/g, EOL) + EOL;
    }
    function writeFile(file, obj, options, callback) {
      if (callback == null) {
        callback = options;
        options = {};
      }
      options = options || {};
      var fs2 = options.fs || _fs;
      var str = "";
      try {
        str = stringify(obj, options);
      } catch (err) {
        if (callback) callback(err, null);
        return;
      }
      fs2.writeFile(file, str, options, callback);
    }
    function writeFileSync(file, obj, options) {
      options = options || {};
      var fs2 = options.fs || _fs;
      var str = stringify(obj, options);
      return fs2.writeFileSync(file, str, options);
    }
    function stripBom(content) {
      if (Buffer.isBuffer(content)) content = content.toString("utf8");
      content = content.replace(/^\uFEFF/, "");
      return content;
    }
    var jsonfile = {
      readFile,
      readFileSync,
      writeFile,
      writeFileSync
    };
    module2.exports = jsonfile;
  }
});

// node_modules/fs-extra/lib/json/jsonfile.js
var require_jsonfile2 = __commonJS({
  "node_modules/fs-extra/lib/json/jsonfile.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var jsonFile = require_jsonfile();
    module2.exports = {
      // jsonfile exports
      readJson: u(jsonFile.readFile),
      readJsonSync: jsonFile.readFileSync,
      writeJson: u(jsonFile.writeFile),
      writeJsonSync: jsonFile.writeFileSync
    };
  }
});

// node_modules/fs-extra/lib/json/output-json.js
var require_output_json = __commonJS({
  "node_modules/fs-extra/lib/json/output-json.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var mkdir = require_mkdirs2();
    var pathExists = require_path_exists().pathExists;
    var jsonFile = require_jsonfile2();
    function outputJson(file, data, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      const dir = path.dirname(file);
      pathExists(dir, (err, itDoes) => {
        if (err) return callback(err);
        if (itDoes) return jsonFile.writeJson(file, data, options, callback);
        mkdir.mkdirs(dir, (err2) => {
          if (err2) return callback(err2);
          jsonFile.writeJson(file, data, options, callback);
        });
      });
    }
    module2.exports = outputJson;
  }
});

// node_modules/fs-extra/lib/json/output-json-sync.js
var require_output_json_sync = __commonJS({
  "node_modules/fs-extra/lib/json/output-json-sync.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var mkdir = require_mkdirs2();
    var jsonFile = require_jsonfile2();
    function outputJsonSync(file, data, options) {
      const dir = path.dirname(file);
      if (!fs2.existsSync(dir)) {
        mkdir.mkdirsSync(dir);
      }
      jsonFile.writeJsonSync(file, data, options);
    }
    module2.exports = outputJsonSync;
  }
});

// node_modules/fs-extra/lib/json/index.js
var require_json = __commonJS({
  "node_modules/fs-extra/lib/json/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var jsonFile = require_jsonfile2();
    jsonFile.outputJson = u(require_output_json());
    jsonFile.outputJsonSync = require_output_json_sync();
    jsonFile.outputJSON = jsonFile.outputJson;
    jsonFile.outputJSONSync = jsonFile.outputJsonSync;
    jsonFile.writeJSON = jsonFile.writeJson;
    jsonFile.writeJSONSync = jsonFile.writeJsonSync;
    jsonFile.readJSON = jsonFile.readJson;
    jsonFile.readJSONSync = jsonFile.readJsonSync;
    module2.exports = jsonFile;
  }
});

// node_modules/fs-extra/lib/move-sync/move-sync.js
var require_move_sync = __commonJS({
  "node_modules/fs-extra/lib/move-sync/move-sync.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var copySync = require_copy_sync2().copySync;
    var removeSync = require_remove().removeSync;
    var mkdirpSync = require_mkdirs2().mkdirpSync;
    var stat = require_stat();
    function moveSync(src, dest, opts) {
      opts = opts || {};
      const overwrite = opts.overwrite || opts.clobber || false;
      const { srcStat } = stat.checkPathsSync(src, dest, "move");
      stat.checkParentPathsSync(src, srcStat, dest, "move");
      mkdirpSync(path.dirname(dest));
      return doRename(src, dest, overwrite);
    }
    function doRename(src, dest, overwrite) {
      if (overwrite) {
        removeSync(dest);
        return rename(src, dest, overwrite);
      }
      if (fs2.existsSync(dest)) throw new Error("dest already exists.");
      return rename(src, dest, overwrite);
    }
    function rename(src, dest, overwrite) {
      try {
        fs2.renameSync(src, dest);
      } catch (err) {
        if (err.code !== "EXDEV") throw err;
        return moveAcrossDevice(src, dest, overwrite);
      }
    }
    function moveAcrossDevice(src, dest, overwrite) {
      const opts = {
        overwrite,
        errorOnExist: true
      };
      copySync(src, dest, opts);
      return removeSync(src);
    }
    module2.exports = moveSync;
  }
});

// node_modules/fs-extra/lib/move-sync/index.js
var require_move_sync2 = __commonJS({
  "node_modules/fs-extra/lib/move-sync/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      moveSync: require_move_sync()
    };
  }
});

// node_modules/fs-extra/lib/move/move.js
var require_move = __commonJS({
  "node_modules/fs-extra/lib/move/move.js"(exports2, module2) {
    "use strict";
    var fs2 = require_graceful_fs();
    var path = require("path");
    var copy = require_copy2().copy;
    var remove = require_remove().remove;
    var mkdirp = require_mkdirs2().mkdirp;
    var pathExists = require_path_exists().pathExists;
    var stat = require_stat();
    function move(src, dest, opts, cb) {
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      const overwrite = opts.overwrite || opts.clobber || false;
      stat.checkPaths(src, dest, "move", (err, stats) => {
        if (err) return cb(err);
        const { srcStat } = stats;
        stat.checkParentPaths(src, srcStat, dest, "move", (err2) => {
          if (err2) return cb(err2);
          mkdirp(path.dirname(dest), (err3) => {
            if (err3) return cb(err3);
            return doRename(src, dest, overwrite, cb);
          });
        });
      });
    }
    function doRename(src, dest, overwrite, cb) {
      if (overwrite) {
        return remove(dest, (err) => {
          if (err) return cb(err);
          return rename(src, dest, overwrite, cb);
        });
      }
      pathExists(dest, (err, destExists) => {
        if (err) return cb(err);
        if (destExists) return cb(new Error("dest already exists."));
        return rename(src, dest, overwrite, cb);
      });
    }
    function rename(src, dest, overwrite, cb) {
      fs2.rename(src, dest, (err) => {
        if (!err) return cb();
        if (err.code !== "EXDEV") return cb(err);
        return moveAcrossDevice(src, dest, overwrite, cb);
      });
    }
    function moveAcrossDevice(src, dest, overwrite, cb) {
      const opts = {
        overwrite,
        errorOnExist: true
      };
      copy(src, dest, opts, (err) => {
        if (err) return cb(err);
        return remove(src, cb);
      });
    }
    module2.exports = move;
  }
});

// node_modules/fs-extra/lib/move/index.js
var require_move2 = __commonJS({
  "node_modules/fs-extra/lib/move/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    module2.exports = {
      move: u(require_move())
    };
  }
});

// node_modules/fs-extra/lib/output/index.js
var require_output = __commonJS({
  "node_modules/fs-extra/lib/output/index.js"(exports2, module2) {
    "use strict";
    var u = require_universalify().fromCallback;
    var fs2 = require_graceful_fs();
    var path = require("path");
    var mkdir = require_mkdirs2();
    var pathExists = require_path_exists().pathExists;
    function outputFile(file, data, encoding, callback) {
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = "utf8";
      }
      const dir = path.dirname(file);
      pathExists(dir, (err, itDoes) => {
        if (err) return callback(err);
        if (itDoes) return fs2.writeFile(file, data, encoding, callback);
        mkdir.mkdirs(dir, (err2) => {
          if (err2) return callback(err2);
          fs2.writeFile(file, data, encoding, callback);
        });
      });
    }
    function outputFileSync(file, ...args) {
      const dir = path.dirname(file);
      if (fs2.existsSync(dir)) {
        return fs2.writeFileSync(file, ...args);
      }
      mkdir.mkdirsSync(dir);
      fs2.writeFileSync(file, ...args);
    }
    module2.exports = {
      outputFile: u(outputFile),
      outputFileSync
    };
  }
});

// node_modules/fs-extra/lib/index.js
var require_lib = __commonJS({
  "node_modules/fs-extra/lib/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Object.assign(
      {},
      // Export promiseified graceful-fs:
      require_fs(),
      // Export extra methods:
      require_copy_sync2(),
      require_copy2(),
      require_empty(),
      require_ensure(),
      require_json(),
      require_mkdirs2(),
      require_move_sync2(),
      require_move2(),
      require_output(),
      require_path_exists(),
      require_remove()
    );
    var fs2 = require("fs");
    if (Object.getOwnPropertyDescriptor(fs2, "promises")) {
      Object.defineProperty(module2.exports, "promises", {
        get() {
          return fs2.promises;
        }
      });
    }
  }
});

// node_modules/nested-error-stacks/index.js
var require_nested_error_stacks = __commonJS({
  "node_modules/nested-error-stacks/index.js"(exports2, module2) {
    var inherits = require("util").inherits;
    var NestedError = function(message, nested) {
      this.nested = nested;
      if (message instanceof Error) {
        nested = message;
      } else if (typeof message !== "undefined") {
        Object.defineProperty(this, "message", {
          value: message,
          writable: true,
          enumerable: false,
          configurable: true
        });
      }
      Error.captureStackTrace(this, this.constructor);
      var oldStackDescriptor = Object.getOwnPropertyDescriptor(this, "stack");
      var stackDescriptor = buildStackDescriptor(oldStackDescriptor, nested);
      Object.defineProperty(this, "stack", stackDescriptor);
    };
    function buildStackDescriptor(oldStackDescriptor, nested) {
      if (oldStackDescriptor.get) {
        return {
          get: function() {
            var stack2 = oldStackDescriptor.get.call(this);
            return buildCombinedStacks(stack2, this.nested);
          }
        };
      } else {
        var stack = oldStackDescriptor.value;
        return {
          value: buildCombinedStacks(stack, nested)
        };
      }
    }
    function buildCombinedStacks(stack, nested) {
      if (nested) {
        stack += "\nCaused By: " + nested.stack;
      }
      return stack;
    }
    inherits(NestedError, Error);
    NestedError.prototype.name = "NestedError";
    module2.exports = NestedError;
  }
});

// node_modules/sharp/lib/is.js
var require_is = __commonJS({
  "node_modules/sharp/lib/is.js"(exports2, module2) {
    "use strict";
    var defined = function(val) {
      return typeof val !== "undefined" && val !== null;
    };
    var object = function(val) {
      return typeof val === "object";
    };
    var plainObject = function(val) {
      return Object.prototype.toString.call(val) === "[object Object]";
    };
    var fn = function(val) {
      return typeof val === "function";
    };
    var bool = function(val) {
      return typeof val === "boolean";
    };
    var buffer = function(val) {
      return val instanceof Buffer;
    };
    var typedArray = function(val) {
      if (defined(val)) {
        switch (val.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
          case Int8Array:
          case Uint16Array:
          case Int16Array:
          case Uint32Array:
          case Int32Array:
          case Float32Array:
          case Float64Array:
            return true;
        }
      }
      return false;
    };
    var arrayBuffer = function(val) {
      return val instanceof ArrayBuffer;
    };
    var string = function(val) {
      return typeof val === "string" && val.length > 0;
    };
    var number = function(val) {
      return typeof val === "number" && !Number.isNaN(val);
    };
    var integer = function(val) {
      return Number.isInteger(val);
    };
    var inRange = function(val, min, max) {
      return val >= min && val <= max;
    };
    var inArray = function(val, list) {
      return list.includes(val);
    };
    var invalidParameterError = function(name, expected, actual) {
      return new Error(
        `Expected ${expected} for ${name} but received ${actual} of type ${typeof actual}`
      );
    };
    module2.exports = {
      defined,
      object,
      plainObject,
      fn,
      bool,
      buffer,
      typedArray,
      arrayBuffer,
      string,
      number,
      integer,
      inRange,
      inArray,
      invalidParameterError
    };
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports2, module2) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports2, module2) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports2, module2) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var safeSrc = exports2.safeSrc = [];
    var t = exports2.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports2, module2) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports2, module2) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b2) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b2);
      if (anum && bnum) {
        a = +a;
        b2 = +b2;
      }
      return a === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b2 ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b2) => compareIdentifiers(b2, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports2, module2) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, safeSrc: src, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version2, options) {
        options = parseOptions(options);
        if (version2 instanceof _SemVer) {
          if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
            return version2;
          } else {
            version2 = version2.version;
          }
        } else if (typeof version2 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
        }
        if (version2.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version2, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version2}`);
        }
        this.raw = version2;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b2 = other.prerelease[i];
          debug("prerelease compare", i, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b2 = other.build[i];
          debug("build compare", i, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const r2 = new RegExp(`^${this.options.loose ? src[t.PRERELEASELOOSE] : src[t.PRERELEASE]}$`);
            const match = `-${identifier}`.match(r2);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports2, module2) {
    var SemVer = require_semver();
    var parse = (version2, options, throwErrors = false) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      try {
        return new SemVer(version2, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports2, module2) {
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version2, options) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      if (typeof version2 === "number") {
        version2 = String(version2);
      }
      if (typeof version2 !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version2.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports2, module2) {
    var SemVer = require_semver();
    var compare = (a, b2, loose) => new SemVer(a, loose).compare(new SemVer(b2, loose));
    module2.exports = compare;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports2, module2) {
    var compare = require_compare();
    var gte = (a, b2, loose) => compare(a, b2, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/detect-libc/lib/process.js
var require_process = __commonJS({
  "node_modules/detect-libc/lib/process.js"(exports2, module2) {
    "use strict";
    var isLinux = () => process.platform === "linux";
    var report = null;
    var getReport = () => {
      if (!report) {
        if (isLinux() && process.report) {
          const orig = process.report.excludeNetwork;
          process.report.excludeNetwork = true;
          report = process.report.getReport();
          process.report.excludeNetwork = orig;
        } else {
          report = {};
        }
      }
      return report;
    };
    module2.exports = { isLinux, getReport };
  }
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS({
  "node_modules/detect-libc/lib/filesystem.js"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var LDD_PATH = "/usr/bin/ldd";
    var readFileSync = (path) => fs2.readFileSync(path, "utf-8");
    var readFile = (path) => new Promise((resolve, reject) => {
      fs2.readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    module2.exports = {
      LDD_PATH,
      readFileSync,
      readFile
    };
  }
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS({
  "node_modules/detect-libc/lib/detect-libc.js"(exports2, module2) {
    "use strict";
    var childProcess = require("child_process");
    var { isLinux, getReport } = require_process();
    var { LDD_PATH, readFile, readFileSync } = require_filesystem();
    var cachedFamilyFilesystem;
    var cachedVersionFilesystem;
    var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
    var commandOut = "";
    var safeCommand = () => {
      if (!commandOut) {
        return new Promise((resolve) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve(commandOut);
          });
        });
      }
      return commandOut;
    };
    var safeCommandSync = () => {
      if (!commandOut) {
        try {
          commandOut = childProcess.execSync(command, { encoding: "utf8" });
        } catch (_err) {
          commandOut = " ";
        }
      }
      return commandOut;
    };
    var GLIBC = "glibc";
    var RE_GLIBC_VERSION = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i;
    var MUSL = "musl";
    var isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
    var familyFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return GLIBC;
      }
      if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) {
          return MUSL;
        }
      }
      return null;
    };
    var familyFromCommand = (out) => {
      const [getconf, ldd1] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return GLIBC;
      }
      if (ldd1 && ldd1.includes(MUSL)) {
        return MUSL;
      }
      return null;
    };
    var getFamilyFromLddContent = (content) => {
      if (content.includes("musl")) {
        return MUSL;
      }
      if (content.includes("GNU C Library")) {
        return GLIBC;
      }
      return null;
    };
    var familyFromFilesystem = async () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var familyFromFilesystemSync = () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e) {
      }
      return cachedFamilyFilesystem;
    };
    var family = async () => {
      let family2 = null;
      if (isLinux()) {
        family2 = await familyFromFilesystem();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = await safeCommand();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    };
    var familySync = () => {
      let family2 = null;
      if (isLinux()) {
        family2 = familyFromFilesystemSync();
        if (!family2) {
          family2 = familyFromReport();
        }
        if (!family2) {
          const out = safeCommandSync();
          family2 = familyFromCommand(out);
        }
      }
      return family2;
    };
    var isNonGlibcLinux = async () => isLinux() && await family() !== GLIBC;
    var isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
    var versionFromFilesystem = async () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromFilesystemSync = () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e) {
      }
      return cachedVersionFilesystem;
    };
    var versionFromReport = () => {
      const report = getReport();
      if (report.header && report.header.glibcVersionRuntime) {
        return report.header.glibcVersionRuntime;
      }
      return null;
    };
    var versionSuffix = (s) => s.trim().split(/\s+/)[1];
    var versionFromCommand = (out) => {
      const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return versionSuffix(getconf);
      }
      if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
        return versionSuffix(ldd2);
      }
      return null;
    };
    var version2 = async () => {
      let version3 = null;
      if (isLinux()) {
        version3 = await versionFromFilesystem();
        if (!version3) {
          version3 = versionFromReport();
        }
        if (!version3) {
          const out = await safeCommand();
          version3 = versionFromCommand(out);
        }
      }
      return version3;
    };
    var versionSync = () => {
      let version3 = null;
      if (isLinux()) {
        version3 = versionFromFilesystemSync();
        if (!version3) {
          version3 = versionFromReport();
        }
        if (!version3) {
          const out = safeCommandSync();
          version3 = versionFromCommand(out);
        }
      }
      return version3;
    };
    module2.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version: version2,
      versionSync
    };
  }
});

// node_modules/sharp/lib/platform.js
var require_platform = __commonJS({
  "node_modules/sharp/lib/platform.js"(exports2, module2) {
    "use strict";
    var detectLibc = require_detect_libc();
    var env = process.env;
    module2.exports = function() {
      const arch = env.npm_config_arch || process.arch;
      const platform = env.npm_config_platform || process.platform;
      const libc = process.env.npm_config_libc || /* istanbul ignore next */
      (detectLibc.isNonGlibcLinuxSync() ? detectLibc.familySync() : "");
      const libcId = platform !== "linux" || libc === detectLibc.GLIBC ? "" : libc;
      const platformId = [`${platform}${libcId}`];
      if (arch === "arm") {
        const fallback = process.versions.electron ? "7" : "6";
        platformId.push(`armv${env.npm_config_arm_version || process.config.variables.arm_version || fallback}`);
      } else if (arch === "arm64") {
        platformId.push(`arm64v${env.npm_config_arm_version || "8"}`);
      } else {
        platformId.push(arch);
      }
      return platformId.join("-");
    };
  }
});

// node_modules/sharp/package.json
var require_package2 = __commonJS({
  "node_modules/sharp/package.json"(exports2, module2) {
    module2.exports = {
      name: "sharp",
      description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
      version: "0.32.6",
      author: "Lovell Fuller <npm@lovell.info>",
      homepage: "https://github.com/lovell/sharp",
      contributors: [
        "Pierre Inglebert <pierre.inglebert@gmail.com>",
        "Jonathan Ong <jonathanrichardong@gmail.com>",
        "Chanon Sajjamanochai <chanon.s@gmail.com>",
        "Juliano Julio <julianojulio@gmail.com>",
        "Daniel Gasienica <daniel@gasienica.ch>",
        "Julian Walker <julian@fiftythree.com>",
        "Amit Pitaru <pitaru.amit@gmail.com>",
        "Brandon Aaron <hello.brandon@aaron.sh>",
        "Andreas Lind <andreas@one.com>",
        "Maurus Cuelenaere <mcuelenaere@gmail.com>",
        "Linus Unneb\xE4ck <linus@folkdatorn.se>",
        "Victor Mateevitsi <mvictoras@gmail.com>",
        "Alaric Holloway <alaric.holloway@gmail.com>",
        "Bernhard K. Weisshuhn <bkw@codingforce.com>",
        "Chris Riley <criley@primedia.com>",
        "David Carley <dacarley@gmail.com>",
        "John Tobin <john@limelightmobileinc.com>",
        "Kenton Gray <kentongray@gmail.com>",
        "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
        "Samy Al Zahrani <samyalzahrany@gmail.com>",
        "Chintan Thakkar <lemnisk8@gmail.com>",
        "F. Orlando Galashan <frulo@gmx.de>",
        "Kleis Auke Wolthuizen <info@kleisauke.nl>",
        "Matt Hirsch <mhirsch@media.mit.edu>",
        "Matthias Thoemmes <thoemmes@gmail.com>",
        "Patrick Paskaris <patrick@paskaris.gr>",
        "J\xE9r\xE9my Lal <kapouer@melix.org>",
        "Rahul Nanwani <r.nanwani@gmail.com>",
        "Alice Monday <alice0meta@gmail.com>",
        "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
        "YvesBos <yves_bos@outlook.com>",
        "Guy Maliar <guy@tailorbrands.com>",
        "Nicolas Coden <nicolas@ncoden.fr>",
        "Matt Parrish <matt.r.parrish@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Matthew McEachen <matthew+github@mceachen.org>",
        "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
        "Kenric D'Souza <kenric.dsouza@gmail.com>",
        "Oleh Aleinyk <oleg.aleynik@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Andrea Bianco <andrea.bianco@unibas.ch>",
        "Rik Heywood <rik@rik.org>",
        "Thomas Parisot <hi@oncletom.io>",
        "Nathan Graves <nathanrgraves+github@gmail.com>",
        "Tom Lokhorst <tom@lokhorst.eu>",
        "Espen Hovlandsdal <espen@hovlandsdal.com>",
        "Sylvain Dumont <sylvain.dumont35@gmail.com>",
        "Alun Davies <alun.owain.davies@googlemail.com>",
        "Aidan Hoolachan <ajhoolachan21@gmail.com>",
        "Axel Eirola <axel.eirola@iki.fi>",
        "Freezy <freezy@xbmc.org>",
        "Daiz <taneli.vatanen@gmail.com>",
        "Julian Aubourg <j@ubourg.net>",
        "Keith Belovay <keith@picthrive.com>",
        "Michael B. Klein <mbklein@gmail.com>",
        "Jordan Prudhomme <jordan@raboland.fr>",
        "Ilya Ovdin <iovdin@gmail.com>",
        "Andargor <andargor@yahoo.com>",
        "Paul Neave <paul.neave@gmail.com>",
        "Brendan Kennedy <brenwken@gmail.com>",
        "Brychan Bennett-Odlum <git@brychan.io>",
        "Edward Silverton <e.silverton@gmail.com>",
        "Roman Malieiev <aromaleev@gmail.com>",
        "Tomas Szabo <tomas.szabo@deftomat.com>",
        "Robert O'Rourke <robert@o-rourke.org>",
        "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
        "Christian Flintrup <chr@gigahost.dk>",
        "Manan Jadhav <manan@motionden.com>",
        "Leon Radley <leon@radley.se>",
        "alza54 <alza54@thiocod.in>",
        "Jacob Smith <jacob@frende.me>",
        "Michael Nutt <michael@nutt.im>",
        "Brad Parham <baparham@gmail.com>",
        "Taneli Vatanen <taneli.vatanen@gmail.com>",
        "Joris Dugu\xE9 <zaruike10@gmail.com>",
        "Chris Banks <christopher.bradley.banks@gmail.com>",
        "Ompal Singh <ompal.hitm09@gmail.com>",
        "Brodan <christopher.hranj@gmail.com",
        "Ankur Parihar <ankur.github@gmail.com>",
        "Brahim Ait elhaj <brahima@gmail.com>",
        "Mart Jansink <m.jansink@gmail.com>",
        "Lachlan Newman <lachnewman007@gmail.com>"
      ],
      scripts: {
        install: "(node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)",
        clean: "rm -rf node_modules/ build/ vendor/ .nyc_output/ coverage/ test/fixtures/output.*",
        test: "npm run test-lint && npm run test-unit && npm run test-licensing && npm run test-types",
        "test-lint": "semistandard && cpplint",
        "test-unit": "nyc --reporter=lcov --reporter=text --check-coverage --branches=100 mocha",
        "test-licensing": 'license-checker --production --summary --onlyAllow="Apache-2.0;BSD;ISC;MIT"',
        "test-leak": "./test/leak/leak.sh",
        "test-types": "tsd",
        "docs-build": "node docs/build && node docs/search-index/build",
        "docs-serve": "cd docs && npx serve",
        "docs-publish": "cd docs && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
      },
      main: "lib/index.js",
      types: "lib/index.d.ts",
      files: [
        "binding.gyp",
        "install/**",
        "lib/**",
        "src/**"
      ],
      repository: {
        type: "git",
        url: "git://github.com/lovell/sharp"
      },
      keywords: [
        "jpeg",
        "png",
        "webp",
        "avif",
        "tiff",
        "gif",
        "svg",
        "jp2",
        "dzi",
        "image",
        "resize",
        "thumbnail",
        "crop",
        "embed",
        "libvips",
        "vips"
      ],
      dependencies: {
        color: "^4.2.3",
        "detect-libc": "^2.0.2",
        "node-addon-api": "^6.1.0",
        "prebuild-install": "^7.1.1",
        semver: "^7.5.4",
        "simple-get": "^4.0.1",
        "tar-fs": "^3.0.4",
        "tunnel-agent": "^0.6.0"
      },
      devDependencies: {
        "@types/node": "*",
        async: "^3.2.4",
        cc: "^3.0.1",
        "exif-reader": "^1.2.0",
        "extract-zip": "^2.0.1",
        icc: "^3.0.0",
        "jsdoc-to-markdown": "^8.0.0",
        "license-checker": "^25.0.1",
        mocha: "^10.2.0",
        "mock-fs": "^5.2.0",
        nyc: "^15.1.0",
        prebuild: "^12.0.0",
        semistandard: "^16.0.1",
        tsd: "^0.29.0"
      },
      license: "Apache-2.0",
      config: {
        libvips: "8.14.5",
        integrity: {
          "darwin-arm64v8": "sha512-1QZzICfCJd4wAO0P6qmYI5e5VFMt9iCE4QgefI8VMMbdSzjIXA9L/ARN6pkMQPZ3h20Y9RtJ2W1skgCsvCIccw==",
          "darwin-x64": "sha512-sMIKMYXsdU9FlIfztj6Kt/SfHlhlDpP0Ups7ftVFqwjaszmYmpI9y/d/q3mLb4jrzuSiSUEislSWCwBnW7MPTw==",
          "linux-arm64v8": "sha512-CD8owELzkDumaom+O3jJ8fKamILAQdj+//KK/VNcHK3sngUcFpdjx36C8okwbux9sml/T7GTB/gzpvReDrAejQ==",
          "linux-armv6": "sha512-wk6IPHatDFVWKJy7lI1TJezHGHPQut1wF2bwx256KlZwXUQU3fcVcMpV1zxXjgLFewHq2+uhyMkoSGBPahWzlA==",
          "linux-armv7": "sha512-HEZC9KYtkmBK5rUR2MqBhrVarnQVZ/TwLUeLkKq0XuoM2pc/eXI6N0Fh5NGEFwdXI2XE8g1ySf+OYS6DDi+xCQ==",
          "linux-x64": "sha512-SlFWrITSW5XVUkaFPQOySAaSGXnhkGJCj8X2wGYYta9hk5piZldQyMp4zwy0z6UeRu1qKTKtZvmq28W3Gnh9xA==",
          "linuxmusl-arm64v8": "sha512-ga9iX7WUva3sG/VsKkOD318InLlCfPIztvzCZKZ2/+izQXRbQi8VoXWMHgEN4KHACv45FTl7mJ/8CRqUzhS8wQ==",
          "linuxmusl-x64": "sha512-yeaHnpfee1hrZLok2l4eFceHzlfq8gN3QOu0R4Mh8iMK5O5vAUu97bdtxeZZeJJvHw8tfh2/msGi0qysxKN8bw==",
          "win32-arm64v8": "sha512-kR91hy9w1+GEXK56hLh51+hBCBo7T+ijM4Slkmvb/2PsYZySq5H7s61n99iDYl6kTJP2y9sW5Xcvm3uuXDaDgg==",
          "win32-ia32": "sha512-HrnofEbzHNpHJ0vVnjsTj5yfgVdcqdWshXuwFO2zc8xlEjA83BvXZ0lVj9MxPxkxJ2ta+/UlLr+CFzc5bOceMw==",
          "win32-x64": "sha512-BwKckinJZ0Fu/EcunqiLPwOLEBWp4xf8GV7nvmVuKKz5f6B+GxoA2k9aa2wueqv4r4RJVgV/aWXZWFKOIjre/Q=="
        },
        runtime: "napi",
        target: 7
      },
      engines: {
        node: ">=14.15.0"
      },
      funding: {
        url: "https://opencollective.com/libvips"
      },
      binary: {
        napi_versions: [
          7
        ]
      },
      semistandard: {
        env: [
          "mocha"
        ]
      },
      cc: {
        linelength: "120",
        filter: [
          "build/include"
        ]
      },
      tsd: {
        directory: "test/types/"
      }
    };
  }
});

// node_modules/sharp/lib/libvips.js
var require_libvips = __commonJS({
  "node_modules/sharp/lib/libvips.js"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var os = require("os");
    var path = require("path");
    var spawnSync = require("child_process").spawnSync;
    var semverCoerce = require_coerce();
    var semverGreaterThanOrEqualTo = require_gte();
    var platform = require_platform();
    var { config } = require_package2();
    var env = process.env;
    var minimumLibvipsVersionLabelled = env.npm_package_config_libvips || /* istanbul ignore next */
    config.libvips;
    var minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
    var spawnSyncOptions = {
      encoding: "utf8",
      shell: true
    };
    var vendorPath = path.join(__dirname, "..", "vendor", minimumLibvipsVersion, platform());
    var mkdirSync = function(dirPath) {
      try {
        fs2.mkdirSync(dirPath, { recursive: true });
      } catch (err) {
        if (err.code !== "EEXIST") {
          throw err;
        }
      }
    };
    var cachePath = function() {
      const npmCachePath = env.npm_config_cache || /* istanbul ignore next */
      (env.APPDATA ? path.join(env.APPDATA, "npm-cache") : path.join(os.homedir(), ".npm"));
      mkdirSync(npmCachePath);
      const libvipsCachePath = path.join(npmCachePath, "_libvips");
      mkdirSync(libvipsCachePath);
      return libvipsCachePath;
    };
    var integrity = function(platformAndArch) {
      return env[`npm_package_config_integrity_${platformAndArch.replace("-", "_")}`] || config.integrity[platformAndArch];
    };
    var log = function(item) {
      if (item instanceof Error) {
        console.error(`sharp: Installation error: ${item.message}`);
      } else {
        console.log(`sharp: ${item}`);
      }
    };
    var isRosetta = function() {
      if (process.platform === "darwin" && process.arch === "x64") {
        const translated = spawnSync("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
        return (translated || "").trim() === "sysctl.proc_translated: 1";
      }
      return false;
    };
    var globalLibvipsVersion = function() {
      if (process.platform !== "win32") {
        const globalLibvipsVersion2 = spawnSync("pkg-config --modversion vips-cpp", {
          ...spawnSyncOptions,
          env: {
            ...env,
            PKG_CONFIG_PATH: pkgConfigPath()
          }
        }).stdout;
        return (globalLibvipsVersion2 || "").trim();
      } else {
        return "";
      }
    };
    var hasVendoredLibvips = function() {
      return fs2.existsSync(vendorPath);
    };
    var removeVendoredLibvips = function() {
      fs2.rmSync(vendorPath, { recursive: true, maxRetries: 3, force: true });
    };
    var pkgConfigPath = function() {
      if (process.platform !== "win32") {
        const brewPkgConfigPath = spawnSync(
          'which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2',
          spawnSyncOptions
        ).stdout || "";
        return [
          brewPkgConfigPath.trim(),
          env.PKG_CONFIG_PATH,
          "/usr/local/lib/pkgconfig",
          "/usr/lib/pkgconfig",
          "/usr/local/libdata/pkgconfig",
          "/usr/libdata/pkgconfig"
        ].filter(Boolean).join(":");
      } else {
        return "";
      }
    };
    var useGlobalLibvips = function() {
      if (Boolean(env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
        return false;
      }
      if (isRosetta()) {
        log("Detected Rosetta, skipping search for globally-installed libvips");
        return false;
      }
      const globalVipsVersion = globalLibvipsVersion();
      return !!globalVipsVersion && /* istanbul ignore next */
      semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
    };
    module2.exports = {
      minimumLibvipsVersion,
      minimumLibvipsVersionLabelled,
      cachePath,
      integrity,
      log,
      globalLibvipsVersion,
      hasVendoredLibvips,
      removeVendoredLibvips,
      pkgConfigPath,
      useGlobalLibvips,
      mkdirSync
    };
  }
});

// require("../build/Release/sharp-*.node") in node_modules/sharp/lib/sharp.js
var globRequire_build_Release_sharp_node;
var init_ = __esm({
  'require("../build/Release/sharp-*.node") in node_modules/sharp/lib/sharp.js'() {
    globRequire_build_Release_sharp_node = __glob({
      "../build/Release/sharp-win32-x64.node": () => require("../build/Release/sharp-win32-x64.node")
    });
  }
});

// node_modules/sharp/lib/sharp.js
var require_sharp = __commonJS({
  "node_modules/sharp/lib/sharp.js"(exports2, module2) {
    "use strict";
    init_();
    var platformAndArch = require_platform()();
    try {
      module2.exports = globRequire_build_Release_sharp_node(`../build/Release/sharp-${platformAndArch}.node`);
    } catch (err) {
      const help = ["", 'Something went wrong installing the "sharp" module', "", err.message, "", "Possible solutions:"];
      if (/dylib/.test(err.message) && /Incompatible library version/.test(err.message)) {
        help.push('- Update Homebrew: "brew update && brew upgrade vips"');
      } else {
        const [platform, arch] = platformAndArch.split("-");
        if (platform === "linux" && /Module did not self-register/.test(err.message)) {
          help.push("- Using worker threads? See https://sharp.pixelplumbing.com/install#worker-threads");
        }
        help.push(
          '- Install with verbose logging and look for errors: "npm install --ignore-scripts=false --foreground-scripts --verbose sharp"',
          `- Install for the current ${platformAndArch} runtime: "npm install --platform=${platform} --arch=${arch} sharp"`
        );
      }
      help.push(
        "- Consult the installation documentation: https://sharp.pixelplumbing.com/install"
      );
      if (process.platform === "win32" || /symbol/.test(err.message)) {
        const loadedModule = Object.keys(require.cache).find((i) => /[\\/]build[\\/]Release[\\/]sharp(.*)\.node$/.test(i));
        if (loadedModule) {
          const [, loadedPackage] = loadedModule.match(/node_modules[\\/]([^\\/]+)[\\/]/);
          help.push(`- Ensure the version of sharp aligns with the ${loadedPackage} package: "npm ls sharp"`);
        }
      }
      throw new Error(help.join("\n"));
    }
  }
});

// node_modules/sharp/lib/constructor.js
var require_constructor = __commonJS({
  "node_modules/sharp/lib/constructor.js"(exports2, module2) {
    "use strict";
    var util = require("util");
    var stream = require("stream");
    var is = require_is();
    require_libvips().hasVendoredLibvips();
    require_sharp();
    var debuglog = util.debuglog("sharp");
    var Sharp = function(input, options) {
      if (arguments.length === 1 && !is.defined(input)) {
        throw new Error("Invalid input");
      }
      if (!(this instanceof Sharp)) {
        return new Sharp(input, options);
      }
      stream.Duplex.call(this);
      this.options = {
        // resize options
        topOffsetPre: -1,
        leftOffsetPre: -1,
        widthPre: -1,
        heightPre: -1,
        topOffsetPost: -1,
        leftOffsetPost: -1,
        widthPost: -1,
        heightPost: -1,
        width: -1,
        height: -1,
        canvas: "crop",
        position: 0,
        resizeBackground: [0, 0, 0, 255],
        useExifOrientation: false,
        angle: 0,
        rotationAngle: 0,
        rotationBackground: [0, 0, 0, 255],
        rotateBeforePreExtract: false,
        flip: false,
        flop: false,
        extendTop: 0,
        extendBottom: 0,
        extendLeft: 0,
        extendRight: 0,
        extendBackground: [0, 0, 0, 255],
        extendWith: "background",
        withoutEnlargement: false,
        withoutReduction: false,
        affineMatrix: [],
        affineBackground: [0, 0, 0, 255],
        affineIdx: 0,
        affineIdy: 0,
        affineOdx: 0,
        affineOdy: 0,
        affineInterpolator: this.constructor.interpolators.bilinear,
        kernel: "lanczos3",
        fastShrinkOnLoad: true,
        // operations
        tintA: 128,
        tintB: 128,
        flatten: false,
        flattenBackground: [0, 0, 0],
        unflatten: false,
        negate: false,
        negateAlpha: true,
        medianSize: 0,
        blurSigma: 0,
        sharpenSigma: 0,
        sharpenM1: 1,
        sharpenM2: 2,
        sharpenX1: 2,
        sharpenY2: 10,
        sharpenY3: 20,
        threshold: 0,
        thresholdGrayscale: true,
        trimBackground: [],
        trimThreshold: 0,
        gamma: 0,
        gammaOut: 0,
        greyscale: false,
        normalise: false,
        normaliseLower: 1,
        normaliseUpper: 99,
        claheWidth: 0,
        claheHeight: 0,
        claheMaxSlope: 3,
        brightness: 1,
        saturation: 1,
        hue: 0,
        lightness: 0,
        booleanBufferIn: null,
        booleanFileIn: "",
        joinChannelIn: [],
        extractChannel: -1,
        removeAlpha: false,
        ensureAlpha: -1,
        colourspace: "srgb",
        colourspaceInput: "last",
        composite: [],
        // output
        fileOut: "",
        formatOut: "input",
        streamOut: false,
        withMetadata: false,
        withMetadataOrientation: -1,
        withMetadataDensity: 0,
        withMetadataIcc: "",
        withMetadataStrs: {},
        resolveWithObject: false,
        // output format
        jpegQuality: 80,
        jpegProgressive: false,
        jpegChromaSubsampling: "4:2:0",
        jpegTrellisQuantisation: false,
        jpegOvershootDeringing: false,
        jpegOptimiseScans: false,
        jpegOptimiseCoding: true,
        jpegQuantisationTable: 0,
        pngProgressive: false,
        pngCompressionLevel: 6,
        pngAdaptiveFiltering: false,
        pngPalette: false,
        pngQuality: 100,
        pngEffort: 7,
        pngBitdepth: 8,
        pngDither: 1,
        jp2Quality: 80,
        jp2TileHeight: 512,
        jp2TileWidth: 512,
        jp2Lossless: false,
        jp2ChromaSubsampling: "4:4:4",
        webpQuality: 80,
        webpAlphaQuality: 100,
        webpLossless: false,
        webpNearLossless: false,
        webpSmartSubsample: false,
        webpPreset: "default",
        webpEffort: 4,
        webpMinSize: false,
        webpMixed: false,
        gifBitdepth: 8,
        gifEffort: 7,
        gifDither: 1,
        gifInterFrameMaxError: 0,
        gifInterPaletteMaxError: 3,
        gifReuse: true,
        gifProgressive: false,
        tiffQuality: 80,
        tiffCompression: "jpeg",
        tiffPredictor: "horizontal",
        tiffPyramid: false,
        tiffBitdepth: 8,
        tiffTile: false,
        tiffTileHeight: 256,
        tiffTileWidth: 256,
        tiffXres: 1,
        tiffYres: 1,
        tiffResolutionUnit: "inch",
        heifQuality: 50,
        heifLossless: false,
        heifCompression: "av1",
        heifEffort: 4,
        heifChromaSubsampling: "4:4:4",
        jxlDistance: 1,
        jxlDecodingTier: 0,
        jxlEffort: 7,
        jxlLossless: false,
        rawDepth: "uchar",
        tileSize: 256,
        tileOverlap: 0,
        tileContainer: "fs",
        tileLayout: "dz",
        tileFormat: "last",
        tileDepth: "last",
        tileAngle: 0,
        tileSkipBlanks: -1,
        tileBackground: [255, 255, 255, 255],
        tileCentre: false,
        tileId: "https://example.com/iiif",
        tileBasename: "",
        timeoutSeconds: 0,
        linearA: [],
        linearB: [],
        // Function to notify of libvips warnings
        debuglog: (warning) => {
          this.emit("warning", warning);
          debuglog(warning);
        },
        // Function to notify of queue length changes
        queueListener: function(queueLength) {
          Sharp.queue.emit("change", queueLength);
        }
      };
      this.options.input = this._createInputDescriptor(input, options, { allowStream: true });
      return this;
    };
    Object.setPrototypeOf(Sharp.prototype, stream.Duplex.prototype);
    Object.setPrototypeOf(Sharp, stream.Duplex);
    function clone() {
      const clone2 = this.constructor.call();
      clone2.options = Object.assign({}, this.options);
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          clone2.options.bufferIn = this.options.bufferIn;
          clone2.emit("finish");
        });
      }
      return clone2;
    }
    Object.assign(Sharp.prototype, { clone });
    module2.exports = Sharp;
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/is-arrayish/index.js"(exports2, module2) {
    module2.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports2, module2) {
    "use strict";
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module2.exports = function swizzle2(args) {
      var results = [];
      for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports2, module2) {
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module2.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
          var i2 = i * 2;
          rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i = 0; i < 3; i++) {
        rgb[i] = clamp(rgb[i], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b2 = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b2, a];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r2 = Math.round(rgba[0] / 255 * 100);
      var g2 = Math.round(rgba[1] / 255 * 100);
      var b2 = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r2 + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r2 + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/color/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color/node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r2 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const min = Math.min(r2, g2, b2);
      const max = Math.max(r2, g2, b2);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r2 === max) {
        h = (g2 - b2) / delta;
      } else if (g2 === max) {
        h = 2 + (b2 - r2) / delta;
      } else if (b2 === max) {
        h = 4 + (r2 - g2) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r2 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const v = Math.max(r2, g2, b2);
      const diff = v - Math.min(r2, g2, b2);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r2);
        gdif = diffc(g2);
        bdif = diffc(b2);
        if (r2 === v) {
          h = bdif - gdif;
        } else if (g2 === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b2 === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r2 = rgb[0];
      const g2 = rgb[1];
      let b2 = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r2, Math.min(g2, b2));
      b2 = 1 - 1 / 255 * Math.max(r2, Math.max(g2, b2));
      return [h, w * 100, b2 * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r2 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const k = Math.min(1 - r2, 1 - g2, 1 - b2);
      const c = (1 - r2 - k) / (1 - k) || 0;
      const m = (1 - g2 - k) / (1 - k) || 0;
      const y = (1 - b2 - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x2, y) {
      return (x2[0] - y[0]) ** 2 + (x2[1] - y[1]) ** 2 + (x2[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r2 = rgb[0] / 255;
      let g2 = rgb[1] / 255;
      let b2 = rgb[2] / 255;
      r2 = r2 > 0.04045 ? ((r2 + 0.055) / 1.055) ** 2.4 : r2 / 12.92;
      g2 = g2 > 0.04045 ? ((g2 + 0.055) / 1.055) ** 2.4 : g2 / 12.92;
      b2 = b2 > 0.04045 ? ((b2 + 0.055) / 1.055) ** 2.4 : b2 / 12.92;
      const x2 = r2 * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
      const y = r2 * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
      const z = r2 * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
      return [x2 * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x2 = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x2 /= 95.047;
      y /= 100;
      z /= 108.883;
      x2 = x2 > 8856e-6 ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x2 - y);
      const b2 = 200 * (y - z);
      return [l, a, b2];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r2;
      let g2;
      let b2;
      switch (i) {
        default:
        case 6:
        case 0:
          r2 = v;
          g2 = n;
          b2 = wh;
          break;
        case 1:
          r2 = n;
          g2 = v;
          b2 = wh;
          break;
        case 2:
          r2 = wh;
          g2 = v;
          b2 = n;
          break;
        case 3:
          r2 = wh;
          g2 = n;
          b2 = v;
          break;
        case 4:
          r2 = n;
          g2 = wh;
          b2 = v;
          break;
        case 5:
          r2 = v;
          g2 = wh;
          b2 = n;
          break;
      }
      return [r2 * 255, g2 * 255, b2 * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r2 = 1 - Math.min(1, c * (1 - k) + k);
      const g2 = 1 - Math.min(1, m * (1 - k) + k);
      const b2 = 1 - Math.min(1, y * (1 - k) + k);
      return [r2 * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x2 = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r2;
      let g2;
      let b2;
      r2 = x2 * 3.2406 + y * -1.5372 + z * -0.4986;
      g2 = x2 * -0.9689 + y * 1.8758 + z * 0.0415;
      b2 = x2 * 0.0557 + y * -0.204 + z * 1.057;
      r2 = r2 > 31308e-7 ? 1.055 * r2 ** (1 / 2.4) - 0.055 : r2 * 12.92;
      g2 = g2 > 31308e-7 ? 1.055 * g2 ** (1 / 2.4) - 0.055 : g2 * 12.92;
      b2 = b2 > 31308e-7 ? 1.055 * b2 ** (1 / 2.4) - 0.055 : b2 * 12.92;
      r2 = Math.min(Math.max(0, r2), 1);
      g2 = Math.min(Math.max(0, g2), 1);
      b2 = Math.min(Math.max(0, b2), 1);
      return [r2 * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x2 = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x2 /= 95.047;
      y /= 100;
      z /= 108.883;
      x2 = x2 > 8856e-6 ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x2 - y);
      const b2 = 200 * (y - z);
      return [l, a, b2];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b2 = lab[2];
      let x2;
      let y;
      let z;
      y = (l + 16) / 116;
      x2 = a / 500 + y;
      z = y - b2 / 200;
      const y2 = y ** 3;
      const x22 = x2 ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x2 = x22 > 8856e-6 ? x22 : (x2 - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x2 *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x2, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b2 = lab[2];
      let h;
      const hr = Math.atan2(b2, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b2 * b2);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b2 = c * Math.sin(hr);
      return [l, a, b2];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r2, g2, b2] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r2 / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r2 = args[0];
      const g2 = args[1];
      const b2 = args[2];
      if (r2 === g2 && g2 === b2) {
        if (r2 < 8) {
          return 16;
        }
        if (r2 > 248) {
          return 231;
        }
        return Math.round((r2 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r2 / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r2 = (color & 1) * mult * 255;
      const g2 = (color >> 1 & 1) * mult * 255;
      const b2 = (color >> 2 & 1) * mult * 255;
      return [r2, g2, b2];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r2 = Math.floor(args / 36) / 5 * 255;
      const g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b2 = rem % 6 / 5 * 255;
      return [r2, g2, b2];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r2 = integer >> 16 & 255;
      const g2 = integer >> 8 & 255;
      const b2 = integer & 255;
      return [r2, g2, b2];
    };
    convert.rgb.hcg = function(rgb) {
      const r2 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const max = Math.max(Math.max(r2, g2), b2);
      const min = Math.min(Math.min(r2, g2), b2);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r2) {
        hue = (g2 - b2) / chroma % 6;
      } else if (max === g2) {
        hue = 2 + (b2 - r2) / chroma;
      } else {
        hue = 4 + (r2 - g2) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      if (c === 0) {
        return [g2 * 255, g2 * 255, g2 * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g2;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v = c + g2 * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const l = g2 * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v = c + g2 * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b2 = hwb[2] / 100;
      const v = 1 - b2;
      const c = v - w;
      let g2 = 0;
      if (c < 1) {
        g2 = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g2 * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color/node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color/node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color/node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports2, module2) {
    var colorString = require_color_string();
    var convert = require_color_convert();
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color(object, model) {
      if (!(this instanceof Color)) {
        return new Color(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for (i = 0; i < labels.length; i++) {
          color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i = 0; i < channels; i++) {
          const limit = limiters[this.model][i];
          if (limit) {
            this.color[i] = limit(this.color[i]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self2 = this.model in colorString.to ? this : this.rgb();
        self2 = self2.round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
        return colorString.to[self2.model](args);
      },
      percentString(places) {
        const self2 = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for (let i = 0; i < channels; i++) {
          result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i = 0; i < 3; i++) {
          rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === void 0 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = convert[model];
      Color.prototype[model] = function(...args) {
        if (this.model === model) {
          return new Color(this);
        }
        if (args.length > 0) {
          return new Color(args, model);
        }
        return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color[model] = function(...args) {
        let color = args[0];
        if (typeof color === "number") {
          color = zeroArray(args, channels);
        }
        return new Color(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m of model) {
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i = 0; i < length; i++) {
        if (typeof array[i] !== "number") {
          array[i] = 0;
        }
      }
      return array;
    }
    module2.exports = Color;
  }
});

// node_modules/sharp/lib/input.js
var require_input = __commonJS({
  "node_modules/sharp/lib/input.js"(exports2, module2) {
    "use strict";
    var color = require_color();
    var is = require_is();
    var sharp = require_sharp();
    var align = {
      left: "low",
      center: "centre",
      centre: "centre",
      right: "high"
    };
    function _inputOptionsFromObject(obj) {
      const { raw, density, limitInputPixels, ignoreIcc, unlimited, sequentialRead, failOn, failOnError, animated, page, pages, subifd } = obj;
      return [raw, density, limitInputPixels, ignoreIcc, unlimited, sequentialRead, failOn, failOnError, animated, page, pages, subifd].some(is.defined) ? { raw, density, limitInputPixels, ignoreIcc, unlimited, sequentialRead, failOn, failOnError, animated, page, pages, subifd } : void 0;
    }
    function _createInputDescriptor(input, inputOptions, containerOptions) {
      const inputDescriptor = {
        failOn: "warning",
        limitInputPixels: Math.pow(16383, 2),
        ignoreIcc: false,
        unlimited: false,
        sequentialRead: true
      };
      if (is.string(input)) {
        inputDescriptor.file = input;
      } else if (is.buffer(input)) {
        if (input.length === 0) {
          throw Error("Input Buffer is empty");
        }
        inputDescriptor.buffer = input;
      } else if (is.arrayBuffer(input)) {
        if (input.byteLength === 0) {
          throw Error("Input bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input, 0, input.byteLength);
      } else if (is.typedArray(input)) {
        if (input.length === 0) {
          throw Error("Input Bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input.buffer, input.byteOffset, input.byteLength);
      } else if (is.plainObject(input) && !is.defined(inputOptions)) {
        inputOptions = input;
        if (_inputOptionsFromObject(inputOptions)) {
          inputDescriptor.buffer = [];
        }
      } else if (!is.defined(input) && !is.defined(inputOptions) && is.object(containerOptions) && containerOptions.allowStream) {
        inputDescriptor.buffer = [];
      } else {
        throw new Error(`Unsupported input '${input}' of type ${typeof input}${is.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
      }
      if (is.object(inputOptions)) {
        if (is.defined(inputOptions.failOnError)) {
          if (is.bool(inputOptions.failOnError)) {
            inputDescriptor.failOn = inputOptions.failOnError ? "warning" : "none";
          } else {
            throw is.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
          }
        }
        if (is.defined(inputOptions.failOn)) {
          if (is.string(inputOptions.failOn) && is.inArray(inputOptions.failOn, ["none", "truncated", "error", "warning"])) {
            inputDescriptor.failOn = inputOptions.failOn;
          } else {
            throw is.invalidParameterError("failOn", "one of: none, truncated, error, warning", inputOptions.failOn);
          }
        }
        if (is.defined(inputOptions.density)) {
          if (is.inRange(inputOptions.density, 1, 1e5)) {
            inputDescriptor.density = inputOptions.density;
          } else {
            throw is.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
          }
        }
        if (is.defined(inputOptions.ignoreIcc)) {
          if (is.bool(inputOptions.ignoreIcc)) {
            inputDescriptor.ignoreIcc = inputOptions.ignoreIcc;
          } else {
            throw is.invalidParameterError("ignoreIcc", "boolean", inputOptions.ignoreIcc);
          }
        }
        if (is.defined(inputOptions.limitInputPixels)) {
          if (is.bool(inputOptions.limitInputPixels)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? Math.pow(16383, 2) : 0;
          } else if (is.integer(inputOptions.limitInputPixels) && is.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
          } else {
            throw is.invalidParameterError("limitInputPixels", "positive integer", inputOptions.limitInputPixels);
          }
        }
        if (is.defined(inputOptions.unlimited)) {
          if (is.bool(inputOptions.unlimited)) {
            inputDescriptor.unlimited = inputOptions.unlimited;
          } else {
            throw is.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
          }
        }
        if (is.defined(inputOptions.sequentialRead)) {
          if (is.bool(inputOptions.sequentialRead)) {
            inputDescriptor.sequentialRead = inputOptions.sequentialRead;
          } else {
            throw is.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
          }
        }
        if (is.defined(inputOptions.raw)) {
          if (is.object(inputOptions.raw) && is.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is.integer(inputOptions.raw.channels) && is.inRange(inputOptions.raw.channels, 1, 4)) {
            inputDescriptor.rawWidth = inputOptions.raw.width;
            inputDescriptor.rawHeight = inputOptions.raw.height;
            inputDescriptor.rawChannels = inputOptions.raw.channels;
            inputDescriptor.rawPremultiplied = !!inputOptions.raw.premultiplied;
            switch (input.constructor) {
              case Uint8Array:
              case Uint8ClampedArray:
                inputDescriptor.rawDepth = "uchar";
                break;
              case Int8Array:
                inputDescriptor.rawDepth = "char";
                break;
              case Uint16Array:
                inputDescriptor.rawDepth = "ushort";
                break;
              case Int16Array:
                inputDescriptor.rawDepth = "short";
                break;
              case Uint32Array:
                inputDescriptor.rawDepth = "uint";
                break;
              case Int32Array:
                inputDescriptor.rawDepth = "int";
                break;
              case Float32Array:
                inputDescriptor.rawDepth = "float";
                break;
              case Float64Array:
                inputDescriptor.rawDepth = "double";
                break;
              default:
                inputDescriptor.rawDepth = "uchar";
                break;
            }
          } else {
            throw new Error("Expected width, height and channels for raw pixel input");
          }
        }
        if (is.defined(inputOptions.animated)) {
          if (is.bool(inputOptions.animated)) {
            inputDescriptor.pages = inputOptions.animated ? -1 : 1;
          } else {
            throw is.invalidParameterError("animated", "boolean", inputOptions.animated);
          }
        }
        if (is.defined(inputOptions.pages)) {
          if (is.integer(inputOptions.pages) && is.inRange(inputOptions.pages, -1, 1e5)) {
            inputDescriptor.pages = inputOptions.pages;
          } else {
            throw is.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
          }
        }
        if (is.defined(inputOptions.page)) {
          if (is.integer(inputOptions.page) && is.inRange(inputOptions.page, 0, 1e5)) {
            inputDescriptor.page = inputOptions.page;
          } else {
            throw is.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
          }
        }
        if (is.defined(inputOptions.level)) {
          if (is.integer(inputOptions.level) && is.inRange(inputOptions.level, 0, 256)) {
            inputDescriptor.level = inputOptions.level;
          } else {
            throw is.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
          }
        }
        if (is.defined(inputOptions.subifd)) {
          if (is.integer(inputOptions.subifd) && is.inRange(inputOptions.subifd, -1, 1e5)) {
            inputDescriptor.subifd = inputOptions.subifd;
          } else {
            throw is.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
          }
        }
        if (is.defined(inputOptions.create)) {
          if (is.object(inputOptions.create) && is.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is.integer(inputOptions.create.channels)) {
            inputDescriptor.createWidth = inputOptions.create.width;
            inputDescriptor.createHeight = inputOptions.create.height;
            inputDescriptor.createChannels = inputOptions.create.channels;
            if (is.defined(inputOptions.create.noise)) {
              if (!is.object(inputOptions.create.noise)) {
                throw new Error("Expected noise to be an object");
              }
              if (!is.inArray(inputOptions.create.noise.type, ["gaussian"])) {
                throw new Error("Only gaussian noise is supported at the moment");
              }
              if (!is.inRange(inputOptions.create.channels, 1, 4)) {
                throw is.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
              }
              inputDescriptor.createNoiseType = inputOptions.create.noise.type;
              if (is.number(inputOptions.create.noise.mean) && is.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
                inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
              } else {
                throw is.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
              }
              if (is.number(inputOptions.create.noise.sigma) && is.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
                inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
              } else {
                throw is.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
              }
            } else if (is.defined(inputOptions.create.background)) {
              if (!is.inRange(inputOptions.create.channels, 3, 4)) {
                throw is.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
              }
              const background = color(inputOptions.create.background);
              inputDescriptor.createBackground = [
                background.red(),
                background.green(),
                background.blue(),
                Math.round(background.alpha() * 255)
              ];
            } else {
              throw new Error("Expected valid noise or background to create a new input image");
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected valid width, height and channels to create a new input image");
          }
        }
        if (is.defined(inputOptions.text)) {
          if (is.object(inputOptions.text) && is.string(inputOptions.text.text)) {
            inputDescriptor.textValue = inputOptions.text.text;
            if (is.defined(inputOptions.text.height) && is.defined(inputOptions.text.dpi)) {
              throw new Error("Expected only one of dpi or height");
            }
            if (is.defined(inputOptions.text.font)) {
              if (is.string(inputOptions.text.font)) {
                inputDescriptor.textFont = inputOptions.text.font;
              } else {
                throw is.invalidParameterError("text.font", "string", inputOptions.text.font);
              }
            }
            if (is.defined(inputOptions.text.fontfile)) {
              if (is.string(inputOptions.text.fontfile)) {
                inputDescriptor.textFontfile = inputOptions.text.fontfile;
              } else {
                throw is.invalidParameterError("text.fontfile", "string", inputOptions.text.fontfile);
              }
            }
            if (is.defined(inputOptions.text.width)) {
              if (is.number(inputOptions.text.width)) {
                inputDescriptor.textWidth = inputOptions.text.width;
              } else {
                throw is.invalidParameterError("text.textWidth", "number", inputOptions.text.width);
              }
            }
            if (is.defined(inputOptions.text.height)) {
              if (is.number(inputOptions.text.height)) {
                inputDescriptor.textHeight = inputOptions.text.height;
              } else {
                throw is.invalidParameterError("text.height", "number", inputOptions.text.height);
              }
            }
            if (is.defined(inputOptions.text.align)) {
              if (is.string(inputOptions.text.align) && is.string(this.constructor.align[inputOptions.text.align])) {
                inputDescriptor.textAlign = this.constructor.align[inputOptions.text.align];
              } else {
                throw is.invalidParameterError("text.align", "valid alignment", inputOptions.text.align);
              }
            }
            if (is.defined(inputOptions.text.justify)) {
              if (is.bool(inputOptions.text.justify)) {
                inputDescriptor.textJustify = inputOptions.text.justify;
              } else {
                throw is.invalidParameterError("text.justify", "boolean", inputOptions.text.justify);
              }
            }
            if (is.defined(inputOptions.text.dpi)) {
              if (is.number(inputOptions.text.dpi) && is.inRange(inputOptions.text.dpi, 1, 1e5)) {
                inputDescriptor.textDpi = inputOptions.text.dpi;
              } else {
                throw is.invalidParameterError("text.dpi", "number between 1 and 100000", inputOptions.text.dpi);
              }
            }
            if (is.defined(inputOptions.text.rgba)) {
              if (is.bool(inputOptions.text.rgba)) {
                inputDescriptor.textRgba = inputOptions.text.rgba;
              } else {
                throw is.invalidParameterError("text.rgba", "bool", inputOptions.text.rgba);
              }
            }
            if (is.defined(inputOptions.text.spacing)) {
              if (is.number(inputOptions.text.spacing)) {
                inputDescriptor.textSpacing = inputOptions.text.spacing;
              } else {
                throw is.invalidParameterError("text.spacing", "number", inputOptions.text.spacing);
              }
            }
            if (is.defined(inputOptions.text.wrap)) {
              if (is.string(inputOptions.text.wrap) && is.inArray(inputOptions.text.wrap, ["word", "char", "wordChar", "none"])) {
                inputDescriptor.textWrap = inputOptions.text.wrap;
              } else {
                throw is.invalidParameterError("text.wrap", "one of: word, char, wordChar, none", inputOptions.text.wrap);
              }
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected a valid string to create an image with text.");
          }
        }
      } else if (is.defined(inputOptions)) {
        throw new Error("Invalid input options " + inputOptions);
      }
      return inputDescriptor;
    }
    function _write(chunk, encoding, callback) {
      if (Array.isArray(this.options.input.buffer)) {
        if (is.buffer(chunk)) {
          if (this.options.input.buffer.length === 0) {
            this.on("finish", () => {
              this.streamInFinished = true;
            });
          }
          this.options.input.buffer.push(chunk);
          callback();
        } else {
          callback(new Error("Non-Buffer data on Writable Stream"));
        }
      } else {
        callback(new Error("Unexpected data on Writable Stream"));
      }
    }
    function _flattenBufferIn() {
      if (this._isStreamInput()) {
        this.options.input.buffer = Buffer.concat(this.options.input.buffer);
      }
    }
    function _isStreamInput() {
      return Array.isArray(this.options.input.buffer);
    }
    function metadata(callback) {
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp.metadata(this.options, callback);
          });
        } else {
          sharp.metadata(this.options, callback);
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            const finished = () => {
              this._flattenBufferIn();
              sharp.metadata(this.options, (err, metadata2) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(metadata2);
                }
              });
            };
            if (this.writableFinished) {
              finished();
            } else {
              this.once("finish", finished);
            }
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp.metadata(this.options, (err, metadata2) => {
              if (err) {
                reject(err);
              } else {
                resolve(metadata2);
              }
            });
          });
        }
      }
    }
    function stats(callback) {
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp.stats(this.options, callback);
          });
        } else {
          sharp.stats(this.options, callback);
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.on("finish", function() {
              this._flattenBufferIn();
              sharp.stats(this.options, (err, stats2) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(stats2);
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp.stats(this.options, (err, stats2) => {
              if (err) {
                reject(err);
              } else {
                resolve(stats2);
              }
            });
          });
        }
      }
    }
    module2.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Private
        _inputOptionsFromObject,
        _createInputDescriptor,
        _write,
        _flattenBufferIn,
        _isStreamInput,
        // Public
        metadata,
        stats
      });
      Sharp.align = align;
    };
  }
});

// node_modules/sharp/lib/resize.js
var require_resize = __commonJS({
  "node_modules/sharp/lib/resize.js"(exports2, module2) {
    "use strict";
    var is = require_is();
    var gravity = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    };
    var position = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    };
    var extendWith = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    };
    var strategy = {
      entropy: 16,
      attention: 17
    };
    var kernel = {
      nearest: "nearest",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3"
    };
    var fit = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    };
    var mapFitToCanvas = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };
    function isRotationExpected(options) {
      return options.angle % 360 !== 0 || options.useExifOrientation === true || options.rotationAngle !== 0;
    }
    function isResizeExpected(options) {
      return options.width !== -1 || options.height !== -1;
    }
    function resize(widthOrOptions, height, options) {
      if (isResizeExpected(this.options)) {
        this.options.debuglog("ignoring previous resize options");
      }
      if (is.defined(widthOrOptions)) {
        if (is.object(widthOrOptions) && !is.defined(options)) {
          options = widthOrOptions;
        } else if (is.integer(widthOrOptions) && widthOrOptions > 0) {
          this.options.width = widthOrOptions;
        } else {
          throw is.invalidParameterError("width", "positive integer", widthOrOptions);
        }
      } else {
        this.options.width = -1;
      }
      if (is.defined(height)) {
        if (is.integer(height) && height > 0) {
          this.options.height = height;
        } else {
          throw is.invalidParameterError("height", "positive integer", height);
        }
      } else {
        this.options.height = -1;
      }
      if (is.object(options)) {
        if (is.defined(options.width)) {
          if (is.integer(options.width) && options.width > 0) {
            this.options.width = options.width;
          } else {
            throw is.invalidParameterError("width", "positive integer", options.width);
          }
        }
        if (is.defined(options.height)) {
          if (is.integer(options.height) && options.height > 0) {
            this.options.height = options.height;
          } else {
            throw is.invalidParameterError("height", "positive integer", options.height);
          }
        }
        if (is.defined(options.fit)) {
          const canvas = mapFitToCanvas[options.fit];
          if (is.string(canvas)) {
            this.options.canvas = canvas;
          } else {
            throw is.invalidParameterError("fit", "valid fit", options.fit);
          }
        }
        if (is.defined(options.position)) {
          const pos = is.integer(options.position) ? options.position : strategy[options.position] || position[options.position] || gravity[options.position];
          if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
            this.options.position = pos;
          } else {
            throw is.invalidParameterError("position", "valid position/gravity/strategy", options.position);
          }
        }
        this._setBackgroundColourOption("resizeBackground", options.background);
        if (is.defined(options.kernel)) {
          if (is.string(kernel[options.kernel])) {
            this.options.kernel = kernel[options.kernel];
          } else {
            throw is.invalidParameterError("kernel", "valid kernel name", options.kernel);
          }
        }
        if (is.defined(options.withoutEnlargement)) {
          this._setBooleanOption("withoutEnlargement", options.withoutEnlargement);
        }
        if (is.defined(options.withoutReduction)) {
          this._setBooleanOption("withoutReduction", options.withoutReduction);
        }
        if (is.defined(options.fastShrinkOnLoad)) {
          this._setBooleanOption("fastShrinkOnLoad", options.fastShrinkOnLoad);
        }
      }
      if (isRotationExpected(this.options) && isResizeExpected(this.options)) {
        this.options.rotateBeforePreExtract = true;
      }
      return this;
    }
    function extend(extend2) {
      if (is.integer(extend2) && extend2 > 0) {
        this.options.extendTop = extend2;
        this.options.extendBottom = extend2;
        this.options.extendLeft = extend2;
        this.options.extendRight = extend2;
      } else if (is.object(extend2)) {
        if (is.defined(extend2.top)) {
          if (is.integer(extend2.top) && extend2.top >= 0) {
            this.options.extendTop = extend2.top;
          } else {
            throw is.invalidParameterError("top", "positive integer", extend2.top);
          }
        }
        if (is.defined(extend2.bottom)) {
          if (is.integer(extend2.bottom) && extend2.bottom >= 0) {
            this.options.extendBottom = extend2.bottom;
          } else {
            throw is.invalidParameterError("bottom", "positive integer", extend2.bottom);
          }
        }
        if (is.defined(extend2.left)) {
          if (is.integer(extend2.left) && extend2.left >= 0) {
            this.options.extendLeft = extend2.left;
          } else {
            throw is.invalidParameterError("left", "positive integer", extend2.left);
          }
        }
        if (is.defined(extend2.right)) {
          if (is.integer(extend2.right) && extend2.right >= 0) {
            this.options.extendRight = extend2.right;
          } else {
            throw is.invalidParameterError("right", "positive integer", extend2.right);
          }
        }
        this._setBackgroundColourOption("extendBackground", extend2.background);
        if (is.defined(extend2.extendWith)) {
          if (is.string(extendWith[extend2.extendWith])) {
            this.options.extendWith = extendWith[extend2.extendWith];
          } else {
            throw is.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", extend2.extendWith);
          }
        }
      } else {
        throw is.invalidParameterError("extend", "integer or object", extend2);
      }
      return this;
    }
    function extract(options) {
      const suffix = isResizeExpected(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
      if (this.options[`width${suffix}`] !== -1) {
        this.options.debuglog("ignoring previous extract options");
      }
      ["left", "top", "width", "height"].forEach(function(name) {
        const value = options[name];
        if (is.integer(value) && value >= 0) {
          this.options[name + (name === "left" || name === "top" ? "Offset" : "") + suffix] = value;
        } else {
          throw is.invalidParameterError(name, "integer", value);
        }
      }, this);
      if (isRotationExpected(this.options) && !isResizeExpected(this.options)) {
        if (this.options.widthPre === -1 || this.options.widthPost === -1) {
          this.options.rotateBeforePreExtract = true;
        }
      }
      return this;
    }
    function trim(trim2) {
      if (!is.defined(trim2)) {
        this.options.trimThreshold = 10;
      } else if (is.string(trim2)) {
        this._setBackgroundColourOption("trimBackground", trim2);
        this.options.trimThreshold = 10;
      } else if (is.number(trim2)) {
        if (trim2 >= 0) {
          this.options.trimThreshold = trim2;
        } else {
          throw is.invalidParameterError("threshold", "positive number", trim2);
        }
      } else if (is.object(trim2)) {
        this._setBackgroundColourOption("trimBackground", trim2.background);
        if (!is.defined(trim2.threshold)) {
          this.options.trimThreshold = 10;
        } else if (is.number(trim2.threshold) && trim2.threshold >= 0) {
          this.options.trimThreshold = trim2.threshold;
        } else {
          throw is.invalidParameterError("threshold", "positive number", trim2);
        }
      } else {
        throw is.invalidParameterError("trim", "string, number or object", trim2);
      }
      if (isRotationExpected(this.options)) {
        this.options.rotateBeforePreExtract = true;
      }
      return this;
    }
    module2.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        resize,
        extend,
        extract,
        trim
      });
      Sharp.gravity = gravity;
      Sharp.strategy = strategy;
      Sharp.kernel = kernel;
      Sharp.fit = fit;
      Sharp.position = position;
    };
  }
});

// node_modules/sharp/lib/composite.js
var require_composite = __commonJS({
  "node_modules/sharp/lib/composite.js"(exports2, module2) {
    "use strict";
    var is = require_is();
    var blend = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };
    function composite(images) {
      if (!Array.isArray(images)) {
        throw is.invalidParameterError("images to composite", "array", images);
      }
      this.options.composite = images.map((image) => {
        if (!is.object(image)) {
          throw is.invalidParameterError("image to composite", "object", image);
        }
        const inputOptions = this._inputOptionsFromObject(image);
        const composite2 = {
          input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
          blend: "over",
          tile: false,
          left: 0,
          top: 0,
          hasOffset: false,
          gravity: 0,
          premultiplied: false
        };
        if (is.defined(image.blend)) {
          if (is.string(blend[image.blend])) {
            composite2.blend = blend[image.blend];
          } else {
            throw is.invalidParameterError("blend", "valid blend name", image.blend);
          }
        }
        if (is.defined(image.tile)) {
          if (is.bool(image.tile)) {
            composite2.tile = image.tile;
          } else {
            throw is.invalidParameterError("tile", "boolean", image.tile);
          }
        }
        if (is.defined(image.left)) {
          if (is.integer(image.left)) {
            composite2.left = image.left;
          } else {
            throw is.invalidParameterError("left", "integer", image.left);
          }
        }
        if (is.defined(image.top)) {
          if (is.integer(image.top)) {
            composite2.top = image.top;
          } else {
            throw is.invalidParameterError("top", "integer", image.top);
          }
        }
        if (is.defined(image.top) !== is.defined(image.left)) {
          throw new Error("Expected both left and top to be set");
        } else {
          composite2.hasOffset = is.integer(image.top) && is.integer(image.left);
        }
        if (is.defined(image.gravity)) {
          if (is.integer(image.gravity) && is.inRange(image.gravity, 0, 8)) {
            composite2.gravity = image.gravity;
          } else if (is.string(image.gravity) && is.integer(this.constructor.gravity[image.gravity])) {
            composite2.gravity = this.constructor.gravity[image.gravity];
          } else {
            throw is.invalidParameterError("gravity", "valid gravity", image.gravity);
          }
        }
        if (is.defined(image.premultiplied)) {
          if (is.bool(image.premultiplied)) {
            composite2.premultiplied = image.premultiplied;
          } else {
            throw is.invalidParameterError("premultiplied", "boolean", image.premultiplied);
          }
        }
        return composite2;
      });
      return this;
    }
    module2.exports = function(Sharp) {
      Sharp.prototype.composite = composite;
      Sharp.blend = blend;
    };
  }
});

// node_modules/sharp/lib/operation.js
var require_operation = __commonJS({
  "node_modules/sharp/lib/operation.js"(exports2, module2) {
    "use strict";
    var color = require_color();
    var is = require_is();
    function rotate(angle, options) {
      if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle) {
        this.options.debuglog("ignoring previous rotate options");
      }
      if (!is.defined(angle)) {
        this.options.useExifOrientation = true;
      } else if (is.integer(angle) && !(angle % 90)) {
        this.options.angle = angle;
      } else if (is.number(angle)) {
        this.options.rotationAngle = angle;
        if (is.object(options) && options.background) {
          const backgroundColour = color(options.background);
          this.options.rotationBackground = [
            backgroundColour.red(),
            backgroundColour.green(),
            backgroundColour.blue(),
            Math.round(backgroundColour.alpha() * 255)
          ];
        }
      } else {
        throw is.invalidParameterError("angle", "numeric", angle);
      }
      return this;
    }
    function flip(flip2) {
      this.options.flip = is.bool(flip2) ? flip2 : true;
      return this;
    }
    function flop(flop2) {
      this.options.flop = is.bool(flop2) ? flop2 : true;
      return this;
    }
    function affine(matrix, options) {
      const flatMatrix = [].concat(...matrix);
      if (flatMatrix.length === 4 && flatMatrix.every(is.number)) {
        this.options.affineMatrix = flatMatrix;
      } else {
        throw is.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
      }
      if (is.defined(options)) {
        if (is.object(options)) {
          this._setBackgroundColourOption("affineBackground", options.background);
          if (is.defined(options.idx)) {
            if (is.number(options.idx)) {
              this.options.affineIdx = options.idx;
            } else {
              throw is.invalidParameterError("options.idx", "number", options.idx);
            }
          }
          if (is.defined(options.idy)) {
            if (is.number(options.idy)) {
              this.options.affineIdy = options.idy;
            } else {
              throw is.invalidParameterError("options.idy", "number", options.idy);
            }
          }
          if (is.defined(options.odx)) {
            if (is.number(options.odx)) {
              this.options.affineOdx = options.odx;
            } else {
              throw is.invalidParameterError("options.odx", "number", options.odx);
            }
          }
          if (is.defined(options.ody)) {
            if (is.number(options.ody)) {
              this.options.affineOdy = options.ody;
            } else {
              throw is.invalidParameterError("options.ody", "number", options.ody);
            }
          }
          if (is.defined(options.interpolator)) {
            if (is.inArray(options.interpolator, Object.values(this.constructor.interpolators))) {
              this.options.affineInterpolator = options.interpolator;
            } else {
              throw is.invalidParameterError("options.interpolator", "valid interpolator name", options.interpolator);
            }
          }
        } else {
          throw is.invalidParameterError("options", "object", options);
        }
      }
      return this;
    }
    function sharpen(options, flat, jagged) {
      if (!is.defined(options)) {
        this.options.sharpenSigma = -1;
      } else if (is.bool(options)) {
        this.options.sharpenSigma = options ? -1 : 0;
      } else if (is.number(options) && is.inRange(options, 0.01, 1e4)) {
        this.options.sharpenSigma = options;
        if (is.defined(flat)) {
          if (is.number(flat) && is.inRange(flat, 0, 1e4)) {
            this.options.sharpenM1 = flat;
          } else {
            throw is.invalidParameterError("flat", "number between 0 and 10000", flat);
          }
        }
        if (is.defined(jagged)) {
          if (is.number(jagged) && is.inRange(jagged, 0, 1e4)) {
            this.options.sharpenM2 = jagged;
          } else {
            throw is.invalidParameterError("jagged", "number between 0 and 10000", jagged);
          }
        }
      } else if (is.plainObject(options)) {
        if (is.number(options.sigma) && is.inRange(options.sigma, 1e-6, 10)) {
          this.options.sharpenSigma = options.sigma;
        } else {
          throw is.invalidParameterError("options.sigma", "number between 0.000001 and 10", options.sigma);
        }
        if (is.defined(options.m1)) {
          if (is.number(options.m1) && is.inRange(options.m1, 0, 1e6)) {
            this.options.sharpenM1 = options.m1;
          } else {
            throw is.invalidParameterError("options.m1", "number between 0 and 1000000", options.m1);
          }
        }
        if (is.defined(options.m2)) {
          if (is.number(options.m2) && is.inRange(options.m2, 0, 1e6)) {
            this.options.sharpenM2 = options.m2;
          } else {
            throw is.invalidParameterError("options.m2", "number between 0 and 1000000", options.m2);
          }
        }
        if (is.defined(options.x1)) {
          if (is.number(options.x1) && is.inRange(options.x1, 0, 1e6)) {
            this.options.sharpenX1 = options.x1;
          } else {
            throw is.invalidParameterError("options.x1", "number between 0 and 1000000", options.x1);
          }
        }
        if (is.defined(options.y2)) {
          if (is.number(options.y2) && is.inRange(options.y2, 0, 1e6)) {
            this.options.sharpenY2 = options.y2;
          } else {
            throw is.invalidParameterError("options.y2", "number between 0 and 1000000", options.y2);
          }
        }
        if (is.defined(options.y3)) {
          if (is.number(options.y3) && is.inRange(options.y3, 0, 1e6)) {
            this.options.sharpenY3 = options.y3;
          } else {
            throw is.invalidParameterError("options.y3", "number between 0 and 1000000", options.y3);
          }
        }
      } else {
        throw is.invalidParameterError("sigma", "number between 0.01 and 10000", options);
      }
      return this;
    }
    function median(size) {
      if (!is.defined(size)) {
        this.options.medianSize = 3;
      } else if (is.integer(size) && is.inRange(size, 1, 1e3)) {
        this.options.medianSize = size;
      } else {
        throw is.invalidParameterError("size", "integer between 1 and 1000", size);
      }
      return this;
    }
    function blur(sigma) {
      if (!is.defined(sigma)) {
        this.options.blurSigma = -1;
      } else if (is.bool(sigma)) {
        this.options.blurSigma = sigma ? -1 : 0;
      } else if (is.number(sigma) && is.inRange(sigma, 0.3, 1e3)) {
        this.options.blurSigma = sigma;
      } else {
        throw is.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
      }
      return this;
    }
    function flatten(options) {
      this.options.flatten = is.bool(options) ? options : true;
      if (is.object(options)) {
        this._setBackgroundColourOption("flattenBackground", options.background);
      }
      return this;
    }
    function unflatten() {
      this.options.unflatten = true;
      return this;
    }
    function gamma(gamma2, gammaOut) {
      if (!is.defined(gamma2)) {
        this.options.gamma = 2.2;
      } else if (is.number(gamma2) && is.inRange(gamma2, 1, 3)) {
        this.options.gamma = gamma2;
      } else {
        throw is.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
      }
      if (!is.defined(gammaOut)) {
        this.options.gammaOut = this.options.gamma;
      } else if (is.number(gammaOut) && is.inRange(gammaOut, 1, 3)) {
        this.options.gammaOut = gammaOut;
      } else {
        throw is.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
      }
      return this;
    }
    function negate(options) {
      this.options.negate = is.bool(options) ? options : true;
      if (is.plainObject(options) && "alpha" in options) {
        if (!is.bool(options.alpha)) {
          throw is.invalidParameterError("alpha", "should be boolean value", options.alpha);
        } else {
          this.options.negateAlpha = options.alpha;
        }
      }
      return this;
    }
    function normalise(options) {
      if (is.plainObject(options)) {
        if (is.defined(options.lower)) {
          if (is.number(options.lower) && is.inRange(options.lower, 0, 99)) {
            this.options.normaliseLower = options.lower;
          } else {
            throw is.invalidParameterError("lower", "number between 0 and 99", options.lower);
          }
        }
        if (is.defined(options.upper)) {
          if (is.number(options.upper) && is.inRange(options.upper, 1, 100)) {
            this.options.normaliseUpper = options.upper;
          } else {
            throw is.invalidParameterError("upper", "number between 1 and 100", options.upper);
          }
        }
      }
      if (this.options.normaliseLower >= this.options.normaliseUpper) {
        throw is.invalidParameterError(
          "range",
          "lower to be less than upper",
          `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`
        );
      }
      this.options.normalise = true;
      return this;
    }
    function normalize(options) {
      return this.normalise(options);
    }
    function clahe(options) {
      if (is.plainObject(options)) {
        if (is.integer(options.width) && options.width > 0) {
          this.options.claheWidth = options.width;
        } else {
          throw is.invalidParameterError("width", "integer greater than zero", options.width);
        }
        if (is.integer(options.height) && options.height > 0) {
          this.options.claheHeight = options.height;
        } else {
          throw is.invalidParameterError("height", "integer greater than zero", options.height);
        }
        if (is.defined(options.maxSlope)) {
          if (is.integer(options.maxSlope) && is.inRange(options.maxSlope, 0, 100)) {
            this.options.claheMaxSlope = options.maxSlope;
          } else {
            throw is.invalidParameterError("maxSlope", "integer between 0 and 100", options.maxSlope);
          }
        }
      } else {
        throw is.invalidParameterError("options", "plain object", options);
      }
      return this;
    }
    function convolve(kernel) {
      if (!is.object(kernel) || !Array.isArray(kernel.kernel) || !is.integer(kernel.width) || !is.integer(kernel.height) || !is.inRange(kernel.width, 3, 1001) || !is.inRange(kernel.height, 3, 1001) || kernel.height * kernel.width !== kernel.kernel.length) {
        throw new Error("Invalid convolution kernel");
      }
      if (!is.integer(kernel.scale)) {
        kernel.scale = kernel.kernel.reduce(function(a, b2) {
          return a + b2;
        }, 0);
      }
      if (kernel.scale < 1) {
        kernel.scale = 1;
      }
      if (!is.integer(kernel.offset)) {
        kernel.offset = 0;
      }
      this.options.convKernel = kernel;
      return this;
    }
    function threshold(threshold2, options) {
      if (!is.defined(threshold2)) {
        this.options.threshold = 128;
      } else if (is.bool(threshold2)) {
        this.options.threshold = threshold2 ? 128 : 0;
      } else if (is.integer(threshold2) && is.inRange(threshold2, 0, 255)) {
        this.options.threshold = threshold2;
      } else {
        throw is.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
      }
      if (!is.object(options) || options.greyscale === true || options.grayscale === true) {
        this.options.thresholdGrayscale = true;
      } else {
        this.options.thresholdGrayscale = false;
      }
      return this;
    }
    function boolean(operand, operator, options) {
      this.options.boolean = this._createInputDescriptor(operand, options);
      if (is.string(operator) && is.inArray(operator, ["and", "or", "eor"])) {
        this.options.booleanOp = operator;
      } else {
        throw is.invalidParameterError("operator", "one of: and, or, eor", operator);
      }
      return this;
    }
    function linear(a, b2) {
      if (!is.defined(a) && is.number(b2)) {
        a = 1;
      } else if (is.number(a) && !is.defined(b2)) {
        b2 = 0;
      }
      if (!is.defined(a)) {
        this.options.linearA = [];
      } else if (is.number(a)) {
        this.options.linearA = [a];
      } else if (Array.isArray(a) && a.length && a.every(is.number)) {
        this.options.linearA = a;
      } else {
        throw is.invalidParameterError("a", "number or array of numbers", a);
      }
      if (!is.defined(b2)) {
        this.options.linearB = [];
      } else if (is.number(b2)) {
        this.options.linearB = [b2];
      } else if (Array.isArray(b2) && b2.length && b2.every(is.number)) {
        this.options.linearB = b2;
      } else {
        throw is.invalidParameterError("b", "number or array of numbers", b2);
      }
      if (this.options.linearA.length !== this.options.linearB.length) {
        throw new Error("Expected a and b to be arrays of the same length");
      }
      return this;
    }
    function recomb(inputMatrix) {
      if (!Array.isArray(inputMatrix) || inputMatrix.length !== 3 || inputMatrix[0].length !== 3 || inputMatrix[1].length !== 3 || inputMatrix[2].length !== 3) {
        throw new Error("Invalid recombination matrix");
      }
      this.options.recombMatrix = [
        inputMatrix[0][0],
        inputMatrix[0][1],
        inputMatrix[0][2],
        inputMatrix[1][0],
        inputMatrix[1][1],
        inputMatrix[1][2],
        inputMatrix[2][0],
        inputMatrix[2][1],
        inputMatrix[2][2]
      ].map(Number);
      return this;
    }
    function modulate(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "plain object", options);
      }
      if ("brightness" in options) {
        if (is.number(options.brightness) && options.brightness >= 0) {
          this.options.brightness = options.brightness;
        } else {
          throw is.invalidParameterError("brightness", "number above zero", options.brightness);
        }
      }
      if ("saturation" in options) {
        if (is.number(options.saturation) && options.saturation >= 0) {
          this.options.saturation = options.saturation;
        } else {
          throw is.invalidParameterError("saturation", "number above zero", options.saturation);
        }
      }
      if ("hue" in options) {
        if (is.integer(options.hue)) {
          this.options.hue = options.hue % 360;
        } else {
          throw is.invalidParameterError("hue", "number", options.hue);
        }
      }
      if ("lightness" in options) {
        if (is.number(options.lightness)) {
          this.options.lightness = options.lightness;
        } else {
          throw is.invalidParameterError("lightness", "number", options.lightness);
        }
      }
      return this;
    }
    module2.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        rotate,
        flip,
        flop,
        affine,
        sharpen,
        median,
        blur,
        flatten,
        unflatten,
        gamma,
        negate,
        normalise,
        normalize,
        clahe,
        convolve,
        threshold,
        boolean,
        linear,
        recomb,
        modulate
      });
    };
  }
});

// node_modules/sharp/lib/colour.js
var require_colour = __commonJS({
  "node_modules/sharp/lib/colour.js"(exports2, module2) {
    "use strict";
    var color = require_color();
    var is = require_is();
    var colourspace = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };
    function tint(rgb) {
      const colour = color(rgb);
      this.options.tintA = colour.a();
      this.options.tintB = colour.b();
      return this;
    }
    function greyscale(greyscale2) {
      this.options.greyscale = is.bool(greyscale2) ? greyscale2 : true;
      return this;
    }
    function grayscale(grayscale2) {
      return this.greyscale(grayscale2);
    }
    function pipelineColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspaceInput = colourspace2;
      return this;
    }
    function pipelineColorspace(colorspace) {
      return this.pipelineColourspace(colorspace);
    }
    function toColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspace = colourspace2;
      return this;
    }
    function toColorspace(colorspace) {
      return this.toColourspace(colorspace);
    }
    function _setBackgroundColourOption(key, value) {
      if (is.defined(value)) {
        if (is.object(value) || is.string(value)) {
          const colour = color(value);
          this.options[key] = [
            colour.red(),
            colour.green(),
            colour.blue(),
            Math.round(colour.alpha() * 255)
          ];
        } else {
          throw is.invalidParameterError("background", "object or string", value);
        }
      }
    }
    module2.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Public
        tint,
        greyscale,
        grayscale,
        pipelineColourspace,
        pipelineColorspace,
        toColourspace,
        toColorspace,
        // Private
        _setBackgroundColourOption
      });
      Sharp.colourspace = colourspace;
      Sharp.colorspace = colourspace;
    };
  }
});

// node_modules/sharp/lib/channel.js
var require_channel = __commonJS({
  "node_modules/sharp/lib/channel.js"(exports2, module2) {
    "use strict";
    var is = require_is();
    var bool = {
      and: "and",
      or: "or",
      eor: "eor"
    };
    function removeAlpha() {
      this.options.removeAlpha = true;
      return this;
    }
    function ensureAlpha(alpha) {
      if (is.defined(alpha)) {
        if (is.number(alpha) && is.inRange(alpha, 0, 1)) {
          this.options.ensureAlpha = alpha;
        } else {
          throw is.invalidParameterError("alpha", "number between 0 and 1", alpha);
        }
      } else {
        this.options.ensureAlpha = 1;
      }
      return this;
    }
    function extractChannel(channel) {
      const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
      if (Object.keys(channelMap).includes(channel)) {
        channel = channelMap[channel];
      }
      if (is.integer(channel) && is.inRange(channel, 0, 4)) {
        this.options.extractChannel = channel;
      } else {
        throw is.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel);
      }
      return this;
    }
    function joinChannel(images, options) {
      if (Array.isArray(images)) {
        images.forEach(function(image) {
          this.options.joinChannelIn.push(this._createInputDescriptor(image, options));
        }, this);
      } else {
        this.options.joinChannelIn.push(this._createInputDescriptor(images, options));
      }
      return this;
    }
    function bandbool(boolOp) {
      if (is.string(boolOp) && is.inArray(boolOp, ["and", "or", "eor"])) {
        this.options.bandBoolOp = boolOp;
      } else {
        throw is.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
      }
      return this;
    }
    module2.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Public instance functions
        removeAlpha,
        ensureAlpha,
        extractChannel,
        joinChannel,
        bandbool
      });
      Sharp.bool = bool;
    };
  }
});

// node_modules/sharp/lib/output.js
var require_output2 = __commonJS({
  "node_modules/sharp/lib/output.js"(exports2, module2) {
    "use strict";
    var path = require("path");
    var is = require_is();
    var sharp = require_sharp();
    var formats = /* @__PURE__ */ new Map([
      ["heic", "heif"],
      ["heif", "heif"],
      ["avif", "avif"],
      ["jpeg", "jpeg"],
      ["jpg", "jpeg"],
      ["jpe", "jpeg"],
      ["tile", "tile"],
      ["dz", "tile"],
      ["png", "png"],
      ["raw", "raw"],
      ["tiff", "tiff"],
      ["tif", "tiff"],
      ["webp", "webp"],
      ["gif", "gif"],
      ["jp2", "jp2"],
      ["jpx", "jp2"],
      ["j2k", "jp2"],
      ["j2c", "jp2"],
      ["jxl", "jxl"]
    ]);
    var jp2Regex = /\.(jp[2x]|j2[kc])$/i;
    var errJp2Save = () => new Error("JP2 output requires libvips with support for OpenJPEG");
    var bitdepthFromColourCount = (colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours)));
    function toFile(fileOut, callback) {
      let err;
      if (!is.string(fileOut)) {
        err = new Error("Missing output file path");
      } else if (is.string(this.options.input.file) && path.resolve(this.options.input.file) === path.resolve(fileOut)) {
        err = new Error("Cannot use same file for input and output");
      } else if (jp2Regex.test(path.extname(fileOut)) && !this.constructor.format.jp2k.output.file) {
        err = errJp2Save();
      }
      if (err) {
        if (is.fn(callback)) {
          callback(err);
        } else {
          return Promise.reject(err);
        }
      } else {
        this.options.fileOut = fileOut;
        return this._pipeline(callback);
      }
      return this;
    }
    function toBuffer(options, callback) {
      if (is.object(options)) {
        this._setBooleanOption("resolveWithObject", options.resolveWithObject);
      } else if (this.options.resolveWithObject) {
        this.options.resolveWithObject = false;
      }
      this.options.fileOut = "";
      return this._pipeline(is.fn(options) ? options : callback);
    }
    function withMetadata(options) {
      this.options.withMetadata = is.bool(options) ? options : true;
      if (is.object(options)) {
        if (is.defined(options.orientation)) {
          if (is.integer(options.orientation) && is.inRange(options.orientation, 1, 8)) {
            this.options.withMetadataOrientation = options.orientation;
          } else {
            throw is.invalidParameterError("orientation", "integer between 1 and 8", options.orientation);
          }
        }
        if (is.defined(options.density)) {
          if (is.number(options.density) && options.density > 0) {
            this.options.withMetadataDensity = options.density;
          } else {
            throw is.invalidParameterError("density", "positive number", options.density);
          }
        }
        if (is.defined(options.icc)) {
          if (is.string(options.icc)) {
            this.options.withMetadataIcc = options.icc;
          } else {
            throw is.invalidParameterError("icc", "string filesystem path to ICC profile", options.icc);
          }
        }
        if (is.defined(options.exif)) {
          if (is.object(options.exif)) {
            for (const [ifd, entries] of Object.entries(options.exif)) {
              if (is.object(entries)) {
                for (const [k, v] of Object.entries(entries)) {
                  if (is.string(v)) {
                    this.options.withMetadataStrs[`exif-${ifd.toLowerCase()}-${k}`] = v;
                  } else {
                    throw is.invalidParameterError(`exif.${ifd}.${k}`, "string", v);
                  }
                }
              } else {
                throw is.invalidParameterError(`exif.${ifd}`, "object", entries);
              }
            }
          } else {
            throw is.invalidParameterError("exif", "object", options.exif);
          }
        }
      }
      return this;
    }
    function toFormat(format, options) {
      const actualFormat = formats.get((is.object(format) && is.string(format.id) ? format.id : format).toLowerCase());
      if (!actualFormat) {
        throw is.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format);
      }
      return this[actualFormat](options);
    }
    function jpeg(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jpegQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("jpegProgressive", options.progressive);
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jpegChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        const optimiseCoding = is.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
        if (is.defined(optimiseCoding)) {
          this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
        }
        if (is.defined(options.mozjpeg)) {
          if (is.bool(options.mozjpeg)) {
            if (options.mozjpeg) {
              this.options.jpegTrellisQuantisation = true;
              this.options.jpegOvershootDeringing = true;
              this.options.jpegOptimiseScans = true;
              this.options.jpegProgressive = true;
              this.options.jpegQuantisationTable = 3;
            }
          } else {
            throw is.invalidParameterError("mozjpeg", "boolean", options.mozjpeg);
          }
        }
        const trellisQuantisation = is.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
        if (is.defined(trellisQuantisation)) {
          this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
        }
        if (is.defined(options.overshootDeringing)) {
          this._setBooleanOption("jpegOvershootDeringing", options.overshootDeringing);
        }
        const optimiseScans = is.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
        if (is.defined(optimiseScans)) {
          this._setBooleanOption("jpegOptimiseScans", optimiseScans);
          if (optimiseScans) {
            this.options.jpegProgressive = true;
          }
        }
        const quantisationTable = is.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
        if (is.defined(quantisationTable)) {
          if (is.integer(quantisationTable) && is.inRange(quantisationTable, 0, 8)) {
            this.options.jpegQuantisationTable = quantisationTable;
          } else {
            throw is.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
          }
        }
      }
      return this._updateFormatOut("jpeg", options);
    }
    function png(options) {
      if (is.object(options)) {
        if (is.defined(options.progressive)) {
          this._setBooleanOption("pngProgressive", options.progressive);
        }
        if (is.defined(options.compressionLevel)) {
          if (is.integer(options.compressionLevel) && is.inRange(options.compressionLevel, 0, 9)) {
            this.options.pngCompressionLevel = options.compressionLevel;
          } else {
            throw is.invalidParameterError("compressionLevel", "integer between 0 and 9", options.compressionLevel);
          }
        }
        if (is.defined(options.adaptiveFiltering)) {
          this._setBooleanOption("pngAdaptiveFiltering", options.adaptiveFiltering);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.pngBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.palette)) {
          this._setBooleanOption("pngPalette", options.palette);
        } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is.defined)) {
          this._setBooleanOption("pngPalette", true);
        }
        if (this.options.pngPalette) {
          if (is.defined(options.quality)) {
            if (is.integer(options.quality) && is.inRange(options.quality, 0, 100)) {
              this.options.pngQuality = options.quality;
            } else {
              throw is.invalidParameterError("quality", "integer between 0 and 100", options.quality);
            }
          }
          if (is.defined(options.effort)) {
            if (is.integer(options.effort) && is.inRange(options.effort, 1, 10)) {
              this.options.pngEffort = options.effort;
            } else {
              throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
            }
          }
          if (is.defined(options.dither)) {
            if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
              this.options.pngDither = options.dither;
            } else {
              throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
            }
          }
        }
      }
      return this._updateFormatOut("png", options);
    }
    function webp(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.webpQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.alphaQuality)) {
          if (is.integer(options.alphaQuality) && is.inRange(options.alphaQuality, 0, 100)) {
            this.options.webpAlphaQuality = options.alphaQuality;
          } else {
            throw is.invalidParameterError("alphaQuality", "integer between 0 and 100", options.alphaQuality);
          }
        }
        if (is.defined(options.lossless)) {
          this._setBooleanOption("webpLossless", options.lossless);
        }
        if (is.defined(options.nearLossless)) {
          this._setBooleanOption("webpNearLossless", options.nearLossless);
        }
        if (is.defined(options.smartSubsample)) {
          this._setBooleanOption("webpSmartSubsample", options.smartSubsample);
        }
        if (is.defined(options.preset)) {
          if (is.string(options.preset) && is.inArray(options.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) {
            this.options.webpPreset = options.preset;
          } else {
            throw is.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", options.preset);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 6)) {
            this.options.webpEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 6", options.effort);
          }
        }
        if (is.defined(options.minSize)) {
          this._setBooleanOption("webpMinSize", options.minSize);
        }
        if (is.defined(options.mixed)) {
          this._setBooleanOption("webpMixed", options.mixed);
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("webp", options);
    }
    function gif(options) {
      if (is.object(options)) {
        if (is.defined(options.reuse)) {
          this._setBooleanOption("gifReuse", options.reuse);
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("gifProgressive", options.progressive);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.gifBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.effort)) {
          if (is.number(options.effort) && is.inRange(options.effort, 1, 10)) {
            this.options.gifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
          }
        }
        if (is.defined(options.dither)) {
          if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
            this.options.gifDither = options.dither;
          } else {
            throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
          }
        }
        if (is.defined(options.interFrameMaxError)) {
          if (is.number(options.interFrameMaxError) && is.inRange(options.interFrameMaxError, 0, 32)) {
            this.options.gifInterFrameMaxError = options.interFrameMaxError;
          } else {
            throw is.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", options.interFrameMaxError);
          }
        }
        if (is.defined(options.interPaletteMaxError)) {
          if (is.number(options.interPaletteMaxError) && is.inRange(options.interPaletteMaxError, 0, 256)) {
            this.options.gifInterPaletteMaxError = options.interPaletteMaxError;
          } else {
            throw is.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", options.interPaletteMaxError);
          }
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("gif", options);
    }
    function jp2(options) {
      if (!this.constructor.format.jp2k.output.buffer) {
        throw errJp2Save();
      }
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jp2Quality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jp2Lossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && is.inRange(options.tileWidth, 1, 32768)) {
            this.options.jp2TileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer between 1 and 32768", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && is.inRange(options.tileHeight, 1, 32768)) {
            this.options.jp2TileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer between 1 and 32768", options.tileHeight);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jp2ChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
      }
      return this._updateFormatOut("jp2", options);
    }
    function trySetAnimationOptions(source, target) {
      if (is.object(source) && is.defined(source.loop)) {
        if (is.integer(source.loop) && is.inRange(source.loop, 0, 65535)) {
          target.loop = source.loop;
        } else {
          throw is.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
        }
      }
      if (is.object(source) && is.defined(source.delay)) {
        if (is.integer(source.delay) && is.inRange(source.delay, 0, 65535)) {
          target.delay = [source.delay];
        } else if (Array.isArray(source.delay) && source.delay.every(is.integer) && source.delay.every((v) => is.inRange(v, 0, 65535))) {
          target.delay = source.delay;
        } else {
          throw is.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
        }
      }
    }
    function tiff(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.tiffQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [1, 2, 4, 8])) {
            this.options.tiffBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "1, 2, 4 or 8", options.bitdepth);
          }
        }
        if (is.defined(options.tile)) {
          this._setBooleanOption("tiffTile", options.tile);
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && options.tileWidth > 0) {
            this.options.tiffTileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer greater than zero", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && options.tileHeight > 0) {
            this.options.tiffTileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer greater than zero", options.tileHeight);
          }
        }
        if (is.defined(options.pyramid)) {
          this._setBooleanOption("tiffPyramid", options.pyramid);
        }
        if (is.defined(options.xres)) {
          if (is.number(options.xres) && options.xres > 0) {
            this.options.tiffXres = options.xres;
          } else {
            throw is.invalidParameterError("xres", "number greater than zero", options.xres);
          }
        }
        if (is.defined(options.yres)) {
          if (is.number(options.yres) && options.yres > 0) {
            this.options.tiffYres = options.yres;
          } else {
            throw is.invalidParameterError("yres", "number greater than zero", options.yres);
          }
        }
        if (is.defined(options.compression)) {
          if (is.string(options.compression) && is.inArray(options.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) {
            this.options.tiffCompression = options.compression;
          } else {
            throw is.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", options.compression);
          }
        }
        if (is.defined(options.predictor)) {
          if (is.string(options.predictor) && is.inArray(options.predictor, ["none", "horizontal", "float"])) {
            this.options.tiffPredictor = options.predictor;
          } else {
            throw is.invalidParameterError("predictor", "one of: none, horizontal, float", options.predictor);
          }
        }
        if (is.defined(options.resolutionUnit)) {
          if (is.string(options.resolutionUnit) && is.inArray(options.resolutionUnit, ["inch", "cm"])) {
            this.options.tiffResolutionUnit = options.resolutionUnit;
          } else {
            throw is.invalidParameterError("resolutionUnit", "one of: inch, cm", options.resolutionUnit);
          }
        }
      }
      return this._updateFormatOut("tiff", options);
    }
    function avif(options) {
      return this.heif({ ...options, compression: "av1" });
    }
    function heif(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.heifQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.heifLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.compression)) {
          if (is.string(options.compression) && is.inArray(options.compression, ["av1", "hevc"])) {
            this.options.heifCompression = options.compression;
          } else {
            throw is.invalidParameterError("compression", "one of: av1, hevc", options.compression);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 9)) {
            this.options.heifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 9", options.effort);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.heifChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
      }
      return this._updateFormatOut("heif", options);
    }
    function jxl(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jxlDistance = options.quality >= 30 ? 0.1 + (100 - options.quality) * 0.09 : 53 / 3e3 * options.quality * options.quality - 23 / 20 * options.quality + 25;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        } else if (is.defined(options.distance)) {
          if (is.number(options.distance) && is.inRange(options.distance, 0, 15)) {
            this.options.jxlDistance = options.distance;
          } else {
            throw is.invalidParameterError("distance", "number between 0.0 and 15.0", options.distance);
          }
        }
        if (is.defined(options.decodingTier)) {
          if (is.integer(options.decodingTier) && is.inRange(options.decodingTier, 0, 4)) {
            this.options.jxlDecodingTier = options.decodingTier;
          } else {
            throw is.invalidParameterError("decodingTier", "integer between 0 and 4", options.decodingTier);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jxlLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 3, 9)) {
            this.options.jxlEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 3 and 9", options.effort);
          }
        }
      }
      return this._updateFormatOut("jxl", options);
    }
    function raw(options) {
      if (is.object(options)) {
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(
            options.depth,
            ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"]
          )) {
            this.options.rawDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options.depth);
          }
        }
      }
      return this._updateFormatOut("raw");
    }
    function tile(options) {
      if (is.object(options)) {
        if (is.defined(options.size)) {
          if (is.integer(options.size) && is.inRange(options.size, 1, 8192)) {
            this.options.tileSize = options.size;
          } else {
            throw is.invalidParameterError("size", "integer between 1 and 8192", options.size);
          }
        }
        if (is.defined(options.overlap)) {
          if (is.integer(options.overlap) && is.inRange(options.overlap, 0, 8192)) {
            if (options.overlap > this.options.tileSize) {
              throw is.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options.overlap);
            }
            this.options.tileOverlap = options.overlap;
          } else {
            throw is.invalidParameterError("overlap", "integer between 0 and 8192", options.overlap);
          }
        }
        if (is.defined(options.container)) {
          if (is.string(options.container) && is.inArray(options.container, ["fs", "zip"])) {
            this.options.tileContainer = options.container;
          } else {
            throw is.invalidParameterError("container", "one of: fs, zip", options.container);
          }
        }
        if (is.defined(options.layout)) {
          if (is.string(options.layout) && is.inArray(options.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
            this.options.tileLayout = options.layout;
          } else {
            throw is.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options.layout);
          }
        }
        if (is.defined(options.angle)) {
          if (is.integer(options.angle) && !(options.angle % 90)) {
            this.options.tileAngle = options.angle;
          } else {
            throw is.invalidParameterError("angle", "positive/negative multiple of 90", options.angle);
          }
        }
        this._setBackgroundColourOption("tileBackground", options.background);
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(options.depth, ["onepixel", "onetile", "one"])) {
            this.options.tileDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: onepixel, onetile, one", options.depth);
          }
        }
        if (is.defined(options.skipBlanks)) {
          if (is.integer(options.skipBlanks) && is.inRange(options.skipBlanks, -1, 65535)) {
            this.options.tileSkipBlanks = options.skipBlanks;
          } else {
            throw is.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options.skipBlanks);
          }
        } else if (is.defined(options.layout) && options.layout === "google") {
          this.options.tileSkipBlanks = 5;
        }
        const centre = is.bool(options.center) ? options.center : options.centre;
        if (is.defined(centre)) {
          this._setBooleanOption("tileCentre", centre);
        }
        if (is.defined(options.id)) {
          if (is.string(options.id)) {
            this.options.tileId = options.id;
          } else {
            throw is.invalidParameterError("id", "string", options.id);
          }
        }
        if (is.defined(options.basename)) {
          if (is.string(options.basename)) {
            this.options.tileBasename = options.basename;
          } else {
            throw is.invalidParameterError("basename", "string", options.basename);
          }
        }
      }
      if (is.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
        this.options.tileFormat = this.options.formatOut;
      } else if (this.options.formatOut !== "input") {
        throw is.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
      }
      return this._updateFormatOut("dz");
    }
    function timeout(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "object", options);
      }
      if (is.integer(options.seconds) && is.inRange(options.seconds, 0, 3600)) {
        this.options.timeoutSeconds = options.seconds;
      } else {
        throw is.invalidParameterError("seconds", "integer between 0 and 3600", options.seconds);
      }
      return this;
    }
    function _updateFormatOut(formatOut, options) {
      if (!(is.object(options) && options.force === false)) {
        this.options.formatOut = formatOut;
      }
      return this;
    }
    function _setBooleanOption(key, val) {
      if (is.bool(val)) {
        this.options[key] = val;
      } else {
        throw is.invalidParameterError(key, "boolean", val);
      }
    }
    function _read() {
      if (!this.options.streamOut) {
        this.options.streamOut = true;
        this._pipeline();
      }
    }
    function _pipeline(callback) {
      if (typeof callback === "function") {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp.pipeline(this.options, callback);
          });
        } else {
          sharp.pipeline(this.options, callback);
        }
        return this;
      } else if (this.options.streamOut) {
        if (this._isStreamInput()) {
          this.once("finish", () => {
            this._flattenBufferIn();
            sharp.pipeline(this.options, (err, data, info) => {
              if (err) {
                this.emit("error", err);
              } else {
                this.emit("info", info);
                this.push(data);
              }
              this.push(null);
              this.on("end", () => this.emit("close"));
            });
          });
          if (this.streamInFinished) {
            this.emit("finish");
          }
        } else {
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              this.emit("error", err);
            } else {
              this.emit("info", info);
              this.push(data);
            }
            this.push(null);
            this.on("end", () => this.emit("close"));
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.once("finish", () => {
              this._flattenBufferIn();
              sharp.pipeline(this.options, (err, data, info) => {
                if (err) {
                  reject(err);
                } else {
                  if (this.options.resolveWithObject) {
                    resolve({ data, info });
                  } else {
                    resolve(data);
                  }
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp.pipeline(this.options, (err, data, info) => {
              if (err) {
                reject(err);
              } else {
                if (this.options.resolveWithObject) {
                  resolve({ data, info });
                } else {
                  resolve(data);
                }
              }
            });
          });
        }
      }
    }
    module2.exports = function(Sharp) {
      Object.assign(Sharp.prototype, {
        // Public
        toFile,
        toBuffer,
        withMetadata,
        toFormat,
        jpeg,
        jp2,
        png,
        webp,
        tiff,
        avif,
        heif,
        jxl,
        gif,
        raw,
        tile,
        timeout,
        // Private
        _updateFormatOut,
        _setBooleanOption,
        _read,
        _pipeline
      });
    };
  }
});

// node_modules/sharp/vendor/8.14.5/win32-x64/versions.json
var require_versions = __commonJS({
  "node_modules/sharp/vendor/8.14.5/win32-x64/versions.json"(exports2, module2) {
    module2.exports = {
      aom: "3.7.0",
      archive: "3.7.2",
      cairo: "1.17.8",
      cgif: "0.3.2",
      exif: "0.6.24",
      expat: "2.5.0",
      ffi: "3.4.4",
      fontconfig: "2.14.2",
      freetype: "2.13.2",
      fribidi: "1.0.13",
      gdkpixbuf: "2.42.10",
      glib: "2.78.0",
      harfbuzz: "8.2.0",
      heif: "1.16.2",
      imagequant: "2.4.1",
      lcms: "2.15",
      mozjpeg: "4.1.4",
      orc: "0.4.34",
      pango: "1.51.0",
      pixman: "0.42.2",
      png: "1.6.40",
      "proxy-libintl": "0.4",
      rsvg: "2.57.0",
      spng: "0.7.4",
      tiff: "4.6.0",
      vips: "8.14.5",
      webp: "1.3.2",
      xml: "2.11.5",
      "zlib-ng": "2.1.3"
    };
  }
});

// require("../vendor/**/*/**/*/versions.json") in node_modules/sharp/lib/utility.js
var globRequire_vendor_versions_json;
var init_2 = __esm({
  'require("../vendor/**/*/**/*/versions.json") in node_modules/sharp/lib/utility.js'() {
    globRequire_vendor_versions_json = __glob({
      "../vendor/8.14.5/win32-x64/versions.json": () => require_versions()
    });
  }
});

// node_modules/sharp/lib/utility.js
var require_utility = __commonJS({
  "node_modules/sharp/lib/utility.js"(exports2, module2) {
    "use strict";
    init_2();
    var fs2 = require("fs");
    var path = require("path");
    var events = require("events");
    var detectLibc = require_detect_libc();
    var is = require_is();
    var platformAndArch = require_platform()();
    var sharp = require_sharp();
    var format = sharp.format();
    format.heif.output.alias = ["avif", "heic"];
    format.jpeg.output.alias = ["jpe", "jpg"];
    format.tiff.output.alias = ["tif"];
    format.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
    var interpolators = {
      /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
      nearest: "nearest",
      /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
      bilinear: "bilinear",
      /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
      bicubic: "bicubic",
      /** [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100). Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2. */
      locallyBoundedBicubic: "lbb",
      /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
      nohalo: "nohalo",
      /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
      vertexSplitQuadraticBasisSpline: "vsqbs"
    };
    var versions = {
      vips: sharp.libvipsVersion()
    };
    try {
      versions = globRequire_vendor_versions_json(`../vendor/${versions.vips}/${platformAndArch}/versions.json`);
    } catch (_err) {
    }
    versions.sharp = require_package2().version;
    var vendor = {
      current: platformAndArch,
      installed: []
    };
    try {
      vendor.installed = fs2.readdirSync(path.join(__dirname, `../vendor/${versions.vips}`));
    } catch (_err) {
    }
    function cache(options) {
      if (is.bool(options)) {
        if (options) {
          return sharp.cache(50, 20, 100);
        } else {
          return sharp.cache(0, 0, 0);
        }
      } else if (is.object(options)) {
        return sharp.cache(options.memory, options.files, options.items);
      } else {
        return sharp.cache();
      }
    }
    cache(true);
    function concurrency(concurrency2) {
      return sharp.concurrency(is.integer(concurrency2) ? concurrency2 : null);
    }
    if (detectLibc.familySync() === detectLibc.GLIBC && !sharp._isUsingJemalloc()) {
      sharp.concurrency(1);
    }
    var queue = new events.EventEmitter();
    function counters() {
      return sharp.counters();
    }
    function simd(simd2) {
      return sharp.simd(is.bool(simd2) ? simd2 : null);
    }
    simd(true);
    function block(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp.block(options.operation, true);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    function unblock(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp.block(options.operation, false);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    module2.exports = function(Sharp) {
      Sharp.cache = cache;
      Sharp.concurrency = concurrency;
      Sharp.counters = counters;
      Sharp.simd = simd;
      Sharp.format = format;
      Sharp.interpolators = interpolators;
      Sharp.versions = versions;
      Sharp.vendor = vendor;
      Sharp.queue = queue;
      Sharp.block = block;
      Sharp.unblock = unblock;
    };
  }
});

// node_modules/sharp/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/sharp/lib/index.js"(exports2, module2) {
    "use strict";
    var Sharp = require_constructor();
    require_input()(Sharp);
    require_resize()(Sharp);
    require_composite()(Sharp);
    require_operation()(Sharp);
    require_colour()(Sharp);
    require_channel()(Sharp);
    require_output2()(Sharp);
    require_utility()(Sharp);
    module2.exports = Sharp;
  }
});

// node_modules/looks-same/lib/image-base.js
var require_image_base = __commonJS({
  "node_modules/looks-same/lib/image-base.js"(exports2, module2) {
    "use strict";
    module2.exports = class ImageBase {
      static create(...args) {
        return new this(...args);
      }
      getActualCoord() {
        throw new Error("Not implemented");
      }
      get width() {
        throw new Error("Not implemented");
      }
      get height() {
        throw new Error("Not implemented");
      }
    };
  }
});

// node_modules/looks-same/lib/image/image.js
var require_image = __commonJS({
  "node_modules/looks-same/lib/image/image.js"(exports2, module2) {
    "use strict";
    var ImageBase = require_image_base();
    module2.exports = class Image extends ImageBase {
      constructor(img) {
        super();
        this._img = img;
      }
      async init() {
        const { data, info } = await this._img.raw().toBuffer({ resolveWithObject: true });
        this._buffer = data;
        this._width = info.width;
        this._height = info.height;
        this._channels = info.channels;
      }
      async initMeta() {
        const { width, height, channels } = await this._img.metadata();
        this._width = width;
        this._height = height;
        this._channels = channels;
      }
      getPixel(x2, y) {
        const idx = this._getIdx(x2, y);
        return {
          R: this._buffer[idx],
          G: this._buffer[idx + 1],
          B: this._buffer[idx + 2]
        };
      }
      _getIdx(x2, y) {
        return (this._width * y + x2) * this._channels;
      }
      async save(path) {
        return this._img.toFile(path);
      }
      async createBuffer(extension) {
        return this._img.toFormat(extension).toBuffer();
      }
    };
  }
});

// node_modules/looks-same/lib/image/original-image.js
var require_original_image = __commonJS({
  "node_modules/looks-same/lib/image/original-image.js"(exports2, module2) {
    "use strict";
    var Image = require_image();
    module2.exports = class OriginalImage extends Image {
      getActualCoord(x2, y) {
        return { x: x2, y };
      }
      get width() {
        return this._width;
      }
      get height() {
        return this._height;
      }
    };
  }
});

// node_modules/looks-same/lib/image/bounded-image.js
var require_bounded_image = __commonJS({
  "node_modules/looks-same/lib/image/bounded-image.js"(exports2, module2) {
    "use strict";
    var Image = require_image();
    module2.exports = class BoundedImage extends Image {
      constructor(img, boundingBox) {
        super(img);
        this._boundingBox = boundingBox;
      }
      getPixel(x2, y) {
        const { x: actX, y: actY } = this.getActualCoord(x2, y);
        return super.getPixel(actX, actY);
      }
      getActualCoord(x2, y) {
        return { x: x2 + this._boundingBox.left, y: y + this._boundingBox.top };
      }
      get width() {
        return this._boundingBox.right - this._boundingBox.left + 1;
      }
      get height() {
        return this._boundingBox.bottom - this._boundingBox.top + 1;
      }
    };
  }
});

// node_modules/looks-same/lib/image/index.js
var require_image2 = __commonJS({
  "node_modules/looks-same/lib/image/index.js"(exports2) {
    "use strict";
    var fs2 = require_lib();
    var NestedError = require_nested_error_stacks();
    var sharp = require_lib2();
    var OriginalIMG = require_original_image();
    var BoundedIMG = require_bounded_image();
    var createimage = async (img, { boundingBox } = {}) => {
      return boundingBox ? BoundedIMG.create(img, boundingBox) : OriginalIMG.create(img);
    };
    exports2.fromBuffer = async (buffer, opts) => {
      const img = sharp(buffer, opts);
      return createimage(img, opts);
    };
    exports2.fromFile = async (filePath, opts = {}) => {
      try {
        const buffer = await fs2.readFile(filePath);
        return exports2.fromBuffer(buffer, opts);
      } catch (err) {
        throw new NestedError(`Can't load img file ${filePath}`, err);
      }
    };
  }
});

// node_modules/looks-same/lib/same-colors.js
var require_same_colors = __commonJS({
  "node_modules/looks-same/lib/same-colors.js"(exports2, module2) {
    "use strict";
    module2.exports = (data) => {
      const c1 = data.color1;
      const c2 = data.color2;
      return c1.R === c2.R && c1.G === c2.G && c1.B === c2.B;
    };
  }
});

// node_modules/looks-same/lib/antialiasing-comparator.js
var require_antialiasing_comparator = __commonJS({
  "node_modules/looks-same/lib/antialiasing-comparator.js"(exports2, module2) {
    "use strict";
    var DEFAULT_BRIGHTNESS_TOLERANCE = 0;
    module2.exports = class AntialiasingComparator {
      constructor(baseComparator, img1, img2, { antialiasingTolerance = 0 }) {
        this._baseComparator = baseComparator;
        this._img1 = img1;
        this._img2 = img2;
        this._brightnessTolerance = antialiasingTolerance;
      }
      compare(data) {
        return this._baseComparator(data) || this._checkIsAntialiased(data);
      }
      _checkIsAntialiased(data) {
        return this._isAntialiased(this._img2, data.x, data.y, data, this._img1) || this._isAntialiased(this._img1, data.x, data.y, data, this._img2);
      }
      _isAntialiased(img1, x1, y1, data, img2) {
        const color1 = img1.getPixel(x1, y1);
        const width = data.width;
        const height = data.height;
        const x0 = Math.max(x1 - 1, 0);
        const y0 = Math.max(y1 - 1, 0);
        const x2 = Math.min(x1 + 1, width - 1);
        const y2 = Math.min(y1 + 1, height - 1);
        const checkExtremePixels = !img2;
        const brightnessTolerance = checkExtremePixels ? this._brightnessTolerance : DEFAULT_BRIGHTNESS_TOLERANCE;
        let zeroes = 0;
        let positives = 0;
        let negatives = 0;
        let min = 0;
        let max = 0;
        let minX, minY, maxX, maxY;
        for (let y = y0; y <= y2; y++) {
          for (let x3 = x0; x3 <= x2; x3++) {
            if (x3 === x1 && y === y1) {
              continue;
            }
            const delta = this._brightnessDelta(img1.getPixel(x3, y), color1);
            if (Math.abs(delta) <= brightnessTolerance) {
              zeroes++;
            } else if (delta > brightnessTolerance) {
              positives++;
            } else {
              negatives++;
            }
            if (zeroes > 2) {
              return false;
            }
            if (checkExtremePixels) {
              continue;
            }
            if (delta < min) {
              min = delta;
              minX = x3;
              minY = y;
            }
            if (delta > max) {
              max = delta;
              maxX = x3;
              maxY = y;
            }
          }
        }
        if (checkExtremePixels) {
          return true;
        }
        if (negatives === 0 || positives === 0) {
          return false;
        }
        return !this._isAntialiased(img1, minX, minY, data) && !this._isAntialiased(img2, minX, minY, data) || !this._isAntialiased(img1, maxX, maxY, data) && !this._isAntialiased(img2, maxX, maxY, data);
      }
      _brightnessDelta(color1, color2) {
        return rgb2y(color1.R, color1.G, color1.B) - rgb2y(color2.R, color2.G, color2.B);
      }
    };
    function rgb2y(r2, g2, b2) {
      return r2 * 0.29889531 + g2 * 0.58662247 + b2 * 0.11448223;
    }
  }
});

// node_modules/looks-same/lib/ignore-caret-comparator/states/state.js
var require_state = __commonJS({
  "node_modules/looks-same/lib/ignore-caret-comparator/states/state.js"(exports2, module2) {
    "use strict";
    module2.exports = class State {
      constructor(comparator) {
        this._ctx = comparator;
      }
      validate() {
        throw new Error("Not implemented");
      }
      switchState(state) {
        this._ctx.switchState(state);
      }
      get pixelRatio() {
        return this._ctx.pixelRatio;
      }
      get caretTopLeft() {
        return this._ctx.caretTopLeft;
      }
      set caretTopLeft(point) {
        this._ctx.caretTopLeft = point;
      }
      get caretBottomRight() {
        return this._ctx.caretBottomRight;
      }
      set caretBottomRight(point) {
        this._ctx.caretBottomRight = point;
      }
    };
  }
});

// node_modules/looks-same/lib/ignore-caret-comparator/states/init.js
var require_init = __commonJS({
  "node_modules/looks-same/lib/ignore-caret-comparator/states/init.js"(exports2, module2) {
    "use strict";
    var State = require_state();
    var areColorsSame = require_same_colors();
    module2.exports = class InitState extends State {
      validate(data) {
        const lastCaretPoint = this._getLastCaretPoint(data);
        if (!this._looksLikeCaret(data, lastCaretPoint)) {
          return false;
        }
        this.caretTopLeft = data;
        this.caretBottomRight = lastCaretPoint;
        this.switchState("CaretDetectedState");
        return true;
      }
      _getLastCaretPoint(data) {
        let currPoint = data;
        while (true) {
          const nextPoint = this._getNextCaretPoint(data, currPoint);
          if (this._isPointOutsideImages(nextPoint, data) || this._areColorsSame(nextPoint, data)) {
            return currPoint;
          }
          currPoint = nextPoint;
        }
      }
      _isPointOutsideImages(point, data) {
        return point.x >= data.minWidth || point.y >= data.minHeight;
      }
      _areColorsSame(point, data) {
        const color1 = data.img1.getPixel(point.x, point.y);
        const color2 = data.img2.getPixel(point.x, point.y);
        return areColorsSame({ color1, color2 });
      }
      _getNextCaretPoint(firstCaretPoint, currPoint) {
        const nextX = currPoint.x + 1;
        return nextX < firstCaretPoint.x + this.pixelRatio ? { x: nextX, y: currPoint.y } : { x: firstCaretPoint.x, y: currPoint.y + 1 };
      }
      _looksLikeCaret(firstCaretPoint, lastCaretPoint) {
        return this._caretHeight(firstCaretPoint, lastCaretPoint) > 1 && this._caretWidth(firstCaretPoint, lastCaretPoint) === this.pixelRatio;
      }
      _caretHeight(firstCaretPoint, lastCaretPoint) {
        return lastCaretPoint.y - firstCaretPoint.y + 1;
      }
      _caretWidth(firstCaretPoint, lastCaretPoint) {
        return lastCaretPoint.x - firstCaretPoint.x + 1;
      }
    };
  }
});

// node_modules/looks-same/lib/ignore-caret-comparator/states/caret-detected.js
var require_caret_detected = __commonJS({
  "node_modules/looks-same/lib/ignore-caret-comparator/states/caret-detected.js"(exports2, module2) {
    "use strict";
    var State = require_state();
    module2.exports = class CaretDetectedState extends State {
      validate(point) {
        return this._isInsideCaret(point);
      }
      _isInsideCaret(point) {
        return point.x >= this.caretTopLeft.x && point.x <= this.caretBottomRight.x && point.y >= this.caretTopLeft.y && point.y <= this.caretBottomRight.y;
      }
    };
  }
});

// node_modules/looks-same/lib/ignore-caret-comparator/index.js
var require_ignore_caret_comparator = __commonJS({
  "node_modules/looks-same/lib/ignore-caret-comparator/index.js"(exports2, module2) {
    "use strict";
    var STATES = {
      InitState: require_init(),
      CaretDetectedState: require_caret_detected()
    };
    module2.exports = class IgnoreCaretComparator {
      constructor(baseComparator, pixelRatio) {
        this.pixelRatio = pixelRatio ? Math.floor(pixelRatio) : 1;
        this.caretTopLeft = null;
        this.caretBottomRight = null;
        this._baseComparator = baseComparator;
        this.switchState("InitState");
      }
      /**
       * Compare pixels for current active comparator state
       * @param {Object} data
       * @param {Object} data.color1
       * @param {Object} data.color2
       * @param {Number} data.x coordinate
       * @param {Number} data.y coordinate
       * @returns {boolean}
       */
      compare(data) {
        return this._baseComparator(data) || this._checkIsCaret(data);
      }
      _checkIsCaret(data) {
        return this._state.validate(data);
      }
      switchState(stateName) {
        this._state = new STATES[stateName](this);
      }
    };
  }
});

// node_modules/looks-same/lib/diff-area.js
var require_diff_area = __commonJS({
  "node_modules/looks-same/lib/diff-area.js"(exports2, module2) {
    "use strict";
    module2.exports = class DiffArea {
      static create() {
        return new DiffArea();
      }
      constructor() {
        this._diffArea = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
        this._updated = false;
      }
      update(x2, y) {
        const { left, top, right, bottom } = this._diffArea;
        this._diffArea = {
          left: Math.min(left, x2),
          top: Math.min(top, y),
          right: Math.max(right, x2),
          bottom: Math.max(bottom, y)
        };
        this._updated = true;
        return this;
      }
      isPointInArea(x2, y, radius) {
        const { left, top, right, bottom } = this._diffArea;
        return x2 >= left - radius && x2 <= right + radius && y >= top - radius && y <= bottom + radius;
      }
      isEmpty() {
        return !this._updated;
      }
      get area() {
        return this._diffArea;
      }
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions2 = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    module2.exports = {
      rgb2hsl,
      rgb2hsv,
      rgb2hwb,
      rgb2cmyk,
      rgb2keyword,
      rgb2xyz,
      rgb2lab,
      rgb2lch,
      hsl2rgb,
      hsl2hsv,
      hsl2hwb,
      hsl2cmyk,
      hsl2keyword,
      hsv2rgb,
      hsv2hsl,
      hsv2hwb,
      hsv2cmyk,
      hsv2keyword,
      hwb2rgb,
      hwb2hsl,
      hwb2hsv,
      hwb2cmyk,
      hwb2keyword,
      cmyk2rgb,
      cmyk2hsl,
      cmyk2hsv,
      cmyk2hwb,
      cmyk2keyword,
      keyword2rgb,
      keyword2hsl,
      keyword2hsv,
      keyword2hwb,
      keyword2cmyk,
      keyword2lab,
      keyword2xyz,
      xyz2rgb,
      xyz2lab,
      xyz2lch,
      lab2xyz,
      lab2rgb,
      lab2lch,
      lch2lab,
      lch2xyz,
      lch2rgb
    };
    function rgb2hsl(rgb) {
      var r2 = rgb[0] / 255, g2 = rgb[1] / 255, b2 = rgb[2] / 255, min = Math.min(r2, g2, b2), max = Math.max(r2, g2, b2), delta = max - min, h, s, l;
      if (max == min)
        h = 0;
      else if (r2 == max)
        h = (g2 - b2) / delta;
      else if (g2 == max)
        h = 2 + (b2 - r2) / delta;
      else if (b2 == max)
        h = 4 + (r2 - g2) / delta;
      h = Math.min(h * 60, 360);
      if (h < 0)
        h += 360;
      l = (min + max) / 2;
      if (max == min)
        s = 0;
      else if (l <= 0.5)
        s = delta / (max + min);
      else
        s = delta / (2 - max - min);
      return [h, s * 100, l * 100];
    }
    function rgb2hsv(rgb) {
      var r2 = rgb[0], g2 = rgb[1], b2 = rgb[2], min = Math.min(r2, g2, b2), max = Math.max(r2, g2, b2), delta = max - min, h, s, v;
      if (max == 0)
        s = 0;
      else
        s = delta / max * 1e3 / 10;
      if (max == min)
        h = 0;
      else if (r2 == max)
        h = (g2 - b2) / delta;
      else if (g2 == max)
        h = 2 + (b2 - r2) / delta;
      else if (b2 == max)
        h = 4 + (r2 - g2) / delta;
      h = Math.min(h * 60, 360);
      if (h < 0)
        h += 360;
      v = max / 255 * 1e3 / 10;
      return [h, s, v];
    }
    function rgb2hwb(rgb) {
      var r2 = rgb[0], g2 = rgb[1], b2 = rgb[2], h = rgb2hsl(rgb)[0], w = 1 / 255 * Math.min(r2, Math.min(g2, b2)), b2 = 1 - 1 / 255 * Math.max(r2, Math.max(g2, b2));
      return [h, w * 100, b2 * 100];
    }
    function rgb2cmyk(rgb) {
      var r2 = rgb[0] / 255, g2 = rgb[1] / 255, b2 = rgb[2] / 255, c, m, y, k;
      k = Math.min(1 - r2, 1 - g2, 1 - b2);
      c = (1 - r2 - k) / (1 - k) || 0;
      m = (1 - g2 - k) / (1 - k) || 0;
      y = (1 - b2 - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    }
    function rgb2keyword(rgb) {
      return reverseKeywords[JSON.stringify(rgb)];
    }
    function rgb2xyz(rgb) {
      var r2 = rgb[0] / 255, g2 = rgb[1] / 255, b2 = rgb[2] / 255;
      r2 = r2 > 0.04045 ? Math.pow((r2 + 0.055) / 1.055, 2.4) : r2 / 12.92;
      g2 = g2 > 0.04045 ? Math.pow((g2 + 0.055) / 1.055, 2.4) : g2 / 12.92;
      b2 = b2 > 0.04045 ? Math.pow((b2 + 0.055) / 1.055, 2.4) : b2 / 12.92;
      var x2 = r2 * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
      var y = r2 * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
      var z = r2 * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
      return [x2 * 100, y * 100, z * 100];
    }
    function rgb2lab(rgb) {
      var xyz = rgb2xyz(rgb), x2 = xyz[0], y = xyz[1], z = xyz[2], l, a, b2;
      x2 /= 95.047;
      y /= 100;
      z /= 108.883;
      x2 = x2 > 8856e-6 ? Math.pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x2 - y);
      b2 = 200 * (y - z);
      return [l, a, b2];
    }
    function rgb2lch(args) {
      return lab2lch(rgb2lab(args));
    }
    function hsl2rgb(hsl) {
      var h = hsl[0] / 360, s = hsl[1] / 100, l = hsl[2] / 100, t1, t2, t3, rgb, val;
      if (s == 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5)
        t2 = l * (1 + s);
      else
        t2 = l + s - l * s;
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        t3 < 0 && t3++;
        t3 > 1 && t3--;
        if (6 * t3 < 1)
          val = t1 + (t2 - t1) * 6 * t3;
        else if (2 * t3 < 1)
          val = t2;
        else if (3 * t3 < 2)
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        else
          val = t1;
        rgb[i] = val * 255;
      }
      return rgb;
    }
    function hsl2hsv(hsl) {
      var h = hsl[0], s = hsl[1] / 100, l = hsl[2] / 100, sv, v;
      if (l === 0) {
        return [0, 0, 0];
      }
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      v = (l + s) / 2;
      sv = 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    }
    function hsl2hwb(args) {
      return rgb2hwb(hsl2rgb(args));
    }
    function hsl2cmyk(args) {
      return rgb2cmyk(hsl2rgb(args));
    }
    function hsl2keyword(args) {
      return rgb2keyword(hsl2rgb(args));
    }
    function hsv2rgb(hsv) {
      var h = hsv[0] / 60, s = hsv[1] / 100, v = hsv[2] / 100, hi = Math.floor(h) % 6;
      var f = h - Math.floor(h), p = 255 * v * (1 - s), q = 255 * v * (1 - s * f), t = 255 * v * (1 - s * (1 - f)), v = 255 * v;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    }
    function hsv2hsl(hsv) {
      var h = hsv[0], s = hsv[1] / 100, v = hsv[2] / 100, sl, l;
      l = (2 - s) * v;
      sl = s * v;
      sl /= l <= 1 ? l : 2 - l;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    }
    function hsv2hwb(args) {
      return rgb2hwb(hsv2rgb(args));
    }
    function hsv2cmyk(args) {
      return rgb2cmyk(hsv2rgb(args));
    }
    function hsv2keyword(args) {
      return rgb2keyword(hsv2rgb(args));
    }
    function hwb2rgb(hwb) {
      var h = hwb[0] / 360, wh = hwb[1] / 100, bl = hwb[2] / 100, ratio = wh + bl, i, v, f, n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) != 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    }
    function hwb2hsl(args) {
      return rgb2hsl(hwb2rgb(args));
    }
    function hwb2hsv(args) {
      return rgb2hsv(hwb2rgb(args));
    }
    function hwb2cmyk(args) {
      return rgb2cmyk(hwb2rgb(args));
    }
    function hwb2keyword(args) {
      return rgb2keyword(hwb2rgb(args));
    }
    function cmyk2rgb(cmyk) {
      var c = cmyk[0] / 100, m = cmyk[1] / 100, y = cmyk[2] / 100, k = cmyk[3] / 100, r2, g2, b2;
      r2 = 1 - Math.min(1, c * (1 - k) + k);
      g2 = 1 - Math.min(1, m * (1 - k) + k);
      b2 = 1 - Math.min(1, y * (1 - k) + k);
      return [r2 * 255, g2 * 255, b2 * 255];
    }
    function cmyk2hsl(args) {
      return rgb2hsl(cmyk2rgb(args));
    }
    function cmyk2hsv(args) {
      return rgb2hsv(cmyk2rgb(args));
    }
    function cmyk2hwb(args) {
      return rgb2hwb(cmyk2rgb(args));
    }
    function cmyk2keyword(args) {
      return rgb2keyword(cmyk2rgb(args));
    }
    function xyz2rgb(xyz) {
      var x2 = xyz[0] / 100, y = xyz[1] / 100, z = xyz[2] / 100, r2, g2, b2;
      r2 = x2 * 3.2406 + y * -1.5372 + z * -0.4986;
      g2 = x2 * -0.9689 + y * 1.8758 + z * 0.0415;
      b2 = x2 * 0.0557 + y * -0.204 + z * 1.057;
      r2 = r2 > 31308e-7 ? 1.055 * Math.pow(r2, 1 / 2.4) - 0.055 : r2 = r2 * 12.92;
      g2 = g2 > 31308e-7 ? 1.055 * Math.pow(g2, 1 / 2.4) - 0.055 : g2 = g2 * 12.92;
      b2 = b2 > 31308e-7 ? 1.055 * Math.pow(b2, 1 / 2.4) - 0.055 : b2 = b2 * 12.92;
      r2 = Math.min(Math.max(0, r2), 1);
      g2 = Math.min(Math.max(0, g2), 1);
      b2 = Math.min(Math.max(0, b2), 1);
      return [r2 * 255, g2 * 255, b2 * 255];
    }
    function xyz2lab(xyz) {
      var x2 = xyz[0], y = xyz[1], z = xyz[2], l, a, b2;
      x2 /= 95.047;
      y /= 100;
      z /= 108.883;
      x2 = x2 > 8856e-6 ? Math.pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x2 - y);
      b2 = 200 * (y - z);
      return [l, a, b2];
    }
    function xyz2lch(args) {
      return lab2lch(xyz2lab(args));
    }
    function lab2xyz(lab) {
      var l = lab[0], a = lab[1], b2 = lab[2], x2, y, z, y2;
      if (l <= 8) {
        y = l * 100 / 903.3;
        y2 = 7.787 * (y / 100) + 16 / 116;
      } else {
        y = 100 * Math.pow((l + 16) / 116, 3);
        y2 = Math.pow(y / 100, 1 / 3);
      }
      x2 = x2 / 95.047 <= 8856e-6 ? x2 = 95.047 * (a / 500 + y2 - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + y2, 3);
      z = z / 108.883 <= 8859e-6 ? z = 108.883 * (y2 - b2 / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(y2 - b2 / 200, 3);
      return [x2, y, z];
    }
    function lab2lch(lab) {
      var l = lab[0], a = lab[1], b2 = lab[2], hr, h, c;
      hr = Math.atan2(b2, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b2 * b2);
      return [l, c, h];
    }
    function lab2rgb(args) {
      return xyz2rgb(lab2xyz(args));
    }
    function lch2lab(lch) {
      var l = lch[0], c = lch[1], h = lch[2], a, b2, hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b2 = c * Math.sin(hr);
      return [l, a, b2];
    }
    function lch2xyz(args) {
      return lab2xyz(lch2lab(args));
    }
    function lch2rgb(args) {
      return lab2rgb(lch2lab(args));
    }
    function keyword2rgb(keyword) {
      return cssKeywords[keyword];
    }
    function keyword2hsl(args) {
      return rgb2hsl(keyword2rgb(args));
    }
    function keyword2hsv(args) {
      return rgb2hsv(keyword2rgb(args));
    }
    function keyword2hwb(args) {
      return rgb2hwb(keyword2rgb(args));
    }
    function keyword2cmyk(args) {
      return rgb2cmyk(keyword2rgb(args));
    }
    function keyword2lab(args) {
      return rgb2lab(keyword2rgb(args));
    }
    function keyword2xyz(args) {
      return rgb2xyz(keyword2rgb(args));
    }
    var cssKeywords = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
    var reverseKeywords = {};
    for (key in cssKeywords) {
      reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
    }
    var key;
  }
});

// node_modules/color-convert/index.js
var require_color_convert2 = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions2();
    var convert = function() {
      return new Converter();
    };
    for (func in conversions) {
      convert[func + "Raw"] = /* @__PURE__ */ function(func2) {
        return function(arg) {
          if (typeof arg == "number")
            arg = Array.prototype.slice.call(arguments);
          return conversions[func2](arg);
        };
      }(func);
      pair = /(\w+)2(\w+)/.exec(func), from = pair[1], to = pair[2];
      convert[from] = convert[from] || {};
      convert[from][to] = convert[func] = /* @__PURE__ */ function(func2) {
        return function(arg) {
          if (typeof arg == "number")
            arg = Array.prototype.slice.call(arguments);
          var val = conversions[func2](arg);
          if (typeof val == "string" || val === void 0)
            return val;
          for (var i = 0; i < val.length; i++)
            val[i] = Math.round(val[i]);
          return val;
        };
      }(func);
    }
    var pair;
    var from;
    var to;
    var func;
    var Converter = function() {
      this.convs = {};
    };
    Converter.prototype.routeSpace = function(space, args) {
      var values = args[0];
      if (values === void 0) {
        return this.getValues(space);
      }
      if (typeof values == "number") {
        values = Array.prototype.slice.call(args);
      }
      return this.setValues(space, values);
    };
    Converter.prototype.setValues = function(space, values) {
      this.space = space;
      this.convs = {};
      this.convs[space] = values;
      return this;
    };
    Converter.prototype.getValues = function(space) {
      var vals = this.convs[space];
      if (!vals) {
        var fspace = this.space, from2 = this.convs[fspace];
        vals = convert[fspace][space](from2);
        this.convs[space] = vals;
      }
      return vals;
    };
    ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
      Converter.prototype[space] = function(vals) {
        return this.routeSpace(space, arguments);
      };
    });
    module2.exports = convert;
  }
});

// node_modules/parse-color/index.js
var require_parse_color = __commonJS({
  "node_modules/parse-color/index.js"(exports2, module2) {
    var convert = require_color_convert2();
    module2.exports = function(cstr) {
      var m, conv, parts, alpha;
      if (m = /^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
        var name = m[1];
        var base = name.replace(/a$/, "");
        var size = base === "cmyk" ? 4 : 3;
        conv = convert[base];
        parts = m[2].replace(/^\s+|\s+$/g, "").split(/\s*,\s*/).map(function(x2, i) {
          if (/%$/.test(x2) && i === size) {
            return parseFloat(x2) / 100;
          } else if (/%$/.test(x2)) {
            return parseFloat(x2);
          }
          return parseFloat(x2);
        });
        if (name === base) parts.push(1);
        alpha = parts[size] === void 0 ? 1 : parts[size];
        parts = parts.slice(0, size);
        conv[base] = function() {
          return parts;
        };
      } else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
        var base = cstr.replace(/^#/, "");
        var size = base.length;
        conv = convert.rgb;
        parts = base.split(size === 3 ? /(.)/ : /(..)/);
        parts = parts.filter(Boolean).map(function(x2) {
          if (size === 3) {
            return parseInt(x2 + x2, 16);
          } else {
            return parseInt(x2, 16);
          }
        });
        alpha = 1;
        conv.rgb = function() {
          return parts;
        };
        if (!parts[0]) parts[0] = 0;
        if (!parts[1]) parts[1] = 0;
        if (!parts[2]) parts[2] = 0;
      } else {
        conv = convert.keyword;
        conv.keyword = function() {
          return cstr;
        };
        parts = cstr;
        alpha = 1;
      }
      var res = {
        rgb: void 0,
        hsl: void 0,
        hsv: void 0,
        cmyk: void 0,
        keyword: void 0,
        hex: void 0
      };
      try {
        res.rgb = conv.rgb(parts);
      } catch (e) {
      }
      try {
        res.hsl = conv.hsl(parts);
      } catch (e) {
      }
      try {
        res.hsv = conv.hsv(parts);
      } catch (e) {
      }
      try {
        res.cmyk = conv.cmyk(parts);
      } catch (e) {
      }
      try {
        res.keyword = conv.keyword(parts);
      } catch (e) {
      }
      if (res.rgb) res.hex = "#" + res.rgb.map(function(x2) {
        var s = x2.toString(16);
        if (s.length === 1) return "0" + s;
        return s;
      }).join("");
      if (res.rgb) res.rgba = res.rgb.concat(alpha);
      if (res.hsl) res.hsla = res.hsl.concat(alpha);
      if (res.hsv) res.hsva = res.hsv.concat(alpha);
      if (res.cmyk) res.cmyka = res.cmyk.concat(alpha);
      return res;
    };
  }
});

// node_modules/looks-same/lib/img-buffer/buffer.js
var require_buffer2 = __commonJS({
  "node_modules/looks-same/lib/img-buffer/buffer.js"(exports2, module2) {
    "use strict";
    var ImageBase = require_image_base();
    module2.exports = class IMGBuffer extends ImageBase {
      constructor(buffer) {
        super();
        this._buffer = buffer;
      }
      get buffer() {
        return this._buffer;
      }
    };
  }
});

// node_modules/looks-same/lib/img-buffer/original-buffer.js
var require_original_buffer = __commonJS({
  "node_modules/looks-same/lib/img-buffer/original-buffer.js"(exports2, module2) {
    "use strict";
    var IMGBuffer = require_buffer2();
    var IMG_WIDTH_OFFSET = 16;
    var IMG_HEIGHT_OFFSET = 20;
    module2.exports = class OriginalIMGBuffer extends IMGBuffer {
      getActualCoord(x2, y) {
        return { x: x2, y };
      }
      get width() {
        return this._buffer.readUInt32BE(IMG_WIDTH_OFFSET);
      }
      get height() {
        return this._buffer.readUInt32BE(IMG_HEIGHT_OFFSET);
      }
    };
  }
});

// node_modules/looks-same/lib/img-buffer/bounded-buffer.js
var require_bounded_buffer = __commonJS({
  "node_modules/looks-same/lib/img-buffer/bounded-buffer.js"(exports2, module2) {
    "use strict";
    var IMGBuffer = require_buffer2();
    module2.exports = class BoundedIMGBuffer extends IMGBuffer {
      constructor(buffer, boundingBox) {
        super(buffer);
        this._boundingBox = boundingBox;
      }
      getActualCoord(x2, y) {
        return { x: x2 + this._boundingBox.left, y: y + this._boundingBox.top };
      }
      get width() {
        return this._boundingBox.right - this._boundingBox.left + 1;
      }
      get height() {
        return this._boundingBox.bottom - this._boundingBox.top + 1;
      }
      get boundingBox() {
        return this._boundingBox;
      }
    };
  }
});

// node_modules/looks-same/lib/img-buffer/index.js
var require_img_buffer = __commonJS({
  "node_modules/looks-same/lib/img-buffer/index.js"(exports2) {
    "use strict";
    var fs2 = require_lib();
    var NestedError = require_nested_error_stacks();
    var OriginalBuffer = require_original_buffer();
    var BoundedBuffer = require_bounded_buffer();
    exports2.create = (buffer, { boundingBox } = {}) => {
      return boundingBox ? BoundedBuffer.create(buffer, boundingBox) : OriginalBuffer.create(buffer);
    };
    exports2.fromFile = async (filePath, opts = {}) => {
      try {
        const buffer = await fs2.readFile(filePath);
        return exports2.create(buffer, opts);
      } catch (err) {
        throw new NestedError(`Can't load img file ${filePath}`, err);
      }
    };
  }
});

// node_modules/looks-same/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/looks-same/lib/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      JND: 2.3,
      // Just noticeable difference if ciede2000 >= JND then colors difference is noticeable by human eye
      REQUIRED_IMAGE_FIELDS: ["source", "boundingBox"],
      REQUIRED_BOUNDING_BOX_FIELDS: ["left", "top", "right", "bottom"],
      CLUSTERS_SIZE: 10,
      DIFF_IMAGE_CHANNELS: 3
    };
  }
});

// node_modules/js-graph-algorithms/src/jsgraphs.js
var require_jsgraphs = __commonJS({
  "node_modules/js-graph-algorithms/src/jsgraphs.js"(exports2, module2) {
    var jsgraphs = jsgraphs || {};
    (function(jss) {
      jss.less = function(a1, a2, compare) {
        return compare(a1, a2) < 0;
      };
      jss.exchange = function(a, i, j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      };
      var StackNode = function(value) {
        this.value = value;
        this.next = null;
      };
      jss.StackNode = StackNode;
      var Stack = function() {
        this.N = 0;
        this.first = null;
      };
      Stack.prototype.push = function(a) {
        this.first = this._push(this.first, a);
      };
      Stack.prototype._push = function(x2, a) {
        if (x2 == null) {
          this.N++;
          return new jss.StackNode(a);
        }
        var oldX = x2;
        this.N++;
        x2 = new jss.StackNode(a);
        x2.next = oldX;
        return x2;
      };
      Stack.prototype.pop = function() {
        if (this.first == null) {
          return void 0;
        }
        var oldFirst = this.first;
        var item = oldFirst.value;
        this.first = oldFirst.next;
        this.N--;
        return item;
      };
      Stack.prototype.size = function() {
        return this.N;
      };
      Stack.prototype.isEmpty = function() {
        return this.N == 0;
      };
      Stack.prototype.peep = function() {
        if (this.first == null) {
          return void 0;
        }
        return this.first.value;
      };
      Stack.prototype.toArray = function() {
        var result = [];
        x = this.first;
        while (x != null) {
          result.push(x.value);
          x = x.next;
        }
        return result;
      };
      jss.Stack = Stack;
      var QueueNode = function(a) {
        this.value = a;
        this.next = null;
      };
      jss.QueueNode = QueueNode;
      var Queue = function() {
        this.first = null;
        this.last = null;
        this.N = 0;
      };
      Queue.prototype.enqueue = function(item) {
        var oldLast = this.last;
        this.last = new jss.QueueNode(item);
        if (oldLast != null) {
          oldLast.next = this.last;
        }
        if (this.first == null) {
          this.first = this.last;
        }
        this.N++;
      };
      Queue.prototype.dequeue = function() {
        if (this.first == null) {
          return void 0;
        }
        var oldFirst = this.first;
        var item = oldFirst.value;
        this.first = oldFirst.next;
        if (this.first == null) {
          this.last = null;
        }
        this.N--;
        return item;
      };
      Queue.prototype.size = function() {
        return this.N;
      };
      Queue.prototype.isEmpty = function() {
        return this.N == 0;
      };
      Queue.prototype.toArray = function() {
        var result = [];
        var x2 = this.first;
        while (x2 != null) {
          result.push(x2.value);
          x2 = x2.next;
        }
        return result;
      };
      jss.Queue = Queue;
      var MinPQ = function(compare) {
        this.s = [];
        this.N = 0;
        if (!compare) {
          compare = function(a1, a2) {
            return a1 - a2;
          };
        }
        this.compare = compare;
      };
      MinPQ.prototype.enqueue = function(item) {
        while (this.s.lengh <= this.N + 1) {
          this.s.push(0);
        }
        this.s[++this.N] = item;
        this.swim(this.N);
      };
      MinPQ.prototype.swim = function(k) {
        while (k > 1) {
          var parent = Math.floor(k / 2);
          if (jss.less(this.s[k], this.s[parent], this.compare)) {
            jss.exchange(this.s, k, parent);
            k = parent;
          } else {
            break;
          }
        }
      };
      MinPQ.prototype.delMin = function() {
        if (this.N == 0) {
          return void 0;
        }
        var item = this.s[1];
        jss.exchange(this.s, 1, this.N--);
        this.sink(1);
        return item;
      };
      MinPQ.prototype.sink = function(k) {
        while (k * 2 <= this.N) {
          var child = 2 * k;
          if (child < this.N && jss.less(this.s[child + 1], this.s[child], this.compare)) {
            child++;
          }
          if (jss.less(this.s[child], this.s[k], this.compare)) {
            jss.exchange(this.s, child, k);
            k = child;
          } else {
            break;
          }
        }
      };
      MinPQ.prototype.size = function() {
        return this.N;
      };
      MinPQ.prototype.isEmpty = function() {
        return this.N == 0;
      };
      jss.MinPQ = MinPQ;
      var QuickUnion = function(V) {
        this.id = [];
        for (var v = 0; v < V; ++v) {
          this.id.push(v);
        }
      };
      QuickUnion.prototype.union = function(v, w) {
        var q = this.root(v);
        var p = this.root(w);
        if (p != q) {
          this.id[p] = q;
        }
      };
      QuickUnion.prototype.root = function(q) {
        while (this.id[q] != q) {
          q = this.id[q];
        }
        return q;
      };
      QuickUnion.prototype.connected = function(v, w) {
        return this.root(v) == this.root(w);
      };
      jss.QuickUnion = QuickUnion;
      var IndexMinPQ = function(N, compare) {
        this.keys = [];
        this.pq = [];
        this.qp = [];
        for (var i = 0; i <= N; ++i) {
          this.keys.push(null);
          this.pq.push(0);
          this.qp.push(-1);
        }
        this.N = 0;
        if (!compare) {
          compare = function(a1, a2) {
            return a1 - a2;
          };
        }
        this.compare = compare;
      };
      IndexMinPQ.prototype.insert = function(index, key) {
        this.keys[index] = key;
        this.pq[++this.N] = index;
        this.qp[index] = this.N;
        this.swim(this.N);
      };
      IndexMinPQ.prototype.decreaseKey = function(index, key) {
        if (jss.less(key, this.keys[index], this.compare)) {
          this.keys[index] = key;
          this.swim(this.qp[index]);
        }
      };
      IndexMinPQ.prototype.minKey = function() {
        return this.keys[this.pq[1]];
      };
      IndexMinPQ.prototype.min = function() {
        return this.pq[1];
      };
      IndexMinPQ.prototype.delMin = function() {
        var key = this.pq[1];
        jss.exchange(this.pq, 1, this.N);
        this.qp[this.pq[1]] = 1;
        this.qp[this.pq[this.N]] = -1;
        this.keys[this.pq[this.N]] = null;
        this.N--;
        this.sink(1);
        return key;
      };
      IndexMinPQ.prototype.swim = function(k) {
        while (k > 1) {
          var parent = Math.floor(k / 2);
          if (jss.less(this.keys[this.pq[k]], this.keys[this.pq[parent]], this.compare)) {
            jss.exchange(this.pq, k, parent);
            this.qp[this.pq[k]] = k;
            this.qp[this.pq[parent]] = parent;
            k = parent;
          } else {
            break;
          }
        }
      };
      IndexMinPQ.prototype.sink = function(k) {
        while (2 * k <= this.N) {
          var child = k * 2;
          if (child < this.N && jss.less(this.keys[this.pq[child + 1]], this.keys[this.pq[child]], this.compare)) {
            child++;
          }
          if (jss.less(this.keys[this.pq[child]], this.keys[this.pq[k]], this.compare)) {
            jss.exchange(this.pq, k, child);
            this.qp[this.pq[k]] = k;
            this.qp[this.pq[child]] = child;
            k = child;
          } else {
            break;
          }
        }
      };
      IndexMinPQ.prototype.containsIndex = function(index) {
        return this.qp[index] != -1;
      };
      IndexMinPQ.prototype.isEmpty = function() {
        return this.N == 0;
      };
      IndexMinPQ.prototype.size = function() {
        return this.N;
      };
      jss.IndexMinPQ = IndexMinPQ;
      var Graph = function(V) {
        this.V = V;
        this.adjList = [];
        this.nodeInfo = [];
        this.edges = {};
        for (var i = 0; i < V; ++i) {
          this.adjList.push([]);
          this.nodeInfo.push({});
        }
      };
      Graph.prototype.addEdge = function(v, w) {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
        var edge_id = v + "_" + w;
        if (v > w) {
          edge_id = w + "_" + v;
        }
        this.edges[edge_id] = new jss.Edge(v, w, 0);
      };
      Graph.prototype.adj = function(v) {
        return this.adjList[v];
      };
      Graph.prototype.node = function(v) {
        return this.nodeInfo[v];
      };
      Graph.prototype.edge = function(v, w) {
        var edge_id = v + "_" + w;
        if (v > w) {
          edge_id = w + "_" + v;
        }
        if (edge_id in this.edges) {
          return this.edges[edge_id];
        }
        return null;
      };
      jss.Graph = Graph;
      var DiGraph = function(V) {
        this.V = V;
        this.adjList = [];
        this.nodeInfo = [];
        this.edges = {};
        for (var v = 0; v < V; ++v) {
          this.adjList.push([]);
          this.nodeInfo.push({});
        }
      };
      DiGraph.prototype.addEdge = function(v, w) {
        this.adjList[v].push(w);
        var edge_id = v + "_" + w;
        this.edges[edge_id] = new jss.Edge(v, w, 0);
      };
      DiGraph.prototype.edge = function(v, w) {
        var edge_id = v + "_" + w;
        if (edge_id in this.edges) {
          return this.edges[edge_id];
        } else {
          return null;
        }
      };
      DiGraph.prototype.adj = function(v) {
        return this.adjList[v];
      };
      DiGraph.prototype.node = function(v) {
        return this.nodeInfo[v];
      };
      DiGraph.prototype.reverse = function() {
        var g2 = new DiGraph(this.V);
        for (var v = 0; v < this.V; ++v) {
          var adj_v = this.adjList[v];
          for (var i = 0; i < adj_v.length; ++i) {
            var w = adj_v[i];
            g2.addEdge(w, v);
          }
        }
        return g2;
      };
      jss.DiGraph = DiGraph;
      var Edge = function(v, w, weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
      };
      Edge.prototype.either = function() {
        return this.v;
      };
      Edge.prototype.other = function(x2) {
        return x2 == this.v ? this.w : this.v;
      };
      Edge.prototype.from = function() {
        return this.v;
      };
      Edge.prototype.to = function() {
        return this.w;
      };
      jss.Edge = Edge;
      var WeightedGraph = function(V) {
        this.V = V;
        this.adjList = [];
        this.nodeInfo = [];
        for (var v = 0; v < V; ++v) {
          this.adjList.push([]);
          this.nodeInfo.push({});
        }
      };
      WeightedGraph.prototype.adj = function(v) {
        return this.adjList[v];
      };
      WeightedGraph.prototype.edge = function(v, w) {
        var adj_v = this.adjList[v];
        for (var i = 0; i < adj_v.length; ++i) {
          var x2 = adj_v[i].other(v);
          if (x2 == w) {
            return adj_v[i];
          }
        }
        return null;
      };
      WeightedGraph.prototype.node = function(v) {
        return this.nodeInfo[v];
      };
      WeightedGraph.prototype.addEdge = function(e) {
        var v = e.either();
        var w = e.other(v);
        this.adjList[v].push(e);
        this.adjList[w].push(e);
      };
      jss.WeightedGraph = WeightedGraph;
      var WeightedDiGraph = function(V) {
        WeightedGraph.call(this, V);
      };
      WeightedDiGraph.prototype = Object.create(jss.WeightedGraph.prototype);
      WeightedDiGraph.prototype.addEdge = function(e) {
        var v = e.from();
        this.adjList[v].push(e);
      };
      WeightedDiGraph.prototype.edge = function(v, w) {
        var adj_v = this.adjList[v];
        for (var i = 0; i < adj_v.length; ++i) {
          var x2 = adj_v[i].other(v);
          if (x2 == w) {
            return adj_v[i];
          }
        }
        return null;
      };
      WeightedDiGraph.prototype.toDiGraph = function() {
        var g2 = new jss.DiGraph(this.V);
        for (var v = 0; v < this.V; ++v) {
          var adj_v = this.adjList[v];
          for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            var w = e.other(v);
            g2.addEdge(v, w);
          }
        }
        return g2;
      };
      jss.WeightedDiGraph = WeightedDiGraph;
      var FlowEdge = function(v, w, capacity) {
        this.v = v;
        this.w = w;
        this.capacity = capacity;
        this.flow = 0;
      };
      FlowEdge.prototype.residualCapacityTo = function(x2) {
        if (x2 == this.v) {
          return this.flow;
        } else {
          return this.capacity - this.flow;
        }
      };
      FlowEdge.prototype.addResidualFlowTo = function(x2, deltaFlow) {
        if (x2 == this.v) {
          this.flow -= deltaFlow;
        } else if (x2 == this.w) {
          this.flow += deltaFlow;
        }
      };
      FlowEdge.prototype.from = function() {
        return this.v;
      };
      FlowEdge.prototype.to = function() {
        return this.w;
      };
      FlowEdge.prototype.other = function(x2) {
        return x2 == this.v ? this.w : this.v;
      };
      jss.FlowEdge = FlowEdge;
      var FlowNetwork = function(V) {
        this.V = V;
        this.adjList = [];
        this.nodeInfo = [];
        for (var v = 0; v < V; ++v) {
          this.adjList.push([]);
          this.nodeInfo.push({});
        }
      };
      FlowNetwork.prototype.node = function(v) {
        return this.nodeInfo[v];
      };
      FlowNetwork.prototype.edge = function(v, w) {
        var adj_v = this.adjList[v];
        for (var i = 0; i < adj_v.length; ++i) {
          var x2 = adj_v[i].other(v);
          if (x2 == w) {
            return adj_v[i];
          }
        }
        return null;
      };
      FlowNetwork.prototype.addEdge = function(e) {
        var v = e.from();
        this.adjList[v].push(e);
        var w = e.other(v);
        this.adjList[w].push(e);
      };
      FlowNetwork.prototype.adj = function(v) {
        return this.adjList[v];
      };
      jss.FlowNetwork = FlowNetwork;
      var DepthFirstSearch = function(G, s) {
        this.s = s;
        var V = G.V;
        this.marked = [];
        this.edgeTo = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.edgeTo.push(-1);
        }
        this.dfs(G, s);
      };
      DepthFirstSearch.prototype.dfs = function(G, v) {
        this.marked[v] = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
          var w = adj_v[i];
          if (!this.marked[w]) {
            this.edgeTo[w] = v;
            this.dfs(G, w);
          }
        }
      };
      DepthFirstSearch.prototype.hasPathTo = function(v) {
        return this.marked[v];
      };
      DepthFirstSearch.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        if (v == this.s) return [v];
        for (var x2 = v; x2 != this.s; x2 = this.edgeTo[x2]) {
          path.push(x2);
        }
        path.push(this.s);
        return path.toArray();
      };
      jss.DepthFirstSearch = DepthFirstSearch;
      var BreadthFirstSearch = function(G, s) {
        var V = G.V;
        this.s = s;
        var queue = new jss.Queue();
        queue.enqueue(s);
        this.marked = [];
        this.edgeTo = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.edgeTo.push(-1);
        }
        while (!queue.isEmpty()) {
          var v = queue.dequeue();
          this.marked[v] = true;
          var adj_v = G.adj(v);
          for (var i = 0; i < adj_v.length; ++i) {
            var w = adj_v[i];
            if (!this.marked[w]) {
              this.edgeTo[w] = v;
              queue.enqueue(w);
            }
          }
        }
      };
      BreadthFirstSearch.prototype.hasPathTo = function(v) {
        return this.marked[v];
      };
      BreadthFirstSearch.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        if (v == this.s) return [v];
        for (var x2 = v; x2 != this.s; x2 = this.edgeTo[x2]) {
          path.push(x2);
        }
        path.push(this.s);
        return path.toArray();
      };
      jss.BreadthFirstSearch = BreadthFirstSearch;
      var ConnectedComponents = function(G) {
        this.count = 0;
        var V = G.V;
        this.marked = [];
        this.id = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.id.push(-1);
        }
        for (var v = 0; v < V; ++v) {
          if (!this.marked[v]) {
            this.dfs(G, v);
            this.count++;
          }
        }
      };
      ConnectedComponents.prototype.dfs = function(G, v) {
        this.marked[v] = true;
        this.id[v] = this.count;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
          var w = adj_v[i];
          if (!this.marked[w]) {
            this.dfs(G, w);
          }
        }
      };
      ConnectedComponents.prototype.componentId = function(v) {
        return this.id[v];
      };
      ConnectedComponents.prototype.componentCount = function() {
        return this.count;
      };
      jss.ConnectedComponents = ConnectedComponents;
      var TopologicalSort = function(G) {
        this.postOrder = new jss.Stack();
        this.marked = [];
        var V = G.V;
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
        }
        for (var v = 0; v < V; ++v) {
          if (!this.marked[v]) {
            this.dfs(G, v);
          }
        }
      };
      TopologicalSort.prototype.dfs = function(G, v) {
        this.marked[v] = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
          var w = adj_v[i];
          if (!this.marked[w]) {
            this.dfs(G, w);
          }
        }
        this.postOrder.push(v);
      };
      TopologicalSort.prototype.order = function() {
        return this.postOrder.toArray();
      };
      jss.TopologicalSort = TopologicalSort;
      var StronglyConnectedComponents = function(G) {
        var V = G.V;
        this.count = 0;
        this.marked = [];
        this.id = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.id.push(-1);
        }
        var order = new jss.TopologicalSort(G.reverse()).order();
        for (var i = 0; i < order.length; ++i) {
          var v = order[i];
          if (!this.marked[v]) {
            this.dfs(G, v);
            this.count++;
          }
        }
      };
      StronglyConnectedComponents.prototype.dfs = function(G, v) {
        this.marked[v] = true;
        this.id[v] = this.count;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
          var w = adj_v[i];
          if (!this.marked[w]) {
            this.dfs(G, w);
          }
        }
      };
      StronglyConnectedComponents.prototype.componentId = function(v) {
        return this.id[v];
      };
      StronglyConnectedComponents.prototype.componentCount = function() {
        return this.count;
      };
      jss.StronglyConnectedComponents = StronglyConnectedComponents;
      var KruskalMST = function(G) {
        var V = G.V;
        var pq = new jss.MinPQ(function(e1, e2) {
          return e1.weight - e2.weight;
        });
        for (var v = 0; v < G.V; ++v) {
          var adj_v = G.adj(v);
          for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            if (e.either() != v) {
              continue;
            }
            pq.enqueue(e);
          }
        }
        this.mst = [];
        var uf = new jss.QuickUnion(V);
        while (!pq.isEmpty() && this.mst.length < V - 1) {
          var e = pq.delMin();
          var v = e.either();
          var w = e.other(v);
          if (!uf.connected(v, w)) {
            uf.union(v, w);
            this.mst.push(e);
          }
        }
      };
      jss.KruskalMST = KruskalMST;
      var LazyPrimMST = function(G) {
        var V = G.V;
        this.marked = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
        }
        this.pq = new jss.MinPQ(function(e1, e2) {
          return e1.weight - e2.weight;
        });
        this.mst = [];
        this.visit(G, 0);
        while (!this.pq.isEmpty() && this.mst.length < V - 1) {
          var e = this.pq.delMin();
          var v = e.either();
          var w = e.other(v);
          if (this.marked[v] && this.marked[w]) continue;
          this.mst.push(e);
          if (!this.marked[v]) this.visit(G, v);
          if (!this.marked[w]) this.visit(G, w);
        }
      };
      LazyPrimMST.prototype.visit = function(G, v) {
        this.marked[v] = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
          var e = adj_v[i];
          if (!this.marked[e.other(v)]) {
            this.pq.enqueue(e);
          }
        }
      };
      jss.LazyPrimMST = LazyPrimMST;
      var EagerPrimMST = function(G) {
        var V = G.V;
        this.pq = new jss.IndexMinPQ(V, function(e1, e2) {
          return e1.weight - e2.weight;
        });
        this.marked = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
        }
        this.mst = [];
        this.visit(G, 0);
        while (!this.pq.isEmpty()) {
          var e = this.pq.minKey();
          var w = this.pq.delMin();
          this.mst.push(e);
          if (!this.marked[w]) {
            this.visit(G, w);
          }
        }
      };
      EagerPrimMST.prototype.visit = function(G, v) {
        this.marked[v] = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
          var e = adj_v[i];
          var w = e.other(v);
          if (this.marked[w]) continue;
          if (this.pq.containsIndex(w)) {
            this.pq.decreaseKey(w, e);
          } else {
            this.pq.insert(w, e);
          }
        }
      };
      jss.EagerPrimMST = EagerPrimMST;
      var Dijkstra = function(G, s) {
        var V = G.V;
        this.s = s;
        this.marked = [];
        this.edgeTo = [];
        this.cost = [];
        this.pq = new jss.IndexMinPQ(V, function(cost1, cost2) {
          return cost1, cost2;
        });
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.edgeTo.push(null);
          this.cost.push(Number.MAX_VALUE);
        }
        this.cost[s] = 0;
        this.pq.insert(s, this.cost[s]);
        while (!this.pq.isEmpty()) {
          var v = this.pq.delMin();
          this.marked[v] = true;
          var adj_v = G.adj(v);
          for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            this.relax(e);
          }
        }
      };
      Dijkstra.prototype.relax = function(e) {
        var v = e.from();
        var w = e.to();
        if (this.cost[w] > this.cost[v] + e.weight) {
          this.cost[w] = this.cost[v] + e.weight;
          this.edgeTo[w] = e;
          if (this.pq.containsIndex(w)) {
            this.pq.decreaseKey(w, this.cost[w]);
          } else {
            this.pq.insert(w, this.cost[w]);
          }
        }
      };
      Dijkstra.prototype.hasPathTo = function(v) {
        return this.marked[v];
      };
      Dijkstra.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        for (var x2 = v; x2 != this.s; x2 = this.edgeTo[x2].other(x2)) {
          path.push(this.edgeTo[x2]);
        }
        return path.toArray();
      };
      Dijkstra.prototype.distanceTo = function(v) {
        return this.cost[v];
      };
      jss.Dijkstra = Dijkstra;
      var BellmanFord = function(G, s) {
        var V = G.V;
        this.s = s;
        this.marked = [];
        this.edgeTo = [];
        this.cost = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.edgeTo.push(null);
          this.cost.push(Number.MAX_VALUE);
        }
        this.cost[s] = 0;
        this.marked[s] = true;
        for (var j = 0; j < V; ++j) {
          for (var v = 0; v < V; ++v) {
            var adj_v = G.adj(v);
            for (var i = 0; i < adj_v.length; ++i) {
              var e = adj_v[i];
              this.relax(e);
            }
          }
        }
      };
      BellmanFord.prototype.relax = function(e) {
        var v = e.from();
        var w = e.to();
        if (this.cost[w] > this.cost[v] + e.weight) {
          this.cost[w] = this.cost[v] + e.weight;
          this.marked[w] = true;
          this.edgeTo[w] = e;
        }
      };
      BellmanFord.prototype.hasPathTo = function(v) {
        return this.marked[v];
      };
      BellmanFord.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        for (var x2 = v; x2 != this.s; x2 = this.edgeTo[x2].other(x2)) {
          path.push(this.edgeTo[x2]);
        }
        return path.toArray();
      };
      BellmanFord.prototype.distanceTo = function(v) {
        return this.cost[v];
      };
      jss.BellmanFord = BellmanFord;
      var TopologicalSortShortestPaths = function(G, s) {
        var V = G.V;
        this.s = s;
        this.marked = [];
        this.edgeTo = [];
        this.cost = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.edgeTo.push(null);
          this.cost.push(Number.MAX_VALUE);
        }
        this.cost[s] = 0;
        this.marked[s] = true;
        var order = new jss.TopologicalSort(G.toDiGraph()).order();
        for (var j = 0; j < order.length; ++j) {
          var v = order[j];
          var adj_v = G.adj(v);
          for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            this.relax(e);
          }
        }
      };
      TopologicalSortShortestPaths.prototype.relax = function(e) {
        var v = e.from();
        var w = e.to();
        if (this.cost[w] > this.cost[v] + e.weight) {
          this.cost[w] = this.cost[v] + e.weight;
          this.marked[w] = true;
          this.edgeTo[w] = e;
        }
      };
      TopologicalSortShortestPaths.prototype.hasPathTo = function(v) {
        return this.marked[v];
      };
      TopologicalSortShortestPaths.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        for (var x2 = v; x2 != this.s; x2 = this.edgeTo[x2].other(x2)) {
          path.push(this.edgeTo[x2]);
        }
        return path.toArray();
      };
      TopologicalSortShortestPaths.prototype.distanceTo = function(v) {
        return this.cost[v];
      };
      jss.TopologicalSortShortestPaths = TopologicalSortShortestPaths;
      var FordFulkerson = function(G, s, t) {
        this.value = 0;
        var V = G.V;
        var bottle = Number.MAX_VALUE;
        this.marked = null;
        this.edgeTo = null;
        this.s = s;
        this.t = t;
        while (this.hasAugmentedPath(G)) {
          for (var x2 = this.t; x2 != this.s; x2 = this.edgeTo[x2].other(x2)) {
            bottle = Math.min(bottle, this.edgeTo[x2].residualCapacityTo(x2));
          }
          for (var x2 = this.t; x2 != this.s; x2 = this.edgeTo[x2].other(x2)) {
            this.edgeTo[x2].addResidualFlowTo(x2, bottle);
          }
          this.value += bottle;
        }
      };
      FordFulkerson.prototype.hasAugmentedPath = function(G) {
        var V = G.V;
        this.marked = [];
        this.edgeTo = [];
        for (var v = 0; v < V; ++v) {
          this.marked.push(false);
          this.edgeTo.push(null);
        }
        var queue = new jss.Queue();
        queue.enqueue(this.s);
        this.marked[this.s] = true;
        while (!queue.isEmpty()) {
          var v = queue.dequeue();
          var adj_v = G.adj(v);
          for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            var w = e.other(v);
            if (!this.marked[w] && e.residualCapacityTo(w) > 0) {
              this.edgeTo[w] = e;
              this.marked[w] = true;
              if (w == this.t) {
                return true;
              }
              queue.enqueue(w);
            }
          }
        }
        return false;
      };
      FordFulkerson.prototype.minCut = function(G) {
        var cuts = [];
        var V = G.V;
        for (var v = 0; v < V; ++v) {
          var adj_v = G.adj(v);
          for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            if (e.from() == v && e.residualCapacityTo(e.other(v)) == 0) {
              cuts.push(e);
            }
          }
        }
        return cuts;
      };
      jss.FordFulkerson = FordFulkerson;
    })(jsgraphs);
    var module2 = module2 || {};
    if (module2) {
      module2.exports = jsgraphs;
    }
  }
});

// node_modules/js-graph-algorithms/index.js
var require_js_graph_algorithms = __commonJS({
  "node_modules/js-graph-algorithms/index.js"(exports2, module2) {
    module2.exports = require_jsgraphs();
  }
});

// node_modules/looks-same/lib/diff-clusters/clusters-joiner.js
var require_clusters_joiner = __commonJS({
  "node_modules/looks-same/lib/diff-clusters/clusters-joiner.js"(exports2) {
    "use strict";
    var DiffArea = require_diff_area();
    var jsgraphs = require_js_graph_algorithms();
    var hasOverlap = (cluster1, cluster2) => {
      if (cluster1.left > cluster2.right || cluster2.left > cluster1.right) {
        return false;
      }
      if (cluster1.bottom < cluster2.top || cluster2.bottom < cluster1.top) {
        return false;
      }
      return true;
    };
    var getConnectedComponents = (clusters) => {
      const graph = new jsgraphs.Graph(clusters.length);
      clusters.forEach((c1, i) => {
        clusters.forEach((c2, j) => {
          if (i !== j && hasOverlap(c1.area, c2.area)) {
            graph.addEdge(i, j);
          }
        });
      });
      return new jsgraphs.ConnectedComponents(graph);
    };
    exports2.join = (clusters) => {
      const connectedComponents = getConnectedComponents(clusters);
      return connectedComponents.id.reduce((acc, clusterId, i) => {
        const { left, top, right, bottom } = clusters[i].area;
        if (!acc[clusterId]) {
          acc[clusterId] = DiffArea.create();
        }
        acc[clusterId].update(left, top).update(right, bottom);
        return acc;
      }, []);
    };
  }
});

// node_modules/looks-same/lib/diff-clusters/index.js
var require_diff_clusters = __commonJS({
  "node_modules/looks-same/lib/diff-clusters/index.js"(exports2, module2) {
    "use strict";
    var DiffArea = require_diff_area();
    var { CLUSTERS_SIZE } = require_constants2();
    var clustersJoiner = require_clusters_joiner();
    module2.exports = class DiffClusters {
      constructor(clustersSize) {
        this._clustersSize = clustersSize || CLUSTERS_SIZE;
        this._clusters = [];
      }
      update(x2, y) {
        if (!this._clusters.length) {
          this._clusters.push(DiffArea.create().update(x2, y));
          return;
        }
        this._joinToClusters(x2, y);
        return this;
      }
      _joinToClusters(x2, y) {
        const pointCluster = this._clusters.find((c) => c.isPointInArea(x2, y, this._clustersSize));
        if (!pointCluster) {
          this._clusters.push(DiffArea.create().update(x2, y));
          return;
        }
        pointCluster.update(x2, y);
      }
      get clusters() {
        return clustersJoiner.join(this._clusters).map((c) => c.area);
      }
    };
  }
});

// node_modules/looks-same/lib/validators.js
var require_validators = __commonJS({
  "node_modules/looks-same/lib/validators.js"(exports2) {
    "use strict";
    var _ = require_lodash();
    var { REQUIRED_IMAGE_FIELDS, REQUIRED_BOUNDING_BOX_FIELDS } = require_constants2();
    var validateRequiredFields = (value, fields) => {
      [].concat(fields).forEach((field) => {
        if (!_.hasIn(value, field)) {
          throw new TypeError(`Field "${field}" does not exist in ${JSON.stringify(value)}`);
        }
      });
    };
    var validateBoundingBoxCoords = ({ boundingBox }) => {
      if (boundingBox.left > boundingBox.right) {
        throw new TypeError('"left" coordinate in "boundingBox" field cannot be greater than "right"');
      }
      if (boundingBox.top > boundingBox.bottom) {
        throw new TypeError('"top" coordinate in "boundingBox" field cannot be greater than "bottom"');
      }
    };
    exports2.validateImages = (img1, img2) => {
      [img1, img2].forEach((i) => {
        if (Buffer.isBuffer(i) || !_.isObject(i)) {
          return;
        }
        validateRequiredFields(i, REQUIRED_IMAGE_FIELDS);
        validateRequiredFields(i.boundingBox, REQUIRED_BOUNDING_BOX_FIELDS);
        validateBoundingBoxCoords(i);
      });
    };
  }
});

// node_modules/looks-same/lib/utils.js
var require_utils = __commonJS({
  "node_modules/looks-same/lib/utils.js"(exports2) {
    "use strict";
    var _ = require_lodash();
    var parseColor = require_parse_color();
    var img = require_image2();
    var buffer = require_img_buffer();
    var DiffArea = require_diff_area();
    var DiffClusters = require_diff_clusters();
    var validators = require_validators();
    var areColorsSame = require_same_colors();
    var { DIFF_IMAGE_CHANNELS } = require_constants2();
    exports2.readImgCb = async ({ source, ...opts }) => {
      const readFunc = Buffer.isBuffer(source) ? img.fromBuffer : img.fromFile;
      const image = await readFunc(source, opts);
      await image.init();
      return image;
    };
    exports2.readBufferCb = ({ source, ...opts }) => {
      const readFunc = Buffer.isBuffer(source) ? buffer.create : buffer.fromFile;
      return readFunc(source, opts);
    };
    exports2.readPair = async (first, second, readCb = exports2.readImgCb) => {
      const [firstImg, secondImg] = await Promise.all([first, second].map(readCb));
      return { first: firstImg, second: secondImg };
    };
    var getDiffClusters = (diffClusters, diffArea, { shouldCluster }) => {
      return shouldCluster ? diffClusters.clusters : [diffArea.area];
    };
    exports2.getDiffPixelsCoords = async (img1, img2, predicate, opts = {}) => {
      const stopOnFirstFail = opts.hasOwnProperty("stopOnFirstFail") ? opts.stopOnFirstFail : false;
      const width = Math.min(img1.width, img2.width);
      const height = Math.min(img1.height, img2.height);
      const diffArea = new DiffArea();
      const diffClusters = new DiffClusters(opts.clustersSize);
      return new Promise((resolve) => {
        const processRow = (y) => {
          setImmediate(() => {
            for (let x2 = 0; x2 < width; x2++) {
              const color1 = img1.getPixel(x2, y);
              const color2 = img2.getPixel(x2, y);
              const result = predicate({
                color1,
                color2,
                img1,
                img2,
                x: x2,
                y,
                width,
                height
              });
              if (!result) {
                const { x: actX, y: actY } = img1.getActualCoord(x2, y);
                diffArea.update(actX, actY);
                if (opts.shouldCluster) {
                  diffClusters.update(actX, actY);
                }
                if (stopOnFirstFail) {
                  return resolve({ diffArea, diffClusters: getDiffClusters(diffClusters, diffArea, opts) });
                }
              }
            }
            y++;
            if (y < height) {
              processRow(y);
            } else {
              resolve({ diffArea, diffClusters: getDiffClusters(diffClusters, diffArea, opts) });
            }
          });
        };
        processRow(0);
      });
    };
    exports2.formatImages = (img1, img2) => {
      validators.validateImages(img1, img2);
      return [img1, img2].map((i) => {
        return _.isObject(i) && !Buffer.isBuffer(i) ? i : { source: i, boundingBox: null };
      });
    };
    exports2.areBuffersEqual = (img1, img2) => {
      if (img1.boundingBox || img2.boundingBox) {
        return false;
      }
      return img1.buffer.equals(img2.buffer);
    };
    exports2.parseColorString = (str) => {
      const parsed = parseColor(str || "#ff00ff");
      return {
        R: parsed.rgb[0],
        G: parsed.rgb[1],
        B: parsed.rgb[2]
      };
    };
    exports2.calcDiffImage = async (img1, img2, comparator, { highlightColor, shouldCluster, clustersSize }) => {
      const diffColor = exports2.parseColorString(highlightColor);
      const minHeight = Math.min(img1.height, img2.height);
      const minWidth = Math.min(img1.width, img2.width);
      const maxHeight = Math.max(img1.height, img2.height);
      const maxWidth = Math.max(img1.width, img2.width);
      const totalPixels = maxHeight * maxWidth;
      const metaInfo = { refImg: { size: { width: img1.width, height: img1.height } } };
      const diffBuffer = Buffer.alloc(maxHeight * maxWidth * DIFF_IMAGE_CHANNELS);
      const diffArea = new DiffArea();
      const diffClusters = new DiffClusters(clustersSize);
      let differentPixels = 0;
      let diffBufferPos = 0;
      const markDiff = (x2, y) => {
        diffBuffer[diffBufferPos++] = diffColor.R;
        diffBuffer[diffBufferPos++] = diffColor.G;
        diffBuffer[diffBufferPos++] = diffColor.B;
        differentPixels++;
        diffArea.update(x2, y);
        if (shouldCluster) {
          diffClusters.update(x2, y);
        }
      };
      for (let y = 0; y < maxHeight; y++) {
        for (let x2 = 0; x2 < maxWidth; x2++) {
          if (y >= minHeight || x2 >= minWidth) {
            markDiff(x2, y);
            continue;
          }
          const color1 = img1.getPixel(x2, y);
          const color2 = img2.getPixel(x2, y);
          const areSame = areColorsSame({ color1, color2 }) || comparator({
            img1,
            img2,
            x: x2,
            y,
            color1,
            color2,
            width: maxWidth,
            height: maxHeight,
            minWidth,
            minHeight
          });
          if (areSame) {
            diffBuffer[diffBufferPos++] = color2.R;
            diffBuffer[diffBufferPos++] = color2.G;
            diffBuffer[diffBufferPos++] = color2.B;
          } else {
            markDiff(x2, y);
          }
        }
        if (!(y & 255)) {
          await new Promise(setImmediate);
        }
      }
      let diffImage = null;
      if (differentPixels) {
        diffImage = await img.fromBuffer(diffBuffer, { raw: { width: maxWidth, height: maxHeight, channels: DIFF_IMAGE_CHANNELS } });
        await diffImage.initMeta();
      }
      return {
        equal: !differentPixels,
        metaInfo,
        diffImage,
        differentPixels,
        totalPixels,
        diffBounds: diffArea.area,
        diffClusters: getDiffClusters(diffClusters, diffArea, { shouldCluster })
      };
    };
  }
});

// node_modules/looks-same/index.js
var require_looks_same = __commonJS({
  "node_modules/looks-same/index.js"(exports2, module2) {
    "use strict";
    var _ = require_lodash();
    var colorDiff = require_color_diff();
    var img = require_image2();
    var areColorsSame = require_same_colors();
    var AntialiasingComparator = require_antialiasing_comparator();
    var IgnoreCaretComparator = require_ignore_caret_comparator();
    var DiffArea = require_diff_area();
    var utils = require_utils();
    var { JND } = require_constants2();
    var makeAntialiasingComparator = (comparator, img1, img2, opts) => {
      const antialiasingComparator = new AntialiasingComparator(comparator, img1, img2, opts);
      return (data) => antialiasingComparator.compare(data);
    };
    var makeNoCaretColorComparator = (comparator, pixelRatio) => {
      const caretComparator = new IgnoreCaretComparator(comparator, pixelRatio);
      return (data) => caretComparator.compare(data);
    };
    function makeCIEDE2000Comparator(tolerance) {
      const upperBound = tolerance * 6.2;
      const lowerBound = tolerance * 0.695;
      return function doColorsLookSame(data) {
        if (areColorsSame(data)) {
          return true;
        }
        const lab1 = colorDiff.rgb_to_lab(data.color1);
        const lab2 = colorDiff.rgb_to_lab(data.color2);
        const cie76 = Math.sqrt(
          (lab1.L - lab2.L) * (lab1.L - lab2.L) + (lab1.a - lab2.a) * (lab1.a - lab2.a) + (lab1.b - lab2.b) * (lab1.b - lab2.b)
        );
        if (cie76 >= upperBound) {
          return false;
        }
        if (cie76 <= lowerBound) {
          return true;
        }
        return colorDiff.diff(lab1, lab2) < tolerance;
      };
    }
    var createComparator = (img1, img2, opts) => {
      let comparator = opts.strict ? areColorsSame : makeCIEDE2000Comparator(opts.tolerance);
      if (opts.ignoreAntialiasing) {
        comparator = makeAntialiasingComparator(comparator, img1, img2, opts);
      }
      if (opts.ignoreCaret) {
        comparator = makeNoCaretColorComparator(comparator, opts.pixelRatio);
      }
      return comparator;
    };
    var iterateRect = async (width, height, callback) => {
      return new Promise((resolve) => {
        const processRow = (y) => {
          setImmediate(() => {
            for (let x2 = 0; x2 < width; x2++) {
              callback(x2, y);
            }
            y++;
            if (y < height) {
              processRow(y);
            } else {
              resolve();
            }
          });
        };
        processRow(0);
      });
    };
    var buildDiffImage = async (img1, img2, options) => {
      const width = Math.max(img1.width, img2.width);
      const height = Math.max(img1.height, img2.height);
      const minWidth = Math.min(img1.width, img2.width);
      const minHeight = Math.min(img1.height, img2.height);
      const highlightColor = options.highlightColor;
      const resultBuffer = Buffer.alloc(width * height * 3);
      const setPixel = (buf, x2, y, { R, G, B }) => {
        const pixelInd = (y * width + x2) * 3;
        buf[pixelInd] = R;
        buf[pixelInd + 1] = G;
        buf[pixelInd + 2] = B;
      };
      await iterateRect(width, height, (x2, y) => {
        if (x2 >= minWidth || y >= minHeight) {
          setPixel(resultBuffer, x2, y, highlightColor);
          return;
        }
        const color1 = img1.getPixel(x2, y);
        const color2 = img2.getPixel(x2, y);
        if (!options.comparator({ color1, color2, img1, img2, x: x2, y, width, height, minWidth, minHeight })) {
          setPixel(resultBuffer, x2, y, highlightColor);
        } else {
          setPixel(resultBuffer, x2, y, color1);
        }
      });
      return img.fromBuffer(resultBuffer, { raw: { width, height, channels: 3 } });
    };
    var getToleranceFromOpts = (opts) => {
      if (!_.hasIn(opts, "tolerance")) {
        return JND;
      }
      if (opts.strict) {
        throw new TypeError('Unable to use "strict" and "tolerance" options together');
      }
      return opts.tolerance;
    };
    var prepareOpts = (opts) => {
      opts = opts || {};
      opts.tolerance = getToleranceFromOpts(opts);
      return _.defaults(opts, {
        ignoreCaret: true,
        ignoreAntialiasing: true,
        antialiasingTolerance: 0
      });
    };
    var getMaxDiffBounds = (first, second) => {
      const { x: left, y: top } = first.getActualCoord(0, 0);
      return {
        left,
        top,
        right: left + Math.max(first.width, second.width) - 1,
        bottom: top + Math.max(first.height, second.height) - 1
      };
    };
    module2.exports = exports2 = async function looksSame(image1, image2, opts = {}) {
      opts = prepareOpts(opts);
      [image1, image2] = utils.formatImages(image1, image2);
      const { first, second } = await utils.readPair(image1, image2, utils.readBufferCb);
      const areBuffersEqual = utils.areBuffersEqual(first, second);
      const refImg = { size: { width: first.width, height: first.height } };
      const metaInfo = { refImg };
      if (areBuffersEqual) {
        const diffBounds2 = new DiffArea().area;
        return { equal: true, metaInfo, diffBounds: diffBounds2, diffClusters: [diffBounds2], diffImage: null };
      }
      if (!opts.createDiffImage && (first.width !== second.width || first.height !== second.height)) {
        const diffBounds2 = getMaxDiffBounds(first, second);
        return { equal: false, metaInfo, diffBounds: diffBounds2, diffClusters: [diffBounds2] };
      }
      const { first: img1, second: img2 } = await utils.readPair(
        { ...image1, source: first.buffer },
        { ...image2, source: second.buffer },
        utils.readImgCb
      );
      const comparator = createComparator(img1, img2, opts);
      const { stopOnFirstFail, shouldCluster, clustersSize, createDiffImage, highlightColor } = opts;
      if (createDiffImage) {
        return utils.calcDiffImage(img1, img2, comparator, { highlightColor, shouldCluster, clustersSize });
      }
      const { diffArea, diffClusters } = await utils.getDiffPixelsCoords(img1, img2, comparator, { stopOnFirstFail, shouldCluster, clustersSize });
      const diffBounds = diffArea.area;
      const equal = diffArea.isEmpty();
      return { equal, metaInfo, diffBounds, diffClusters };
    };
    exports2.getDiffArea = async function(image1, image2, opts = {}) {
      opts = prepareOpts(opts);
      [image1, image2] = utils.formatImages(image1, image2);
      const { first, second } = await utils.readPair(image1, image2);
      if (first.width !== second.width || first.height !== second.height) {
        return getMaxDiffBounds(first, second);
      }
      const comparator = createComparator(first, second, opts);
      const { diffArea } = await utils.getDiffPixelsCoords(first, second, comparator, opts);
      if (diffArea.isEmpty()) {
        return null;
      }
      return diffArea.area;
    };
    exports2.createDiff = async function saveDiff(opts) {
      opts = prepareOpts(opts);
      opts.extension = opts.extension || "png";
      const [image1, image2] = utils.formatImages(opts.reference, opts.current);
      const { first, second } = await utils.readPair(image1, image2);
      const diffImage = await buildDiffImage(first, second, {
        highlightColor: utils.parseColorString(opts.highlightColor),
        comparator: createComparator(first, second, opts)
      });
      return opts.diff === void 0 ? diffImage.createBuffer(opts.extension) : diffImage.save(opts.diff);
    };
    exports2.colors = (color1, color2, opts) => {
      opts = opts || {};
      if (opts.tolerance === void 0) {
        opts.tolerance = JND;
      }
      const comparator = makeCIEDE2000Comparator(opts.tolerance);
      return comparator({ color1, color2 });
    };
  }
});

// index.js
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
var screenshots = requireFromDisk("C:\\Users\\user\\Desktop\\\u958B\u767A\\microShot\\node_modules\\node-screenshots\\index.js");
var node_global_key_listener_1 = require_build();
var looks_same_1 = __importDefault(require_looks_same());
var version = package_json_1.default.version;
var prevImage = /* @__PURE__ */ new Map();
var configObj = JSON.parse(fs.readFileSync(__dirname + "/.secret.json").toString());
var URL = configObj === null || configObj === void 0 ? void 0 : configObj.DISCORD_POST_URL;
var windows = screenshots.Window.all();
var keyboard = new node_global_key_listener_1.GlobalKeyboardListener();
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
          result = yield (0, looks_same_1.default)(prevImage.get(i), image.toPngSync(), { tolerance: configObj === null || configObj === void 0 ? void 0 : configObj.TOLERANCE, ignoreAntialiasing: false, antialiasingTolerance: 3 });
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
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

color-diff/index.cjs:
  (**
   * @author Markus Ekholm
   * @copyright 2012-2023 (c) Markus Ekholm <markus at botten dot org >
   * @license Copyright (c) 2012-2023, Markus Ekholm
   * All rights reserved.
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *    * Redistributions of source code must retain the above copyright
   *      notice, this list of conditions and the following disclaimer.
   *    * Redistributions in binary form must reproduce the above copyright
   *      notice, this list of conditions and the following disclaimer in the
   *      documentation and/or other materials provided with the distribution.
   *    * Neither the name of the author nor the
   *      names of its contributors may be used to endorse or promote products
   *      derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL MARKUS EKHOLM BE LIABLE FOR ANY
   * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
   * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)
*/
