<template>
  <div class="connect">
    <Head title="选择联系人"></Head>

    <div class="connectbox">
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step>提交订单</van-step>
        <van-step>添加联系人</van-step>
        <van-step>添加地址</van-step>
        <van-step>支付</van-step>
      </van-steps>
      <van-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <!-- 联系人列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-contact-list
          v-model="chosenContactId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </van-popup>

      <!-- 联系人编辑 -->
      <van-popup v-model="showEdit" position="bottom">
        <van-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </van-popup>
    </div>
    <van-button round type="primary" size="large" class="nextBtn" @click="gotoaddress">下一步</van-button>
    <van-button round type="danger" size="large" class="prevBtn" @click="backstep">上一步</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [],
      active: 1
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
    gotoaddress(){
        this.$router.push({name:"addresspage"})
    },
    backstep(){
        this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.connect {
  height: 100%;
  .connectbox {
    padding-top: 1rem;
  }
  .nextBtn {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0.2rem;
  }
  .prevBtn {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 1.3rem;
  }
}
</style>
