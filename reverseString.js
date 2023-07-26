// 1) reverse string without reverse function 
const stringReverse = (text) => {
    const array = [];
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        array.push(element)
    }
    return array.join('')
}

const result = stringReverse("hello world")
console.log(result);
