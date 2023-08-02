//val() - value
function getValue() {
  //js
  // const inputVal = document.querySelector('input').value;
  //alert(inputVal);

  //jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  //js
  // document.querySelector('input').value = '하이하이~';

  //jquery
  $('input').val('안녕안녕~');
}

//css()
function changeCssJS() {
  const span = document.querySelector('span'); //하나만바뀜 다하려면 반복 돌으앗
  span.style = 'font-size:20px; color:red';
}

function changeCssJquery() {
  //유사 배열 다 읽어어어어ㅓ걱어
  //case 1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  //case 2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', //모든 span 에 대해 폰트 크기 변경
    color: 'blue', //모든 span에 대해 폰트 색상 변경
  });
}

function getCssJquery() {
  console.log(document.querySelector('span').style.color);
  //console.log($('span').css('color')); //jquery
}

//attr()
function changeAttrJS() {
  //퀴즈 : a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const naver = document.querySelector('a');
  //naver.setAttribute('href', 'https://www.naver.com');
  naver.href = 'https://www.naver.com';
}

function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const p_text = document.querySelector('.p-text');
  p_text.innerText = '임의의 값으로 변경';
  //p_text.innerHTML = '임의의 값으로 변경';
  //p_text.textContent = '임의의 값으로 변경';
}
function changeTextJquery() {
  $('.p-text').text('휙 jquery로 텍스트 바꿧지롱');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const p_html = document.querySelector('.p-html');
  p_html.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<h3>javascript</h3>');
  //$('.p-html').text('<h3>javascript</h3>'); //태그 인식 안됨
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  const append_js = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const p = document.createElement('li');
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  p.innerText = '마지막 자식으로 추가된 js';
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  append_js.append(p);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
}

function appendJquery() {
  $('.colors').append('<li>jquery 로 append 완!</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  const prepend_js = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const pp = document.createElement('li');
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  pp.innerText = '첫 자식으로 추가된 js';
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  prepend_js.prepend(pp);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
}

function prependJquery() {
  $('.colors').prepend('<li>jquery 로 prepend 완!</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  green.before(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
}

function beforeJquery() {
  $('.green').before('<li>jquery로 before 완!</li>');
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  green.after(li);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $('.green').after('<li>jquery로 after 완!</li>');
}

function removeJS() {
  //li2 아이디를 갖는 요소를 선택
  const li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

function emptyJS() {
  //ul태그 이자 num 클래스를 갖는 요소 선택
  const nums = document.querySelector('ul.nums');
  //   해당 요소의 HTML을 빈 문자열 '' 로 설정(innerHTML)
  nums.innerHTML = '';
}

function emptyJquery() {
  $('ul.nums').empty();
}
