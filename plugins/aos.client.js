import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    if(process.client) {
      AOS.init({
        duration: 1000,
        once: false,
      })
    }
    
  })
})
