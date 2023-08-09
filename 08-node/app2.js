//math2 모듈 불러와 사용

//math2 모듈 불러오기
// const math2 = require('./math2');

// console.log(math2);
// console.log(math2, typeof math2); //현재 math2는 객체
//{ add: [Function: add], E: 2.718, PI: 3.141592 } object
// console.log(math2.PI); //3.141592
// console.log(math2.E); //2.718
// console.log(math2.add(math2.PI, math2.E));

const { add, PI, E } = require('./math2');
console.log(add(2, 3));
console.log(PI);
console.log(E);
