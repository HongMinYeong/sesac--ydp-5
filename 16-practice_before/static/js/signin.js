async function login() {
  const form = document.forms['form_login'];
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const response = await axios({
    method: 'POST',
    url: '/user/signin',
    data: {
      userid: form.userid.value,
      pw: form.pw.value,
    },
  });
  console.log(response);

  if (response.data) {
    alert('로그인 성공!!');
    const form_info = document.forms['form_info']; // 숨겨진 폼 선택
    console.log(form_info);
    form_info.userid.value = form.userid.value;
    form_info.submit();
  } else {
    alert('로그인 실패!!');
    // 로그인 폼 초기화
    form.reset();
  }
}
