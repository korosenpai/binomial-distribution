import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.mount('#app')


// app.config.errorHandler = (err, instance, info) => {
//     // report error to tracking services
//   }