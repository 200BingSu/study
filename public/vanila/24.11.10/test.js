window.addEventListener('load', function () {
  // const menu1 = document.querySelector('#menu1');
  // const menu2 = document.querySelector('#menu2');
  // const menu3 = document.querySelector('#menu3');
  // const menu4 = document.querySelector('#menu4');
  // const menuActive = document.querySelector('.menu-active');
  // const menu = document.querySelectorAll('.menu');
  // const menuWrap = document.querySelector('.menu-wrap');
  // console.log(menuWrap);
  // console.log('menu: ', menu);
  // console.log('menu1: ', menu1);
  // console.log('menu2: ', menu2);
  // console.log('menu3: ', menu3);
  // console.log('menu4: ', menu4);
  // console.log(menuActive);
  // menu1.addEventListener('mouseenter', function () {
  //   menu2.classList.add('menu-active');
  //   menu3.classList.add('menu-active');
  //   menu4.classList.add('menu-active');
  //   console.log('추가');
  // });
  // menu1.addEventListener('mouseleave', function () {
  //   menu2.classList.remove('menu-active');
  //   menu3.classList.remove('menu-active');
  //   menu4.classList.remove('menu-active');
  //   console.log('제거');
  // });
  // menu2.addEventListener('mouseenter', function () {
  //   menu1.classList.add('menu-active');
  //   menu3.classList.add('menu-active');
  //   menu4.classList.add('menu-active');
  //   console.log('추가');
  // });
  // menu2.addEventListener('mouseleave', function () {
  //   menu1.classList.remove('menu-active');
  //   menu3.classList.remove('menu-active');
  //   menu4.classList.remove('menu-active');
  //   console.log('제거');
  // });
  // menu3.addEventListener('mouseenter', function () {
  //   menu1.classList.add('menu-active');
  //   menu2.classList.add('menu-active');
  //   menu4.classList.add('menu-active');
  //   console.log('추가');
  // });
  // menu3.addEventListener('mouseleave', function () {
  //   menu1.classList.remove('menu-active');
  //   menu2.classList.remove('menu-active');
  //   menu4.classList.remove('menu-active');
  //   console.log('제거');
  // });
  // menu4.addEventListener('mouseenter', function () {
  //   menu1.classList.add('menu-active');
  //   menu2.classList.add('menu-active');
  //   menu3.classList.add('menu-active');
  //   console.log('추가');
  // });
  // menu4.addEventListener('mouseleave', function () {
  //   menu1.classList.remove('menu-active');
  //   menu2.classList.remove('menu-active');
  //   menu3.classList.remove('menu-active');
  //   console.log('제거');
  // });
  // const selectedMenu = document.querySelector('#menu1');
  const allMenu = document.querySelectorAll('.menu');
  const allMenuArray = Array.from(document.querySelectorAll('.menu'));
  // console.log(Array.isArray(allMenuArray));
  // console.log(allMenuArray);
  // const otherMenu = allMenuArray.filter(function (menu) {
  //   return menu !== selectedMenu;
  // });
  // console.log('나머지 메뉴: ', otherMenu);
  allMenu.forEach(function (menu) {
    menu.addEventListener('mouseenter', function () {
      const selectedMenu = this;
      const otherMenu = allMenuArray.filter(function (menu) {
        return menu !== selectedMenu;
      });
      console.log('고른 메뉴: ', selectedMenu);
      console.log('나머지: ', otherMenu);
      otherMenu.classList.add('menu-active');
    });
  });
});
