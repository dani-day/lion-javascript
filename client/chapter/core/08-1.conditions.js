/* ---------------- */
/* Condition        */
/* ---------------- */

if ('') {
  console.log('이 조건은 항상 실행된다.');
} else {
  console.log('조건에 부합하지 않습니다');
}

// let result = prompt('자바스크립트의 공식 이름은 무엇일까요?','').toLocaleLowerCase();

// if (result === 'ecmacript') {
//   console.log('정답입니다');
// } else {
//   console.log('모르셨나요?');
// }

let value = prompt('숫자를 입력하세요', 0);

if (value > 0) {
  console.log(1);
} else if (value < 0) {
  console.log(-1);
} else {
  console.log(0);
}

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');
// 영화 볼거니?

if (!didWatchMovie) {
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');

  if (goingToWatchMovie) {
    let withWho = prompt('누구랑 볼거니?', '');

    if (withWho === '여자친구') {
      console.log('zzz');
    } else if (withWho === '가족') {
      console.log('화목하네');
    } else {
      console.log('재밌게보구와~~~~');
    }
  }
} else {
  let alone = confirm('너 혼자 봤니?');

  if (alone) {
    let didCry = confirm('너 울었니..?');

    if (didCry) {
      console.log('너..찌질했네..');
    } else {
      console.log('너 T야?');
    }
  }
}

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
