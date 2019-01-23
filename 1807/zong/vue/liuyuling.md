### vue学习总结

>   ​	Vue是一套用于构建用户界面的**渐进式框架**，vue的核心库只关注`view`视图层。学习中的重点有组件、指令、路由，以及Vuex。

#### 组件

1.  组件注册

    -   使用 kebab-case

        ```js
        Vue.component('my-component-name', { /* ... */ })
        ```

    -   使用 PascalCase

        ```js
        Vue.component('MyComponentName', { /* ... */ })
        ```

        >   `Vue.component` 来注册全局组件

2.  自定义组件

#### 指令

1.  核心功能默认内置的指令

    -   v:text : 更新元素的 textContent
    -    v-html : 更新元素的 innerHTML
    -   v-if : 如果为 true, 当前标签才会输出到页面
    -    v-else: 如果为 false, 当前标签才会输出到页面
    -   v-show : 通过控制 display 样式来控制显示/隐藏
    -   v-for : 遍历数组/对象
    -   v-on : 绑定事件监听, 一般简写为@
    -    v-bind : 强制绑定解析表达式, 可以省略 v-bind
    -   v-model : 双向数据绑定
    -    ref : 指定唯一标识, vue 对象通过$els 属性访问这个元素对象
    -    v-cloak : 防止闪现, 与 css 配合: [v-cloak] { display: none }

2.  自定义指令

    >   实现对普通 DOM 元素进行底层操作

    ```js
    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    })
    ```

    ```js
    //如果想注册局部指令，组件中也接受一个 directives 的选项：
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
    ```

#### 路由

>   对于大多数单页面应用，都推荐使用官方支持的 [vue-router 库](https://github.com/vuejs/vue-router)。更多细节可以看 [vue-router 文档](https://router.vuejs.org/)

创建路由的步骤：

1.  如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
2.  定义路由组件
3.  定义路由 routes 路由配置 path,component
4.  创建 router 实例，然后传 `routes` 配置
5.  挂载到根实例
6.  路由出口  路由匹配到的组件将渲染在这里
7.  页面导航 to 属性



#### [Vuex](https://vuex.vuejs.org/zh/)

>   Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

![vuex](https://vuex.vuejs.org/vuex.png)

###### vuex核心概念：state、getter、mutation、action、module

