<template>
    <div class="hehe">
        <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
        <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
            <slot name="PoperContent"></slot>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showCustomPopup: false,
      flag:false,
    };
  },
  methods: {
    showCustom() {
      this.showCustomPopup = !this.flag;
    },
    maskClick() {
      this.showCustomPopup = false;
    }
  }
};
</script>

<style scoped>
.CustomPopup {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

.CustomPopupContent {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}

.CustomPopupContentShow {
  transform: translateY(0);
}
</style>