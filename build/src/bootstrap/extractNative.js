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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractNative = extractNative;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
function ensureDir(p) {
    if (!fs.existsSync(p))
        fs.mkdirSync(p, { recursive: true });
}
function findNodeFiles(dir, base) {
    const out = [];
    if (!fs.existsSync(dir))
        return out;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
            out.push(...findNodeFiles(full, base));
        }
        else if (e.isFile() && e.name.endsWith('.node')) {
            out.push({ full, rel: path.relative(base, full) });
        }
    }
    return out;
}
function extractNative() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const base = path.join(__dirname, '..', '..', 'node_modules');
            if (!fs.existsSync(base))
                return null;
            const nodes = findNodeFiles(base, base);
            if (nodes.length === 0)
                return null;
            const tmpRoot = path.join(os.tmpdir(), `microshot2_native_${process.pid}`);
            for (const n of nodes) {
                const outPath = path.join(tmpRoot, n.rel);
                ensureDir(path.dirname(outPath));
                const data = fs.readFileSync(n.full);
                fs.writeFileSync(outPath, data, { mode: 0o755 });
            }
            // Expose the extracted path for existing requireFromDisk calls
            process.env.MICROSHOT_NODE_MODULES = tmpRoot;
            // Help Node resolver find modules
            try {
                // @ts-ignore - dynamic require
                const Module = require('module');
                if (Module && Module.globalPaths && Module.globalPaths.indexOf(tmpRoot) === -1) {
                    Module.globalPaths.unshift(tmpRoot);
                }
            }
            catch (e) {
                // ignore
            }
            if (require.main && require.main.paths) {
                require.main.paths.unshift(tmpRoot);
            }
            return tmpRoot;
        }
        catch (err) {
            // best-effort; do not block startup
            // eslint-disable-next-line no-console
            console.error('[extractNative] failed:', err);
            return null;
        }
    });
}
// Run on import to perform extraction early at startup
extractNative().catch(() => null);
