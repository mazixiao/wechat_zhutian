


//获取应用实例
const app = getApp()

Page({
  data: {
    //视频初始路径
    videoSrc: '',
    // 是否显示视频容器，默认关闭
    isShowVideo: true,
    video_test: [
      {
        img: '../../assets/img/swiper.jpg',
        url: 'http://img.manro.com.cn/jb-play.mp4',
        text: '视频一'
      },
      {
        img: '../../assets/img/swiper.jpg',
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        text: '视频二'
      },
      {
        img: '../../assets/img/swiper.jpg',
        url: 'https://tegent.oss-cn-hangzhou.aliyuncs.com/genevac.mp4',
        text: '视频三'
      },
      {
        img: '../../assets/img/swiper.jpg',
        url: 'https://tegent.oss-cn-hangzhou.aliyuncs.com/sp.mp4',
        text: '视频四'
      },
    ],
  },

  

  // 点击当前元素播放视频
  videoPlay: function (e) {
    //获取点击元素的视频路径
    var videoSrc = e.currentTarget.dataset.url;
    this.setData({
      videoSrc: videoSrc,
      isShowVideo: false,
    });
    var videoContext = wx.createVideoContext('video22');
    videoContext.play();

  },
  //关闭视频
  videoPause() {
    this.setData({
      videoSrc: '',
      isShowVideo: true,
    });
    var videoContext = wx.createVideoContext('video22');
    videoContext.pause();
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
