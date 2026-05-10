// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static deploy target (Vercel/Netlify/any static host):
//   - Disable the Cloudflare plugin so build output isn't wrapped as a Worker bundle.
//   - Prerender the single landing route into dist/client/index.html so the site
//     can be served as pure static HTML — no serverless function needed.
//   - Drop the Cloudflare-specific `entry: "server"` override (incompatible with
//     non-Worker deployment targets).
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/" }],
  },
});
