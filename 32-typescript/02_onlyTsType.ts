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
// console.log(Cafe2[1]); // 출력 불가능

////////////////////////////////////////////////
//1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'jinheyong',
  isPassed: true,
  // addr:'seoul',
};

const student2: object = {
  name: 'jinheyong',
  isPassed: true,
  addr: 'seoul',
};

//interface 상속
//A+,A,B,C,D,F
//ype Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}
interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ?: 있어도 되고 없어도 됨
  // [grade: number]: string;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  // 1: 'A+', //학년 : 점수
  1: Score.A,
  //2: 'NP', //type error
  backNumber: 17,
};
console.log(otani);
otani.position = '투수';
otani['height'] = 200;
// otani.height = 210;
//otani.backNumber = 16; //error: backNumber readonly
console.log(otani);

type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}
const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

//교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

// const toyCar: Toy & Car = {
//   name: 'tayo',
//   start() {
//     console.log('출발~~');
//   },
//   color: 'blue',
//   price: 5000,
// };
type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};

//2.type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[]; //원소가 문자열인 배열
  // gender: string;
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  age: 20,
  gender: 'F',
  // gender: 'f', //gender:Gender일때 type error
  // like: ['minji', 'hani'], //없어도 그만!
};
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: '액션' | '롤플레잉';
  platform: '모바일' | '콘솔';
}
let heroGema_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGema_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  // desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '롤플레잉',
  platform: '모바일',
};
