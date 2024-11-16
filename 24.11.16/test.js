const menuList = document.querySelectorAll(`.menu`);
console.log(menuList);
menuList.forEach(function (menu, index) {
  const selectedMenu = menu.addEventListener('click', function () {
    console.log('클릭 메뉴: ', index);
  });
  if (menu === selectedMenu) {
  }
});
