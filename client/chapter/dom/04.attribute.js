/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.
//= 비표준 속성은 프로퍼티를 생성시키지 않습니다!

const first = getNode('.first');
console.log(first);
console.dir(first);
console.dir(first.id);

console.log(first.size); // undefined
//> 표준 속성이 아니기 때문에 접근하지 못함.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

console.log(first.hasAttribute('class'));
//> 얘는 표준인지 비표준인지 따지지 않고 속성이 있는지 없는지 여부만을 판단함.
//> true | false 반환됨

console.log(first.getAttribute('id'));
//> first 의 id 인 'message' 출력됨.
//> 표준, 비표준 따지지 않음

first.setAttribute('title', '메세지');
//> first 의 속성이름은 title, 속성 내용은 메세지로 들어감.
//> class 를 세팅하면 원래 클래스명이 사라지고 교체됨. (기존 값을 지워버리기 떄문에 위험함. 잘 쓰지 않음.)

first.removeAttribute('title');
//> 속성이름 title 이었던 속성 지워짐.
//= first.setAttribute9'title', '') 을 사용하면 속성이름인 title 은 남기고 속성값만 지울 수 있음.

console.log(first.attributes);

function getAttrDayeon(node, prop) {
  if (typeof node === 'string' && typeof prop === 'string') {
    node = getNode(node);
    return node.getAttribute(prop);
  } else {
    throw new Error('getAttr 함수의 인수들은 string 타입이어야 합니다.');
  }
}

function setAttrDayeon(node, prop, value) {
  if (typeof node === 'string' && typeof prop === 'string') {
    node = getNode(node);
    node.setAttribute(prop, value);
  } else {
    throw new Error('setAttr 함수의 인수들은 string 타입이어야 합니다.');
  }
}

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.
//= data- 을 붙이면 비표준이지만 읽을 수 있게 됨. data- 를 붙이면 dataset 이라는 프로퍼티 안에 들어가게 됨.

// - elementNode.dataset

console.log(first.dataset); // DOMStringMap {size: '10'}
console.log((first.dataset.animation = 'paused')); //DOMStringMap {size: '10', animation: 'paused'}
