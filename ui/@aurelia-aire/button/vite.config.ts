import {resolve} from 'path'
import {defineConfig} from "vite";
import {fileURLToPath, URL} from 'node:url'

export default ({mode}) => {

    return defineConfig({
        resolve: {
            alias: [
                {
                    find: "@aurelia-aire/button",
                    replacement: resolve(__dirname, './src')
                }
            ]
        }
    })

}

