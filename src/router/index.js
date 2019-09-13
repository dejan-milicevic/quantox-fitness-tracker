import Vue from 'vue'
import VueRouter from 'vue-router'

import Overview from '@/components/pages/Overview'
import Detail from '@/components/pages/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/overview',
    component: Overview,
    name: 'Overview'
  },
  {
    path: '/overview/:id',
    component: Detail,
    name: 'Detail'
  },
  {
    path: '*',
    redirect: { name: 'Overview' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
