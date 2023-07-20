/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case '아침':
    alert('뉴스 기사 글을 읽는다.');
    break;
  case '점심':
    alert('자주 가는 식당에 가서 식사를 한다.');
    break;
  case '저녁':
    alert('동네 한바퀴를 조깅한다.');
    break;
  case '밤':
    alert('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case '심야':
  case '새벽':
    alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

let time;
if (time === '아침') {
  alert('뉴스 기사 글을 읽는다.');
} else if (time === '점심') {
  alert('자주 가는 식당에 가서 식사를 한다.');
} else if (time === '저녁') {
  alert('동네 한바퀴를 조깅한다.');
} else if (time === '밤') {
  alert('친구에게 전화를 걸어 수다를 떤다.');
} else if (time === '심야' || time === '새벽') {
  alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
// 0 = '일'
// 1 = '월'
// 2 = '화'
// 3 = '수'
// 4 = '목'
// 5 = '금'
// 6 = '토'

const day = Math.floor(Math.random() * 7);

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
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

// const day = getDay(getRandom(7));
console.log(day);

function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));

  // = includes 를 활용한 예시
  today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
  // > today 에 토 라는 글자가 있어? 그럼 토요일 반환해. 일 있어? 일요일 반환해. 다 아니야? 평일 반환해.

  // = 아래의 if 문 줄이기
  // return today === '토' || today === '일';

  // = if 문
  // if(today === '토' || today === '일'){
  //   return true;
  // }else{
  //   return false;
  // }
}

/* switch vs. if -------------------------------------------------------- */
