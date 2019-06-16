var arr = [1, 2, 3, 4, 5, 6];

// console.log(array.indexOf(7)); // -1
// console.log(array.indexOf(6));

// var result = arr.some( (item, i) => {
//     return item == 7;
// });

// console.log(result);

// console.log(arr.includes(7));


var result = arr.map( (item, i) => {
    return item == 2
})
console.log(result);