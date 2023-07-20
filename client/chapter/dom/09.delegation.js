/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

// const buttonA = getNode('.a');

// buttonA.addEventListener('click', () => {
//   console.log('hit');
// });

// const container = getNode('.container');

// function handleDelegation(e) {
//   // console.log(this); //> 일반함수일 때는 this === e.currenTarget. 화살표 함수 일 때는 아님니다아
//   // console.log(e.currentTarget); //> 이벤트가 걸린 대상
//   // console.log(e.target); //> 마우스가 처음 만난 대상

//   let target = e.target;

//   let li = target.closest('li');

//   // let className = target.getAttribute('class');
//   let className = attr(li, 'class');
//   // console.log(target.getAttribute('class'));
//   let dataName = attr(li, 'data-name');

//   console.log(className);
// }

// container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */

//* 범썜
const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);
