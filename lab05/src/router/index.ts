import { createRouter, createWebHistory } from 'vue-router'
import CategoryListView from '@/views/CategoryListView.vue'
import ProductsListView from "@/views/ProductsListView.vue"
import UsersListView from "@/views/UsersListView.vue"
import LoginView from "@/views/LoginView.vue"
import MyProfileView from "@/views/MyProfileView.vue"

import { useAuth } from "@/composables/useAuth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/me',
      component: MyProfileView
    },
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
  ],

})

router.beforeEach ((route)=> {
  let { auth } = useAuth()
  if (!auth.user && (route.path != '/login')) {
    return { path: '/login' }
  }
  else if (auth.user && (route.path == '/login')) {
    return { path: '/me' }
  }
  else return true
})

export default router
