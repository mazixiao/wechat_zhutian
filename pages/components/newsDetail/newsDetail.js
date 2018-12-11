


//获取应用实例
const app = getApp()

Page({
  data: {
    //获取href上的数据
    href: {},
    // ajax容器
    ajaxData: [],

  },

//接收href上的数据
  onLoad: function (options) {
    this.setData({
      href: options
    })
    var that = this
    that.ajaxSend(that)
  }, 


  ajaxSend: function (that) {
    wx.request({
      url: 'http://web.juhe.cn:8080/environment/air/cityair?city=%E4%B8%8A%E6%B5%B7&key=cd1fbf79725d23665a04f33a548fad5b',
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res)
          that.setData({
            ajaxData: res
          })
        } else {
          console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("index.js wx.request CheckCallUser fail");
      },
      complete: function () {
        // complete
      }
    })
  }









})
