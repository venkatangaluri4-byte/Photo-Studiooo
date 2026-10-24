import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
const base = resolve(process.argv[2] || '.');
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.css':'text/css; charset=utf-8'};
const port = Number(process.env.PORT || 3000);
createServer(async (req,res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const path = resolve(base, normalize(relative));
    if (path !== base && !path.startsWith(base + sep)) { res.writeHead(403).end(); return; }
    const file = await readFile(path);
    res.writeHead(200, {'Content-Type': mime[extname(path)] || 'application/octet-stream', 'Cache-Control':'no-cache'}).end(file);
  } catch {res.writeHead(404).end('Not found');}
}).listen(port, '0.0.0.0', ()=>console.log(`STUDIO VAULT running at http://localhost:${port}`));
