import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import chart from './components/Chart';
import chart02 from './components/Chart02';
import  chart03 from './components/Chart03'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  chart,
  chart02,
  chart03,
  render: h => h(App)
}).$mount('#app')
