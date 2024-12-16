let h2 = document.querySelector('h2');
h2.dataset.tooltip = 'hello JS';
console.log(h2.dataset.tooltip);

let liList = document.querySelectorAll('li');
console.log(liList);
let img = document.querySelector('img');
let fruit = document.querySelector('.fruit');
console.log(fruit);
console.log(liList[0].textContent);

function selectItem(event) {
  fruit.textContent = event.target.textContent;
  console.log(event.target.dataset.img);
  img.setAttribute('src', event.target.dataset.img);
}

// liList[0].addEventListener('click', selectItem);
// liList[1].addEventListener('click',selectItem);
// liList[2].addEventListener('click',selectItem);

liList.forEach(function (li) {
  li.addEventListener('click', selectItem);
});
