/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑의무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};
// tiger.__proto__ : animal

const 백두산호랑이 = {
  color: 'white',
  name: '포동이',
  __proto__: tiger,
};

// 생성자 함수
/* let animal2 = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal2;

let rabbit = new Rabbit('흰 토끼'); //  rabbit.__proto__ == animal */

// 일반함수 vs 생성자함수
// function button() {}
// function Button() {}
// button(); // 일반함수
// new button(); // 생성자함수 -> 무조건 객체를 반환

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  /* 생성자 함수에서는 get/set 구분x */
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}
function Tiger(name) {
  Animal.call(this); // 여기에서 this는 한라산호랑이이다. 상속의 개념은 아니고 복사이다.
  // this.__proto__ = new Animal();
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    console.log(this);
    return `${target}에게 조용히 다가간다.`;
  };
}

/* static 메서드 만들기 */
Tiger.bark = function () {
  return '어흥!';
};

const 한라산호랑이 = new Tiger('포동이');
const 금강산호랑이 = new Tiger();

/* function sum(a, b, c) {
  console.log(this);
} */

// sum.call('안녕', 1, 2, 3); // call을 이용해서 this를 보내줄 수 있다. // 바로 실행
// this를 전달하고, arguments를 따로 전달할 수 있다.

//apply
//bind : 바인딩만 해놓고 실행을 하지 않는다. 이벤트 함수안에서 this를 따로 전달할때 사용한다.
