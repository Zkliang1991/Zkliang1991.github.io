<template>
  <div class="foot">
    <mt-tabbar v-model="tab">
      <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name" class="foot-item">
        <mt-badge v-if="i==3" size="small" type="error" class="point">1</mt-badge>
        <i class="iconfont" v-html="foot.icon"></i>
        <p>{{foot.txt}}</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>



<mt-header :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back" v-if="backshow">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" v-if="moreshow"></mt-button>
</mt-header>





<mt-search v-model="value" cancel-text="取消" placeholder="搜索" class="search">
      <mt-cell v-for="(good,i) in goods" :key="i" class="goodsitem">
        <img :src="good.img" alt>
        <p>{{good.name}}</p>
      </mt-cell>
    </mt-search>