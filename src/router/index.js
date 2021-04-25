import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieFinderPage from '../views/MovieFinderPage.vue'
import ModalPage from '../views/ModalPage.vue'
import FormPage from '../views/FormPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'FormPage',
    component: FormPage
  },
  {
    path: '/movie-finder',
    name: 'MovieFinderPage',
    component: MovieFinderPage
  },
  {
    path: '/modal-slot',
    name: 'ModalPage',
    component: ModalPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
