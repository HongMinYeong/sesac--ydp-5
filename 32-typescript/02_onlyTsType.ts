//only typescript type

//Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink);

//tuple 한계 tuple은 요소 갯수 정해져있어서 이렇게 쓸거면 array쓰셈
// drink.push('얏호');

//readonly:요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호'); //error

//tupe ex

type productInfo = [number, string, number]; //type 별칭으로 type 선언
let product1: productInfo = [1, '로지텍 MX master3', 1300000];
let product2: productInfo = [2, '로지텍 K380', 52000];
// let product1: [number, string, number] = [1, '로지텍 MX master3', 1300000];
// let product2: [number, string, number] = [2, '로지텍 K380', 52000];
// let product3:[number,string,number] = [3,'로지텍 K380','Apple'] //type error

//Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin); //0
console.log(Cafe.latte); //카페라떼
enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}
console.log(Cake.choco); //0
console.log(Cake.vanilla); //1
console.log(Cake.kiwi); //키위케이크

////////////////////////////////////////////////
//any
let val: any;
val = true;
val = '하이';
val = 1000;
val = { name: 'sesac' };

//암묵적으로 any
let val2;
val2 = false;
val2 = '바이';

// 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
// let drink2: readonly [string, number] = ['사이다', 2200];
type Info = [object, boolean];
const olimpic_newgame: Info = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];
// • olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없 는 데이터 만들기
// console.log(olimpic_newgame);
// olimpic_newgame[1] = false;
// let arrA: any[] = [1, true, 'string'];
// let arrB = [1, true, 'string'];

enum Auth2 {
  admin = 0,
  user = 1,
  guest = 2,
  hi = 5,
}

enum Cafe2 {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth2[5]); // 출력 가능
