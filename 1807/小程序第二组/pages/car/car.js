// pages/shoppcar/shoppcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      carList:[],
      total:0,
      quan:false,
  },

   //减
   desc(e){
  
    if(e.target.dataset.num<=1){
      e.target.dataset.num==1
    }else{

    
    var newNum=(e.target.dataset.num)*1-1;
   
    var goodId = e.target.dataset.goodid;
    var carList = this.data.carList.map((item) => {

      if (item.iid == goodId) {
        item.num = newNum;
      }
      return item;
    })
    
    var total = 0;
    var quan=true;
    carList.forEach((item) => {
      if (item.check) {
        total += item.price * item.num * 1;
      } else {
        quan = false;
      }
    })

    this.setData({
      carList,
      total
    })
  
    //数据库
    wx.request({
      url: 'http://47.106.73.151:3100/vue/changeNum', // 仅为示例，并非真实的接口地址
      data: {
        username: wx.getStorageSync('username'),
        id: goodId,
        num: newNum
      },
      success(res) {
        console.log(res)

      }
    })
  }
  },
   //加
   add(e){
    var newNum=(e.target.dataset.num)*1+1
    var goodId = e.target.dataset.goodid;
    var carList = this.data.carList.map((item) => {
      if (item.iid == goodId) {
        item.num = newNum;
      }
      return item;
    })
    
    var total = 0;
    var quan=true;
    carList.forEach((item) => {
      if (item.check) {
        total += item.price * item.num * 1;
      } else {
        quan = false;
      }
    })

    this.setData({
      carList,
      total
    })

    //数据库
    wx.request({
      url: 'http://47.106.73.151:3100/vue/changeNum', // 仅为示例，并非真实的接口地址
      data: {
        username: wx.getStorageSync('username'),
        id: goodId,
        num: newNum
      },
      success(res) {
        console.log(res)

      }
    })
  },

  //删除
  del(e){
    var goodId = e.target.dataset.goodid;
    var carList = this.data.carList.filter((item) => {
      if(item.iid!=goodId){
        return item;
      }
    })

    this.setData({
      carList
    })

    wx.request({
      url: 'http://47.106.73.151:3100/vue/delCar', 
      data: {
        username: wx.getStorageSync('username'),
        id: goodId,
      },
      success(res) {
        console.log(res)

      }
    })
  },

  //全选
  checkAll(e){
    var quan = e.target.value;
    console.log(e);

    this.setData({
        quan:!this.data.quan,
       
    })

    var carList = this.data.carList.map((item)=>{
      item.check = this.data.quan
      return item;
    })

    var total = 0;
    carList.forEach((item)=>{
      if(item.check){
        total += item.price*item.num *1;
      }else{
        quan = false;
      }
    })

    this.setData({
      carList,
      total
    })

    
  },

  //单选
  checkOne(e){
    var goodId = e.target.dataset.goodid;
  
    var carList = this.data.carList.map((item)=>{
     
      if(item.iid==goodId){
        
        item.check = !item.check;
      }
      return item;
    })
  
    var total = 0;
    var quan=true;
    carList.forEach((item)=>{
      if(item.check){
        total += item.price*item.num *1;
      }else{
        quan = false;
      }
    })
    this.setData({
      carList,
      total,
      quan
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if(wx.getStorageSync('username')){
     wx.request({
       url: 'http://47.106.73.151:3100/vue/mycar',
       data:{
         username:wx.getStorageSync('username')
       },
       success:(res)=>{
         var carList = res.data.map((item)=>{
           item.check = false;
           return item;
           console.log(item);
         })
         this.setData({
           carList
         })
         wx.showToast({
           title: '请求成功!',
         })
       }
     })
    // }else{

    //   wx.showModal({
    //     title: '温馨提示',
    //     content: '还未登录,前往登录 ！ ',
    //     cancelText: "取消登录",
    //     cancelColor: "#696969",
    //     confirmText: "去登录",
    //     confirmColor: "#00BFFF",
    //     success(res) {
    //       if (res.confirm) {
    //         console.log('用户点击确定')
    //         wx.switchTab({
    //           url: '../my/my',
    //         })
    //       } else if (res.cancel) {

    //       }
    //     }
    //     })
    // }

    

     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})