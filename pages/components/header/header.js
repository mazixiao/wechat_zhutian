
Component({ 
  options: { 
    // 在组件定义时的选项中启用多slot支持 
    multipleSlots: true 
  }, 

  properties: {
    aaa: String
  }, 

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
   
    var exp = this.data.aaa;
    var index = 'pages/components/index/index';


    switch (exp) {
      case index:
        //var ddd = document.getElementByClassName('active0');
        var query = wx.createSelectorQuery()
        query.select('active0')
        //console.log(query.select('active0'), 'ddd');
        //console.log(query, '444');
        break;
      default:
        // console.log(exp, '999');
        // console.log(index, '999');
    }

   },


  moved: function () { },
  detached: function () { },
  

  data: { 
    // 导航开关 
    navIsShow: false,
    // floorstatus: false,
    navs: [
      {
        text: '网站首页',
        url: '../index/index'
      },
      {
        text: '招商加盟',
        url: '../join/join'
      },
      {
        text: '关于煮田',
        url: '../about/about'
      },
      {
        text: '煮田美食',
        url: '../food/food'
      },
      {
        text: '最新资讯',
        url: '../news/news'
      },
      {
        text: '门店查询',
        url: '../search/search'
      },
      {
        text: '联系我们',
        url: '../contact/contact'
      },
      {
        text: '视频列表',
        url: '../videoItem/videoItem'
      }

    ]
  }, 

  methods: { 

    //控制导航开关
    controlNav() {
      this.setData({
        navIsShow: !this.data.navIsShow
      });
    },
    //当页面改变是会触发
    bindchangeTag: function (e) {
      // console.log("bindchangeTag...")
    },
    onLoad: function (options) {
      // console.log(options, '111');
      // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function () {
      // 页面渲染完成
    },
    onShow: function () {
      // 页面显示
    },
    onHide: function () {
      // 页面隐藏
    },
    onUnload: function () {
      // 页面关闭
    },

    //回到顶部
    goTop: function (e) {  // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    },
  }
})
