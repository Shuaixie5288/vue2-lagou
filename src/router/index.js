import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import search from '@/page/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
