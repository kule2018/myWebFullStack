//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 对应  界面状态
  data: {
    // 默认的status是1 全部
    // setData方法可以改变它  setDate 2  未完成
    status: 1,
    hide:true
  },
  showSatuts:function(e){
    // 文字
    const status = e.currentTarget.dataset.status;
    console.log(e, status);
    // 不再是DOM编程，针对界面状态的编程
    this.setData({status:status})
  },
  addTodoShow:function(e){
    this.setData({
      hide:false
    });
  },
  addTodo:function(){

  },
  addTodoHide:function(){
    this.setData({
      hide:true
    })
  }
})
