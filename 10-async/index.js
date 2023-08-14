// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);
//1
//3
//2
////////////////////////////////////////////////////
//편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink() {
//   //3초 기다린 후에 코드 실행(=3초 고민함)
//   setTimeout(function () {
//     console.log('고민 끝!!');
//     product = '제로 콜라';
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price} `);
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);
//마트에 가서 어떤 음료를 살지 고민한다.
// 상품명 : undefined, 가격 : undefined
// 고민 끝!!
//왜 undefined?
//3초 전에 pay 함수를 먼저 처리하기 때문에 (정보를 할당하기전에 출력을 해버림 ) -> 자바스크립트는 비동기처리 방식이기 때문에

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink(callback) {
  //꼭 callback이라고 안해도됨
  // *callback 매개변수 : 콜백 함수를 의미
  //3초 기다린 후에 코드 실행(=3초 고민함)
  setTimeout(function () {
    console.log('고민 끝!!');
    product = '제로 콜라';
    price = 2000;
    callback(product, price); //* 매개변수로 넘긴 콜백함수 실행
  }, 3000);
}

let product;
let price;
goMart();
pickDrink(function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price} `);
});
