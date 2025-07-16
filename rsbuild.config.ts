import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    setupMiddlewares: (middlewares) => {
      middlewares.push((req, res, next) => {
        console.log('require.cache', require.cache)
        const test = requrie('./test.ts')
        next();
      });
    },
  },
});
