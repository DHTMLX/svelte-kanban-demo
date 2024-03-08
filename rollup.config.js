// this file will not afect the sandbox but will
// afect the deployment and dowload

import svelte from "rollup-plugin-svelte";
import css from "rollup-plugin-css-only";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

const onwarn = (warning, onwarn) => {
  return (
    warning.code === "a11y-no-onchange" ||
    warning.code === "a11y-click-events-have-key-events" ||
    onwarn(warning)
  );
};

export default {
  input: "index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js",
  },
  plugins: [
    css({ output: "vendor.css" }),
    svelte({
      compilerOptions: {
        dev: !production,
      },
      onwarn,
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
};
