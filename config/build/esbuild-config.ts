import path from 'path'
import {BuildOptions} from "esbuild";
import {ClearPlugin} from "./plugins/ClearPlugin";
import {HTMLPlugin} from "./plugins/HTMLPlugin"

const mode = process.env.MODE || 'development'

const isDev = mode === 'development'
const isProd = mode === 'production'

function resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, '..', '..', ...segments)
}

const config: BuildOptions = {
    outdir: resolveRoot('build'),
    entryPoints: [resolveRoot('src', 'index.tsx')],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    tsconfig: resolveRoot('tsconfig.json'),
    minify: isProd,
    sourcemap: isDev,
    metafile: true,
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpg': 'file',
    },
    plugins: [ClearPlugin, HTMLPlugin({
        title: 'ESBuild',
    })],
    watch: isDev && {
        onRebuild(err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log('build...')
            }
        }
    }
}

export default config;