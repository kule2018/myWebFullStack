
class PureFullPage {
    constructor(options) {
      // 属性定义
      // 1. 手动计算page的高度
      // #pureFullPage高度？
      // this.pages
      this.container = document.getElementById('pureFullPage');
      this.viewHeight = document.documentElement.clientHeight;
      this.init();
    }
    init () {
      this.container.style.height = `${this.viewHeight}px`;
        //   事件监听 浏览器嗅探
        //   mousewheel 截流
        // this.scrollMouse 方法，负责滚动 执行太频繁 throttle 在规定时间里，只执行一次 重新返回一个函数，handleMouseWheel 闭包，将this.scrollMouse 封装到内部
        // this, 函数执行的context
        // 1000 delay 推迟下执行
        const handleMouseWheel = utils.throttle(this.scrollMouse,this,1000);
        //   firefox DOMMouseScroll
        if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1){
            document.addEventListener('mousewheel',handleMouseWheel);
        }else{
            document.addEventListener('DOMMouseScroll',function(){
                console.log('scroll')
            })
        }
    }
    scrollMouse(){
        console.log(this.container);
        
    }
  }