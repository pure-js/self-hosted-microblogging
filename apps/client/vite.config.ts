/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';
// import browserslist from 'browserslist';
// import { browserslistToTargets } from 'lightningcss';

// const path = require('node:path');

const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/self-hosted-microblogging/' : '/',
  build: {
    emptyOutDir: true,
    cssMinify: 'lightningcss',
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    vanillaExtractPlugin(),
    VitePWA(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  server: {
    // open: true,
  },
  // css: {
  //   transformer: 'lightningcss',
  //   lightningcss: {
  //     targets: browserslistToTargets(browserslist('>= 0.25%')),
  //   },
  // },
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: '/app/',
      },
    ],
  },
});
