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
