function sum(num1 = 0, num2 = 0) {
  console.log('num1:', num1);
  console.log('num2:', num2);
  return num1 + num2;
}
let result = sum(5);
console.log('result:', result);

const hello = (name) => {
  console.log(`hello ${name}`);
};
hello('홍길동');

let fruits = ['사과','바나나','딸기'];
fruits.forEach(function(item, index){
console.log('item:', item)
});