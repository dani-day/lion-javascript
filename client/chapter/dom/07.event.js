/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');

function handler() {
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

// first.onclick = handler;
//> onclick 이 들어가는 것은 지양해주세요.
//> handler 를 여러개 넣을 수는 없습니다. first.onclick = handler2 처럼 한 개를 더 만든다고 해도 무시됨.

// function handleClick() {
//   console.log('이벤트 메서드를 호출합니다.');
// }

// first.addEventListener('click', handleClick);
// first.addEventListener('mousemove', handleClick); //> 마우스가 움직일 때 마다 실행
// first.addEventListener('mouseover', handleClick); //> 마우스 올렸을 때 실행
// first.addEventListener('mouseout', handleClick); //> 마우스 빠져나갔을 때 실행
// first.addEventListener('mousedown', handleClick); //> 마우스 눌렀을 때 실행
// first.addEventListener('mouseup', handleClick); //> 마우스 눌렀다 뗏을 때 실행

// - 이벤트리스너가 메모리 부하를 가져올 수 있기 때문에 remove 가 필요할 때가 있습니다.

// first.addEventListener('click', handleClick);
// setTimeout(() => {
//   first.removeEventListener('click', handleClick);
// }, 3000);
//> setTimeout 은 window 의 API

//> 똑같은 함수를 똑같이 써서 만드네?? 함수로 만들면 좋겠다! -> bindEvents.js

// const remove = bindEvent('.first', 'click', handleClick);
//> bindEvent 함수를 헷갈려하시는 분들이 많으니까 자주 쓰지는 않을게요..!

// * 이벤트 객체 (event object)
// - 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// - 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.

function handleClick(e) {
  // console.log(e.target); // <span class="first">hello</span>
  // console.log(e.offsetX); // 33 (클릭 범위 안에서 어느 좌표에서 클릭했는지 x 좌표만 알려주는 것)
  let x = e.offsetX;
  let y = e.offsetY;
  console.log(x, y);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

const ground = getNode('.ground');
const ball = getNode('#ball');

ground.addEventListener('click', handleClick);
//> 이벤트를 생성하면 브라우저가 자동으로 event 라는 객체를 만들어낸다.
//> 여러가지 정보를 담고 있기 떄문에 우리가 언제든지 그 정보를 가져와서 쓸 수 있는 것.
//> 파라미터기 때문에 보통 e 라고 간단하게 많이 씀.

ground.addEventListener('mousemove', (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
  <div class="emotion" style="top:${y}px; left:${x}px">😍</div>
  `;

  insertLast(ground, template);
});
