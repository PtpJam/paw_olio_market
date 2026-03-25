import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA, type ManifestOptions} from "vite-plugin-pwa"

const manifest : Partial<ManifestOptions> | false = {
  "theme_color":"#a8a8a8",
  "background_color":"#ffffff",
  "icons":[
    {
      "purpose":"maskable",
      "sizes":"512x512",
      "src":"icon512_maskable.png",
      "type":"image/png"
    },
    {
      "purpose":"any",
      "sizes":"512x512",
      "src":"icon512_rounded.png",
      "type":"image/png"
    }
  ],
  "orientation":"any",
  "display":"standalone",
  "lang":"en",
  "short_name":"Oilo",
  "name":"Oilo"
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*{html,css,js,ico,png,svg,jpeg}"]
      },
      manifest: manifest
    })
  ],
  base: '/paw_olio_market/',
});