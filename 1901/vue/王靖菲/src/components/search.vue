<template>
    <div :class="name">
        <form action="/">
            <van-search
                v-model="value"
                placeholder="搜索品类/单品/风格"
                show-action
                @search="onSearch"
                @cancel="onCancel"
                shape="round"
            />
        </form>
        <div class="hot">
            <h1>热门搜索</h1>
            <ul class="hotul">
                <li >黑胡桃</li>
                <li >沙发</li>
                <li >床</li>
                <li >餐桌</li>
                <li >锐驰</li>
                <li >北欧表情</li>
                <li >harbor house</li>
                <li >顾家</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:"",
            name:""
        }
    },
    methods:{
        onSearch(){
            console.log(this.value)
            // this.$axios.get("/vue/search",{
            //     params:{
            //         keyword:this.value
            //     }
            // }).then(res=>{
            //     this.list=res.data.result
            //     console.log(this.list)
                
            // })
            // this.$store.dispatch("goodlist",this.list)
            this.$router.push({name:"goodslist",params:{
                keyword:this.value
            }})
            
        },
        onCancel(){
          this.$store.dispatch("appear","unshow")
        }
    },
    // computed:mapState({//stroe.state当作参数
    //     status1:state=>state.name
    // })
   
}
</script>

<style lang="scss" scoped>
.unshow{
    display:none;
}
.hot{
    padding:0.2rem 0.3rem;
    h1{
        color: #222121;
        font-size: 15px;
        font-family: PingFangSC-Medium;
    }
    .hotul{
        overflow: hidden;
        li{
            display: inline-block;
            padding:0.06rem 0.28rem;
            line-height:0.48rem;
            color: #4f5156;
            font-size: 13px;
            margin:0.2rem 0.16rem 0 0;
            border: none;
            background: #f6f6f6;
            border-radius:0.6rem;
        }
    }
    
}
</style>
