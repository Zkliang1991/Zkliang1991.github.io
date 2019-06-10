<template>
    <mt-header  :title="title">
        <router-link to="/" slot="left" v-if="show">
            <mt-button icon="back" @click="goback"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" @click="goSearch" v-if="!flag"></mt-button>
    </mt-header>
</template>
<script>
export default {
    computed:{
        flag(){
            return localStorage.routeName === "search";
        }
    },
    props: ["title", "show"],
    methods: {
        goback() {
            this.$router.go(-1)
        },
        goSearch(){
            this.$router.push({name:"search"});
        }
    }
}
</script>

