<template>
    <div class="addresstop">
        <div class="you" v-if="showTwo">
            <div class="addressxianshi" v-if="show">
                <p class="top">
                    <span>{{addressname}}</span>
                    <span>{{addressphone}}</span>
                </p>
                <p class="bottom">
                    {{address}}
                </p>
                <van-tag  class="morentag" v-if="moren">默认地址</van-tag>
                <van-icon name="location-o" class="tubiao" size=".5rem"/>
                <van-icon name="arrow-down" class="tubiaotwo" size=".5rem" 
                @click="show=false"/>
            </div>

            <div class="addressxianshi" v-else>
                <p class="top">
                    <span>{{addressname}}</span>
                    <span>{{addressphone}}</span>
                </p>
                <p class="bottom">
                    {{address}}
                </p>
                <van-tag class="morentag" v-if="moren">默认地址</van-tag>
                <van-icon name="arrow-up" class="tubiaotwo" size=".5rem" 
                @click="show=true"/>
                <van-button type="default" plain size="small" class="guanli" 
                @click="$router.push({name:'address'})">管理地址</van-button>
            </div>
        </div>
        <div class="wu" v-else>
            <van-button type="danger" plain size="small" class="guanli" style="margin-bottom:.5rem"
            @click="$router.push({name:'address'})">点击添加地址</van-button>
        </div>
        <div class="navbai"></div>
 
    </div>
</template>

<script>
import Vue from 'vue'
import { AddressList } from 'vant';
Vue.use(AddressList);


export default {
    data(){
        return {
            show:true,
            showTwo:false,
            addressname:'',
            addressphone:'',
            address:'',
            moren:false
        }
    },
    created(){
        //请求地址
        this.$axios.post('/vue/yz/addressdingdan').then(res=>{
            if(res.data.type==1){
                //将该地址共享至状态树usreStore
                this.$store.commit('dingdanAddressObj',{obj:res.data.result})

                this.showTwo=true //改变标量为true 表示该用户选择好了地址
                let result = res.data.result;
                let {
                    addressname,
                    addressphone,
                    city,
                    county,
                    province,
                    addressjiedao,
                    moren
                } = result
                this.addressname=addressname
                this.addressphone=addressphone
                if(province=="北京市"||province=="重庆市"||province=="上海市"||province=="天津市"){
                    this.address=city+'  '+county+'  '+addressjiedao
                }else{
                    this.address=province+'  '+city+'  '+county+'  '+addressjiedao
                }
                this.moren=moren
                this.$store.commit('dingdanAddress',{flag:true})
            }else{
                this.showTwo=false
                this.$store.commit('dingdanAddress',{flag:false})
            }
        })

    }
}
</script>


<style lang="scss" scoped>
    .addressxianshi{
        padding: .3rem .8rem;
        position: relative;
    }
    .top{
        line-height: .37rem;
        overflow: hidden;
        margin-bottom: .2rem;
        span:first-child{
           float: left;
           margin-right:.2rem 
        }
        span:last-child{
            float: left;
            max-width: 3rem;
        }
    }
    .bottom{
        line-height: .37rem;
    }
    .tubiao{
        width: .35rem;
        height: .45rem;
        position: absolute;
        left: .1rem;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .tubiaotwo{
        width: .35rem;
        height: .45rem;
        position: absolute;
        right: .3rem;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .guanli{
        width: 60%;
        margin-left: 20%;
        margin-top: .5rem;
    }
    .navbai{
        height: .25rem;
        background-color: #f1eeee;
    }
    .morentag{
        position: absolute;
        right: .1rem;
        top: 0; 
        background: #d8d8d8 !important;

    }
    
</style>

