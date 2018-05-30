const strategies = {
    isNonEmpty:function(value,errorMsg) {
        if(value.trim() === ''){
            return errorMsg;
        }
    },
    Length:function(value,minLen,maxLen,errorMsg) {
        if(value.trim().length < minLen || value.trim().length > maxLen) {
            return errorMsg;
        }
    },
    isPhone: function (value,errorMsg) {
    },
    isMobilePhone: function (value,errorMsg) {
        var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(mobile.test(value) == false){
            return errorMsg;
        }
    },
    isEmail: function () {
    }
}

// 将要验证的表单元素加进来  数组
// 开启一一验证 strategies



