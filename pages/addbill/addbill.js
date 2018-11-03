Page({
  data: {
    focus: false,
    inputValue: '',
    userid:'',
    categoryArray:['一日三餐','日常消费','服装鞋包'],
    objectArray: [
      {
        id: 0,
        name: '一日三餐'
      },
      {
        id: 1,
        name: '日常消费'
      },
      {
        id: 2,
        name: '服装鞋包'
      }
    ],
    date: '2018-10-01',
  },
  onLoad: function (options) {
    var userId = getApp().globalData.userId;
    this.setData({userid:userId});
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit:function(e){
    console.log('asdfasd');
    let that = this
    console.log("datavalue",e.detail.value);

    var warn = "";//弹框时提示的内容
    var flag = true;//判断信息输入是否完整
    if(e.detail.value.name==""){ 
      warn = "请填写花费项目！";
    }else if(e.detail.value.categoryid=="" || e.detail.value.categoryid == null){
      warn = "请填写花费类别！";
    }else if(e.detail.value.buydate==""){
      warn = "请填写花费日期";
    }else if(e.detail.value.money==""){
      warn = "请选择花费金额"
    }else{
        flag=false;
        console.log('成功');
        var baseUrl = getApp().globalData.baseUrl;
        wx.request({
          url: baseUrl+'/bill/addBill.do',
          data:e.detail.value,
          method: 'GET',
         /* header: {
            'content-type': 'application/text'
          },*/
          success: function (res) {
            console.log(res.data)
            if(res.data.status == 0){
              console.log('添加成功');
              wx.showModal({
                title: '提示',
                content:"添加成功"
              })
              wx.switchTab({
                url: '../addbill/addbill',
                fail:function(){
                  console.info("跳转失败")
                }
              })
            }
    
          },
          fail:function(err){
            that.setData({ message: "连接失败", messageHidden: false })
          }
        })




    }

    if(flag==true){
      wx.showModal({
        title: '提示',
        content:warn
      })
    }
    var baseUrl = getApp().globalData.baseUrl;


    
  }

})