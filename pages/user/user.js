// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userId = getApp().globalData.userId;
    var baseUrl = getApp().globalData.baseUrl
    wx.request({
      url: baseUrl+'/user/getUser.do',
      data: {userId:userId},
      method: 'GET',
     /* header: {
        'content-type': 'application/text'
      },*/
      success: function (res) {
        console.log(res.data)
        //that.setData({ message: res.data.msg, messageHidden: false })
        that.setData({ username: res.data.data.username})
        if(res.data.status == 1){
          wx.redirectTo({
            url: '../login/login'
          })
        }

      },
      fail:function(err){
        that.setData({ message: "连接失败", messageHidden: false })
      }
    })
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

  },

  formSubmit : function(e){
    var baseUrl = getApp().globalData.baseUrl
    wx.request({
      url: baseUrl+'/user/logout.do',
      data: {},
      method: 'POST',
     /* header: {
        'content-type': 'application/text'
      },*/
      success: function (res) {
        console.log(res.data)
        //that.setData({ message: res.data.msg, messageHidden: false })
        if(res.data.status == 0){
          wx.redirectTo({
            url: '../login/login'
          })
        }

      },
      fail:function(err){
        that.setData({ message: "连接失败", messageHidden: false })
      }
    })
  }
})