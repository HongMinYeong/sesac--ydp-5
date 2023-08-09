//math 모듈 불러와 사용

//math 모듈 불러오기
const math = require('./math2');

// console.log(math);
console.log(math, typeof math);
//{ add: [Function: add], E: 2.718, PI: 3.141592 } object
console.log(math.PI); //3.141592
console.log(math.E); //2.718
console.log(math.add(math.PI, math.E));

console.log('substract함수', math.substract(6, 3));
console.log('multiply함수', math.multiply(6, 3));
console.log('divide함수', math.divide(6, 3));
