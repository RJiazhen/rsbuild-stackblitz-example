import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
console.log('process.env.JITI_MODULE_CACHE', process.env.JITI_MODULE_CACHE)
export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    setupMiddlewares: (middlewares) => {
      middlewares.unshift((_, __, next) => {
        console.log('require.cache', require.cache)
        const test = require('./test.ts')
        console.log('test: ', test)
        next();
      });
    },
  },
});
