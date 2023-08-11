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
