import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    icon: 'assets/icon.png',
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ['darwin']),
    new MakerRpm({}),
    new MakerDeb({}),
    {
      name: '@electron-forge/maker-flatpak',
      config: {
        options: {
          id: 'me.kishorprins.happymeow',
          productName: 'Happy Meow',
          genericName: 'Happy Meow',
          description: 'Keyboard utility for Cyberboard owners',
          categories: ['Utility'],
        }
      }
    },
  ],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
    {
      name: '@electron-forge/plugin-electronegativity',
      config: {
        isSarif: true
      }
    },
    {
      name: '@electron-forge/plugin-electronegativity',
      config: {
        isSarif: true
      }
    },
  ],
};

export default config;
