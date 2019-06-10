<template>
  <div>
    <div class="Info">
      <i class="iconfont icon-shouji"></i>
      <input v-model="moblie" class="inputNum" type="number" value placeholder="请输入手机号">
    </div>
    <div class="Info">
      <i class="iconfont icon-ecurityCode"></i>
      <input v-model="code" class="code" type="number" value placeholder="验证码">
      <span class="codetxt" type="button" :disabled="disabled" @click="sendcode">{{btntxt}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      moblie: "",
      code: "",
      btntxt: "获取验证码",
      disabled: false,
      time: 0
    };
  },
  methods: {
    sendcode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.moblie == "") {
        this.$toast("手机号不能为空");
      } else if (!reg.test(this.moblie)) {
        this.$toast("手机号格式不正确");
      } else {
        this.time = 60;
        this.disabled = true;
        //验证码的时间设置 可有可无
        this.timer();
        //手机号争取后调取接口
        this.$axios
          .post("/vue/login", {})
          .then(res => {
            if (res.status != 200) {
              this.$toast("网络错误");
            } else if (res.status == 200) {
              if (res.data.error == null && res.data.result == true) {
                this.$toast("请注意接收验证码");
              } else if (res.data.error != null && res.data.result == null) {
                this.$toast(res.data.error.msg);
              }
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    //验证码的倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    }
  }
};
</script>