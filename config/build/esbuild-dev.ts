import ESBuild from 'esbuild'
import path from 'path'

import config from './esbuild-config'

import express from 'express'

const PORT = Number(process.env.PORT) || 3000

const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'build')))

app.listen(PORT, () => {
    console.log(`server started on port: http://localhost:${PORT}`)
})

ESBuild.build(config).then((result) => {
    console.log(result)
}).catch(error => {
    console.log(error)
})