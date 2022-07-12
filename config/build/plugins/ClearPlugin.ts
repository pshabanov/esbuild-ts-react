import {Plugin} from 'esbuild'
import {rmSync} from 'fs'

export const ClearPlugin: Plugin = {
    name: 'ClearPlugin',
    setup(build) {
        build.onStart(async () => {
            try {
                const outdir = build.initialOptions.outdir
                if (outdir) {
                    await rmSync(outdir, {recursive: true})
                }
            } catch (e) {
                console.log('Не удалось очистить папку')
            }
        })

        build.onEnd(() => {
            console.log('Build End')
        })
    }
}