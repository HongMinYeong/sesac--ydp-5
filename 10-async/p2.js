function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(n);
      resolve(n);
    }, 1000);
  });
}

function hell(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(n);
    }, 1000);
  });
}

async function exec() {
  let user = await call('kim');
  console.log(user + '반가워');
  let space = await back('back');
  console.log(space + '을 실행했구나');
  let space2 = await hell('callbackhell');
  console.log('여기는 ' + space2);
}

exec();
