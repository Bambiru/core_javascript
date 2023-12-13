const getAttr = (node, prop) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string')
    throw new TypeError(
      'getAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  return node.getAttribute(prop);
};

// console.log(getAttr('.first', 'class')); // "first"

const setAttr = (node, prop, value) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string' || typeof value !== 'string')
    throw new TypeError(
      'setAttr 함수의 두 번째, 세 번째 인수는 문자 타입이어야 합니다.'
    );
  if (value === '') {
    node.removeAttribute(prop);
    return;
  }
  if (!value)
    throw new Error('setAttr 함수의 세 번째 인수는 필수 입력값입니다.');

  if (prop.startsWith('data')) {
    prop = prop.slice(5);
    node.dataset[prop] = value; // 객체의 키값에 변수가 들어가려면 []컴퓨티드 프로퍼티가 필요하다.
    return; // 함수를 종료시키기 위해서 필요하다.
  }

  node.setAttribute(prop, value);
};

// setAttr('.first', 'class', '');

const attr = (node, prop, value) =>
  value === undefined ? getAttr(node, prop) : setAttr(node, prop, value);

// attr('.first', 'class'); // getter
// attr('.first', 'class', ''); // setter
