function change1() {
  document.body.style.backgroundColor = 'red';
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'orange';
      resolve();
    });
  });
}
function change2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'yellow';
      resolve();
    });
  });
}
function change3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'green';
      resolve();
    });
  });
}

change1()
  .then(function () {
    return change2();
  })
  .then(function () {
    return change3();
  });
