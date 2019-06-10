import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from './views/index.vue'

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/guide',
      name: 'guide',
      component: () => import('./views/guide.vue')
    },
    {
      path: "/login",
      component: () => import('./views/login.vue'),
      name: "login",
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: "",
          redirect: { name: 'home' }
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: "shoplist",
          component: () => import('./views/shoplist.vue'),
          name: "shoplist",
        },
        {
          path: "shopcar",
          component: () => import('./views/shopcar.vue'),
          name: "shopcar",
        },
        {
          path: "mine/:username",
          component: () => import('./views/mine.vue'),
          name: "mine",
        },
        {
          path: "search",
          component: () => import('./views/search.vue'),
          name: "search",
        },
        {
          path: "shopdetail",
          component: () => import('./views/shopdetail.vue'),
          name: 'shopdetail'
        },
        {
          path: "shoucang/:username",
          component: () => import('./views/shoucang.vue'),
          name: 'shoucang'
        },
        {
          path: "xinzeng",
          component: () => import('./views/xinzeng.vue'),
          name: 'xinzeng'
        },

      ]
    },
    {
      path: "*",
      redirect: { name: 'home' }
    }

  ]
})
