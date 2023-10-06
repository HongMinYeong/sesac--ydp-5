//구조 분해 할당
//1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서 " 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, five, four] = arr1;
console.log(one, two, three, four, five); //1 2 3 5 4

// const [x, y, z] = arr2;
const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); //a b c undefined

//구조분해 없이 두 변수의 값 교환도 가능
let num1 = 1;
let num2 = 3;
console.log('swap 전 > ', num1, num2);
[num2, num1] = [num1, num2]; //[num2, num1] = [1,3]
console.log('swap 후 > ', num1, num2);

//undefined시 기본값 할당
let lists = ['apple', 'grapes'];
[item1, item2, item3 = 'kiwi'] = lists;

console.log('item1 : ', item1);
console.log('item2 : ', item2);
console.log('item3 : ', item3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. 객체 구조 분해 할당
//- 변수를 선언하는 순서는 중요하지 않음
//- 키 값과 변수명이 일치해야 함
const obj = {
  title: '엘리멘탈',
  content: '잼',
  num: 5,
};
//객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

//객체 구조 분해 쓰고 싶다면
//key가 존재하지 않을 때를 대비하여 ()=) 연산자를 이용하면 default 값을 할당
// const { num, title, content, star } = obj;
const { num, title, content, star = 1000 } = obj;
console.log(
  //title :  엘리멘탈 content :  잼 num :  5 star :  undefined
  //   title :  엘리멘탈 content :  잼 num :  5 star :  1000
  'title : ',
  title,
  'content : ',
  content,
  'num : ',
  num,
  'star : ',
  star
);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); //undefined undefined undefined

//클론(:) 을 이용하면 새 변수명으로 바꿔서 저장할 수 있다. !!
const { title: t2, num: n2, content: c2 } = obj; //키값 바꾸기
console.log(t2, c2, n2);

////////////////////////////////////////////////////////////////////////////////////////////////////
//과제
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.
////////////////////////////////////////////////////////////////////////////////////////////////////
console.clear();

//spread 연산자
//반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할(== 객체의 값을 펼친다!!!)
//spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); //[ 1, 2, 3, 4, 5 ]

//spread in string
const c = [...'Hello'];
const d = 'HELLO'.split(''); //... vs split
console.log(c); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(d); //[ 'H', 'E', 'L', 'L', 'O' ]

//spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

// const potatoChip = {
//   base: 'chip',
//   company: 'lotte',
//   flavor: 'potato',
// };
const potatoChip = {
  ...chip,
  //   base: 'chip',
  //   company: 'lotte',
  flavor: 'potato',
};

// const sweetPotatoChip = {
//   base: 'chip',
//   company: 'lotte',
//   flavor: 'sweet potato',
// };
const sweetPotatoChip = {
  ...chip,
  flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

////////////////////////////////////////////////////////////////////////////////////////////////////
//실습 spread 연산자 사용하기
const word1 = 'abc';
const word2 = 'xyz';

const arr = [...word1, ...word2];
console.log(arr);
////////////////////////////////////////////////////////////////////////////////////////////////////
//rest 파라미터
//함수를 호출할 때 함수의 매개변수(parameter)를 spread operator로 작성한 형태를 Rest parameter라고 부릅니다.
//1. 함수에서 rest를 사용할 때

const values = [10, 20, 30, 40, 50, 60];

function get(a, b, ...rest) {
  //...rest 는 항상 마지막에 쓰기
  //10, 20, 30 (10을 제외한 나머지를 묶어버림 )
  console.log('a >> ', a); //a >>  10
  console.log('b >> ', b); //b >>  20
  console.log('rest >> ', rest); //  rest >>  [ 30, 40, 50, 60 ]
}

get(...values);

//2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); //choco
console.log(rest); //{ company: 'lotte', price: 1000 }

//3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1); //1
console.log(two1); //2
console.log(rest2); //[3,4,5,6,7,8] 이름이 꼭 rest 안해도됨
////////////////////////////////////////////////////////////////////////////////////////////////////
console.clear();
//클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용
// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/
class House {
  //생성자 함수
  // : 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }
  //메서드 1 : 집의 나이를 출력
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년이 되었어요@@@`);
  }

  //메서드 2 : 집의 창문 갯수를 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다.!@@@`);
  }
}

