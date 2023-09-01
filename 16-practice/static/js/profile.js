const form = document.forms['form_profile'];
async function profileEdit() {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  await axios({
    method: 'POST',
    url: '/user/profile/edit',
    data: {
      id: form.id.value,
      userid: form.userid.value,
      pw: form.pw.value,
      name: form.name.value,
    },
  });
  alert('회원 정보 수정 완료!!');
}
async function profileDelete() {
  await axios({
    method: 'POST',
    url: '/user/profile/delete',
    data: {
      id: form.id.value,
    },
  });
  alert('회원 탈퇴 성공!!');
  document.location.href = '/';
}
