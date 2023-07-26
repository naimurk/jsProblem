// 4) get targeted value by 2 array element add 
const getTargeted = (arr, num) => {
    let l = 0;
    let m = 0;
    let anArray = []
    let obj = {}

    const sayem = (p, q, x, y) => {
        const check = p + q;
        if (check == num) {
            obj[p, q] = [x, y]
  }
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        m = i
        l = element
        for (let i = 1; i < arr.length; i++) {
            const element = arr[i];
            sayem(l, element, m, i)

        }
    }

    // console.log(obj);
    const size = Object.keys(obj).length;
    if(size == 1){
        for (let x in obj) {
            const element = obj[x]
            anArray.push(...element)
        }
    }

    else {
        for (let x in obj) {
            const element = obj[x]
            anArray.push(element)
        }
    }

    return anArray
}

const result = getTargeted([1, 8], 9)
console.log(result);