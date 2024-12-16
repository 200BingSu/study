function 개발자(_name) {
  if (!(this instanceof 개발자)) {
    return new 개발자(_name);
  }

  this.name = _name;
  this.작업 = function () {
    console.log(this.name + " 작업중입니다.");
  };
}

//new 연산자 없이 호출하여도 생성자 함수로서 호출된다.
const 개발자1 = new 개발자("프론트엔드");
console.log(개발자1); // 개발자 {name: '프론트엔드', 작업: ƒ}
