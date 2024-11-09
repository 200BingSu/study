let btn = document.querySelector('#btn');
let email = document.querySelector('[name=email]');
let password = document.querySelector('[name=password]');
console.log(btn);
btn.addEventListener('click', function () {
  console.log('email:', email.value);
  console.log('psssword:', password.value);
  if (email.value === '' || email.value.includes('@') === false) {
    console.log('이메일이 유효하지 않습니다.');
  } else if (!password.value) {
    console.log('비밀번호를 입력해주세요');
  } else if (
    (password.value.length >= 8 && password.value.length <= 16) === false
  ) {
    console.log('비밀번호는 8~16자입니다.');
  } else {
    console.log('로그인 성공');
  }
});
