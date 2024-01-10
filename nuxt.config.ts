// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    "@pinia/nuxt",
    "nuxt-primevue",
  ],
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/styles/primevue.css"],
});
