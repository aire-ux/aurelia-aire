import {resolve} from 'path'
import {defineConfig} from "vite";
import aurelia from '@aurelia/vite-plugin'
// import {vitePluginSass} from 'vite-plugin-sass'
import {nodePolyfills} from "vite-plugin-node-polyfills";
import tailwindcss from "@tailwindcss/vite";


export default ({mode}) => {

    return defineConfig({
        resolve: {
            alias: [
                {
                    find: "@aurelia-aire/image",
                    replacement: resolve(__dirname, './src')
                }
            ]
        },
        assetsInclude: ["**/*.html"],
        plugins: [
            aurelia({useDev: true}),
            nodePolyfills(),
            // vitePluginSass(),
            tailwindcss()
        ]
    })

}

