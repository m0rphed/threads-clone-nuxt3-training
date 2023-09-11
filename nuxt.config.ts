// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    // ESLint simple usage
    '@nuxtjs/eslint-module',
  ],

  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },

  devtools: { enabled: true },
});
