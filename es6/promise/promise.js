/**
 * author dl
 * date 2018-6-21
 * 模块提供Promise类   使用node commonJS规范
 */
class Promise {
    constructor (executor) {
        // 判断
        // Promise 状态有几种?  3
        // 等待 成功 失败
        this.status = 'pending';
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        let resolve = (value) => {
            if(this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
            }
        }
        let reject = (reason) => {
            if(this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        executor(resolve);
    }
    then (onFullfilled,onRejected) {
        if(this.status === 'resolved') {
            onFullfilled(this.value);
        } 
        if(this.status === 'rejected') {
            onRejected(this.reason);
        }
    }       
}
module.exports = Promise;
