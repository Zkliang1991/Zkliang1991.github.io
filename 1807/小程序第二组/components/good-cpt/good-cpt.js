// components/good-cpt/good-cpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      keyword:String,
      types:Object,
      goods:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    mydata:[]
  },  

  attached(){

    
    var mydata = this.properties.goods.filter((good) => good.itemType == this.properties.types.value);

    this.setData({
       mydata
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upper(){
      console.log("下拉刷新 upper");
      setTimeout(()=>{
        this.setData({
          mydata: this.data.mydata.reverse()
        })
        wx.showToast({
          title: '下拉刷新成功.',
        })
      },1500)
    },
    lower(){
      console.log("上拉加载更多 lower")
      setTimeout(() => {
        this.setData({
          mydata: this.data.mydata.concat(this.data.mydata.slice(0,4))
        })
        wx.showToast({
          title: '上拉加载成功.',
        })
      }, 1500)
    },
    scroll(){
      console.log("正在滚动.....")
    }
  }
})
