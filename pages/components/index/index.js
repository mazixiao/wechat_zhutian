


//获取应用实例
const app = getApp()

Page({
  data: {
    navIsShow: false,
    imgUrls: [
      '../../assets/img/swiper.jpg',
      '../../assets/img/swiper.jpg',
    ],
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
    videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    //视频默认隐藏
    videoHide: true,
  },


// 测试
changeName:function(e){
  this.setData({
    navIsShow: !this.data.navIsShow
  });
},

//视频播放
playVideo: function() {
	this.setData({
		videoHide: false,
	});
	var videoContext = wx.createVideoContext('video');
	videoContext.play();
},

//视频关闭
pauseViode: function() {
	this.setData({
		videoHide: true,
	});
	var videoContext = wx.createVideoContext('video');
	videoContext.pause();
},



 //当页面改变是会触发
 bindchangeTag:function(e){
  // console.log("bindchangeTag...")
 }, 
 onLoad:function(options){
 	// console.log(options, '111');
  // 页面初始化 options为页面跳转所带来的参数
 },
 onReady:function(){
  // 页面渲染完成
 },
 onShow:function(){
  // 页面显示
 },
 onHide:function(){
  // 页面隐藏
 },
 onUnload:function(){
  // 页面关闭
 }





})
