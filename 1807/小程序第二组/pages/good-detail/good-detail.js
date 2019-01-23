// pages/good-detail/good-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      good:{},
      // count:1
  },

  // desc(){
  //   if(this.data.count>1){
  //     this.setData({
  //       count: --this.data.count
  //     })
  //   }
    
  // },
  // add(){
  //   this.setData({
  //     count:++this.data.count
  //   })
  // },

  // setCount(e){
  //   console.log(e);
  //   if (e.detail.value>=1){
  //     this.setData({
  //       count: e.detail.value
  //     })
  //   }
  // },

  gotocar(){
     wx.switchTab({
       url: '../car/car',
     })
  },

  addCar(){
    if (wx.getStorageSync('username')) {
      // 加入购物车  
      wx.request({
        url: 'http://47.106.73.151:3100/vue/addtoCar',
        data:{
          username:wx.getStorageSync('username'),
          iid:this.data.good.iid ,
          title:this.data.good.title,
          price:this.data.good.price,
          img:this.data.good.img,
        },
        success:(res)=>{
          console.log(res);
          wx.showToast({
            title: `${res.data.msg}`,
          })
        }
      })
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '还未登录,前往登录 ！ ',
        cancelText: "取消登录",
        cancelColor: "#696969",
        confirmText: "去登录",
        confirmColor: "#00BFFF",
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({
              url: '../my/my',
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);

      wx.showLoading({
        title: '请求中...',
      })

      wx.request({
        // 5c110090b03dfb846147ee85
        url: 'http://47.106.73.151:3100/vue/goodsdetail',
        data:{
          id:options.goodId 
        },
        
        success:(res)=>{
          console.log(res);
          wx.hideLoading();
          this.setData({
            good:res.data[0]
          })
          
          // wx.setNavigationBarTitle({
          //   title: res.data.title
          // })
          wx.showToast({
            title: '加载成功!',
          })
        }
      })
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