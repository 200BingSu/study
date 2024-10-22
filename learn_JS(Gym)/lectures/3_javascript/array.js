'use-strict';

// // 배열 생성
// const fruits=['사과', '바나나', '딸기']
// console.log(fruits);

// // const snacks = new Array('새우깡', '나초', '양파링');
// // console.log(snacks);
// console.log(fruits[0]);

// //자주 사용하는 배열 AIP
// //.length: 길이
// console.log('fruit.length:', fruits.length);
// console.log('마지막 데이터:', fruits[fruits.length-1]); //가장 마지막 데이터 확인

// //forEach(): 배열 안의 값을 순회하면서 하나하나 넘겨줌
// fruits.forEach(function(item, index){
//   console.log(index, item);
// }) //callback 함수

// //push(): 뒤에 추가
// fruits.push('귤')
// console.log(fruits);

// //pop(): 뒤에서부터 제거
// fruits.pop();
// console.log('제거완료:', fruits);

// //shift(): 앞에서부터 제거
// fruits.shift();
// console.log(fruits);

// // unshift(): 앞에서 추가
// fruits.unshift('수박');
// console.log(fruits);

// //indexof(): 이 값이 몇번째에 속해있는가
// const index= fruits.indexOf('딸기');
// console.log('index:', index); // 결과: -1 = 찾는게 없음

// //splice(시작 위치, 몇 개): 시작위치부터 몇 개 제거
// fruits.splice(1,1);
// console.log(fruits);

//구조 분해 할당
// let fruits = ['사과', '바나나', '딸기', 'a', 'b', 'c', 'd', 'e'];
// let [apple, banana, strawberry, ...others] = fruits;
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

//전개 구문
// let fruits=['사과', '바나나', '딸기']
// let items=[...fruits] // 앞뒤로 또다른 데이터 첨가 가능
// console.log(items);

//rest parameter
// function print(...values) {
//   console.log(values);
// };
// print('a','b','c','d','e');

//얕은 복사(Shallow copy)
// let source=['사과', '바나나', '딸기'];
// let target=source;
// console.log('source:', source);
// console.log('target:', target);
// target[0]='파인애플' 
//console.log(source);
//console.log(target);
// source[0]도 같은 주소를 참고하고 있기 때문에 '파인애플'로 바뀜

//깊은 복사(deep copy)
let source=['사과', '바나나', '딸기'];
// let target=[...source]; //1번 방법: 전개 구문
// let target=Array.from(source); //2번 방법: Array from 메서드
let target=source.slice()
target[0]='파인애플'
console.log(source);
console.log(target);
