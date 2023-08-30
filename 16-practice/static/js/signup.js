function register() {
  const form = document.forms['form_register'];

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  axios({
    method: 'POST',
    url: '/user/signup',
    data: {
      userid: form.userid.value,
      pw: form.pw.value,
      name: form.name.value,
    },
  })
    .then((res) => {
      const { userid, pw, name } = res.data;
      console.log(res);
      return res.data;
    })
    .then(() => {
      console.log('create >> ');
      // (1) alert 띄우기
      alert('회원가입 성공');
      // (2) 가입 성공시 로그인 페이지로 이동
      // document.location.href란?
      // javascript에서 페이지 이동할 수 있는 방법
      // document 객체를 사용하기 때문에 프론트에서 사용 가능
      document.location.href = '/user/signin';
    });
}
