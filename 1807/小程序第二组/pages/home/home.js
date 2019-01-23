// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'http://47.106.73.151/dist/font/01f4c3fc.5.jpg',
      'http://47.106.73.151/dist/font/4914958b.6.jpg',
      'http://47.106.73.151/dist/font/57a42b27.7.jpg',
      'http://47.106.73.151/dist/font/6ab59f9d.8.jpg',

    ],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,

    videoSrc:"http://47.94.208.182/mp/brkw.mp4",

    maybelike:[],
    limit:6,
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log("111111")
    wx.request({
      url: 'http://47.106.73.151:3100/vue/maybeLike',
      data:{
        limit:6
      },
      success:(res)=>{
        var maybelike=res.data
        // var maybelike = res.data.map((item)=>{
        //   console.log(item);
        //   return item;
         
        // })
        this.setData({
          maybelike
        })
        wx.showToast({
          title: '请求成功!',
        })
      }
    })
  },

  showModal(){
    var that=this;
    wx.showModal({
      title:"友情提示",
      content:'您正在使用 流量观看视频',
      concelText:"取消观看",
      concelColor:"#333",
      confirmText:"继续观看",
      confirmColor:"#87CEFA",
      success(res){
        if (res.confirm) {
          console.log('用户点击确定')
          wx.showToast({
            title: `请继续`,
            duration: 1000
          })
          wx.setStorageSync('playType', true);
          that.videoCtx.play();
        } else if (res.cancel) {
          wx.showToast({
            title: `请切换WIFI`,
            duration: 1000
          })
          wx.setStorageSync('playType', false)
        }
      }
    })
  },

  videoPlay(){
    // 点击播放  
  if (!wx.getStorageSync('playType')){
    this.videoCtx.pause();
    this.showModal();
  }
},

videoplaying(){
  if (!wx.getStorageSync('playType')) {
    this.videoCtx.pause();
    this.showModal();
  }
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.videoCtx = wx.createVideoContext('myVideo');

    // wx.getNetworkType({
    //   success(res) {
    //     const networkType = res.networkType;
    //     console.log(networkType)
    //     if (networkType !=="wifi"){
    //       wx.setStorageSync('playType',false )
    //     }else{
    //       wx.setStorageSync('playType', true)
    //     }
    //   }
    // })

    // wx.onNetworkStatusChange(function (res) {
    //     const networkType = res.networkType;
    //     console.log(networkType)
    //     if (networkType !== "wifi") {
    //       wx.setStorageSync('playType', false)
    //     } else {
    //       wx.setStorageSync('playType', true)
    //     }
    // })
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("111111")
    wx.request({
      url: 'http://47.106.73.151:3100/vue/maybeLike',
      data:{
        limit:6
      },
      success:(res)=>{
        var maybelike = res.data.map((item)=>{
          return item;
          console.log(item);
        })
        this.setData({
          maybelike
        })
        wx.showToast({
          title: '请求成功!',
        })
      }
    })
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
    return {
      title:"狂欢购买",
      path:"/page/home/home"
    }
  }
 
})