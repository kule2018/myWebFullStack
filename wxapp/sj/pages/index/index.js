//index.js
//获取应用实例
import testDrive from '../../modules/test-drive'
// 在Page里得到app
const app = getApp()

Page({
  data: {
    slides:[]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides
    })
  },
  testDrive,
  readMore(event){
    const id=event.target.dataset.id;
    wx.navigateTo({
      url:`/pages/vehicles/show?id=${id}`
    })
  }
})
