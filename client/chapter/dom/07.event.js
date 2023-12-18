/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생!!');
}

// first.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log('클릭했습니다.');
}

// first.addEventListener('click',handleClick);

// getNode('.second').addEventListener('click',()=>{
//   first.removeEventListener('click',handleClick)
// })

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

// const remove = bindEvent('.first','click',handleClick);
// getNode('.second').addEventListener('click',remove);

// first.addEventListener('mousemove',handleClick)
// first.addEventListener('mouseleave',handleClick)

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  // const {offsetX:x,offsetY:y} = e;
  console.log(x, y);
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

// ground.addEventListener('click',handleClickBall)

// 몇초에 한번씩만 호출되도록, 마우스의 움직임이 끝나면 호출되도록

// ground.addEventListener('mousemove',({offsetX:x,offsetY:y})=>{

//   // console.log(x,y);

//   let template = `
//     <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
//   `

//   ground.insertAdjacentHTML('beforeend',template)

// })

// ground.addEventListener('mousemove',debounce(({offsetX:x,offsetY:y})=>{
//     let template = `
//     <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
//   `

//   ground.insertAdjacentHTML('beforeend',template)
// }))

ground.addEventListener(
  'mousemove',
  debounce(() => {
    console.log(this);
  }, 2000)
);

function debounce(callback, limit = 100) {
  let timeout;

  /* 여기서 ...args는 e이다.
  function(e) 해놓고 callback.call(this, e) 해도 된다.*/
  // return function (e) {
  return function (...args) {
    console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // callback.call(this, e);
      callback.apply(this, args);
      // callback.apply(this, arguments);//일반함수이기 때문에 arguments로 받아도된다.
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;

  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

function func(a, b) {
  console.log('this : ', this);
  console.log('A : ', a);
  console.log('B : ', b);
}

// call
func.call({ name: '이경화' }, 1, 2); // 실행
// apply : call과 같지만 매개변수를 배열로 전달해줘야 한다.
func.apply({ name: '이경화' }, [1, 2]); // 실행
// bind

/* 함수는 실행()
   함수 본문 = another() */

// func.call('tiger',1,2)    // 실행, this를 전달해줄수 있다.
// func.apply('tiger',[1,2]) // 실행, call과 다른 점은 배열로 받아야 하는 것

const a = func.bind({ name: '이경화' }, 1, 2);
a();
// call과 같지만 실행 시키지 않음.
// button.addEventListener('click',a)

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?

function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

funcB.apply(funcA, [1, 2, 3]);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
