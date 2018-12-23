


//获取应用实例
const app = getApp()

Page({
  data: {
	search: [
		{
			img: '../../assets/img/search.jpg',
			text1: '郑州新郑华盛奥特莱斯餐厅',
			text2: '地区：河南省郑州市 \n 地址：河南省郑州新郑市龙湖镇华南城华盛奥特莱斯',
		},
		{
			img: '../../assets/img/search.jpg',
			text1: '郑州新郑华盛奥特莱斯餐厅',
			text2: '地区：山东省青岛市 \n 地址：青岛市黄岛区滨海大道1777号',
		},
		{
			img: '../../assets/img/search.jpg',
			text1: '郑州新郑华盛奥特莱斯餐厅',
			text2: '地区：深圳 \n 地址：深圳龙岗区龙城万科里地下步行商业',
		},	
		{
			img: '../../assets/img/search.jpg',
			text1: '郑州新郑华盛奥特莱斯餐厅',
			text2: '地区：深圳 \n 地址：深圳龙岗区龙城万科里地下步行商业',
		},
		{
			img: '../../assets/img/search.jpg',
			text1: '郑州新郑华盛奥特莱斯餐厅',
			text2: '地区：山东省东营市 \n 地址：山东省东营市东营区北一路730号',
		},	
		{
			img: '../../assets/img/search.jpg',
			text1: '郑州新郑华盛奥特莱斯餐厅',
			text2: '地区：山东省潍坊市 \n 地址：山东省潍坊市高新区新城西路以东的上东新邻里中心5号楼E5',
		}
	]

  },


    // 3个不同的类,取余    
    class0(index) {
      var search_item0 = Math.floor((index/2)%3) == 0;
      return search_item0;
    },
    class1(index) {
      var search_item1 = Math.floor((index/2)%3) == 1;
      return search_item1;
    },
    class2(index) {
      var search_item2 = Math.floor((index/2)%3) == 2;
      return search_item2;
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
