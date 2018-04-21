//小明表白的故事
// 小明 talk in js
// js 具有强大的表现力
// js 弱类型语言  java 静态强类型语言
// js 基础类型 字符串 数字，  对象{},array ,function
// Symbol
// bool 布尔值  false  null为空 
// 6大基础类型 1个复杂类型
var xiaoming = {
    name:'小明',
    age:21,
    hasGirlFriend:false,
    job:null,
    city:undefined,
    //方法 行为
    sendFlower:function(target){
        // 1 买花
        var flower = new Flower('满天星');
        if (typeof target.receiveFlower =='function')
            target.receiveFlower(flower,this.name);
        else
            console.log('拿到名企就业前是不可能恋爱的。');
    }
}
// 具有祥述性，最简单创造的对象
var xiaomei = {
    name:'小梅',
    room:'9栋2201',
    hometown:'九江',
    job:null,
    receiveFlower:function(flower,name){
        console.log('小美收到'+name+'送的'+flower.type);
    },
    //监听好心情
    /**
     *  功能： 提供心情监听
     *  参数： fn 类型函数
     *  在一段时间后，心情好了，将fn执行
     */
    listenGoodMood:function(fn){
        setTimeout(function() {
            fn();
        },10000)
        // typeof fn == 'function',
        // fn();

    }
}

//空的对象自面量
var xueba = {

}

var xiaoxue = {
    name:'小雪',
    receiveFlower:function(flower,name){
        xiaomei.listenGoodMood(function (){
            xiaomei.receiveFlower(flower,name)
        })
        // if (name == '小明') {
        //     console.log('让我们在一起吧');
        // }else{
        // xiaomei.receiveFlower(flower,name);
        // }
        
        //实现了同样的收花方法,  接口  interface
        //小雪，小梅都实现了同样的方法， 实现了相同的接口，就可以互换对象
    }
}

var Flower = function (type){
    this.type=type || '玫瑰'
}

xiaoming.sendFlower(xiaoxue);