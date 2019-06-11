<template>
    <div>
        <div class="confirm">
            <van-icon  name="arrow-left" size="0.4rem"/>
            <p class="confirm2">添加收货信息</p>
        </div>
        <p class="kong"></p>
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </div>
</template>


<script>
import { Area } from 'vant';
import AddressInfo from '../utils/city'
export default {
    data(){
        return {
            areaList:AddressInfo,
            searchResult: []
        }
    },
    methods:{
         onSave(content) {
             
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.confirm{
    overflow: hidden; height: 0.88rem;
    .van-icon{
        line-height: 0.96rem; width: 10%;
        margin-left:8%; float:left;
    }
    .confirm2{
        float:left; text-align: center;
        text-align: center; width: 70%;
        font-size: 18px; line-height: 0.88rem;
        color: #222121; margin-right: 10%;
        font-weight: 700; 
        
    }
}
</style>

