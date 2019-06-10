import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Vedio from './views/Vedio.vue'
import Music from './views/Music.vue'
import Person from './views/Person.vue'
import Firend from './views/Firend.vue'
import Song from './views/Song.vue'
import Search from './views/Search.vue'
import SongList from './views/SongList.vue'
import Singer from './views/Singer.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:{name:'index'}
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      redirect:{name:'home'},
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        },{
          path:'vedio',
          name:'vedio',
          component:Vedio
        },{
          path:'music',
          name:'music',
          component:Music
        },{
          path:'firend',
          name:'firend',
          component:Firend
        }
      ]
    },{
      path:'/song',
      name:'song',
      component:Song
    },{
      path:'/search',
      name:'search',
      component:Search
    },{
      path:'/person',
      name:'person',
      component:Person
    },{
      path:'/songlist',
      name:'songlist',
      component:SongList
    },{
      path:'/singer',
      name:'singer',
      component:Singer
    },{
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
