<template>
  <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.title}}">
    <img :src="good.images" alt>
    <p class="sl-2 ziti">{{good.desc}}</p>
    <div>
      <span>{{good.title}}</span>
      <span>{{good.kind}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    good: Object
  }
};
</script>

<style lang="scss" scoped>
 img {
  width: 100%;
}
 p {
  line-height: 0.33rem;
  height: 0.66rem;
  margin: 0.12rem;
}
 div {
  display: flex;
  justify-content: space-between;
  padding: 0.27rem 0.1rem 0.35rem 0.1rem;
}
 div span:first-child {
  color: #e02e24;
}
 div span:last-child {
  color: #9c9c9c;
}
.sl-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ziti{
    color: black
}
</style>
