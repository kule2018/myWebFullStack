const arr = [1,2,3,4,1,4,5,3];

function unique(array){ 
    
    for(let i=0;i<array.length;i++)
    {
        const n= [];
        // 严谨性
        if(!Array.isArray(array)){
            throw new Error('参数必须为数组对象');
        }
        // 准备一个空数组,结果数组,没有重复的元素的
        const temp_tArr = [array[0]];
        for (let i=1;i<array.length;i++){
            // arr[i]
            let flag = true;
            for(let j=0;j<temp_tArr.length;j++){
                if(array[i]===temp_tArr[j]){
                    flag = false;
                    break;
                }
            }
            if(flag){
                temp_tArr.push(array[i])
            }
        }
        return temp_tArr;
    }
}
console.log(unique(arr));