//구조분해할당 : 구조를 분해해서 할당(= 연산자) 하겠당 !
//1. 객체 ({})를 구조분해
const cookie = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};
// console.log(cookie.choco);
// console.log(cookie.vanilla);
// console.log(cookie.orange);
//객체를 구조분해 해보장
const { vanilla, orange, choco } = cookie; //키값 순서는 상관없당
// const { choco, vanilla, orange } = {
//   choco: '초코맛 쿠키',
//   vanilla: '바닐라맛 쿠키',
//   orange: '오렌지맛 쿠키',
// };
//key값으로도 바로 접근 가능
console.log(choco);
console.log(vanilla);
console.log(orange);

//2. 배열 ([])를 구조분해
