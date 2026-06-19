// Ambient declaration for side-effect CSS imports (e.g. `import "@/styles/globals.css"`).
// Bundler resolves these; TypeScript needs the declaration to avoid TS2882.
declare module "*.css";
