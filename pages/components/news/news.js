


//获取应用实例
const app = getApp()

Page({
  data: {
    news: [
      {
        img: '../../assets/img/news1.jpg',
        textOne: '如何吃出美食C位，麻辣烫pick指南了解一下？',
        textTwo: '2018-11-02',
      },
      {
        img: '../../assets/img/news2.jpg',
        textOne: '你有你的诗和远方，我有我的干拌酱',
        textTwo: '2018-09-14',
      },
      {
        img: '../../assets/img/news1.jpg',
        textOne: '煮田农场|pick你的国庆计划',
        textTwo: '2018-09-30',
      },
      {
        img: '../../assets/img/news2.jpg',
        textOne: '煮田农场|小吃界的Free Style',
        textTwo: '2018-09-21',
      },
    ]

  },

  //tab切换
  tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
  },


  onLoad: function (options) {
    // loading加载
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading',
      duration: 500
    })
  },


})
