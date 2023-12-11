function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  let gravity = 10;

  return function (value) {
    gravity = value; // earth의 값도 변경해줄 수 있다.
    console.log(gravity, water, apple);
  };
}
const ufo = earth();
// ufo(1);

const button = document.querySelector('button');

/* const handleClick = (() => {
  let isClicked = false; // 전역이 훼손되기때문에 안에 넣어주는 게 좋다.
  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})(); */
/* function handleClick() {
  let isClicked = false; // 전역이 훼손되기때문에 안에 넣어주는 게 좋다.
  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
}

document.querySelector('button').addEventListener('click', handleClick()); // 이벤트 생성 */
function handleClick() {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
}
document.querySelector('button').addEventListener('click', handleClick());

// button.addEventListener('click', handleClick); // 이벤트 생성

/* setTimeout(() => {
  button.removeEventListener('click', handleClick); // 이벤트 제거
}, 3000); */
//한번실행해주는게 중요하다. handleClick()
// handleClick으로 실행시키고 싶을 경우, 즉시실행함수로 사용하자.

/* function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(button, 'click', handleClick);

remove();
 */

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [state, setState] = useState(true);
