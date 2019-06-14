// 冒泡排序，从小到大
var arr = [65, 97, 76, 13, 27, 49, 58];

for(var i = 0; i < arr.length - 1; i++) {
    // 这是每一趟
    // 假设当前趟已经排好了
    var flag = true;
    for(var j = 0; j < arr.length - 1 - i; j++) {
        // 这是每一趟中的每一次
        if(arr[j] > arr[j + 1]) {
            // 前者大于后项才有交换的必要
            // 交换变量
            var temp;
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            // 还在交换，说明当前躺还没有排好
            flag = false;
        }
    }
    // 如果当前躺真的是排好了
    if(flag) {
        // 看一下第几趟就排好了
        console.log(i);
        // 就跳出循环(影响性能)
        break;
    } 
}
console.log(arr);