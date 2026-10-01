// Minimal static file server for local preview and browser checks.
//   node tools/build/serve.mjs [dir=dist] [port=4173]
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const dir = join(root, process.argv[2] ?? 'dist');
const port = Number(process.argv[3] ?? 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.txt': 'text/plain; charset=utf-8',
};

export function serve(directory = dir, listenPort = port) {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const file = normalize(join(directory, path === '/' ? 'index.html' : path));
    if (!file.startsWith(directory)) {
      res.writeHead(403).end();
      return;
    }
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(body);
    } catch {
      res.writeHead(404).end('Not found');
    }
  });
  return new Promise((resolve) => server.listen(listenPort, () => resolve(server)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await serve();
  console.log(`Serving ${dir} on http://localhost:${port}`);
}
