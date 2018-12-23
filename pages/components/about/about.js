


//获取应用实例
const app = getApp()

Page({
  data: {
    anchor: ['煮田简介', '门店形象'],
    // 锚点 默认第一个高亮
    anchorActive: 0,
    zhutianIntroduct: {
    	tit: '煮田简介',
    	text: '煮田农场系全国知名连锁企业阿香集团的餐饮品牌。依托阿香集团总部近18年连锁运营经验，煮田农场致力于麻辣烫餐饮服务的开发、经营和管理，为打造麻辣烫连锁知名品牌而不懈努力。 传统麻辣烫行业采取的是一锅炖重复煮，既不卫生菜品还容易串味， 煮田采用一人一锅煮的方式，现选现煮保证了每一碗出品的原汁原味。煮田农场以多口味，特色汤底为主。从田野到餐桌，实现麻辣烫的“品质健康”新升级。坚持从清洗到烫煮使用4级净化水循环系统，打造健康、新鲜、美味，与众不同的麻辣烫。',
    	videoImg: '../../assets/img/cost1.jpg',
    	zantingImg: '../../assets/img/zanting.png',
    	rightCon: [
    		{
    			img: '../../assets/img/round.png',
    			number: '18',
    			text: '18年连锁运营经验',
    		},
    		{
    			img: '../../assets/img/round.png',
    			number: '1',
    			text: '一人一锅煮方式',
    		},
    	]
    },
    // 视频默认隐藏
    videoHide: true,
    videoSrc: 'https://tegent.oss-cn-hangzhou.aliyuncs.com/sp.mp4',
    shopShow: {
      tit: '门店形象',
      text: '主打新鲜食材和轻松就餐环境，营造在农场里吃麻辣烫的体验。活体豆苗搭配新鲜菜品，增加消费者对品牌信任和识别度。空间里绿植，原木色，农场屋形态的演变，以及户外太阳伞，自行车和铁艺隔断等元素，一进门农场风遍扑面而来，营造轻松愉悦的场景',
      swiper: [
        {
          img: '../../assets/img/about1.jpg',
          text: '苏州翰林邻里中心'
        },
        {
          img: '../../assets/img/about1.jpg',
          text: '广东省深圳市龙岗区'
        },
        {
          img: '../../assets/img/about1.jpg',
          text: '郑州360店'
        },
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

  },

  // 模拟锚点
  anchorControl:function(e) {
    var dataId = e.currentTarget.dataset.id;
    this.setData({
      anchorActive: dataId,
    });
    if (dataId === 0) {
      //创建节点选择器
      var query = wx.createSelectorQuery();
      //选择id
      query.select('.zhutian_introduct').boundingClientRect();
      query.exec(function (res) {
        wx.pageScrollTo({
          scrollTop: res[0].top - 45,
        });
      })
    } else {
      //创建节点选择器
      var query = wx.createSelectorQuery();
      //选择id
      query.select('.shop_show').boundingClientRect();
      query.exec(function (res) {
        wx.pageScrollTo({
          scrollTop: res[0].top - 45,
        });
      })
    }
  },

  //视频播放
  playVideo: function () {
    this.setData({
      videoHide: false,
    });
    var videoContext = wx.createVideoContext('video');
    videoContext.play();
  },

  //视频关闭
  pauseViode: function () {
    this.setData({
      videoHide: true,
    });
    var videoContext = wx.createVideoContext('video');
    videoContext.pause();
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

