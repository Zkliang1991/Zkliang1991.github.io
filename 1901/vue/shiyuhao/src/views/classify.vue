 <template>
  <div v-if="show">
    <Head title="电影分类" class="top"></Head>
    <mt-navbar v-model="selected" class="is-selected">
      <mt-tab-item :id="item.value" v-for="(item,i) in newTypes" :key="i">{{item.text}}</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="t.value" v-for="(t,i) in newTypes" :key="i">
        <List
          :goods="movieInfo.all_goods.filter((it)=>it.type.value==t.value)"
          :type="t"
          :all_goods="all_goods"
          @changegoods="getMovie"
        ></List>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>


<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState(['movieInfo']),
        ...mapGetters(['newTypes'])
    },
    methods:{
        getMovie(){
            this.all_goods  = this.all_goods.reverse();
        },
        ...mapActions([
            'getGoodTypes',
            'getAllGoods'
        ])
    },
    data(){
        return {
            good_types:[],
            all_goods:[],
            selected:"action",
            show:false
        }
    },
    created(){
        this.getGoodTypes({url:'/vue/getGoodTypes'});

        this.getAllGoods({url:"/vue/getGoodList",cb:()=>{
            this.show = true;
        }})
    }
}
</script>


 


