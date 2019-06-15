var fn = function () {
    console.log("你好");
}

// 如果函数体只有一句或者只有一句renturn，可以省略花括号{}
var fn1 = () => console.log("你好");

// 上面这个等价于下面这个
var fn2 = () => {
    console.log("你好");
}

// 当只有一个参数的时候可以省略圆括号()，2个就不行了
var fn3 = x => console.log(x);

fn3(6);