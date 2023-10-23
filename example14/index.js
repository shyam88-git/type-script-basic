var fruits = ["apple", "banana", "cherry", "elderberry", "couliflower"];
//remove cherry and elderberry
var remov1 = fruits.splice(2, 2);
console.log(remov1); //output:cherry , elderberry
console.log(fruits); //apple,banana,couliflower
//replace "banana" with grapes
console.log(fruits.splice(1, 1, "grpes"));
console.log(fruits);
//add 'fig' and 'kiwi' at the index 3
fruits.splice(3, 0, 'fig', 'kiwi');
console.log(fruits);
