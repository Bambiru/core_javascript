/* ------------------- */
/* Logical Operators   */
/* ------------------- */

// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.
// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.

/* let age = 20;
if (age >= 14 && age <= 90) {
  console.log('환영합니다');
} */

// let a = 10;
// let b = '';
// let value = Boolean(b);

// 논리곱(그리고) 연산자
// let AandB = a && b;
// console.log('AandB', AandB);

// logical AND Assignment 논리곱 할당 연산자
// a &&= b;

// 논리합(또는) 연산자
// let AorB = a || b;
// console.log('AorB', AorB);

// logical AND Assignment 논리합 할당 연산자
// a ||= b;

// 부정 연산자
// let reverseValue = !value;
// console.log('reverseValue', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

function login() {
  let userName = prompt('누구십니까?');

  if (!userName) return;

  //취소 버튼과 ESC 누르면 null
  // 어떤 값도 입력하지 않을경우 빈문자 ''
  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if (password.toLowerCase() === 'themaster') {
      console.log('로그인 성공 환영합니다.');
    } else {
      console.log('잘못 입력하셧습니다');
    }
  } else if (
    userName === null ||
    userName === '' ||
    userName.replace(/\s*/g, '') === ''
    // userName.replaceAll(" ", "")
  ) {
    console.log('취소되었습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다.');
  }
}

login();

// let begin = prompt('Who`s there?');

// if (!begin) {
//   console.log('취소');
// }

// if (begin?.toLowerCase() === 'admin') {
//   let password = prompt('Who`s there?');

// } else {
//   console.log('올바른 사용자가 아닙니다.');
// }
