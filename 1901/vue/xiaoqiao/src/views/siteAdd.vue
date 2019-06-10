<template>
    <div>
        <Head></Head>
        <van-address-edit
            :area-list="nSite.site1"
            :address-info="nUserSite.xGsite"
            show-postal
            show-delete
            show-set-default
            show-search-result
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            "nTitle",
            "nSite",
            "nLogin",
            "nUserSite"
        ])
    },
    mounted(){
        // console.log(this.nSite.site1);
    },
    methods: {
        ...mapActions([
            "setUserSite",
            "getUserSite",
            "uptUserSite",
            "delUserSite"
        ]),
        onSave(val) {
            console.log(val);
            val.username=this.nLogin.username;
            val.length=this.nUserSite.length;
            if(this.nTitle.title=="新增地址"){
                this.setUserSite({url:"/vue/inUserSite",params:val});
                this.getUserSite({url:"/vue/SelUserSite",params:this.nLogin.username});
            }else{
                this.uptUserSite({url:"/vue/upUserSite",params:val});
                this.getUserSite({url:"/vue/SelUserSite",params:this.nLogin.username});
            }
            this.$router.push({name:"site"});
        },
        onDelete(val) {
            // Toast('delete');
            val.username=this.nLogin.username;
            // var ID=val._id;
            // console.log(ID);
            // console.log(val.id);
            this.delUserSite({url:"/vue/delUserSite",params:val});
            this.getUserSite({url:"/vue/SelUserSite",params:this.nLogin.username});
            this.$router.push({name:"site"});
        },
        onChangeDetail(val) {
            
        }
    }
}
</script>

<style scoped>
    .van-address-edit{
        margin-top: 50px;
    }
</style>


