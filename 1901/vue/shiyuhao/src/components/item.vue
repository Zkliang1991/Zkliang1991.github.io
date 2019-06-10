<template>
    <div>
        <router-link :to="{name:'details',params:{movieId:good._id},query:{title:good.title}}">
        <img :src="good.img" alt="" class="item-img">
        <div class="b">
        <h3 class="van-ellipsis">{{good.title}}</h3>
            <p>观众评分：{{good.grade}}</p>
            <p class="van-ellipsis">主演：{{good.director}}{{good.name}}</p>
            <p>{{good.district}}{{good.mins}}</p>
             <p class="last">购票</p>
        </div>
    </router-link>
    </div>
</template>


<script>
export default {
    props:{
        good:Object
    }
}
</script>

<style scoped>
 
  
.b{
    width: 100%;
    height: 100px;
    overflow: hidden;
    color: black;
}
.item-img {
    width:100%;
    height:160px;
}
.b h3{
  font-size: 0.3rem;
}
.b p{
  font-size: 0.25rem;
}
.b .last {
  width: 1rem;
  height: 0.5rem;
  background-color: orange;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
}

</style>