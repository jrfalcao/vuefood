require('./bootstrap')
import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(BaseTemplate)
}).$mount('#app')