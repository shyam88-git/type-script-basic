function findMinimum(arr) {
    var miniElem = arr.reduce(function (acc, ele) {
        if (acc > ele) {
            acc = ele;
        }
        return acc;
    });
    return miniElem;
}
console.log(findMinimum([50, 40, 20, 10, 60, 80]));
