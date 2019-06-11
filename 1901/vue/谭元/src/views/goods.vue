<template>
    <div>
        <Head title="商品"></Head>
        <divider>所有库存可售卖商品</divider>
        
           <div>
    
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>商品名称</th>
            <th>商品单价</th>
            <th>最低售卖价</th>
            <th>商品库存</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>小脚裤</td>
            <td>¥:36</td>
            <td>¥:30</td>
            <td>200</td>
          </tr>
        
        </tbody>
      </x-table>
      </div>
    </div>
</template>

<script>
import { Divider,XTable, LoadMore  } from "vux";
export default {
    name:'goods',



    components:{
       Divider,
       XTable,
       LoadMore
    }
}
</script>