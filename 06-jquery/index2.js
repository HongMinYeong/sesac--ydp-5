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
