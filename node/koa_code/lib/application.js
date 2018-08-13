const Emitter = require('events');   //node里面的events模块
const http = require('http');
// node 
module.exports = class Application extends Emitter {
    constructor() {
        super();
        // 数组有如下特性：可加元素，有顺序
        this.middleware = [];
    }
    // 中间件是函数集合(数组)
    // 中间件处理函数use
    use(fn) {
        if(typeof fn !== 'function') {
            throw new TypeError('middleware must be a function');
        }

        this.middleware.push(fn);
        return this;
    }
    callback() {
        console.log('callback from middleware')
    }
    listen(...args) {
        const server = http.createServer(this.callback());
        return server.listen(...args);
    }
}

// .listen addEventListener()
