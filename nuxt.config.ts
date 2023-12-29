export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {    
    transpile: ["vuetify"]
  },
  css: [
      "vuetify/lib/styles/main.sass",
      '@/assets/css/tailwind.css',
      "@mdi/font/css/materialdesignicons.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})