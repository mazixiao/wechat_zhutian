


//获取应用实例
const app = getApp()

Page({
  data: {
  

  },



  //视频关闭
  pauseViode: function () {
    this.setData({
      videoHide: true,
    });
    var videoContext = wx.createVideoContext('video');
    videoContext.pause();
  },




})
