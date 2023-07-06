/* ------------------ */
/* Variables          */
/* ------------------ */

// * 1번 문제
let admin;
let name = 'John';
admin = name;

// * 2번 문제
const ourPlanetName = 'Earth';
const currentOnlineUserName = 'tiger';

// * 3번 문제

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보

// - Calculate product price by quantity
// - Total sum of purchase product prices
// - number of days per year
// - Whether to pay for the purchase
// - purchase payment history
// - brand prefix
// - Today's horoscope
// - product information

/* variables ----------------------------------------------------------- */
// = 갯수 별 상품 가격 계산
let calcProductPriceQuantity;

// = 구매 제품 가격이 총 합
let totalProductPrice;

// = 1년 기준 일(day) 자 수
const DAYS_PER_YEAR = 365;

// = 구매 결제 내역
let paymentHistory;

// = 구매 결제 여부 (했어, 안 했어 / 있어, 없어)
let isPayment;
let hasClassName;

// = 브랜드 접두사
const BRAND_PREFIX = 'NIKE';

// = 오늘의 운세
let fortuneOfToday;

// = 상품 정보
const productInformation = '';

/* constant variables -------------------------------------------------- */

// redux, recoil, ajax
// > panding 아무것도 안함
// > loading 로딩중, 요청 대기
// > fulfilled, resolved 응답 성공
// > rejected 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'apifulfilled';
const REJECTED = 'api/rejected';
