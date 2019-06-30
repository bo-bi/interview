// 对象
var o1 = {a: 1};
var o2 = o1;

console.log(o1 === o2);  // =>true
o2.a = 2; 
console.log(o1.a); // => 2

// 数组
var o1 = [1,2,3];
var o2 = o1;

console.log(o1 === o2); // => true
o2.push(4);
console.log(o1); // => [1,2,3,4]
