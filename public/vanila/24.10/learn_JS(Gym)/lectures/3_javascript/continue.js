'use-strict';

let text = '';
// console.log(1 + 2);
// console.log('JS' + 'hello');
// console.log('JS' + 2); //JS는 문자를 덧셈할 수 없어 숫자를 형변화시켜 문자로 출력함

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue; //i가 3일 때 아래 명령을 수행하지 않고 반복
  }
  if (i == 8) {
    break; //i가 8일 때 나머지 반복 중지
  }
  text = text + i;
}
console.log(text);
