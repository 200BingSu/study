// 메뉴목록(li)
const menuList = document.querySelectorAll('.menu');
console.log(menuList);

let selectedMenuIndex;

function select(index) {
  menuList.forEach(function (menu, i) {
    if (i === index) {
      menu.classList.add('menu-active');
      menu.classList.remove('menu-non-active');
    } else {
      menu.classList.add('menu-non-active');
      menu.classList.remove('menu-active');
    }
  });
}

function resetMenu() {
  // 모든 메뉴에서 클래스 제거
  menuList.forEach((menu) => {
    menu.classList.remove('menu-active');
    menu.classList.remove('menu-non-active');
  });
}

// 내가 선택한 메뉴의 selectedMenuIndex를 select()함수의 기준으로 사용
menuList.forEach(function (menu, index) {
  menu.addEventListener('mouseenter', function () {
    selectedMenuIndex = index;
    console.log('고른 메뉴', selectedMenuIndex);
    select(selectedMenuIndex);
  });
  menu.addEventListener('mouseleave', function () {
    resetMenu();
  });
});
