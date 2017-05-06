import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import search from '@/page/search'
import jobsDetails from '@/page/jobsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '',
        redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/jobs',
      component: jobsDetails
    }
  ]
})
