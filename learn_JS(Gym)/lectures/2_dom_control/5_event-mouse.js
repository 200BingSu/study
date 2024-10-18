let rectangle = document.querySelector('.rectangle');
console.log(rectangle);

//마우스가 누르고 있을 때 함수 기능
rectangle.addEventListener('mousedown', function (event) {
  console.log('mousedown');
});
//마우스 버튼 올라갈 때 함수 기능
rectangle.addEventListener('mouseup', function (event) {
  console.log('mouseup');
});
//마우스가 요소로 진입했을 때
rectangle.addEventListener('mouseenter', function (event) {
  console.log('mouseenter');
});
//마우스가 요소를 떠났을 때
rectangle.addEventListener('mouseleave', function (event) {
  console.log('mouseleave');
});
//마우스가 움직일 때
rectangle.addEventListener('mousemove', function (event) {
  console.log('mousemove');
});
