/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

const outputOptions = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: "src",
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        ...outputOptions,
      },
    ],
    external: [/node_modules/],
    plugins: [
      peerDepsExternal(),
      resolve(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/stories/**", "**/tests/**", "./styles.css"],
      }),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
