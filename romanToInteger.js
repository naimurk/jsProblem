// M:1000
// D:500
// C:100
// L:50
// X:10
// V:5
// I:1


// MAIN LOGIC --------------
// XLI = -10+50+1
// XVIII = 10+5+1+1+1


// THIS FUNCTION CAN COVERT ROMAN TO INTEGER
const romanToIntegerConvert = (str)=> {
    const romanKeyWord = {M:1000, D:500, C:100, L:50, X: 10, V:5, I:1}
    let integer = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i]
        const elementTwo = str[i+1]
        if(romanKeyWord[element]<romanKeyWord[elementTwo]){
          integer = integer-romanKeyWord[element]
        }
        else{
            integer = integer+romanKeyWord[element]
        }
     
    }
    return integer
}

const result = romanToIntegerConvert("XIVL")
console.log(result);