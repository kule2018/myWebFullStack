// 作为一个小白，经常写些流程性的代码，久了就会发现，如果自己写的代码可以复用的话，就不会那么累了
// 设计模式中的模板方法模式就可以解决这个问题，把一些流程相似的事情，某些部分甚至是一成不变的，那我们就可以把这些流程抽象出来
// 作为一个抽象父类，封装好子类的算法框架，子类可以继承这个父类，并且可以在子类中重写父类的方法，从而实现自己的业务逻辑，使得代码复用性更高


// 模板方法模式
//     抽象方法 
//     具体方法
//     钩子方法


// 类似于java中面向对象的写法
// 笔试 writtenTest 
// 技术面试 technicalInterview 
// 领导面试 HRInterview 
// 等待通知 waitNotice 


// 小米面试举例
var Interview = function (param){
    var writtenTest = param.writtenTest || function() {
        throw new Error('必须传writtenTest方法');
    }
    var technicalInterview = param.technicalInterview || function() {
        throw new Error('必须传technicalInterview方法');
    }
    var HRInterview = param.HRInterview || function() {
        throw new Error('必须传HRInterview方法');
    }
    var waitNotice = function() {
        console.log("到现在都不给我通知，是不是凉凉了~");
    }
    var F = function(){};
    F.prototype.init = function () {
        writtenTest();
        technicalInterview();
        HRInterview();
        waitNotice();
    }
    return F;
}
var XiaomiInterview = Interview({
    writtenTest:function(){
        console.log("看到小米的笔试题，紧张，激动~");
    },
    technicalInterview:function(){
        console.log("我是小米的前端技术负责人......");
    },
    HRInterview:function(){
        console.log("小米的HR小姐姐来面试我了，扑腾扑腾~");
    }
});
var xiaomiInterview = new XiaomiInterview();
xiaomiInterview.init();


