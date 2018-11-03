Page({
  date:{
    message:"",
    messageHidden:false
  },
  formSubmit:function(e){
    let that = this
    console.log(e.detail.value.username);
    let username = e.detail.value.username;
    let password = e.detail.value.password;
    var baseUrl = getApp().globalData.baseUrl;
    var url = baseUrl+'/user/login.do';
    wx.request({
      url: baseUrl+'/user/login.do',
      data: {username:username,password:password},
      method: 'GET',
     /* header: {
        'content-type': 'application/text'
      },*/
      success: function (res) {
        console.log(res.data)
        if(res.data.status == 0){
          console.log("登录成功")
          var id = res.data.data.id;
          //跳转导航栏时不能传参数，所以在全局变量中添加参数
          getApp().globalData.userId = id;
          wx.switchTab({
            url: '../addbill/addbill',
            fail:function(){
              console.info("跳转失败")
            }
          })
        }

      },
      fail:function(err){
        wx.showModal({
          content: err.errMsg,
          showCancel: false
          
      });
      }
    })

    
  }
})