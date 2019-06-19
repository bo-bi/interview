function fn() {
    var num = Math.random();
    return {
        get() {
            return num;
        },
        set(number) {
            num = number;
        }
    }
}

var f = fn();
console.log(f.get());
// console.log(f());
f.set(222);
console.log(f.get());