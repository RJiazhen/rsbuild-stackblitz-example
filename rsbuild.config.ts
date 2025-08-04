import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  output: {
    copy: [
      {
        from: './public',
        globOptions: { ignore: ['**/index.html'] },
      },
    ],
  },
  server: {
    publicDir: {
      copyOnBuild: false,
    },
  },
});
