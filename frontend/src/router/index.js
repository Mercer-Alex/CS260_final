import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/AddUpdate.vue')
  },
  {
    path: '/work',
    name: '/work',
    component: () => import('../views/WorkPosted.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
