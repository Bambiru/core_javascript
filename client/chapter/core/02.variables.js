/* ------------------ */
/* Variables          */
/* ------------------ */

/*admin과 name이라는 변수를 선언하세요.
name에 값으로 "John"을 할당해 보세요.
name의 값을 admin에 복사해 보세요.
admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.*/
let admin;
let name;
name = 'John';
admin = name;
// console.log(admin);

/*
1.현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
2.웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
*/
const ourPlanetName = 'Earth';
// console.log(ourPlanetName);

const currentOnlineUserName = 'bambi';
// console.log(currentOnlineUserName);

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceByQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 구매 결제 여부
// is, has
let isPayment = false;
let hasCartList = false;

// - 구매 결제 내역
let paymentList;

// - 오늘의 운세
let fortuneOfToday = 'good';



/* constant variables -------------------------------------------------- */
// - 1년 기준 일(day)자 수
const DAY_PER_YEAR = 365;
// - 브랜드 접두사
const BRAND_PREFIX = 'NIKE';
// - 상품 정보
const productInformation = '';


// redux, recoil, jotai, zustand = ajax 비동기통신을 할 때 사용한다.

// - panding 아무것도 안함
// - loading 로딩중, 요청 대기
// - fulfilled, resolved 응답 성공
// - rejected 응답 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';