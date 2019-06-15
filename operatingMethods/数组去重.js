var arr = [1, 2, 1, 3, 6, 2];

// 数组去重

var newArr = []; // 1
newArr[0] = arr[0];

for(var i = 1; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) == -1) {
        // 这里说明没有，才会添加
        newArr.push(arr[i]);
        
    }
}

console.log(newArr);


console.log(Array.from(new Set(arr)));

