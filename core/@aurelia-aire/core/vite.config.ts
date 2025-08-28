import {resolve} from 'path'
import {defineConfig} from "vite";
import {fileURLToPath, URL} from 'node:url'

export default ({mode}) => {

    return defineConfig({
        resolve: {
            alias: [
                {
                    find: "@aurelia-aire/core",
                    replacement: resolve(__dirname, './src')
                }

            ]
        }
    })

}

