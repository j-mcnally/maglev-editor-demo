import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import RubyPlugin from 'vite-plugin-ruby'
import { createSvgPlugin } from 'vite-plugin-vue2-svg'
import copy from 'rollup-plugin-copy-merge'
import fg from 'fast-glob'

import * as path from 'path'
import { rmdirSync as rmdir, existsSync as exists } from 'fs'

const maglevPath = process.env.MAGLEV_PATH

export default defineConfig({
  plugins: [
    {
      config(userConfig, env) {
        if (exists(path.resolve(__dirname, 'tmp/src-merged'))) {
          rmdir(path.resolve(__dirname, 'tmp/src-merged'), { recursive: true })
        }
      }
    },
    copy({
      hook: 'config',
      targets: [
        {
          src: path.resolve(maglevPath, 'app/frontend/*'),
          dest: path.resolve(__dirname, 'tmp/src-merged')
        },
        {
          src: path.resolve(__dirname, 'app/frontend/*'),
          dest: path.resolve(__dirname, 'tmp/src-merged')
        }
      ]
    }),
    RubyPlugin(),
    vue(),
    createSvgPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'tmp/src-merged/editor'),
    },
  }
})