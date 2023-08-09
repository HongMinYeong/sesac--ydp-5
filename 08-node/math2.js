//하나의 모듈 파일에 여러 개 만들기
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a % b;
const E = 2.718;
const PI = 3.141592;

//case 1
//객체로 만들어서 내보냄
//키와 value가 같으면 밑에처럼 해도됨
module.exports = {
  add,
  E,
  PI,
  substract,
  multiply,
  divide,
};
//obj에서 key,value가 동일할 때 생략 가능 ~
// module.exports = {
//   add: add,
//   PI: PI,
//   E: E,
// };

// case 2
// module.exports.add = add;
// module.exports.E = E;
// module.exports.PI = PI;

//case 2 생략
// exports.add = add;
// exports.E = E;
// exports.PI = PI;
