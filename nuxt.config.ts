// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias:{
    '@':resolve(__dirname, '/')
    // the alias allows one to import files using a shorter import statement eg. @/components/compo.vue
  }
})
