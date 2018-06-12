const utils = {
    // 帮忙method执行的次数在规定时间内只有一次
    // method执行时，函数内的this指向pureFullPage  this.container
    throttle(method,context,delay){
        // 返回的函数，就是等下事件执行的真正函数体
        // 闭包
        let wait = false;
        return function(...args) {
            // args? event对象
            console.log(wait)
            console.log(args)
            if(!wait) {
                method.apply(context,args)
            }
            wait = true;
            setTimeout(()=>{
                wait = false;
            },delay)
        }
    }
}