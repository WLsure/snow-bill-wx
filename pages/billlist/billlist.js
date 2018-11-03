// pages/billlist/billlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    billlist:null,
    message:null,
    sumMoney:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var userId = getApp().globalData.userId;
    var baseUrl = getApp().globalData.baseUrl;

    wx.request({
      url: baseUrl+'/bill/getBillByUser.do',
      data: {userId:userId},
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var data = res.data
        if(data.status == 1){
          that.setData({message:"获取列表失败"})
          return;
        }

        that.setData({billlist:data.data.billList,sumMoney:data.data.sumMoney})

      },
      fail:function(err){
        that.setData({ message: "连接失败", messageHidden: false })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})