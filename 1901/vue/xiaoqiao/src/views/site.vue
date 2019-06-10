<template>
    <div>
        <Head></Head>
        <van-address-list
            v-model="chosenAddressId"
            :list="keysite2"
            @add="onAdd"
            @edit="onEdit"
            />
    </div>
</template>

<script>
import{Toast} from "vant"
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return{
            chosenAddressId:1
        }
    },
    computed:{
        ...mapState([
            "nTitle",
            "nUserSite",
            "nLogin"
        ]),
        ...mapActions([
            "getUserSite"
        ]),
        keysite2:{
            get(){
                return this.nUserSite.site2;
            },
            set(){
                if(this.nLogin.username!=""){
                    this.getUserSite({url:"/vue/SelUserSite",params:this.nLogin.username});
                }
            }
        }
    },
    methods: {
        onAdd() {
            // Toast('新增地址');
            this.$store.state.nTitle.title = "新增地址"; 
            this.$store.state.nUserSite.xGsite={};
            this.$router.push({name:'siteAdd'});
        },
        onEdit(item,index){
            var dizhi=item.address.split("_");
            item.province=dizhi[0];
            item.city=dizhi[1];
            item.county=dizhi[2];
            item.addressDetail=dizhi[3];
            // console.log(dizhi);
            this.$store.state.nTitle.title = "修改地址"; 
            // Toast('新增地址'+item+index);
            this.$store.state.nUserSite.xGsite=item;
            this.$router.push({name:'siteAdd'});
        }
    },
    mounted(){
        this.$store.state.nTitle.title = "收货地址"; 
        console.log(this.nUserSite.site2);
    }
}
</script>
<style scoped>
.van-address-list{
    margin-top:50px;
}
</style>


