let arr=[2,4,6,8,10];
let arr1=[3,5,7,11,13];

let allEven=arr.every((ele)=>ele%2==0);
console.log(allEven);

  
let greater=arr.every((ele)=>ele>5);
console.log(greater);

let prime=arr1.every((ele)=>ele%2 !==0);
console.log(prime);