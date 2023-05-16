import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainDepenseView from '@/views/MainDepense.vue'
import DetailDepenseView from '@/views/DetailDepense.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props:(route) => ({
        page: route.query.page ? parseInt(route.query.page) : 1 
      })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/depenses/:id',
      name:'depense',
      component:MainDepenseView,
      props: true,
      children: [
        {
          path:'',
          name:'depense-details',
          component:DetailDepenseView 
        },
        // {
        //   path: '/imprimer',

        // }
      ]
    }
  ]
})

export default router
