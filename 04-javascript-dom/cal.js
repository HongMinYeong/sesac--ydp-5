const calcul = document.querySelector('.cal');
calcul.addEventListener('click', cal);

function cal() {
  let value1 = Number(document.getElementById('value1').value.trim());
  let value2 = Number(document.getElementById('value2').value.trim());
  let operator = document.getElementById('operator').value;

  let result;

  if (operator === '+') {
    result = value1 + value2;
  } else if (operator === '-') {
    result = value1 - value2;
  } else if (operator === '*') {
    result = value1 * value2;
  } else if (operator === '/') {
    result = value1 / value2;
  } else if (operator === '%') {
    result = value1 % value2;
  } else {
    result = '연산자 입력이 잘못되었습니다. ';
  }
  document.getElementById('result').value = result;
}

const reset = document.querySelector('.zero');
reset.addEventListener('click', resetHandler);

function resetHandler() {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  document.getElementById('operator').value = '';
  document.getElementById('result').value = '';
}

//처음에 result 값을 const로 선언해서 재할당이 안됬다.. 이 바보자식
//strict mode 변수 이름이랑 함수 이름을 똑같이 해서 오류
//처음에 value 1 , value2 의 value를 변수에 할당해서 계속 스려고 했는데
//버튼 클릭 시마다 그 값을 다시 읽는게 아니라 처음 한번만 값을 가져오기 때문에
//버튼 클릭시 항상 빈 값을 가지게 됨
