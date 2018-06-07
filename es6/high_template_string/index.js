// 模板字符串的高阶用法
// let message = `Hello World \``;
let message = `
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
`;
// 去除空格 方法一
console.log(message.replace(/\s*/g,''))
// 去除空格 方法二
// console.log(message.trim())