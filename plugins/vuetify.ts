import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const theme = {
  dark: false,
  colors: {
    background: '#f9f7f2',
    surface: '#ffffff',
    primary: '#1d3557',
    secondary: '#c49b2e',
    info: '#457b9d',
    success: '#2a9d8f',
    warning: '#e9c46a',
    error: '#e76f51'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'lrcc',
      themes: {
        lrcc: theme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
