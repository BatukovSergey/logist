import Vue from 'vue'
import VueRouter from 'vue-router'
import NewClient from '../components/client/NewClient'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'New client',
    component: NewClient
  }
]

const router = new VueRouter({
  routes
})

export default router