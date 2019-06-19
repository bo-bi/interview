// // 如果想获取到同一个值，只需要保证调用一次
// function fn() {
//     var num = Math.random();
//     return function() {
//         return num;
//     }
// }

// // 但是我又想获取到多个结果(外部)，看看结果是否都是一样
// // var n1 = fn();
// // var n2 = fn();
// // console.log(n1);
// // console.log(n2);
// // console.log(n1 === n2);

// var f = fn();
// var n1 = f();
// var n2 = f();
// console.log(n1);
// console.log(n2);
// console.log(n1 === n2);


// 为什么这样做就行？
function fn() {
    var num = Math.random();
    
    function f() {
        // console.log(num);
        return num;
    }

    return f;
}
// 重点在于里面这个子函数在哪里调用,而且还必须以一个变量接收父函数调用，就不碰这个变量了，来保障父函数只调用一次
// 然后就可以无限调用子函数了
var foo = fn();
console.log(foo());
console.log(foo());
// var n1 = fn();
// var n2 = fn();
// console.log(n1);
// console.log(n2);
// console.log(n1 === n2);