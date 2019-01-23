// pages/my/my.js
import { getRandomColor } from "../../utils/util.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    
    imgUrls: [
      'http://47.94.208.182/base/img/1.jpg',
      'http://47.94.208.182/base/img/2.jpg',
      'http://47.94.208.182/base/img/3.jpg',
      'http://47.94.208.182/base/img/4.jpg',
      'http://47.94.208.182/base/img/5.jpg'
    ],
    // indicatorDots: true,
    // autoplay: false,
    // interval: 5000,
    // duration: 1000,
    // poster:"http://47.94.208.182/base/img/3.jpg",
    // name: '此时此刻',
    // author: '许巍',
    // src:"http://47.94.208.182/mp/Sugar.mp3",
    // danmuList: [
    //   {
    //     text: '第 1s 出现的弹幕',
    //     color: '#ff0000',
    //     time: 1
    //   },
    //   {
    //     text: '第 3s 出现的弹幕',
    //     color: '#ff00ff',
    //     time: 3
    //   }],
    // videoSrc:"http://47.94.208.182/mp/brkw.mp4",
    // txt:"",

    modalData:{
      modalHidden:false,
      username:wx.getStorageSync("username")?wx.getStorageSync("username"):""
      // password:""
    },
  },

  // bindInputBlur(e){
  //   console.log(e);
  //   this.setData({
  //     txt:e.detail.value
  //   })
  // },

  // bindSendDanmu(){
  //   this.videoCtx.sendDanmu({
  //     text:this.data.txt,
  //     color: getRandomColor()
  //   })

  //   this.setData({
  //     txt:""
  //   })
  // },

  // bindButtonTap(){
  //   const that = this;
  //   wx.chooseVideo({
  //     sourceType: ['album', 'camera'],
  //     maxDuration: 60,
  //     camera: ['front', 'back'],
  //     success(res) {
  //       that.setData({
  //         videoSrc: res.tempFilePath
  //       })
  //     }
  //   })
  // },

  // audioPlay(){
  //   this.audioCtx.play()
  // },  

  // audioPause(){
  //   this.audioCtx.pause()
  // },

  confirm(){
    this.setData({
      'modalData.modalHidden': true
    })

    wx.setStorageSync('username', this.data.modalData.username)
    wx.setStorageSync('password', this.data.modalData.password)
    

  },
  cancel(){
    this.setData({
      'modalData.modalHidden': true
    })


  },
  getUsername(e){
    
    this.setData({
      'modalData.username':e.detail.value
    })
  },
  getPassword(e){
    this.setData({
      'modalData.password': e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    var username=wx.getStorageSync("username")
    console.log(username);
    if(username){
      this.setData({
        'modalData.modalHidden': true
      })
    }else{
      this.setData({
        'modalData.modalHidden': false
      })
    }
    
  },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  

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