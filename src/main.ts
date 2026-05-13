import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
  mirror: true
})

app.mount('#root')
