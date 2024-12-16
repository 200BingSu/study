const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function () {
  const imgs = document.querySelectorAll('img');
  console.log(imgs);
  imgs.forEach(function (img) {
    img.style.transform = 'translate(-400px)';
  });
});

// 1번 버튼 2번 누르면 이미지 묶음이 밖으로 나가버려서 안 보임..
// 이미지 좌표를 화면 가운데로 바꾸는 방법 따로 없을까
