import {resolve} from 'path'
import {defineConfig} from "vite";
import aurelia from '@aurelia/vite-plugin'
import {nodePolyfills} from "vite-plugin-node-polyfills";
import vitePluginSass from 'vite-plugin-sass'


export default ({mode}) => {

    return defineConfig({
        resolve: {
            alias: [
                {
                    find: "@aurelia-aire/footer",
                    replacement: resolve(__dirname, './src')
                }
            ]
        },
        assetsInclude: ["**/*.html"],
        plugins: [
            aurelia({useDev: true}),
            nodePolyfills(),
            vitePluginSass()
        ]
    })

}

