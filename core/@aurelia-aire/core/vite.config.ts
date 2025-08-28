import {resolve} from 'path'
import {defineConfig} from "vite";
import aurelia from "@aurelia/vite-plugin";
import {nodePolyfills} from "vite-plugin-node-polyfills";
import vitePluginSass from 'vite-plugin-sass';
import tailwindcss from "@tailwindcss/vite";

export default ({mode}) => {

    return defineConfig({
        resolve: {
            alias: [
                {
                    find: "@aurelia-aire/core",
                    replacement: resolve(__dirname, './src')
                },
                {
                    find: "@aurelia-aire/core/styles",
                    replacement: resolve(__dirname, './styles')
                }
            ]
        },
        plugins: [
            aurelia({useDev: true}),
            nodePolyfills(),
            vitePluginSass(),
            tailwindcss()
        ]
    })

}

