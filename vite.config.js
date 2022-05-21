import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin } from 'vite-plugin-vue2'
import viteCompression from 'vite-plugin-compression';
import viteRequireContext from '@originjs/vite-plugin-require-context'
import fs from 'fs'
import path from 'path';
import dotenv from 'dotenv'
const HOST = "0.0.0.0"
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

export default ( /** if you want to use mode : { mode }*/ ) => {
    const NODE_ENV = process.env.NODE_ENV || 'development'
    const envFiles = [
        `.env.${NODE_ENV}`
    ]
    for (const file of envFiles) {
        const envConfig = dotenv.parse(fs.readFileSync(file))
        for (const k in envConfig) {
            process.env[k] = envConfig[k]
        }
    }
    return defineConfig({
        base: "./",
        server: {
            host: HOST,
            port: process.env.VITE_PORT,
        },
        resolve: {
            alias: [{
                    find: '@/',
                    replacement: REPLACEMENT,
                },
                {
                    find: 'src/',
                    replacement: REPLACEMENT,
                },
                // 适配 ~/xxxx
                { find: /* ~/ */ /^~(?=\/)/, replacement: path.join(__dirname, 'node_modules') },
                // 适配 ~xxxx
                { find: /* ~ */ /^~(?!\/)/, replacement: path.join(__dirname, 'node_modules/') },
            ],
            // 同 webpack 中的 extensions
            extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        plugins: [
            createVuePlugin( /* options */ ),
            legacy({
                targets: ['ie >= 11'],
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            }),
            viteCompression(),
            // 处理 webpack 项目中 require.context 写法
            viteRequireContext()
        ],
    })
}