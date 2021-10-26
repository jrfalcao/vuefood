import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(DefaultTemplate)
}).$mount('#app')