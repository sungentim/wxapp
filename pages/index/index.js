//index.js
//获取应用实例
const app = getApp()
const requestUrl = require('../../config.js').list

Page({
  data: {

  },
 
  onLoad: function () {
    this.getList();
  },

  /**
  * 下拉刷新(请求服务获取数据并赋值)
  */
  getList: function () {
    let self = this;
    wx.request({
      url: requestUrl,
      success: (result) => {
        console.log(result);
        if (result.data.status == 1) {
          self.setData({
            "tradeList": result.data.data.list,
          });
        }
      },
    })
  },

  /**
     * 查看商品详情
     */
  detail: function (e) {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})
