let rectangle = document.querySelector('.rectangle');
console.log(rectangle);

// //마우스가 누르고 있을 때 함수 기능
rectangle.addEventListener('mousedown', function (event) {
  console.log('mousedown');
});
// //마우스 버튼 올라갈 때 함수 기능
// rectangle.addEventListener('mouseup', function (event) {
//   console.log('mouseup');
// });
// //마우스가 요소로 진입했을 때
// rectangle.addEventListener('mouseenter', function (event) {
//   console.log('mouseenter');
// });
// //마우스가 요소를 떠났을 때
// rectangle.addEventListener('mouseleave', function (event) {
//   console.log('mouseleave');
// });
// //마우스가 움직일 때
// rectangle.addEventListener('mousemove', function (event) {
//   console.log('mousemove');
// });

// //누르면 위치에 원 만들기
// let body = document.querySelector('body');
// body.addEventListener('click', function (event) {
//   console.log('pageX:', event.pageX, 'pageY:', event.pageY);
//   let div = document.createElement('div');
//   div.classList.add('circle');
//   div.style.left = (event.pageX-25) + 'px';
//   div.style.top = (event.pageY-25) + 'px';
//   body.appendChild(div);
// });

// 마우스 X,Y축 좌표를 표시(브라우저에서 보여지는 기준)
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('clientX',event.clientX, 'clientY', event.clientY)});

// // 마우스 X,Y축 좌표를 표시(전체 페이지 기준)
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('pageX',event.pageX, 'pageY', event.pageY)});

//클릭한 요소의 크기와 위치를 알고싶을 때
rectangle.addEventListener('mousedown', function (event) {
  console.log(event.target.getBoundingClientRect());
});