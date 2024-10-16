let li = document.createElement('li'); //지정한 tagName의 HTML 요소 생성
//li 태그는 ui 태그 하위에 들어감--a
let ul = document.querySelector('ul');
ul.appendChild(li); //li 태그를 ul 태그 안에 포함시킨다
// li.textContent = '데드리프트' //li에 '데드리프트'를 넣으시오.
let addBtn = document.getElementById('button');
let input = document.getElementById('myText');

addBtn.addEventListener('click', button());
function button(a) {
  // 1. input 태그 글을 인식한다.
  // 2. 그 글이 li 태그의 내용이 된다.
  li.textContent = 'a';
  ul.appendChild(li);
}
