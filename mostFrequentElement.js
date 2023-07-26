// 3)most frequent element an array 
const mostFrequentElementAnArray = (array)=> {
    let obj = {}
    let maxElement = array[0];
    let maxCount = 1;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(obj[element]){
            obj[element]= obj[element]+1
        }
        else{
            obj[element]=1
        }
        if(obj[element]>maxCount){
            maxElement=element
            maxCount=obj[element]
        }

    }
    return maxElement
}

console.log(mostFrequentElementAnArray(["tofik", "rahim", "tofik"]));