'use-strict';

let count = 0;
while (count < 5) {
  console.log(count + '번째 출력');
  count++; //빠져나올 수 있는 조건이 꼭 있어야 한다.
}

console.log('----------');

let number = 0;
do {
  console.log(number + '번째 출력');
  number++;
} while (number < 5);
