const btn = document.getElementById('submit');

let num = 1;

btn.addEventListener('click', (guest) => {
  guest.preventDefault();
  const author = document.getElementById('name').value;
  const content = document.getElementById('content').value;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();

  const table = document.querySelector('table');
  //기존 내용과 새로운 내용을 합친 새로운 내용을 씀
  table.innerHTML += `<tr> 
  <td>${num}</td>
  <td>${author}</td>
  <td>${content}</td>
  <td>${year}-${month}-${day} ${hour} : ${min} </td></tr>`;

  num++;

  document.getElementById('name').value = '';
  document.getElementById('content').value = '';
});
