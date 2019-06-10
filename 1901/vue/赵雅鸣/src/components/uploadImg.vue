<template>
    <div>
        <div id="photo"><img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo"/></div>
        <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo: {
              touxiang: require("../assets/logo.png"),
              
            },
            url:"" 
        }
    },
     methods:{
        seen(){
            var userInfo = JSON.parse(localStorage.userInfo);
            this.url = userInfo.icon.replace(/public/,'http://localhost:1901');
        },
        updateimg() {
            console.log("上传图片");
            // this.$el.querySelector('.hiddenInput').click() // 执行 input change 
            this.$refs.one.click();
        },
        // 将头像显示
        shangchuan(e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0];
            console.log(file);
            console.log(this.$refs.one.files[0]);
            
            let data = new FormData();    // 构建表单数据对象  
            data.append('avatar', file);  // 需要上传到 服务器 的数据
            

            this.$axios({
                url:"/vue/upload-avatar",
                method:"POST",
                contentType:false,
                processData:false,
                data
            }).then(res=>{
                console.log(res);
                this.userInfo.touxiang  = res.data.imgUrl.replace(/public/,'http://localhost:1901');
                localStorage.userInfo = JSON.stringify({avatar:res.data.imgUrl});
            })

           
        },
    },

     
}
</script>

<style>
#photo img{
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
}
.hiddenInput{
  display: none;
}
</style>
