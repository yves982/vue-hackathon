import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StringUtils from './utils/string.utils'
import ArrayUtils from './utils/array.utils'
import TransportUtils from './utils/transport.utils'

Vue.config.productionTip = false

Vue.filter('nullOrEmpty', StringUtils.nullOrEmpty)
Vue.filter('arrFirst', ArrayUtils.firstOrNull)
Vue.filter('nomPrenomClient', TransportUtils.nomPrenomClient)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
