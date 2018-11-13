# vue项目总结
***
#### 项目所用技术栈
> 项目采用vue构建，主要使用了vue-cli 3.0 + vue-router + vuex + mint-ui的组合
---
#### 后台数据
> 后台使用的是nodejs+express 组成，数据使用别人抓取整理的[追书神器API](https://github.com/zimplexing/vue-nReader/blob/master/doc/zhuishushenqi.md),使用反向代理解决跨域（PS：这里使用了三种反向代理的方案，首先在开发过程中使用了webpack的[proxy](http://www.cnblogs.com/liuchuanfeng/p/6802598.html)进行代理，打包上线后使用了[nginx](http://www.cnblogs.com/anruy/p/4989161.html)的反向代理,最后整体采用的是[nodejs](https://www.cnblogs.com/tilv37/p/6796882.html)的反向代理方案）
---
#### 项目地址
> [点击跳转](http://39.106.38.187/vue/)
---
#### 开发中遇到的问题
1. 跨域问题
使用的他人的api，未做跨域处理，使用反向代理解决
2. props和vuex的取舍，vuex数据结构不够合理
3. 未能做合理的网络和性能优化，加载缓慢
---
#### 总结
>这次开发经验对于我来说可以说意义非凡，我通过这次项目开发，第一次体会到了模块化开发带来的便捷和结构的整洁，了解到了虚拟DOM和MVVM数据绑定的原理，对跨域的概念有了初步的了解，总得来说是一次不错的开发经历，不过项目还是不够完整，需要等以后有时间再解决一些BUG和完善功能。