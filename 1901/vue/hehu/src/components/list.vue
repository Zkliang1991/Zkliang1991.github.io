<template>
  <div>
    <div>
      <div v-for="(item,i) in list" :key="i" class="boder-div" @click="gomusic(item.id)">
        <el-row  type="flex" justify="space-between">
          <el-col :span="6">
            <el-image :src="item.img" fit="fit">
            </el-image>
          </el-col>
          <el-col :span="16" :offset="2">
            <el-row>
              <p class="sty-p1">{{item.name}}</p>
              <p class="sty-p2">{{item.songname}}</p>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["list"],
  methods: {
    gomusic(id){
      this.$router.push({ name: "song", params: { id } });
      this.$store.state.songId = id;
    }
  },
};
</script>
<style scoped>
.boder-div{
  width: 90%;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 0.2rem #333333
}
.sty-p1{
  margin: 0.2rem 0;
}
.sty-p2{
  margin: 0.2rem 0;
  font-size: 0.24rem;
  font-style: italic
}
</style>
