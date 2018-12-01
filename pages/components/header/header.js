
Component({ 
  options: { 
    // 在组件定义时的选项中启用多slot支持 
    multipleSlots: true 
  }, 

  properties: {

  }, 

  data: { 
    // 导航开关 
    navIsShow: false,
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
  }
})
