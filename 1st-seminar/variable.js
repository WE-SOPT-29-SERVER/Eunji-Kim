// 변수 선언법

// var; 재선언 / 재할당 가능
var variableVar = "123";
var variableVar = "321"; // 가능
// variableVar = "321"; // 가능

console.log("variableVar", variableVar); 
//variableVar: 321


//let: 재선언 불가 / 재할당 가능
let variableLet = "123";
let variableLet = "321"; // 불가
// variableLet = "321"; // 가능

console.log('variableLet', variableLet); 
//SyntaxError: Identifier 'variableLet' has already been declared 
//variableVar: 321


// const: 재선언 불가 / 재할당 불가
const variableConst = "123";
const variableConst = "321"; //불가
//variableConst = "321"; //불가

console.log('variableConst', variableConst);
//SyntaxError: Identifier 'variableConst' has already been declared 
//TypeError: Assignment to constant variable.




// var랑 let은 재할당이 가능하기 때문에 이렇게 해도 됨
var someVar;
let someLet;

// 얘는 안됨
const somConst;
