let addBtn = document.getElementById('addBtn');
let inputTask = document.querySelector('#task');
let inputDate = document.querySelector('#date');
let ul = document.querySelector('ul');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  li.textContent = `${inputTask.value}  ${inputDate.value}`; // 추가될 li에 inputTask 내용 넣기
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkbox');
  checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
      li.classList.add('checked');
      li.classList.remove('unchecked');
      li.style.color = 'lightgray';
    } else {
      li.classList.add('unchecked');
      li.classList.remove('checked');
      li.style.color = 'black';
    }
  });
  li.prepend(checkBox);
  ul.appendChild(li);

  // 입력 필드를 초기화
  inputTask.value = '';
  inputDate.value = '';
  inputTask.focus();
});
