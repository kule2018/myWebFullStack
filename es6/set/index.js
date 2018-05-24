let mySet = new Set ();
mySet.add(1);
mySet.add(5);
mySet.add(5);


// 通过add方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值
console.log(mySet)


// for in  遍历数组得索引   for of 遍历元素得值
for(const num of mySet){
    console.log(num)
}

console.log(mySet.has(Math.sqrt(25)));
console.log(mySet.size);

// 移除
mySet.delete(5);
console.log(mySet.has(5));
console.log(mySet.size);

// es6 set 做数组去重

const arr = [1,2,3,4,1,4,5,3];

function unique (arr) {
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    }
    // 类数组
    return Array.from(new Set(arr));
}

console.log(unique(arr))