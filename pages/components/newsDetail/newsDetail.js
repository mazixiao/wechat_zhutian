


//获取应用实例
const app = getApp()

Page({
  data: {
    //获取href上的数据
    href: {},

  },


  onLoad: function (options) {
    this.setData({
      href: options
    })
    console.log(options)
  } 





})
