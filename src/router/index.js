import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pokemones',
    name: 'Pokemones',
    component: () => import(/* webpackChunkName: "pokemones" */ '../views/Pokemones.vue')
  },
  {
    path: '/pokemones/:id',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "pokemones" */ '../views/Pokemon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
