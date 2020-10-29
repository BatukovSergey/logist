import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/Admin'
import ClientsList from '../components/client/ClientsList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/clients',
    name: 'ClientsList',
    component: ClientsList
  }
]

const router = new VueRouter({
  routes
})

export default router