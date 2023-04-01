import { createRouter, createWebHistory } from 'vue-router'
import Clothes from '../views/Clothes.vue'
import Cloth from '../views/Cloth.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import favorites from '../views/favorites.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/clothes',
    name: 'Clothes',
    component: Clothes,
    
  },
   {
    path: '/clothes/:id',
    name: 'Cloth',
    component: Cloth,
   
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,

  },
  {
    path: '/favorites',
    name: 'favorites',
    component: favorites,

  }

  
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router