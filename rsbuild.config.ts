import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    setupMiddlewares: (middlewares) => {
      middlewares.unshift((_, __, next) => {
        console.log(require.cache)
        const test = require('./test.ts')
        next();
      });
    },
  },
});
