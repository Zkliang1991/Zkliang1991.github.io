<template>
    <div>
        <div id="photo"><img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo"/></div>
        <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput"/>
        <button @click="seen">预览</button>
        <img :src="url" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo: {
              touxiang: require("../assets/images/photo.png"),
              
            },
            url:"" 
        }
    },
     methods:{
        seen(){
            var userInfo = JSON.parse(localStorage.userInfo);
            this.url = userInfo.icon.replace(/public/,'http://47.104.209.44:1901');
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
            data.append("like",'wh1901');

            this.$axios({
                url:"/vue/upload-avatar",
                method:"POST",
                contentType:false,
                processData:false,
                data:data
            }).then(res=>{
                console.log(res);
                this.userInfo.touxiang  = res.data.imgUrl.replace(/public/,'http://localhost:1901');
                localStorage.userInfo = JSON.stringify({avatar:res.data.imgUrl});
            })

            // var reader = new FileReader()
            // reader.onload = (data) => {
            //     let res = data.target || data.srcElement
            //     this.userInfo.touxiang = res.result
            // }
            // reader.readAsDataURL(file)


            // this.$axios({
            //     url:"/vue/upload-avatar",
            //     method:"POST",
            //     contentType:false,
            //     processData:false,
            //     data:data
            // }).then(res=>{
            //     console.log(res);
            //     // this.url = res.data.imgUrl;
            //     localStorage.userInfo = JSON.stringify({icon:res.data.imgUrl});
            // })

        },
    },

        // processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
        // contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
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
