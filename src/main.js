import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import '@/assets/styles'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
