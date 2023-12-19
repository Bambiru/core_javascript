import {
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  memo,
} from './lib/index.js';

// [phase - 1 ]
// 1. 주사위 굴리기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation이 실행될 수 있도록

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');
// toggle
let count = 0;
let total = 0;

function createItem(value) {
  const template = /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
`;
  return template;
}

function renderRecordItem() {
  const diceValue = memo('#cube').dataset.dice / 1;

  insertLast('.recordList tbody', createItem(diceValue));
  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      // 실행
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      // 정지
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();
function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}
function handleReset() {
  recordListWrapper.hidden = true;

  clearContents(getNode('tbody'));

  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
