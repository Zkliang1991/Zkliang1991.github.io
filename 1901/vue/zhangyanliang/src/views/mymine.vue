<template>
    <div>
        <Head title="个人信息" :show="true"></Head>
        <van-tabs v-model="active">
        <van-tab title="个人信息">
            <div class="beijing">
                <div id="photo"><img :src="userInfo.touxiang" @click.stop="updateimg" class="ohuo"/></div>
                <input type="file" accept="image/*" @change="shangchuan" class="hiddenInput"/>
            </div>
            <!-- <van-cell-group>
                <van-field v-model="value" placeholder="请输入用户名"   label="用户名"/>
            </van-cell-group> -->
            <h2 class="username">xxx</h2>
            <van-radio-group v-model="radio">
                <span>性别</span>
                <van-radio name="帅汉子" checked-color="#E26383">帅汉子</van-radio>
                <van-radio name="萌妹子" checked-color="#E26383">萌妹子</van-radio>
            </van-radio-group> 
            <van-cell-group>
            <van-field
                v-model="message"
                label="个性标签"
                type="textarea"
                placeholder="该同袍很懒，什么也没又留下"
                rows="2"
                autosize
            />
    </van-cell-group>  
       </van-tab>
        <van-tab title="密码管理">
              <van-cell-group>
                <van-field v-model="value" placeholder="请输入用户名"   label="用户名"/>
            </van-cell-group>
             <van-field
                v-model="password"
                type="password"
                label="旧密码"
                placeholder="请输入旧密码"
                required
            />
             <van-field
                v-model="newpwd"
                type="password"
                label="新密码"
                placeholder="请输入新密码"
                required
            />
            <van-button type="primary" size="large">修改信息</van-button>
        </van-tab>
           
        </van-tabs>
        <van-button type="warning" size="large">退出登录</van-button>

    </div>
</template>
<script>
import { Uploader } from 'vant';
export default {
    data(){
        return{
            active:"个人信息",
             userInfo: {
              touxiang: require("../assets/boy.png"),
            } ,
            radio:"帅汉子",
            value:"",
            message:"",
            password:'',
            newpwd:''
           
        }
    },
     methods: {
   
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
       
  }
}
</script>
<style scoped>
  img{
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
}
.hiddenInput{
  display: none;
}
.ohuo{
  
    width:2rem ;
    height: 2rem;
    margin:.5rem auto;
}
.beijing{
     background-image: url(../assets/beijing2.jpg) no-repeat 0 0;
}
.van-radio-group{
    width: 100%;
    height: 1rem;
    margin: .2rem 0;
}
.username{
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
}
.van-radio-group span{
    display: inline-block;
    margin-left: 0.3rem;
    vertical-align: top;
    line-height: 1rem;
}
.van-radio{
    display: inline-block;
    margin-left: .5rem;
    margin-top: .3rem;
    color: rgb(226, 99, 131);
}
</style>


