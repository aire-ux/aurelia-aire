import {resolve} from 'path'
import {defineConfig} from "vite";
import aurelia from '@aurelia/vite-plugin'
import {nodePolyfills} from "vite-plugin-node-polyfills";
import vitePluginSass from 'vite-plugin-sass'


export default ({mode}) => {

    return defineConfig({
        build: {
            lib: {
                entry: ["src/index.ts"],
                name: '@aurelia-aire/page',
                // fileName: (fmt, entry) => `page`,
                fileName: 'page',
                cssFileName: "index"
            },
            rollupOptions: {
                external: ['aurelia'],
                output: {
                    globals: {
                        aurelia: 'Aurelia'
                    }
                }
            }
        },
        resolve: {
            alias: [
                {
                    find: "@aurelia-aire/page",
                    replacement: resolve(__dirname, './src')
                }
            ]
        },
        assetsInclude: ["**/*.html"],
        plugins: [
            aurelia({useDev: true}),
            nodePolyfills()
            // vitePluginSass()
        ]
    })

}

