# STUDIO VAULT — Template Edition (No AI)

A browser-based product-photo compositor. Upload an original photo, choose a premium dark studio layout, erase a plain background where possible, move/resize/rotate the product, and download JPEG, PNG, or WebP. Logo and lettering pixels are not synthesized or rewritten.

## Run on Windows

1. Extract the ZIP and open PowerShell **in the folder containing `package.json`**.
2. Run `npm run dev` (no npm install required).
3. Open http://localhost:3000.

## Push to GitHub

Create an empty GitHub repository. Upload the **contents of this project folder** to the repo root (not just the ZIP). You may use GitHub's Add file → Upload files, or git CLI.

## Deploy to Vercel

1. Vercel → Add New → Project → Import Git Repository.
2. Framework preset: **Other** (not Next.js).
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy. No environment variables or AI API keys needed.

## Limitations

- This app performs traditional photo compositing, **not generative AI**. It cannot automatically put a garment onto a different model, reconstruct unseen product angles, or produce realistic relighting and cast shadows from arbitrary source photos.
- The four provided reference images are used as style selection cards. To avoid duplicating products in the reference photos, the editor renders reusable **illustrated studio scenes** rather than using those photos as literal backgrounds.
- For clean edges, upload a transparent PNG or photograph against a simple contrasting background and use the manual/magic eraser. Complex backgrounds may need external background removal.
- Brightness is applied to the entire product, including lettering; the pixels are not re-generated, but color/tone and compression can change.
- Processing stays in the browser; photos are not uploaded to a server.
- Keep original photos as the source of truth for product details.

## Files

- `index.html`: editor UI
- `src.js`: browser editing functions
- `assets/*.png`: four reference preset previews
- `scripts/build.mjs`: dependency-free production build
- `scripts/dev.mjs`: dependency-free local preview server
- `vercel.json`: deployment settings
