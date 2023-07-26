// 5 js calculator 
const calculator = (x,y, operator) => {
  let sum = 0;
  const result = operator=="+" && x+y || operator == "-" && x-y || operator == "/" && x/y || operator == "*" && x*y ;
  sum = result;
  return sum
}
const result = calculator(10,5, "*")
console.log(result);