function getAttr(node, prop) {
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node 로 변경해 줘야함.!

  // const node = '.first';
  // const prop = 'id';
  // '.first'.getAttribute('id');

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof prop !== 'string') {
    throw new Error('setAttr 함수의 두번째 인수는 string 타입이어야 합니다.');
  }
  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    //> first['animation'] 이 없으면 false 가 되고, ! 로 부정표현하여 true 만듦.
    //> first.class 는 없기 때문에 인자로 class 를 받으면 data-class 로 추가되는 문제를 방지하기 위해 prop !== 'class'  추가함.
    node.dataset[prop] = value;
    return;
  }
  node.setAttribute(prop, value);
}

//* get, set 합쳐진 함수를 만들어보자!
const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
}
