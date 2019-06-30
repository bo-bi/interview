var arr = ["red", "green", "yellow"];
// 打印数组,一秒打印一个

// for(let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(arr[i]);
//   }, 1000 * (i + 1));
// }

// for(var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// red green yellow

// for(var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(arr[i]);
//   })
// }


// var i;
// for(i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);

// 3不满足条件(i < arr.length),就不i++,满足条件进去才会i++
// for(var i = arr.length - 1; i >= 0; i--) {
//   // console.log(arr[i])
//   console.log(i);
//   // 2 1 0 -1
// }

// console.log(i);
// for(var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i, 'setTimeout');
//   }, 1000)
// }
// console.log(i);
// 5
// 一下子出来 过了1s 5个undefined
// var i;
// for (var i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }
// 因为i是全局的,先执行主线程中的同步任务for循环,执行完以后i变成了5,然后再执行事件队列中的setTimeout的回调事件,等待1s后将回调加入主线程中的执行栈,执行console.log,因为循环了4次,所以输出4个5?


// for (let i = 1; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   });
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout( function timer(){
//       console.log(i);
//   },i*1000);
// }

// 先执行主线程中执行栈中的同步任务for循环,i为6,然后将事件队列中的setTimeout回调事件添加到执行栈中,总共循环了5次,事件队列中有5个回调事件,有5个6s的定时器,第一个6s后添加到执行栈执行输出6...依次30s打印玩5个6


// for (var i = 0; i < 4; i++) {
//   setTimeout(function () {
//       console.log(i);
//   }, 1000);
// }
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer(){
//       console.log(i);
//   },i*1000);
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout( function timer(){
//       console.log(i);
//   },i*1000);
// }

// 先从简单的说起
// for(var i = 1; i <= 5; i++) {
  
// }
// console.log(i);

// 其实上面这种就是下面这种形式
// var i;
// for(i = 1; i <= 5; i++) {

// }
// console.log(i);

// 当i = 5的时候满足条件进入循环体内,i++,此时i变成了6,所以打印为6

// for循环是同步的,所以在主线程的执行栈中进行执行


// 现在重点来了,我向for循环中加入了一个定时器
// var i;
// for(i = 1; i <= 5; i++) {
//   setTimeout(function() {
//     console.log(i); // 这里的i 是循环结束后的i 是6
//   }, i*1000); // 这里的i 是每次循环的i, 是 1 2 3 4 5
// }
// console.log(i, 'i'); // 6 'i'

// 按照阮一峰写的那个文章,for循环是同步的,是先执行完for循环,然后将setTimeout的回调一下子都加入到事件队列中去呢?
// 还是每次执行for循环的时候,将setTimeout的回调放入到事件队列中呢?


// 所以你的意思是,每次执行for循环的时候,都会将循环体内的setTimeout的回调放入到事件队列中去

// 然后执行栈中的for循环完毕,i变成了6,
// 开始将事件队列中的这5个回调函数按时间依次加入到执行栈中

// 第一个回调 1s后加入到执行栈
// 第二个回调 2s后加入到执行栈
// 第三个回调 3s后加入到执行栈
// 第四个回调 4s后加入到执行栈
// 第五个回调 5s后加入到执行栈

// 所以效果上看出的是每隔1s,出现一个6
// 其实是第一个6,是1s后出现的
// 其实是第二个6,是2s后出现的
// 其实是第三个6,是3s后出现的
// 其实是第四个6,是4s后出现的
// 其实是第五个6,是5s后出现的


// var i;
// for(i = 1; i <= 5; i++) {
//   setTimeout(function() {
//     console.log(i); // 这里的i 是循环结束后的i 是6
//   }, i*1000); // 这里的i 是每次循环的i, 是 1 2 3 4 5
// }

// 这里我又有一个疑惑 为什么setTimeout 里的毫秒数是每次循环的i
// setTimeout不是异步的吗?
// 还是说里面这个毫秒数是同步的,异步的其实是添加到事件队列中的setTimeout的回调

// 所以添加到事件队列中的是setTimeout的回调函数
// 但是setTimeout( ,i*1000) 这个架子是同步的


var arr = ["green", "red", "yellow"];


// for(var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(arr[i]);
//   }, (i + 1) * 3000);
// }
// 第一次走 i = 0 setTimeout 0
//   二                     1000
//   三                     2000
//   四    跳出循环

// 先执行执行栈中的for循环,此时循环完毕, i = 3, arr[3] 为undefined
// 然后将事件队列中的回调按时间放入执行栈中执行
// 大概等个几毫秒出现 undefined
// 1s 后出现 undefined
// 2s 后出现 undefined

// 3
// 4
// 5

// 3
// 6
// 9


// for(let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log(arr[i]);
//   }, (i + 1) * 3000);
// }

for(let i = 0; i < 5; i++) {
  console.log(i);
}
