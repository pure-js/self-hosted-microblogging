/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { reactRouter } from '@react-router/dev/vite';

import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

const ReactCompilerConfig = {};

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/self-hosted-microblogging/' : '/',
  build: {
    emptyOutDir: true,
    cssMinify: 'lightningcss',
  },
  plugins: [
    MillionLint.vite({
      enabled: true,
    }),
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    vanillaExtractPlugin(),
    reactRouter(),
    VitePWA(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: '/app/',
      },
    ],
  },
});
