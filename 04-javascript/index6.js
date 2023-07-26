// ========================조건문 실습===================
// let age = Number(prompt('연령대별 단어 출력해보기!'));

// if (age >= 20) {
//     console.log("성인");
// } else if (age >= 17) {
//     console.log("고등학생");
// } else if (age >= 14) {
//     console.log("중학생");
// } else if (age >= 8) {
//     console.log("초등학생");
// } else if (age >= 0) {
//     console.log("유아");
// }

//조건문

//if 문
if (5 > 3) {
    console.log('얍 !');
}

let number = Number(prompt('숫자를 입력해주세요 !'));
//1. prompt 로 사용자로부터 값을 입력받고(문자열)
//2. Number() 문자열 -> 숫자형 형변환 
//아래와 동일한  코드 
// let number2 = prompt('숫자 입력해주세요 !')
// number2 = Number(number2)

// if (number > 10) {
//     console.log('입력한 수는 10보다 크군요!');
// } else {
//     console.log('입력한 수는 10보다 작거나 같네요!');
// }

// if (number > 10) {
//     console.log('입력한 수는 10보다 크군요!');
// } else if (number == 10) {
//     console.log('입력한 수는 10이네요!');
// } else {
//     console.log('입력한 수는 10보다 작군요!');
// }

if (number > 100 || number < 0) {
    console.log('입력값이 잘못되었습니다. 숫자의 범위는 0~ 100')
} else if (number >= 90) {
    console.log('A');
} else if (number >= 80) {
    console.log('B');
} else if (number >= 70) {
    console.log('C');
} else if (number >= 60) {
    console.log('D');
} else {
    console.log('F');
}