/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식

let calcAllMoney = (...args) => {
  let total = 0;

  // total = args.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);

  total = args.reduce((acc, cur) => acc + cur, 0);

  return total;
};
// function aa() {
//   console.log(arguments);
// }
// aa(10, 300, 400);

let calcAllMoney2 = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney2(1000, 5000, 4500, 15000);
console.log(result);

// let user = () => {
//   return { name: 'tiger', age: 36 };
// };
// let user = () => ({ name: 'tiger', age: 36 });

// 화살표 함수와 this

// 일반 함수의 양면의 얼굴 // 생성자

// 둘은 다르다.
/* function Button(name){
	this.name = name;
}
const b = new Button('tiger'); // 이걸 분리시켜서 나온것이 class이다.

function button(){
	return 'hello'
}
const a = button(); */

// 일반 함수
// - constructor 내장
// - this: 나를 호출한 대상을 this로 찾음

// 화살표 함수
// - coustructor 비내장
// - this: 자체를 바인딩(가지지)않음

const user = {
  total: 0,
  name: '상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  // totalGrades: function () {
  //   console.log('일반 함수 : ', this);

  //   /* 여기서의 this는 나를 호출한 대상이 없다. */
  //   /* function sayHi() {
  //     console.log('sayHi : ', this);
  //   } */
  //   /* 화살표함수에서의 this는 상위의 것을 찾아다쓴다. */
  //   const sayHi = () => {
  //     console.log('sayHi : ', this);
  //   };

  //   sayHi();
  // },
  totalGrades() {
    // constructor 비내장
    this.grades.forEach((item) => (this.total += item));

    return this.total;
  },
};
const result2 = user.totalGrades();
console.log(result2);

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};
console.log(pow(2, 53));

/* let powExpression = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(null)
    .reduce((acc) => {
      return acc * numeric;
    }, 1); // 초기값이 null이다.
}; */
let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1); // 초기값이 null이다.

console.log(powExpression(2, 53));

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }

  return result;
};

// let repeatExpression = (text, repeatCount) => {
//   return Array(repeatCount)
//     .fill(null)
//     .reduce((acc) => {
//       return acc + text;
//     }, '');
// };
let repeatExpression = (text, repeatCount) =>
  Array(repeatCount).fill(text).join('');
// let result = Array(repeatCount).fill(text).toString();
// return result;

console.log(repeat('hello😘', 3));
console.log(repeatExpression('haha😘', 3));

// const obj = {
//   alert: function () {
//     // normal function
//   },
//   alert2: () => {
//     // arrow function
//   },
//   alert3() {
//     // consise method
//   },
// };
