<template>
  <div>
    <h2>demo---demo</h2>
    <p>完整语法高亮</p>
    <p>CommonJS 模块</p>
    <p>组件作用域的 CSS</p>
    <h2>{{msg}}</h2>
    <h2 @click="change">count ==== {{count}}</h2>
    <button @click="changeFlag">refs修改子组件</button>
    <hr>
    <Word :num="count" like="wh1901" ref="one" v-on:changemsg="getMsg">
        <h2>这是插槽</h2>
        <h2 slot="news">新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</h2>
    </Word>
  </div>
</template>
<script>
import Word from "./word.vue";
export default {
  data() {
    return {
      count: 2019,
      msg:"are you ok"
    };
  },
  components: {
    Word
  },
  methods: {
    change() {
      this.count = this.count + 10;
    },
    changeFlag() {
      this.$refs.one.flag = false;
      this.$refs.one.changeMsg();
    },
    getMsg(data){
        this.msg=data
    }
  }
};
</script>

<style lang="scss" scoped>
/* scoped 限定 css 样式作用范围 */
p {
  color: aqua;
  font-size: 35px;
}
</style>
