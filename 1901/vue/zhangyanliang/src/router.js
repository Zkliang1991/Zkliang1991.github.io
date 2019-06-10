import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import App from "./views/index.vue";
import Home from './views/home.vue';
import Car from "./views/car.vue";
import Mine from "./views/mine.vue";
import Good from "./views/good.vue";
import Search from "./views/search.vue";
import Login from "./views/login.vue";
import Goodone from "./views/goodone.vue";
import Mymine from "./views/mymine.vue";
import Account from "./views/account.vue";

const routes = [{
        path: "/",
        redirect: { name: "home" }

    }, {
        path: "/app",
        name: "app",
        component: App,
        children: [{
            path: "home",
            name: "home",
            component: Home
        }, {
            path: "car",
            name: "car",
            component: Car
        }, {
            path: "mine",
            name: "mine",
            component: Mine
        }, {
            path: "good",
            name: "good",
            component: Good
        }]
    }, {
        path: "/search",
        name: "search",
        component: Search
    }, {
        path: "/login",
        name: "login",
        component: Login
    }, {
        path: "/goodone",
        name: "goodone",
        component: Goodone
    }, {
        path: "/mymine",
        name: "mymine",
        component: Mymine
    }, {
        path: "/account",
        name: "account",
        component: Account
    }



]
const router = new Router({
    routes
})


export default router;