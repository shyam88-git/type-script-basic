function findMaxValue(arr: number[]){

    let maxValue=arr.reduce((acc,ele)=>{

        if(acc<ele){

            acc=ele;
        }
        return acc;

    },0);

    return maxValue;
    


}
console.log(findMaxValue([10,20,30,40,60,80,50,70]));