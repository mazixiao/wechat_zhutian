


//获取应用实例
const app = getApp()

Page({
  data: {
  	tabTit: ['人才招聘', '联系我们'],
    // 锚点 默认第一个高亮
    anchorActive: 0,

  },

  // 模拟锚点
  anchorControl:function(e) {
    var dataId = e.currentTarget.dataset.id;
    this.setData({
      anchorActive: dataId,
    });
  },








 




})
