async function register() {
  const form = document.forms['form_register'];
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  await axios({
    method: 'POST',
    url: '/user/signup',
    data: {
      userid: form.userid.value,
      pw: form.pw.value,
      name: form.name.value,
    },
  });
  // 회원가입 성공
  alert('회원가입 성공!!');
  //로그인 페이지 이동
  document.location.href = '/user/signin';
}
