//math 모듈에는 add함수가 들어있음
//math 모듈을 불러와 사용
//require -> 파일을 읽어와 불러오기 (math 모듈 불러오기)
// const add = require('./math');

// console.log(add);
// console.log(add(4, 5));
//하나만 내보낸 모듈은 이름이 달라져도 불러올 수 있음
const hello = require('./math');
console.log(hello(5, 7));
