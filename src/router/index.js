import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path:'/newpage',
      component: ()=> import('../views/NewPage.vue'),
      children:[
        {
          path:'componentA',
          component:()=>import('../views/ComponentA.vue')
        }, {
          path:'componentB',
          component:()=>import('../views/ComponentB.vue')
        },
        {
          path:'namedview',
          component:()=>import('../views/NamedView.vue'),
          children:[
            {
              path:'AtoB',
              components:{
                left:()=>import('../views/ComponentA.vue'),
                right:()=>import('../views/ComponentB.vue'),
              }
            },
            {
              path:'BtoA',
              components:{
                left:()=>import('../views/ComponentB.vue'),
                right:()=>import('../views/ComponentA.vue')
              }
            }
          ]
        }
      ]
    }
  ]
})

export default router
