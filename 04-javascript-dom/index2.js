console.log(document); //html 문서에 접근
console.log(document.head); //html 문서중 head 에 접근
console.log(document.body); //html 문서중 body 에 접근
console.log(document.title); //title 요소안에 있는 값이 출력됨
console.log(document.URL);
// console.log(document.domain);
//url 과 domain의 차이 알고 있기 (+uri)

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById -> Id를 기준으로 요소를 얻어오겠다.
console.log('==============1. getElementById=============');
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

//2. getElementsByClassName -> class 이름을 기준으로 해서 가지고 오겠다. class 는 여러개 지정할수 있어서 s 붙었네요 하하
console.log('=============2. getElementsByClassName==============');
console.log(document.getElementsByClassName('pink')); //유사배열
console.log(document.getElementsByClassName('pink')[1]);
////////////////////////////////////////////////////////////////////////////////
// document.getElementsByClassName('pink').forEach((elem) => {
//   console.log(elem);
// });
// //유사배열이지 배열은 아니기때문에 실행안됨
console.log('============3.getElementsByTagName===============');
//3.getElementsByTagName
console.log(document.getElementsByTagName('div'));

console.log('===========4.getElementsByName================');
//4.getElementsByName
console.log(document.getElementsByName('id'));

console.log('=============5. querySelector(css selector)==============');
//5. querySelector(css selector)
// : 처음 발견한 하나만 가지고 옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

console.log('==============6.querySelectorAll (css selector)=============');
//6.querySelectorAll (css selector)
// : 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);

//유사 배열 (HTMLcollection, NodeList)
//[] 식으로 생긴 배열을 의미. 배열은 아님 !!
//index,length 는 가짐 .. 그치만 배열은 아님..!!!!
//배열과 달리 사용 가능한 메서드가 제한

//nodeList -> forEach() 반복문 사용 가능
console.log('===========forEach ===========');
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

//HTMLCollection -> forEach() 메서드 사용 x
//반복을 해야 된다? Array 변경 (Array.from())
console.log('===========forEach array 변경===========');
//array 형태로 바꾼다음 forEach 돌기
Array.from(document.getElementsByClassName('pink')).forEach((elem) =>
  console.log(elem)
);

//for of 반복문
console.log('===========for of 반복문 ===========');
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
}
console.clear();
