const value1 = Number(document.getElementById('value1').value.trim());
const value2 = Number(document.getElementById('value2').value.trim());
const operator = document.getElementById('operator').value;
const result = document.getElementById('result').value;

const calcul = document.querySelector('.cal');
calcul.addEventListener('click', cal);

function cal() {
  console.log('함수실행');
  if (operator === '+') {
    console.log('덧셈 실행');
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
    result = ' 연산자가 잘못되었습니다. ';
  }
}
console.log(result);
