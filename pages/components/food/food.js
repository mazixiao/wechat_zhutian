


//获取应用实例
const app = getApp()

Page({
  data: {

    // tab 切换
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },
    tab: {
      tit: [
        '多种汤底',
        '特色食材',
        '美味小食',
        '清爽饮品',
      ],
      con: [
        [
          '../../assets/img/about1.jpg',
          '../../assets/img/cost1.jpg',
        ],
        [
          '../../assets/img/cost1.jpg',
          '../../assets/img/about1.jpg',
        ],
        [
          '../../assets/img/about1.jpg',
          '../../assets/img/cost1.jpg',
        ],
        [
          '../../assets/img/cost1.jpg',
          '../../assets/img/about1.jpg',
        ],
      ]
    },
    //是否显示小圆点
    indicatorDots: true,
    //轮播图小圆点
    swiperOther: '#fff',
    //轮播图小圆点高亮
    swiperActive: '#4d7435',
    swiperAutoplay: true,
    // 自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 1000,
    // 循环轮播
    loop: true,

    fresh: {
      text: '从田野到餐桌，实现麻辣烫的“品质健康”新升级。每一种食材，都足够新鲜，每一种味道，都用心调制。搭配酥肉、糍粑等小吃及特制饮品及樱花冰粉，新鲜制作，打造轻食健康麻辣烫。',
      fresh_con: [
        '../../assets/img/food1.jpg',
        '../../assets/img/food1.jpg',
      ]
    }


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
      icon: 'loading'
    })
  },


})
