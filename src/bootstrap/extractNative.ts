import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

function ensureDir(p: string) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function findNodeFiles(dir: string, base: string): { full: string; rel: string }[] {
  const out: { full: string; rel: string }[] = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...findNodeFiles(full, base));
    } else if (e.isFile() && e.name.endsWith('.node')) {
      out.push({ full, rel: path.relative(base, full) });
    }
  }
  return out;
}

export async function extractNative(): Promise<string | null> {
  try {
    const base = path.join(__dirname, '..', '..', 'node_modules');
    if (!fs.existsSync(base)) return null;
    const nodes = findNodeFiles(base, base);
    if (nodes.length === 0) return null;
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
    } catch (e) {
      // ignore
    }
    if (require.main && (require.main as any).paths) {
      (require.main as any).paths.unshift(tmpRoot);
    }
    return tmpRoot;
  } catch (err) {
    // best-effort; do not block startup
    // eslint-disable-next-line no-console
    console.error('[extractNative] failed:', err);
    return null;
  }
}

// Run on import to perform extraction early at startup
extractNative().catch(() => null);
