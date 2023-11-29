/* ---------------- */
/* Switch           */
/* ---------------- */

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DAWN;
switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

let message = '';

if (thisTime === MORNING) {
  message = '뉴스 기사 글을 읽는다.';
} else if (thisTime === LUNCH) {
  message = '자주 가는 식당에 가서 식사를 한다.';
} else if (thisTime === DINNER) {
  message = '동네 한바퀴를 조깅한다.';
} else if (thisTime === NIGHT) {
  message = '친구에게 전화를 걸어 수다를 떤다.';
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  message = '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.';
}

console.log(message);

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해서 숫자를 입력받는다 ( 단 0~6까지만 )
// switch case문을 사용해서

// 함수는 하나의 기능만을 수행하는 것

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  switch (num) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

// const today = getDay(getRandom(7));
// console.log(today);

// const today = getDay(+prompt('0부터 6까지의 숫자를 입력해주세요'));

// 요일 뽑아내기 => weekend
function weekend() {
  const today = getDay(getRandom(7));

  // if (today.includes('토') || today.includes('일')) {
  //   return '주말';
  // } else {
  //   return '평일';
  // }

  let day;
  day = today.includes('토')
    ? '토요일'
    : today.includes('일')
    ? '일요일'
    : '평일';

  return day;
}

const todayIs = weekend();
console.log(`${todayIs}입니다`);
