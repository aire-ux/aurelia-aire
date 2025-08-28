import { defineConfig, loadEnv } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin'
import { resolve } from 'path'


export default ({ mode }) => {

  console.log(process.cwd())
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }


  return defineConfig({
    build: {
      rollupOptions: {
        input: {
          aireUxSite: resolve(__dirname, "./index.html")
        }
      }

    },
    esbuild: {
      target: 'es2022'
    },
    // resolve: {
    //   alias: [
    //     {
    //       find: '@paper-news',
    //       replacement: fileURLToPath(new URL('./src', import.meta.url))
    //     },
    //     {
    //       find: '@tabler',
    //       replacement: `${resolve(__dirname, 'node_modules', '@tabler')}`
    //     }
    //   ]
    // },
    plugins: [
      aurelia({
        useDev: true
      }),
      nodePolyfills()
    ]
  })
}

