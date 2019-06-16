// 数组遍历，for循环
var arr = [1, 2, 3, 4, 5, 6];
var str = '111';

// // 正向遍历
// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // 反向遍历(倒着打印出数组中每一项)
// for(var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// arr.map( (item, i) => {
//     console.log(item + "---" + i);
// });

// filter 会筛选出符合条件的那一项，比如从数组中找出不是0的元素， 从数组中找出属性name为张三的对象
// var result = arr.filter( function(item) {
//     return item > 2;
// });
// console.log(result);

// console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(str instanceof Array);

