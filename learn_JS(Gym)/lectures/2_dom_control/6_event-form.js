let inputBox = document.querySelector('#input-box');

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

//event.key: 어떤 키를 눌렀는지 반환
// inputBox.addEventListener('keyup', function (event) {
//   console.log('event.key:', event.key);
// });
//event.keyCode: 키를 아스키 코드(숫자형태)로 반환

//focus
inputBox.addEventListener('focus', function (event) {
  alert('focus');
});

//blur: 포커스가 사라졌을 때
inputBox.addEventListener('blur', function (event) {
  alert('blur');
});

//chage: value 값이 변경됐을 때
inputBox.addEventListener('change', function (event) {
  console.log('change');
});

let img = document.querySelector('img');
img.addEventListener('error', function (event) {
  console.log('error');
  // event.target.src="대체 이미지 주소";
});
