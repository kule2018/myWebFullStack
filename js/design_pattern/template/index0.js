// 类似于java中面向对象的写法
// 笔试 writtenTest 
// 技术面试 technicalInterview 
// 领导面试 HRInterview 
// 等待通知 waitNotice 


// 小米面试举例
var XiaomiInterview = function () {}
XiaomiInterview.prototype.writtenTest=function(){
    console.log("我终于看到小米的笔试题了~");
}
XiaomiInterview.prototype.technicalInterview=function(){
    console.log("我是小米的前端技术负责人");
}
XiaomiInterview.prototype.HRInterview=function(){
    console.log("小米HR来面试了");
}
XiaomiInterview.prototype.waitNotice=function(){
    console.log("小米的人力资源太不给力了，到现在都不给我通知");
}
XiaomiInterview.prototype.init=function(){
    this.writtenTest();
    this.technicalInterview();
    this.leaderInterview();
    this.waitNotice();
}

