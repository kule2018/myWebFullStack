//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据 对应  界面状态
  data: {
    // 默认的status是1 全部
    // setData方法可以改变它  setDate 2  未完成
    status: 1,
    hide:true,
    lists:[{
      title:'帮徐加元同学砍价',
      time:'十分钟前',
      status: '1'
    },
    {
      title:'邀请柔柔同学看电影',
      time:'刚刚',
      status: '0'
    }],
    addText:''
  },
  curLists:[],
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
  addTodo:function(e){
    // 如何添加新的todo?页面上多一条任务，显示多少条，由lists 决定的
    // lists push 数据驱动界面，数据变，界面自动更新
    // MVVM  Model（数据模型data）  View   VM（视图模型层）   
    const task = {
      // 输入框内容
      title:this.data.addText,
      status:'0',
      time:'刚刚'
    }
    const temp = [...this.data.lists,task]
    this.setData({
      lists:temp,
      hide:true
    })

  },
  addTodoHide:function(){
    this.setData({
      hide:true
    })
  },
  setInput:function(e){
    this.setData({
      addText:e.detail.value
    })
  },
  changeTodo: function(event) {
    const index =
      event.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item, i) => {
      // console.log(item, i);
      if (i == index) {
        if (item.status == '0') {
          item.status = '1'
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000
          })
        } else {
          item.status = '0'
          wx.showToast({
            title: '任务打回重做',
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
    
    // console.log(this.data.lists);
    // console.log(temp);
    this.setData({
      lists: temp
    })
    // 当前点击条目的status success 
    // 数据 lists 跟当前条目相关的这一条数据
    // 将status 值更新为 1
    // index ? 
  }
})
