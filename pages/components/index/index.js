


//获取应用实例
const app = getApp()

Page({

  data: {
    aaa: 'pages/components/index/index',
    // 首页轮播图
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
    // 首页视频链接
    videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    //视频默认隐藏
    videoHide: true,
    // 关于我们
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
    },
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
          '../../assets/img/food1.jpg',
          '../../assets/img/food2.jpg',
        ],
        [
          '../../assets/img/food2.jpg',
          '../../assets/img/food1.jpg',
        ],
        [
          '../../assets/img/food1.jpg',
          '../../assets/img/food2.jpg',
        ],
        [
          '../../assets/img/food2.jpg',
          '../../assets/img/food1.jpg',
        ],
      ]
    },
    farm: {
    	text: '主打新鲜食材和轻松就餐环境，营造在农场里吃麻辣烫的体验。\n活体豆苗搭配新鲜菜品，增加消费者对品牌信任和识别度。空间里绿植，原木色，农场屋形态的演变，以及户\n外太阳伞，自行车和铁艺隔断等元素，一进门农场风遍扑面而来，营造轻松愉悦的场景。',
    	swiper: [
			'../../assets/img/about1.jpg',
			'../../assets/img/about1.jpg',
    	]
    },
    // alert遮罩
    alertShadow: true,
    // alert文字提示
    alertCon: '',
    // 获取姓名
    names: '',
    // 获取手机
    phone: '',
    // 获取邮箱
    email: '',
    //意向区域
    want: '',

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


// 点击alert框中的确定
bindconfirm: function() {
	this.setData({
		alertShadow: true,
	});
},

// 获取input框姓名的值(去空格)
names: function(e){
	this.setData({
		names: e.detail.value.replace(/\s+/g, ''),
	});
},

// 获取input框手机号(去空格)
phone: function(e){
	this.setData({
		phone: e.detail.value.replace(/\s+/g, ''),
	});
},

// 获取input框邮箱(去空格)
email: function(e){
	this.setData({
		email: e.detail.value.replace(/\s+/g, ''),
	});
},

// 获取input框意向区域(去空格)
want: function(e){
	this.setData({
		want: e.detail.value.replace(/\s+/g, ''),
	});
},
// 点击提交按钮获取信息
commit:function() {
  // 手机号码验证
  var phoneInput = /^[1][3,4,5,7,8][0-9]{9}$/;
  // 邮箱验证
  var emailInput = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  // 获取姓名
	var names = this.data.names;
  // 获取手机号
	var phone = this.data.phone;
  // 获取邮箱
	var email = this.data.email;
  // 获取意向区域
	var want = this.data.want;
	if(!names) {
		this.setData({
			alertShadow: false,
			alertCon: '请输入姓名!',
		});
		return;
	};
	if(!phoneInput.test(phone)) {
		this.setData({
			alertShadow: false,
			alertCon: '请输入正确的手机格式!',
		});
		return;
	};
	if(!emailInput.test(email)) {
		this.setData({
			alertShadow: false,
			alertCon: '请输入正确的邮箱格式!',
		});
		return;
	};
	if(!want) {
		this.setData({
			alertShadow: false,
			alertCon: '请填写意向区域!',
		});
		return;
	};
	this.setData({
		alertShadow: false,
		alertCon: '提交成功!',
	});



},


  //当页面改变是会触发
  bindchangeTag:function(e){
    // console.log("bindchangeTag...")
  }, 
  onLoad:function(options){
    this.setData({
      aaa: this.route,
    });
    // loading加载
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading',
      duration: 500
    })
  },
  onReady:function(){
    // 页面渲染完成
    // console.log(this.data.aaa);
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  
})
