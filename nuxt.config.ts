// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    "@pinia/nuxt",
    "@nuxt/ui",
  ],
  typescript: {
    typeCheck: true,
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  css: ["~/assets/css/tailwind.css"],
  // env: {
  //   DB_HOST: process.env.DB_HOST,
  // },
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
});
