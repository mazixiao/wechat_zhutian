
Component({ 
  options: { 
    // 在组件定义时的选项中启用多slot支持 
    multipleSlots: true 
  }, 

  properties: {

  }, 

  data: { 
    // 微信图片默认看不见
    weixinIsShow: true,
    // 电话号码
    phonecall: '12345678910',    
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
    // 点击微信icon控制图片显示和隐藏
    controlWinxinShow:function() {
      this.setData({
        weixinIsShow: !this.data.weixinIsShow
      });
    },
    // 点击事件
    phonecallevent: function (e) {
      wx.makePhoneCall({
        phoneNumber: this.data.phonecall
      })
    }


  }
})
