// 发布者
let zk = {}         // 2018年10月1大婚

// 订阅者
zk.peopleList = [];
// 做何反应
zk.listen = function (fn) {
    this.peopleList.push(fn)
}
zk.trigger = function () {
    // ? 消息发出去后,所有的订阅者做出反应
    for(var i = 0, fn; fn = this.peopleList[i++];) {
        fn.apply(this,arguments)
    }
}

zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息,决定给红包`);
});

zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息,打飞的来`);
});

zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息,作为情敌表示不开心`);
});

zk.trigger('zk同学要结婚了');
zk.trigger('zk同学生了大胖小子');
zk.trigger('zk同学二胎了');
