<template>
  <div class='content'>
    <div>
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
      />
    </div>
  </div>
</template>
<script>

  export default {
  data() {
    return {
      items:[
  {
    // 导航名称
    text: '所有城市',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识
        id: 1,
        // 禁用选项
        disabled: false
      },
      {
        text: '杭州',
        id: 2
      }
    ]
  },
    {
    // 导航名称
    text: '花花',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '呵呵呵',
        // id，作为匹配选中状态的标识
        id: 1,
        // 禁用选项
        disabled: false
      },
      {
        text: '哈哈哈',
        id: 2
      }
    ]
  }
],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
      
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  }

}
</script>
