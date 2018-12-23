


//获取应用实例
const app = getApp()

Page({
  data: {
    aaa: 'pages/components/join/join',

  	fourIntroduct: [
  		{
  			img: '../../assets/img/introduct_icon2.png',
  			text: '热销产品',
  		},
  		{
  			img: '../../assets/img/introduct_icon2.png',
  			text: '加盟费用',
  		},
  		{
  			img: '../../assets/img/introduct_icon2.png',
  			text: '签约流程',
  		},
  		{
  			img: '../../assets/img/introduct_icon2.png',
  			text: '服务支持',
  		},
  	],

  	hot_sell: {
  		tit: '热销产品  门店实况',
  		con: [
  				{
	  				img: '../../assets/img/about1.jpg',
	  				one: '人气爆棚',
	  				two: '50平单店 \n单日营业额破万',
  				},
  				{
	  				img: '../../assets/img/about1.jpg',
	  				one: '集团优势',
	  				two: '18年匠心经营 \n超500家直营店',
  				}
  			]
  		},
  		
  	cost1: {
  		tit: '加盟费用  盈利分析',
  		con: [
  				{
	  				img: '../../assets/img/cost1.jpg',
	  				one: '加盟店所在城市级别省会城市/直辖市地级城市县级城市/乡镇',
  				},
  				{
	  				img: '../../assets/img/cost1.jpg',
	  				one: '加盟店规10—20平（外卖店//档口店）35平',
  				}
  			]
  		},

  	brand: {
  		tit: '强大的品牌支持',
  		con: [
  			{
  				text: ' 01）提供一套完整的经营手册 \n 02）提供店铺、装修设计及工程设施 \n03）提供CIS规范 \n04）提供店内所需的设备 \n05）提供餐厅POS系统所使用的软硬件 \n06）提供开业前完整的人员培训 \n07）提供各项原材料\n ',
  			},
  			{
  				text: ' 08）提供营运所需的各种管理表单 \n09）提供店内营运和结算损益的辅导 \n10）提供原材料的支援及协助调配 \n11）提供营运后的专员辅导 \n12）提供新产品及服务项目 \n13）提供各类广告和促销的服务 \n14）提供相关咨询服务 \n ',
  			},
  		]
  	}	


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
