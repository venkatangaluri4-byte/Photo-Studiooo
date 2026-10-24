import { mkdir, copyFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
const root = process.cwd();
const out = join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'assets'), { recursive: true });
for (const name of ['index.html', 'src.js']) await copyFile(join(root, name), join(out, name));
for (const name of await readdir(join(root, 'assets'))) await copyFile(join(root, 'assets', name), join(out, 'assets', name));
console.log('Build successful: dist/ (static app, no external dependencies)');
