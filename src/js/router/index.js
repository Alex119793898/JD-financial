import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/js/home/index'
import Money from '@/js/money/index'
import Ious from '@/js/ious/index'
import Raise from '@/js/raise/index'
import Download from '@/js/speciel/download'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/',
      redirect: {
        path: '/home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
    {
      path: '/raise',
      name: 'raise',
      component: Raise
    },
    {
      path: '/self',
      name: 'self',
      component: Home
    }
  ]
})
