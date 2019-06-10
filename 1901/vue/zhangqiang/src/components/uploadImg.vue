<template>
    <div>
        <div id="photo"><img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo"/></div>
        <input type="file" accept="image/*" @change="shangchuan" class="hiddenInput"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo: {
              touxiang: require("../assets/images/photo.png"),
            } 
        }
    },
     methods:{
        updateimg() {
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        shangchuan(e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
                this.userInfo.touxiang = res.result
            }
            reader.readAsDataURL(file)

            let data = new FormData();
            data.append('avatar', file);
            this.$axios.post('/vue/upload-avatar', data, {
                headers: { 'content-type': 'multipart/form-data' }
            });
        },
    },
        //上传头像注释    2019-5-29
        // 1.accept 属性用于限制图像的格式 如：（accept=”image/gif, image/jpeg”），accept=”image/*”表示不限制格式。 
        // 2.在打开文件夹选中图片确认后，执行shangchuan函数 
        // 3.let $target = e.target || e.srcElement 表示调用他的各种属性， 
        // 两个的区别是：ie下支持e.srcElement，ff支持e.target。 
        // 4.由于手机上可以选择多张图片，所以let file = $target.files[0]，表示取第一张图。 
        // 5.var reader = new FileReader() FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
        // 6.onload 事件会在页面或图像加载完成后立即发生。 
        // 7.FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL。
        //8. 遗留问题：可通过document.getElementsByClassName("ohuo")[0].src取到图片，但是会默认将图片转为base64格式，这样怎么传到数据库？
        //9.扩展：可以通过给用户设置一个type来设置等级，等级高的用户可以上传动图，即不同的用户设置不同的accept值，可通过v-if/v-else 切换
}
</script>

<style>
img{
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
}
.hiddenInput{
  display: none;
}
</style>
