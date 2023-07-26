// 2)sum all positive number from an array 

const positiveNumberSumFromAnArray = (array)=> {
    const positiveNumber = array.filter(item => item>=0)
    let sum = 0
    for (let i = 0; i < positiveNumber .length; i++) {
        const element = positiveNumber [i];
        sum = sum+element;  
    }
    return sum
}

const Inputarray = [-1,3, -3, 3, 5, -7];
const result= positiveNumberSumFromAnArray(Inputarray)
console.log(result);