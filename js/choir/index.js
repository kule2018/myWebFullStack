// console.log('合唱团')
// talk is js
//国王，招1000只鸭组成合唱团
var choir = [];
//duck 是一个对象，表示鸭
//JSON Object
//只要两脚站立会嘎嘎嘎叫的都是鸭子

var duck = {
    duckSinging: function(){
        console.log('嘎嘎嘎')
    }
}

//new一下，json对象 ，不需要new   json 慢慢描述  也是数据交换的标准
// var yyj = {
//     name:'杨',
//     hasGirlFriend:false,
//     birth:'1-2',
//     girlAttributes:{
//         sex:'all',
//         isAlive:true
//     }
// }

// console.log(yyj.girlAttributes.sex);
// yyj.girlAttributes.sex='female';
// console.log(yyj.girlAttributes.sex);

var chicken = {
    duckSinging:function () {
        console.log('嘎嘎嘎')
    }
}

    for(var i = 0; i < 999; i++) {
        joinChoir(duck);
    }

    joinChoir(chicken)
    console.log(choir.length)

    // choir.push(chicken);
    // console.log(choir.length);

    // for(var i=0;i<choir.length;i++){
    //     var singer = choir[i];
    //     if(!singer.duckSinging){
    //         console.log('不是鸭子');
    //         break;
    //     }
    // }

    function joinChoir(ani) {
        if(ani && typeof ani.duckSinging =='function'){
            choir.push(ani);
        }else{
            console.log('不合要求');
        }
    }