//클래스(틀)를 이용해 객체를 찍어보자!(생산해보자! )
const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 >>', house1); //house1 >> House { year: 1990, name: '롯데캐슬', window: 1 }
console.log(typeof house1); // object
console.log(house1.year); //1990
house1.getAge(); // 롯데캐슬는 건축한지 33년이 되었어요@@@
house1.getWindow(); // 롯데캐슬의 창문은 1개 입니다.!@@@

//house2 : 2007년에 지어진 " 자이 "이름이고, 창문은 10 개
const house2 = new House(2008, '자이', 10);
console.log('house2 >>', house2);
house2.getAge(); // 자이는 건축한지 15년이 되었어요@@@

//실습1
class Shape {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  getArea() {
    //넓이 반환하는 메소드 (가로 * 세로)
    return `넓이는 ${this.row * this.col}`;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());
//클래스 상속
//부모 클래스 : House
//자식 클래스 : Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    //부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}층이며, 창문의 갯수는 ${this.window}이다.`;
  }
  ////////////////////////////////////////////////////////////////////////////////
  //오버라이딩(overriding)
  //부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}
const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
//  Apartment {
//     year: 2022,
//     name: '래미안',
//     window: 3,
//     floor: 20,
//     windowMaker: 'KCC'
//   }
console.log(apt1.getAptInfo()); // 2022년에 지어진 래미안 아파트의 총 층수는 20층이며, 창문의 갯수는 3이다.
console.log(apt1.getWindow()); // 래미안 아파트의 3 개의 창문은 KCC 회사에서 생산되었습니다.

////////////////////////////////////////////////////////////////////////////////
//실습2
//Rectangle(직사각형) 클래스 만들기
class Rectangle extends Shape {
  constructor(row, col) {
    super(row, col);
  }
  getDiagonal() {
    return Math.sqrt(this.row * this.row + this.col * this.col);
  }
}
let red2 = new Rectangle(3, 4);
console.log('대각선의 길이는 ', red2.getDiagonal(), '입니다.'); // 대각선의 길이는  5 입니다.
class Triangle extends Shape {
  constructor(row, col) {
    super(row, col);
  }
  getArea() {
    return (this.row * this.col) / 2;
  }
}
let tri = new Triangle(3, 4);
console.log('삼각형의 넓이는 ', tri.getArea(), '입니다.'); // 삼각형의 넓이는  6 입니다.
class Circle extends Shape {
  constructor(row, col, radius) {
    super(row, col);
    this.radius = radius;
  }
  getArea() {
    console.log(typeof this.radius);
    return this.radius ** 2;
  }
}
let cir = new Circle(1, 1, 3);
console.log('원의 넓이는 ', cir.getArea(), '파이 입니다.'); // 원의 넓이는  9 파이 입니다.
////////////////////////////////////////////////////////////////////////////////
// 단축 평가
// &&, ||

// A && B : 두 개의 피연산자 모두 true 면 true 반환
// A || B : 두 개의 피연산자 중에서 하나만 true 여도 true 반환

console.log(false || false); //false
console.log(false || true); //true

const xx = 5;
const yy = 7;

//삼항연산자 예시
const result1 = xx > yy ? 'xx가 큼' : 'yy 가 큼';
console.log(result1); //yy가 큼

//단축 평가 (&& , 논리곱)
const result2 = xx > yy && 'xx가 큼';
console.log(result2); //false

const result3 = xx < yy && 'yy가 큼';
console.log(result3); //yy가 큼

//단축 평가 (|| , 논리합)
const result4 = xx || 100;
console.log(result4); // 5

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음'); //홍길동
console.log(nameEx2 || '이름없음'); //이름 없음
