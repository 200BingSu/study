let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

console.log(btn1);
console.log(btn2);

btn1.onclick = function () {
  alert('hello');
};

btn2.addEventListener('click', event1);
function event1() {
  alert('hello');
}

btn2.addEventListener('click', event2);
function event2() {
  alert('bye');
}

btn2.removeEventListener('click', event2);
