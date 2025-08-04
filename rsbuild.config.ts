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
        globOptions: { ignore: ['**/index.html'] }, // 忽略 public/index.html 以防止打包时报错
      },
    ],
  },
  server: {
    publicDir: {
      copyOnBuild: false,
    },
  },
});
