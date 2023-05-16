import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainDepenseView from '@/views/MainDepense.vue'
import DetailDepenseView from '@/views/DetailDepense.vue'
import DepenseNouveauRemboursementView from '@/views/DepenseNouveauRemboursement.vue'
import DepenseImpressionView from '@/views/DepenseImpression.vue'
import NotFoundView from '@/views/NotFound.vue'

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
      path: '/a-propos',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      // Alias (! attention pour le SEO)
      alias:'/about-us'
    },
    {
      path:'/depenses/:id',
      component:MainDepenseView,
      // le nom de la route principale disparaît
      // au profit des routes filles.
      // voir https://router.vuejs.org/guide/essentials/nested-routes.html#nested-named-routes
      // pour les effets de l'utilsation d'un nom sur la route mère
      props: true,
      children: [
        {
          path:'',
          name:'depense-details',
          component:DetailDepenseView,
        },
        {
          path: 'imprimer',
          name:'depense-imprimer',
          component: DepenseImpressionView,
        },
        {
          path: 'ajouter-remboursement',
          name:'depense-nouveau-remboursement',
          component: DepenseNouveauRemboursementView,
        }
      ]
    },
    // Redirections
    {
      path: '/about',
      redirect: '/a-propos',
    },
    // Route 404
    {
      path:'/:routeInconnue(.*)',
      component: NotFoundView,
      name:'not-found'
    }
  ]
})

export default router
