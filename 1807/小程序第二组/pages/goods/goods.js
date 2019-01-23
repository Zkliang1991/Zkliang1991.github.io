// pages/goods/goods.js
// Page()  页面启动挂载的时候 执行 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItems:[
      {text:"连衣裙",value:6.0},
      {text:"打底裙",value:7.0},
      {text:"半身裙",value:10.0},
      {text:"针织连衣裙",value:11.0}
    ],
    activeId:0,
    current:0,
    goods:[],
    show:false
  },

  swiperChange(e){
    this.setData({
      activeId: e.detail.current
    })
  },

  changeActiveId(e){
    this.setData({
      activeId:e.target.dataset.index,
      current: e.target.dataset.index
    })
  },

  swiperChange(e){
    this.setData({
      activeId: e.detail.current
    })
  },

  changeActiveId(e){
    this.setData({
      activeId:e.target.dataset.index,
      current: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
        title: '加载中...',
      })

      wx.request({
        url: 'http://47.106.73.151:3100/vue/getgoods',
        success:(res)=>{
          setTimeout(()=>{
            console.log(res);
            this.setData({
              goods: res.data,
              show:true
            })
            wx.hideLoading();
            wx.showToast({
              title: '加载成功!',
              duration:1000
            })
          },1)

        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {
  //   var that = this;
  //   wx.request({
  //     url: 'http://47.94.208.182:3100/vue/getgoodstypes', // 仅为示例，并非真实的接口地址
  //     success(res) {
        
  //       that.setData({
  //         navItems:res.data.result
  //       })
  //     }
  //   })
  // },  

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
      console.log("下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉加载更多")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})