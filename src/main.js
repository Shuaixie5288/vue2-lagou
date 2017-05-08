// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'minireset.css'
import './style/common'
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './config/rem'

Vue.config.productionTip = true

Vue.filter('date', function(val, cutChar) {
  cutChar = typeof cutChar === 'string' ? cutChar : '/';
  return new Date(val).toLocaleString().split(' ')[0].replace('/', cutChar);
})

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App },
})
