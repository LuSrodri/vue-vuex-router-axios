import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Series from '../views/Series.vue'
import TOP from '../views/TOP.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Movies',
    name: 'Movies',
    component: Movies
  },
  {
    path:'/Series',
    name:'Series',
    component: Series
  },
  {
    path:'/TOP',
    name:'TOP',
    component: TOP
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
