//하나의 모듈 파일에 여러 개 만들기
// 자주 사용할 함수와 변수를 정의한 파일
const add = (a, b) => a + b;
const E = 2.718;
const PI = 3.141592;

//case 1. 객체로 감싸서 내보내기
// module.exports = {
//   add,
//   E,
//   PI,
// };
////////////////////////////////////////////////////////
//obj에서 key,value가 동일할 때 생략 가능 ~
// module.exports = {
//   add: add,
//   PI: PI,
//   E: E,
// };

/////////////////////////////////////////////////////////////////
// case 2. 하나씩 내보내기 -> 이렇게 보내도 객체로 저장된다.
// module.exports.add = add;
// module.exports.E = E;
// module.exports.PI = PI;
////////////////////////////////////////////////////////
//case 2. 생략
exports.add = add;
exports.E = E;
exports.PI = PI;
