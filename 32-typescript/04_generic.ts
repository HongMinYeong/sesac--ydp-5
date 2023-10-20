//generic
//선언할 때 타입을 지정하기 어려운 케이스가 존재
// = 데이터 타입을 외부에서 지정
// = 생성 시점에 타입을 명시
// => "재사용성 증가"
// --> 타입을 변수처럼 사용한다!

function numArrLen(arr: (number | string | boolean | object | null)[]): number {
  return arr.length;
}
function strArrLen(arr: any[]): number {
  return arr.length;
}
//<T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦!
// -> type만  올 수 있음
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}
console.log(numArrLen([1, 2, 3])); //3
console.log(strArrLen(['1', '2', '3', 4])); //4
console.log(arrLength2<string>(['a'])); //1
console.log(arrLength2<number>([1, 2, 3, 4])); //4
console.log(arrLength2<any>(['1', 'hi', 2, 3, 4])); //5
console.log(arrLength2<string | number>(['1', 'hi', 2, 3, 4])); //5

//////////////////////////////////////////////////////
//퀴즈) 빨간 밑줄 사라지도록 함수 완성하기 !
function printSome<T>(x: T, y: T): void {
  console.log(x, ' ', y);
}

printSome<string>('hi', 'hello'); //hi hello
printSome<number>(100, 200); //100 200
printSome<boolean[]>([true, false], [false, false]); //[true,false] [false,false]
function printSome2<T, U>(x: T, y: U): void {
  console.log(x, ' ', y);
}
printSome2<string, number>('1', 1);

//////////////////////////////////////////////////////
//interface와 generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2023-10-05'),
  option: {
    color: 'black',
    storage: 128,
  },
};
console.log(iphone15);
type galaxyOption = {
  color: string;
  isBuz: boolean;
};
const galaxy23: Phone<galaxyOption> = {
  company: 'samsung',
  createAt: new Date('2023-10-05'),
  option: {
    color: 'blue',
    isBuz: true,
  },
};
console.log(galaxy23);
function sum1(x: number, y: number): void {
  console.log(x + y);
}
function sum2(...sum2: number[]): number {
  return sum2.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum2(1, 2, 3, 4, 10));

function arrElement<T>(a: T[], b: number): boolean {
  return a.length > b ? true : false;
}
console.log(arrElement<string>(['a'], 1));
