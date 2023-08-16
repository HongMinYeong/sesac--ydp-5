// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

console.log(car); //format : json
//JSON.parse(): json to js obj(직렬화)
const obj = JSON.parse(car);
console.log(obj); //js obj

// obj변수는 js object 이므로 .(연산자) 이용하여 키 값에 접근 가능
console.log('모델명은 ->', obj.model);
console.log('회사명은 ->', obj.company);
console.log('출시년도는 ->', obj.year);
console.log(obj.me);

//JSON.stringify() : js obj to json (직렬화)
const json = JSON.stringify(obj); //format : json
console.log(json, typeof json);

//json 변수는 JSON 형태의 문자열이므로 .(연산자)를 이용해도 키 값에 접근이 불가능 하다.
console.log(json.model); //undefined
console.log(json.wow); //undefined
