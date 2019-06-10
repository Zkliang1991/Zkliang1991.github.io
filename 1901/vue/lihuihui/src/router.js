import Vue from 'vue'
import Router from 'vue-router'
import Type from './views/Type.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/',
      name:'guide',
      component:()=>import('./views/Guide.vue'),

    },
    {
      path:'/login',
      name:'login',
      component:()=>import('./views/Login.vue'),

    },
    {
      path:'/register',
      name:'register',
      component:()=>import('./views/Register.vue'),

    },
    {
      path:'/search',
      name:'search',
      component:()=>import('./views/Search.vue'),

    },
    {
      path:'/home',
      name:'home',
      component:()=>import('./views/Home.vue'),
      children:[

        {
          path:'',
          name:'index',
          component:()=>import('./views/Index.vue')
        },
        {
          path:'/home/index',
          name:'index',
          component:()=>import('./views/Index.vue')
        },
        {
          path: '/home/type',
          name: 'type',
          component: Type
        },
        {
          path: '/home/cart',
          name: 'cart',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: Cart
        },
        {
          path:'/home/mine',
          name:'mine',
          component: () => import('./views/Mine.vue'),   
        }
      ]
    },
    {
      path:'/goodDetail/:goodId',
      name:'goodDetail',
      component:()=>import('./views/goodDetail.vue'),

    },
    {
      path:'/address',
      name:'address',
      component:()=>import('./views/Address.vue'),
    },
    {
      path:'/editAddress',
      name:'editAddress',
      component:()=>import('./views/EditAddress.vue'),
    },
    {
      path:'/pay',
      name:'pay',
      component:()=>import('./views/Pay.vue'),
    }


  ]
})
