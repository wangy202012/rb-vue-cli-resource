import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { dynamicBase } from 'vite-plugin-dynamic-base'
const PENTAGON_DIR = './pentagon-vite-next-workflow'
//@ts-ignore
import { genMenu, copyDist, timer } from 'rb-vite-plugins'


export default (config: any) => {
  const env = loadEnv(config.mode, process.cwd());
  console.log('构建配置:', config);
  console.log('构建环境变量:', env);

  const isPentagon = config.mode === 'pentagon';
  const viteConfig = {
    plugins: [
      viteExternalsPlugin({
        pentagon: 'PentagonEntry'
      }),
      vue(),
      vueJsx()
    ],
    // __dynamic_base__为window上属性名
    base: isPentagon ? '/__dynamic_base__/' : '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      outDir: path.resolve(
        isPentagon ? PENTAGON_DIR : './dist'
      )
    }
  };
  if (isPentagon) {
    viteConfig.plugins.push(genMenu({ outDir: PENTAGON_DIR }))
    viteConfig.plugins.push(dynamicBase({}))
    const pentagonEntryPath = env.VITE_PENTAGON_ENTRY_PATH
    if (pentagonEntryPath) {
      const destPath = pentagonEntryPath + '/server/app/public/app/pentagon-vite-next-workflow'
      viteConfig.plugins.push(copyDist({ destPath, srcPath: PENTAGON_DIR }))
    }
  }
  viteConfig.plugins.push(timer())
  return defineConfig(viteConfig);
};
