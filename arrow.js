// function doubleIt(num){
//     return num * 2; 
// }
// const doubleIt = function myFun(num){
//     return num * 2; 
// }

const doubleIt = num => num * 2;
const add = (x, y) => x+y;
const give5 = () => 5;
const result2 = add(5, 5);
const doMath = (x,y) => {
    const sum = x+y;
    const multiply = x*y; 
    const subtraction = x-y;
    const result = sum * subtraction + multiply;
    return result;
}

// console.log(result2);
// const result = doubleIt(10);
// console.log(result);

// const result3 =give5();
const result = doMath(5,5);
console.log(result);