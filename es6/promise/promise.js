let promise =new Promise(resolve =>{
    setTimeout(() => {
        console.log('我想');
        resolve('搞点事情');     
    }, 1000);
})

    promise.then(value=>{
        console.log(value);
    })