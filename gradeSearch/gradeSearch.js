// pages/gradeSearch/gradeSearch.js
var studentID;
Page({


  /**
   * 页面的初始数据
   */
  data: {
    screenData:"",
    studentID:"",
    classID:"",
  },

  getStudentID: function (e)
  {
    this.setData({studentID:e.detail.value});
  },

  getClassID: function (e) 
  {
    this.setData({ classID: e.detail.value });
  },

  clickButton:function(studentId,classID)
  {
    var that = this
    wx.request({
      url: 'http://localhost:3000/api/query_score',
      data:{
        'student_id':that.data.studentID,
        'course_id':that.data.classID,
      },
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      success(res){
        console.log(res.data);
        setData({screenData:'res.data'});
      },
    })
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