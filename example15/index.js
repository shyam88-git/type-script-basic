function sumArr(arr) {
    var sum = arr.reduce(function (acc, ele) {
        return acc + ele;
    }, 0);
    return sum;
}
console.log(sumArr([5, 10, 20, 30, 40]));
