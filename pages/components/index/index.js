


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
    other: '#fff',
    active: '#4d7435',
    autoplay: true,
    // 自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 1000,
    // 循环轮播
    circular: true,
  },



changeName:function(e){
  this.setData({
    navIsShow: !this.data.navIsShow
  });
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
