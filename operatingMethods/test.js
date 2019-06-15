var arr = [4, 7, 9, 2, 6, 3, 1, 0];

var maxValue = arr[0];

for(var i = 1; i < arr.length; i++) {
    if(arr[i] > maxValue) {
        maxValue = arr[i]
    }
}
console.log(maxValue);