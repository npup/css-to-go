import { defineConfig } from "astro/config";

const isProd = "production" === process.env.NODE_ENV;

const outDir = isProd ? "docs" : "docs-local";

console.info("Astri building", { isProd, outDir });

export default defineConfig({
    outDir,
    server: {
        port: 3003,
    },
});
