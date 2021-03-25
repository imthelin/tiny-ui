import Vue from 'vue'
import App from './App.vue'

import message from './components/message/index.js'
Vue.use(message);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
