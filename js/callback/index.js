function A(callback) {
    callback();  
    console.log('我是主函数');      
}

//定义回调函数
function B(){
    console.log('我是回调函数')
}

//调用主函数，将函数B传进去
A(B);