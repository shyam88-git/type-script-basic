let array:number[]=[1,2,3,4,5,6,8,9,10];
let evenNumber=array.filter((ele)=>ele%2==0);
console.log(evenNumber);

let fiveGreater=array.filter((ele)=>ele>5);
console.log(fiveGreater);

let primeNumber=array.filter((ele,index,array)=>ele%2 !==0 && array[index]>1);
console.log(primeNumber);

 


