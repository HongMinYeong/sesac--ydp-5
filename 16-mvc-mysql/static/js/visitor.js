//front js
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
    console.log('post/visitor 요청에 대한 응답', res.data);
    const { id, name, comment } = res.data;
    //:newVisitor 변수에 tr요소를 생성하고 ,tbody의 맨 마지막 요소로 추가
    const newVisitor = `
    <tr id="tr_${id}<">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td>
            <button type="button">수정</button>
          </td>
          <td>
            <button type="button" onclick="deleteVisitor(this,${id})">삭제</button>
          </td>
        </tr>
    `;
    //jquery
    // $('tbody').append(newVisitor);

    //js
    tbody.insertAdjacentHTML('beforeend', newVisitor);
  });
}

function deleteVisitor(obj, id) {
  console.log(obj, id); //>>  <button type="button" onclick="deleteVisitor(this,'16')">삭제</button>
  if (!confirm(`정말로 삭제하나요?`)) {
    //confirm 메서드는 boolean을 리턴
    return;
  }
  //confirm 창에서 [확인] 누르면 visitor 데이터 삭제
  //:axios로 DELETE /visitor 요청 날려서 db에 데이터 delete 하기
  axios({
    method: 'delete',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    //res값에 true가 찍혀잇움 !!
    console.log('delete / visitor 요청에 대한 응답', res.data);

    alert('삭제 성공 !');
    //버튼(obj)의 부모의 부모 -> tr요소 제거
    obj.parentElement.parentElement.remove();
  });
}
