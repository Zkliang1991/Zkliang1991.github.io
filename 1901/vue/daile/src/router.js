import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
import Index from './views/Index.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import Mine from './views/Mine.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Good from './views/Good.vue'
import Allview from './views/allview.vue'
import Register from './views/register.vue'
import AddRess from './views/addRess.vue'
import Seet from './views/seet.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect:{name: 'guide'}
    },
    {
      path:'/guide',
      name:'guide',
      component:Guide
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path:"",
          redirect:{name:'guide'}
        },
        {
          path:"home",
          name:"home",
          component:Home
        },
        {
          path:"classify",
          name:"classify",
          component:Classify
        },
        {
          path:"cart/:username/:goodId",
          name:"cart",
          component:Cart
        },
        {
          path:"mine",
          name:"mine",
          component:Mine
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/good/:goodId',
      name:'good',
      component:Good
    },
    {
      path:'/allview',
      name:'allview',
      component:Allview
    },
    {
      path:'/addRess',
      name:'addRess',
      component:AddRess
    },
    {
      path:'/seet',
      name:'seet',
      component:Seet
    },
    {
      path:"*",
      redirect:{name:'home'}
    }

  ]
})
