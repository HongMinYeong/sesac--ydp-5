//front js
console.log('dfddf');
const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// 폼의 [등록] 버튼 클릭시 테이블에 방문데이터 추가
// : 버튼 클릭시 axios 로 POST/visitor 요청 날려서 db에 데이터 insert 하기
function createVisitor() {
  const form = document.forms['visitor-form']; //form 선택
  axios({
    //axios로 요청 날리기
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('post/visitor 요청에 대한 응답', res);
  });
}
