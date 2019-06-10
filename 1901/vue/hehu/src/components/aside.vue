<template>
    <div class="aside-bg">
        <div class="abside-bg">
            <el-row type="flex" justify="center">
                <el-col :span="10">
                    您好!
                </el-col>
                <el-col :span="6">
                    <el-button type="danger" icon="el-icon-water-cup"  size="mini">签到</el-button>
                </el-col>
            </el-row>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.aside-bg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100
}
.abside-bg{
    background-color: #fff;
    width: 80%;
    height: 100%;
    padding: 10% 0
}
</style>
