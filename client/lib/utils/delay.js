import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//   second.style.top = '100px';
// });

// Promise API
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  /* 원본이 훼손될 수 있기 때문에 복제해서 사용한다. */
  let config = { ...defaultOptions };

  // let { shouldReject, timeout, data, errorMessage } = config;

  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP(3000)
  .then((data) => {
    // console.log(data);
  })

  /* 성공이라고 간주된 PromiseResult라는 객체를 떨궈준다.
    접근하려면 무조건 then을 사용해야 한다.
  */
  // .then((res) => {
  //   console.log(res);
  //   return delayP();
  // })
  // .then((res) => {
  //   console.log(res);
  //   return delayP();
  // })
  // .then((res) => {
  //   console.log(res);
  //   return delayP();
  // })

  /* then은 콜백을 두개 받을 수 있다, 두 번째 인자에는 에러를 받을 수 있다. 
  then 메서드도 빈 프로미스 객체를 반환한다. 그래서 체이닝이 가능하다.
  그리고 다시 사용하기 위해서는 return을 해줘야 한다.
*/
  .catch((err) => console.log(err));

// console.log(delayP(false));

/* -------------------------------------------------------------------------- */
/*                                 async await                                */
/* -------------------------------------------------------------------------- */
// async - 함수가 promise 객체를 반환 하도록
//       - await 사용 -> promise 객체

// await - 코드의 실행 흐름 제어 (멈춤)
//       - result값 가져오기

async function delayA(data) {
  return data;
}

const value = await delayA('이슬기나');

// value.then((res)=>{
//   console.log( res );
// })

// console.log( value );

async function 라면끓이기() {
  const 물 = await delayP({ data: '물' });
  console.log(물);

  const 스프 = await delayP({ data: '스프' });
  console.log(스프);

  const 면 = await delayP({ data: '면' });
  console.log(면);

  const 그릇 = await delayP({ data: '그릇' });
  console.log(그릇);

  // delayP({data:'물'})
  // .then((res)=>{
  //   console.log( res );

  //   return delayP({data:'스프'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'면넣기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'그릇에담기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  // })

  // console.log('물넣기');
  // console.log('스프넣기');
  // console.log('면넣기');
  // console.log('그릇에담기');
}

// 라면끓이기()

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');

  console.log(data);

  insertLast(
    document.body,
    `<img src="${data.sprites['front_default']}" alt="독침붕" />`
  );

  console.log(data.sprites['front_default']);
}

// getData();
