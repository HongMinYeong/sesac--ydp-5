function first() {
  second(); //second 함수 호출 -> 함수 찾아감 -> 2출력
  console.log(1); //1출력
  return;
}

function second() {
  console.log(2);
  return; //함수 끝내기
}

first(); //first 함수로 찾아감
