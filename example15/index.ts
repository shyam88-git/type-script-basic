function sumArr(arr: number[]){

    let sum=arr.reduce((acc,ele)=>{

        return acc+ele;
    },0);

    return sum;


}
console.log(sumArr([5,10,20,30,40]));