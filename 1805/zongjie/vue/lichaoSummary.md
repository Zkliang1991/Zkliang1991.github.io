# vue 项目总结

&ensp;&ensp;&ensp;&ensp;vue 项目已经完结，我写的是一个社区交互类型是 app,从最开始的感觉无从下手，到后来的信手拈来。写项目的过程中，让我对于
`vuex`这种状态管理模式有了更加深刻的理解。从最开始的抓数据开始，慢慢的一步步实现。

&ensp;&ensp;&ensp;&ensp;在项目写的过程中，还是遇到了一些问题，原 APP 中的布局方式是使用的瀑布流，于是我在 npm 中找了一个完成瀑布流的组件，但是照着文档研究半天，却发现并不是特别的适合我的项目。最终因为时间的原因放弃了，以后有时间研究，名字叫
`vue-waterfall-easy`。

&ensp;&ensp;&ensp;&ensp;有点遗憾的是在项目之中并没有对于`slot`有很好的去运用。有点纠结这些东西导致后面的逻辑没有写多少。写项目的时候，自己边查别写，还是得到了很大的提升。额外的收获，后续上线阶段有`ngnix`，自己也尝试在其中放一些静态的资源。

### 技术栈

---

> 后台 nodejs+express

---

> 前端 vue+vuex+vue-router+mint-ui

### 目录树：

```
│  .babelrc
│  .gitignore
│  package.json
│  webpack.config.js
│
├─dist
│  │  index.html
│  ├─assets
│  ├─css
│  └─js
└─src
    │  favicon.ico
    │  index.html
    │  main.js
    │
    ├─assets
    │  ├─iconfont
    │  │
    │  └─images
    │      │
    │      └─iconfont
    │
    ├─scripts
    │  │
    │  ├─components
    │  │
    │  ├─utils
    │  │
    │  ├─views
    │  │
    │  └─vuex
    │
    └─styles
        │  index.scss
        │
        └─common
```

&ensp;&ensp;&ensp;&ensp;不足：写的时候还是太菜，代码的复用性不高，不够简洁。继续加油！后续还是要加强对于 webpack 的理解，webpack 不会自己配置还是不够的！
