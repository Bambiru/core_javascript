/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;
let conversationTool = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {};

for (let key in messenger) {
  cloneObject[key] = messenger[key]; //messenger[key] : value만 주고있다.
}

// 2. Object.assign()을 사용한 복사

// const copyObject = Object.assign({}, messenger);
const copyObject = {};
Object.assign(copyObject, messenger);

// console.log(copyObject);
// copyObject.name = 'line';

// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = { ...messenger }; // 제일 많이 씀 🐶🍯
// console.log(spreadObject);

// 4. 객체를 복사해주는 유틸 함수

// const copydObject = (obj) => ({ ...obj });
// const obj = copydObject(messenger);

/* function copydObject(object) {
  return Object.assign({},object)
}*/
const copydObject = (object) => Object.assign({}, object);
const obj = copydObject(messenger);

// 객체 병합(합성) mixin
/* 객체를 합성해서 사용하는 경우가 많다. */
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let combinedCssMap = { ...cssMapA, ...cssMapB };

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};
/* 얕은 복사 */
let copyedContainerStyles = { ...containerStyles };

const realDeep = cloneDeep(containerStyles);
console.log(realDeep);

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    content: 'application',
    access: '*',
  },
};

function ajax(options) {
  /* 기본값이 있고, 새로운 값이 던져졌을 때, 새로운 값을 mixin해서 사용한다. */
  const { method, body, headers } = {
    ...defaultOptions,
    ...options,
    /* 이 처리를 안해주면 얕은복사가 된다. */
    header: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  console.log(method, body, headers);
}

ajax({
  method: 'POST',
  headers: {
    origin: 'euid',
  },
});

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
