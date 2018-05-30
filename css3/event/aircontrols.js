const TV = {
    open: function () {
        console.log('打开电视');
    },
    close:function(){
        console.log('关闭电视');
    }
}

const AirConditional = {
    open: function () {
        console.log('打开空调');
    },
    close:function(){
        console.log('关闭空调');
    }
}
function  setCommand (obj) {
    const o = {};
    if('open' in obj){
        o.execute = obj.open;
    }
    if ('execute' in obj) {
        o.execute = obj .execute;
    }
    return o;
}
const tvCommander = setCommand(TV);
tvCommander.execute