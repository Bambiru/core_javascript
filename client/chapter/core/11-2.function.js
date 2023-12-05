/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열이라고 불리는 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기가 가능하다.

  // console.log(arguments);
  let total = 0;

  /* // for 문
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    total += arguments[i];
  } */

  /* //for...of문
  for (let value of arguments) {
    total += value;
  } */

  // 빌려오기
  /* 1. call을 이용하여 빌려오기 - 1회성
  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }); */

  // arguments의 (태생)부모 자체를 배열로 바꿔 버리면 ?
  // arguments.__proto_ = Array.prototype;
  // console.log(arguments);

  // 진짜 배열 만들기
  // 1. const arr = Array.prototype.slice.call(arguments);
  // 2. const arr = Array.from(arguments);
  //3.
  const arr = [...arguments];

  /* 콜백함수 */
  // arr.forEach((item) => (total += item));

  /*   total = arr.reduce(function (acc, cur) {
    // acc : 누산하다
    return acc + cur;
  }, 0); */
  // total = arr.reduce((acc, cur) => acc + cur, 0);

  // 콜백함수는 표현식(화살표함수)으로 많이 씁니다.

  // forEach, reduce
  // return total;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

// console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
// let cb = function (isActive, success, fail) {
//   /* 함수가 실행이 될때 인수로 넘겨진 애들이 함수여야 한다. */
//   /* if (isActive) {
//     success();
//   } else {
//     fail();
//   } */

//   isActive ? success() : fail();
// };

// cb(
//   true,
//   function () {
//     console.log('성공!');
//   },
//   function () {
//     console.log('실패!');
//   }
// );

function movePage(url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    let err = { message: '에러입니다!' };
    fail(err);
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(url + ' 페이지로 넘어갑니다.');
    /* setTimeout(() => {
      location.href = url;
    }, 3000); */
  },
  function (err) {
    console.log(err.message);
  }
);

// func1({ name: 'bambi', age: 10 });

function func1(obj) {
  let name = 'tiger';
  let age = 35;

  return {
    name: name,
    age: age,
  };
}

func1({
  age: 36,
  name: 'tiger',
});

// 함수 선언문
// vs.함수(표현)식

// 즉시 실행 함수 (표현)식
// 함수가 선언됨과 동시에 실행되는 것을 말합니다.
let IIFE;

/* (function a() {

})() */

/* 최근에는 모듈이 생겼다. */
// import css form '';

//incapsulation (캡슐화)
// 모듈화 -> 모듈프로그래밍(import, export)
// =>

const sdsd = (function () {
  function getStyle(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }
  /* get과 set에 접근할 수 없다. 접근가능하게 만들기위해서는 객체로 return하면된다. */
  return css;
})();

/* import css from 'css.js'
css(); */
