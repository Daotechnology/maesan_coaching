
"use-strict"
//ES5 FORMAT
// function calculate(a, b) {
//     //normal js function
// }



//ES 6 FORMAT
 const calculate = (a, b) => {
    //arrow function
    const add = a + b;
    return add
}

const substraction = (a, b) => {
    const subtract = a - b;
    return subtract;
}


const overall = () => {
    const subtract = substraction(12, 13);  //-1
    console.log(subtract);
    const add = calculate(12, 12);  //24
    const addSubstractAndAddition = subtract + add ; //23
    const string = `the return value of subtract and addittin is ${addSubstractAndAddition} ` 
    return string;
}

console.log(overall());


//void function , returning function
