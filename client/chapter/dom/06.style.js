/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
console.log(first.className); // getter
// console.log(first.className = 'box second'); // setter
// console.log(first.className = 'second'); // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active');
console.log(first.classList.contains('hello'));

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; //setter
// console.log(first.style.backgroundColor); //getter
//> 자바스크립트의 프로퍼티를 통해서 스타일링을 하게 되면 가져올 수 있는데, 원래 있는 스타일은 이렇게 가져올 수 없음
//> DOM 에서 생성할 때 스타일링이 완료된 후 값을 가져와야 하는데 그 이전 시점에서 가져와지기 때문.

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).fontSize); //getter
console.log(getComputedStyle(first).getPropertyValue('font-size')); //getter
