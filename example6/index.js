var arr = [2, 4, 6, 8, 10];
var arr1 = [3, 5, 7, 11, 13];
var allEven = arr.every(function (ele) { return ele % 2 == 0; });
console.log(allEven);
var greater = arr.every(function (ele) { return ele > 5; });
console.log(greater);
var prime = arr1.every(function (ele) { return ele % 2 !== 0; });
console.log(prime);
