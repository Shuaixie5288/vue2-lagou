// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'minireset.css'
import './style/common'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import './config/rem'

Vue.config.productionTip = true
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
