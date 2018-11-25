


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
    about: [
      {
        img: '../../assets/img/about1.jpg',
        one: '品牌介绍',
        two: '多口味汤底、一锅一煮 \n 四级净水过滤、品质健康',
      },
      {
        img: '../../assets/img/about1.jpg',
        one: '全国加盟',
        two: '行业领军、势头迅猛 \n 全国拓店',
      },
      {
        img: '../../assets/img/about1.jpg',
        one: '人气爆棚',
        two: '50平单店 \n 单日营业额破万',
      }, 
      {
        img: '../../assets/img/about1.jpg',
        one: '集团优势',
        two: '依托阿香集团优势 \n 18年匠心经营，超500家直营店',
      },
    ],

    join: [
      {
        img: '../../assets/img/join_icon1.png',
        one: '小额投入',
        two: '投资少、回报率高最佳投资之选',
      },
      {
        img: '../../assets/img/join_icon1.png',
        one: '整店输出',
        two: '创业店（10-20m²）标准店 （35m²）',
      },
      {
        img: '../../assets/img/join_icon1.png',
        one: '集采集送',
        two: '自有生产物流配送中心\n全国5大加工厂',
      }, 
      {
        img: '../../assets/img/join_icon1.png',
        one: '全程扶持',
        two: '前期：从零扶持，顺利开业\n中期：培训辅导，解决问题\n后期：持续服务，持续营收',
      },
    ],

    food: {
    	introduct: {
    		one: '多种口味麻辣烫/一锅一煮全新体验/打造盈利模式第一品牌',
    		two: '煮田农场麻辣烫--阿香米线旗下品牌。从田野到餐桌，实现麻辣烫的”品质健康“新升级。每一种食材，都足够新鲜，每一种味道，都用心调制。\n搭配酥肉、糍粑等小吃及特质饮品及樱花冰粉，新鲜制作，打造轻食健康麻辣烫。'
    	},
    	tab: {
    		tit: [
    			'多种汤底', '特色食材', '美味小食', '清爽饮品'
    		],
    		con: [
    			[
    				'../../assets/img/food1.jpg',
    				'../../assets/img/food2.jpg',
    				'../../assets/img/food3.jpg',
    				'../../assets/img/food4.jpg',
    			],
    			[
    				'../../assets/img/food1.jpg',
    				'../../assets/img/food3.jpg',
    				'../../assets/img/food2.jpg',
    				'../../assets/img/food4.jpg',
    			],
    			[
    				'../../assets/img/food1.jpg',
    				'../../assets/img/food2.jpg',
    				'../../assets/img/food4.jpg',
    				'../../assets/img/food3.jpg',
    			],
    			[
    				'../../assets/img/food4.jpg',
    				'../../assets/img/food3.jpg',
    				'../../assets/img/food2.jpg',
    				'../../assets/img/food1.jpg',
    			]
    		]
    	}
    }

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
