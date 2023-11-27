/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let days = null;
let weekend;

console.log(typeof (days + ''));
console.log(typeof (weekend + ''));

// boolean

let isClicked = false;
console.log(typeof (isClicked + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));

// null
let money = null;

console.log(Number(money));

// boolean
let cutie = true; // true = 1, false = 0

console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));

//암시적형변환
console.log(typeof +num);
console.log(typeof (num * 1));
console.log(typeof (num / 1));

// numeric string

const width = '105.3px';
//parseInt
console.log(parseInt(width, 10));
//parseFloat
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(''));
