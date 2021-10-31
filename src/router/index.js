import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddSong from '../views/AddSong'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddSong',
    component: AddSong
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
