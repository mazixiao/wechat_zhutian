


//获取应用实例
const app = getApp()

Page({
  data: {
    //获取href上的数据
    href: {},
    // ajax容器
    ajaxData: [],
    // 页码
    pageToken: 1,

  },

//接收href上的数据
  onLoad: function (options) {
    var that = this;
    this.setData({
      href: options
    });
    that.ajaxSend(that);
  }, 
  // 发送请求封装
  ajaxSend: function (that) {
    var pageToken = this.data.pageToken
    wx.request({
      url: 'https://api01.idataapi.cn/news/qihoo?kw=%E7%99%BD&site=qq.com&pageToken=' + pageToken + '&apikey=WyPef4FMI79FqgPyB6zbdhhDxNyLTnn2MX4d1cJUHRi3G0UpefWIfwb5fqfDBQfw',
      method: 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function (res) {
        if (res.statusCode == 200) {
          // console.log(res)
          that.setData({
            ajaxData: that.data.ajaxData.concat(res.data.data)
          });
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
  },

  againAjax: function() {
    this.setData({
      pageToken: this.data.pageToken + 1,
    })
    this.ajaxSend(this)
  }









})
