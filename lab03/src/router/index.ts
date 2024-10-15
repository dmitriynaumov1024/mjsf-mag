import { createRouter, createWebHistory } from 'vue-router'
import CategoryListView from '@/views/CategoryListView.vue'
import ProductsListView from "@/views/ProductsListView.vue"
import UsersListView from "@/views/UsersListView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'categorylist',
      component: CategoryListView
    },
    { 
      path: '/categories',
      component: CategoryListView
    },
    {
      path: '/products',
      component: ProductsListView
    },
    {
      path: '/users',
      component: UsersListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
