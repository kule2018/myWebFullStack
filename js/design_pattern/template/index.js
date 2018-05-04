// 泡一杯咖啡  talk in js
// 流程
// 把水煮沸
// 用水冲泡咖啡
// 把咖啡倒进杯子
// 加糖和牛奶
// 语义 转化为代码
// 方法 methods
// boilWater()
// brewCoffeeGriends()
// pourInCup()
// addSugarAndMilk()


// 何为模板？ 大体的结构已确定 4布， 动作概念都有，
// 差一点 继承 抽象类来实现
// js 可以更优雅， 差一点 ，不就是个参数么
var Beverage =  function(param){
    var boilWater = function () {
        console.log('把水煮沸');
    }
    var brew = param.brew || function () {
        throw new Error('必须传brew方法');
    }
    var pourInCup = param.pourInCup || function () {
        throw new Error('必须传pourInCup方法');
    }
    var addCondiments = param.addCondiments || function () {
        throw new Error('必须传addCondiments方法');
    }
    var F = function(){};
    F.prototype.init = function () {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}
// 模板可配置部分，作为参数传给模板对象
var Coffee = Beverage({
    brew:function(){
        console.log('用沸水泡咖啡');
    },
    pourInCup:function(){
        console.log('把咖啡倒进杯子');
    },
    addCondiments:function(){
        console.log('加糖和牛奶');
    }
});
var coffee = new Coffee();
coffee.init();