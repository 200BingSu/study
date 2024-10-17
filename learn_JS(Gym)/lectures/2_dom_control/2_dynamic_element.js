let addBtn = document.getElementById('button');
let inputBox = document.querySelector('input');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li'); //li 태그를 생성하는 것을 'li'로 부르겠다.
  let ul = document.querySelector('ul'); //ul 태그를 ul로 부르겠다.
  li.textContent = inputBox.value; //생성되는 li태그의 텍스트 내용은 inputBox(input의 요소) 내 value 값을 넣는다.
  let button = document.createElement('button');
  button.textContent = 'X';
  button.setAttribute('calss', 'remover-btn');
  button.addEventListener('click', function (event) {
    event.target.parentNode.remove();
  });
  li.appendChild(button); //생성된 li는 ul의 자식으로 들어간다
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li'); //li 태그를 생성하는 것을 'li'로 부르겠다.
  let ul = document.querySelector('ul'); //ul 태그를 ul로 부르겠다.
  let target = document.querySelector(`li#target`);
  li.textContent = inputBox.value; //생성되는 li태그의 텍스트 내용은 inputBox(input의 요소) 내 value 값을 넣는다.
  ul.insertBefore(li, target); //생성된 li는 ul의 자식으로 들어간다
});

removeTargetBtn.addEventListener('click', function () {
  let targetli = document.querySelector('li#target');
  targetli.remove();
});

removeBtn.addEventListener('click', function (event) {
  event.target.parentNode.remove();
});
