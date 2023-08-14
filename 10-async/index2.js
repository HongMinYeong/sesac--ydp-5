//promise(프로미스)
//  - 비동기 함수를 동기처리하기 위해 만든 객체
//  - 미래에 실패/성공에 대한 결과 값을 "약속" 한다는 의미
//  - 성공, 실패 분리해서 반환
//      - 성공, 실패에 대한 결과는 then, catch 메서드로 이어 받아서 처리 가능
// => 성공이든 실패든 무언가의 "최종 결과"
// resolved : 성공
// rejected : 실패

//1. promise 를 생성하는 코드
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         ` 현재 프로미스의 상태는 fulfilled(이행)! then 메서드로 연결~  이때의 flag의 값은 ${flag}입니다.`
//       );
//     } else {
//       reject(
//         ` 현재 프로미스의 상태는 rejected(거절)! catch 메서드로 연결~  이때의 flag의 값은 ${flag}입니다.`
//       );
//     }
//   });
// }
//2. promise를 사용 (소비)하는 코드
// promise1(5 > 3)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//화살표 함수로도 가능!
// promise1(5 > 3)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//2. 프로미스 예제
//index.js에서 '콜백 함수' 를 이용해 동기처리한 것을 'promise '를 이용해 동기처리
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!!');
      product = '제로 콜라';
      price = 5000;
      // resolve();
      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}
function pay() {
  console.log(`상품명 : ${product}, 가격 : ${price} `);
}

function nopay() {
  console.log('금액 부족 이잉');
}

// let product;
// let price;
// goMart();
// pickDrink().then(pay).catch(nopay);
// == pickDrink()
//   .then(function () {
//     pay();
//   })
//   .catch(function () {
//     nopay();
//   });

//3.프로미스 체이닝(chaning)
//  함수를 이용해(4+3) * 2 - 1 = 13 을 연산해보자!
//sub(mul(add(4,3),2),1) : add -> mul -> sub

//case1. 콜백함수로 처리한다면?
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     const result = n1 + n2;
//     callback(result); //callback(7)
//   }, 1000);
// }
// function mul(n, callback) {
//   setTimeout(function () {
//     const result = n * 2;
//     callback(result); //callback(14)
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     const result = n - 1;
//     callback(result); //callback(13)
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log('1 : ', x);
//   mul(x, function (y) {
//     console.log('2 : ', y);
//     sub(y, function (z) {
//       console.log('3 : ', z);
//     });
//   });
// });

//case2. promise 로 처리
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2;
      resolve(result);
    }, 700);
  });
}
function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1;
      // resolve(result);
      reject(new Error('의도적으로 에러 일으켜봄 ! '));
    }, 500);
  });
}

//실행결과
add(4, 3)
  .then(function (result) {
    //성공값을 then으로 받아옴
    console.log('1 : ', result); //7
    //메서드 체이닝에선 return을 해야함! -> return mul(7)
    return mul(result);
  })
  .then(function (result) {
    console.log('2 : ', result); //14
    return sub(result); //return sub(14)
  })
  .then(function (result) {
    console.log('3 : ', result);
  })
  .catch(function (err) {
    console.log('실패!');
    console.log(err);
  });
