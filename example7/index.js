var array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
var evenNumber = array.filter(function (ele) { return ele % 2 == 0; });
console.log(evenNumber);
var fiveGreater = array.filter(function (ele) { return ele > 5; });
console.log(fiveGreater);
var primeNumber = array.filter(function (ele, index, array) { return ele % 2 !== 0 && array[index] > 1; });
console.log(primeNumber);
