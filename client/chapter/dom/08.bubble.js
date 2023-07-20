/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
//> 버튼 클릭 후 모달창이 떴을 때, 모달창에 이벤트를 주면 버튼에게 가게 됨.
//> 이걸 막을 때 stopPropagation 을 많이 씀.

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  console.log('%c section', 'color:orange');
});

article.addEventListener('click', () => {
  // e.stopPropagation();
  console.log('%c article', 'color:dodgerblue');
});

p.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('%c p', 'color:hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */
//> 캡처링을 하면 거꾸로 올라옵니다. (section 찍고 article 찍고 p 찍고)

// section.addEventListener(
//   'click',
//   () => {
//     console.log('%c section', 'color:orange');
//   },
//   true
// );

// article.addEventListener(
//   'click',
//   () => {
//     console.log('%c article', 'color:dodgerblue');
//   },
//   true
// );

// p.addEventListener(
//   'click',
//   (e) => {
//     console.log('%c p', 'color:hotpink');
//   },
//   true
// );
