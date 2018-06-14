// 不可以被实例化，怎么实习？
// ObjectFactory instanceOf
function ClassCannotInstance () {
    ClassCannotInstance() //可以执行
    new ClassCannotInstance() //不可以被执行
    throw new Error('不能被实例化');
}



