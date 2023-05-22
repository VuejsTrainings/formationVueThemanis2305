import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainDepenseView from '@/views/MainDepense.vue'
import DetailDepenseView from '@/views/DetailDepense.vue'
import DepenseNouveauRemboursementView from '@/views/DepenseNouveauRemboursement.vue'
import DepenseImpressionView from '@/views/DepenseImpression.vue'
import NotFoundView from '@/views/NotFound.vue'
import ErreurReseauView from '@/views/ErreurReseau.vue'
import DepensesService from '../services/depenses'
import { useUserStore } from '@/stores/user'

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
      alias:'/about-us',
    },
    {
      path:'/depenses/:id',
      component:MainDepenseView,
      // le nom de la route principale disparaît
      // au profit des routes filles.
      // voir https://router.vuejs.org/guide/essentials/nested-routes.html#nested-named-routes
      // pour les effets de l'utilsation d'un nom sur la route mère
      props: true,
      beforeEnter: async (to) => {
        try{
          const httpResponse = await DepensesService.getOne(parseInt(to.params.id));
          // Alimenter le store applicatif
          console.log(httpResponse)
          // vm.depense = httpResponse.data;
          // return true
        }catch(e){
          return {name:'not-found', params: {routeInconnue: 'not-found'}};
        }
      },
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
          meta: { adminsOnly: true }
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
    },
    {
      path:'/erreur-reseau',
      component: ErreurReseauView,
      name:'erreur-reseau'
    }
  ]
})

router.beforeEach((to) => {
  const isAdmin = useUserStore().logged;
  if(to.meta && to.meta.adminsOnly && !isAdmin){
    return false;
  }
})

export default router
