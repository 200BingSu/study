'use srict';

//숫자
let number = 2;
const number2 = 1.2;
console.log(number, number2);
console.log(5 / 0); //infinity
console.log(-5 / 0); //-Infinity
console.log('hello' / 5); //NaN

let nan = 'hello' / 5;
console.log(typeof nan); // typeof를 통해 다음 데이터의 타입을 알 수 있음.

//문자열
const name = '홍길동';
const age = 25;

console.log(
  '안녕하세요. 제 이름은 ' + name + '입니다. 나이는 ' + age + '살 이예요.'
);
console.log('----------------');
console.log(`안녕하세요. 제 이름은 ${name}입니다. 나이는 ${age}이예요.`);
const message = `안녕하세요

이렇게 표현할 수 있어요`;
console.log(message); //공백까지 인식함

const hello = "안녕하세요.\n 제 이름은 '홍길동'입니다.";
console.log(hello);

//블리언
const isProgramer= true;
const isDesign = false;
console.log(isProgramer);
console.log(isDesign);

//null, undefined
const username = null;
console.log(username);
let message2;
console.log('username:', username); // null
console.log('message2:', message2); //undifined

const person ={
  name:'홍길동',
  age: 24,
  isProgramer: true,
  ssay(){
    console.log('Hello');
  }
};
const arr = [1,2,3,4,5];
console.log(arr, length); //길이 반환
arr.push(88);
console.log(arr);
console.log(person);
