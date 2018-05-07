/**
 * author dl
 * date 2018-5-4 
 */
// 服务于任何图片元素，img 幕后   再将origin_src 设置过去
var LazyLoadImage = (function(){
    // 变量的冒泡查找
    return {
        setSrc:function(ele){
            // console.log(this);
            console.log('开始下载图片');
            // 安全性检测
            const url = ele.getAttribute('origin_src')?ele.getAttribute('origin_src'):'';
            if (!url) return;
            const oImg = document.createElement('img');
            // 隐藏不会影响页面， none会离开文档流
            oImg.style.display='none';
            document.body.appendChild(oImg);
            
            // 注册事件
            // addEventListener 新的
            // 旧的写法
            // 当设置了图片的src后，会启动http请求
            // 图片下载完成后，onload注册的事件回调函数就会被执行
            // 异步，同步
            oImg.onload = function () {
                // 不会立即执行，后执行
                console.log('图片下载完成')
                ele.src = url;
                // 事件发生的内部，this会指向事件发生的元素
                document.body.removeChild(this);
            }
            // 先执行
            console.log('设置src')
            oImg.src = url;
            
        }

    }
})();
