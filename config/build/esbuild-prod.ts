import config from './esbuild-config'

const ESBuild = require('esbuild')


ESBuild.build(config).catch(console.log)