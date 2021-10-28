import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(BaseTemplate)
}).$mount('#app')