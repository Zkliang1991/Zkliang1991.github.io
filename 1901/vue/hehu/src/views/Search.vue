<template>
  <div>
    <mt-header fixed title="搜索">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
      <el-select v-model="value" placeholder="请选择" slot="right" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </mt-header>
    <mt-search v-model.lazy="key" class="mt" :placeholder="value">
      <div>
        <ul style="margin-top:0.8rem;text-align:center;overflow: hidden;">
          <li v-for="(d,i) in data" :key="i" class="add-animation" @click="gocontent(d.id,d.name)">
            <p>{{d.name}}</p>
            <el-divider></el-divider>
          </li>
        </ul>
      </div>
    </mt-search>
    <div class="tag-sty" v-if="isSearch">
      <el-row type="flex" justify="space-around" style="flex-wrap:wrap">
         <el-tag style="margin-top:0.1rem" type="success" size="medium" v-for="(item,i) in list" :key="i" @click="gomusic(item.type,item.id)">{{item.key}}</el-tag>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "",
      value: "song",
      list: [],
      isSearch:true,
      options: [
        {
          value: "song",
          label: "歌曲"
        },
        {
          value: "songList",
          label: "歌单"
        },
        {
          value: "singer",
          label: "歌手"
        }
      ],
      data: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gocontent(id, name) {
      if (window.localStorage.searchList) {
        var list = window.localStorage.searchList;
        list = JSON.parse(list);
        list.push({ type: this.value, key: name, id: id });
        list = JSON.stringify(list);
        window.localStorage.searchList = list;
      } else {
        var list = [{ type: this.value, key: name, id: id }];
        list = JSON.stringify(list);
        window.localStorage.searchList = list;
      }
      if (this.value == "singer") {
        this.$router.push({ name: "singer", params: { id } });
        this.$store.state.singerId = id;
      } else if (this.value == "song") {
        this.$router.push({ name: "song", params: { id } });
        this.$store.state.songId = id;
      } else if (this.value == "songList") {
        this.$router.push({ name: "songlist", params: { id } });
        this.$store.state.songListId = id;
      }
    },
    gomusic(type,id){
      if (type == "singer") {
        this.$router.push({ name: "singer", params: { id } });
        this.$store.state.singerId = id;
      } else if (type == "song") {
        this.$router.push({ name: "song", params: { id } });
        this.$store.state.songId = id;
      } else if (type == "songList") {
        this.$router.push({ name: "songlist", params: { id } });
        this.$store.state.songListId = id;
      }
    }
  },
  watch: {
    key(newVal) {
      if (newVal) {
        this.$axios
          .get("https://v1.itooi.cn/netease/search", {
            params: {
              keyword: this.key,
              type: this.value,
              pageSize: 20,
              page: 0
            }
          })
          .then(res => {
            if (this.value == "singer") {
              this.data = res.data.data.artists;
            } else if (this.value == "song") {
              this.data = res.data.data.songs;
            } else if (this.value == "songList") {
              this.data = res.data.data.playlists;
            }
          });
          this.isSearch = false;
      } else {
        this.data = [];
        this.isSearch = true;
      }
    }
  },
  mounted() {
    if (window.localStorage.searchList) {
      var list = window.localStorage.searchList;
      list = JSON.parse(list);
      //console.log(list);
      this.list = list;
    }
  }
};
</script>

<style scoped>
.mt {
  position: fixed;
  top: 0.8rem;
  left: 0;
  right: 0;
}
.add-animation {
  animation: bounceInLeft 1s;
}
.tag-sty{
  position: absolute;
  z-index: 10;
  top: 2rem;
}

</style>
