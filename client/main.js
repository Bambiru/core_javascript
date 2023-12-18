/* 모듈 프로그래밍 */
// name export (이름 내보내기)=> {이름}
// default export (기본 내보내기)=> 이름
// import { getNode } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import clearContents from './lib/dom/clear.js';
import { getNode, clearContents, insertLast } from './lib/index.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

//1. input value 값 가져오기

function handleInput() {
  const firstValue = +first.value;
  const secondValue = +second.value;
  const total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
//2. 두 수의 합 더하기
//3. 합계 랜더링 하기
