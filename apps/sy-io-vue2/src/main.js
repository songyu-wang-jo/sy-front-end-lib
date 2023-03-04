import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SyToolTip from '@sy-ui/vue2-component/lib/tool-tip'

Vue.config.productionTip = false
Vue.component(SyToolTip.name, SyToolTip)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
