window.addEventListener('load', function () {
  const center = document.querySelector('.center');
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  //  스크롤을 내리면 Y축 위치를 알아보고
  window.addEventListener('scroll', function () {
    const scrollPositionY = window.scrollY;
    console.log(scrollPositionY);
    if (scrollPositionY < 250) {
      center.classList.remove('center-active');
      left.classList.remove('left-active');
      right.classList.remove('right-active');
    } else if (scrollPositionY > 500) {
      center.classList.add('center-active');
      left.classList.add('left-active');
      right.classList.add('right-active');
    }
  });
});
