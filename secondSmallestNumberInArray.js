// second smallest element from an array ;
const secondSmallestElementFromAnArray = (arr)=> {
 let smallnumber =1;
 let anArray = []
 for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element <= smallnumber){
      smallnumber=element
    }
 }
const filter = arr.filter(item => item !=smallnumber)
return filter[0]
}

const result = secondSmallestElementFromAnArray([1,-4,4,93,3,5])
console.log(result);

// or another way to hanlde this problem 
const another = (arr)=> {
 let lowestAsending = arr.sort((a,b)=> a-b)
 return lowestAsending[1]
}
const anotherArray = [13,3454,-34,54,13,75,-23]
const anohterResult = another(anotherArray)
console.log(anohterResult);