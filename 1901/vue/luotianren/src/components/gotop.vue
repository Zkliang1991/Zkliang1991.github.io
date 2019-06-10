<template>
  <!--transition标签 按钮出现附带动画-->
  <transition name="el-fade-in">
    <div class="page-component-up" @click="scrollToTop" v-show="toTopShow">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        toTopShow: false,
      }
    },
    methods: {
      handleScroll() {
        //id scroller-box是自己在组件上添加的，为了方便获取dom
        this.scrollTop = document.getElementById("scroller-box").children[0].scrollTop
        if (this.scrollTop > 300) {
          this.toTopShow = true
        }else {
          this.toTopShow = false
        }
      },
      scrollToTop() {
        let timer = null, _that = this
        //动画，使用requestAnimationFrame代替setInterval
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50
            document.getElementById("scroller-box").children[0].scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.toTopShow = false
          }
        })
      }
    },
    mounted() {
　　　　//$nextTick 避免dom未加载
      this.$nextTick(function () {
        let targetScroll = document.getElementById("scroller-box").children[0]
        targetScroll.addEventListener('scroll', this.handleScroll)
      });
    },
    destroyed() {
      let targetScroll = document.getElementById("scroller-box").children[0]
      targetScroll.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style scoped lang="scss">
  .page-component-up{
    background-color: #409eff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
    z-index: 99999;
    .el-icon-caret-top{
      color: #fff;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
    p{
      display: none;
      text-align: center;
      color: #fff;
    }
    &:hover{
      opacity: .8;
    }
  }
</style>