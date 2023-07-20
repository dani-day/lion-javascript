function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두번째 인수는 문자 타입이어야 합니다.'
    );
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (!className) {
    node.className = '';
    return;
  }

  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두번째 인수는 문자 타입이어야 합니다.'
    );
  }
}

function toggleClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두번째 인수는 문자 타입이어야 합니다.'
    );
  }
  return node.classList.toggle(className);
}

// css

function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setCss 함수의 두번재 인자가 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value) throw new SyntaxError('setCss 함수의 세번쨰 인수는 필수값입니다');
  node.style[prop] = value;
}

function getCss(node, prop) {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setCss 함수의 두번재 인자가 유효한 css 속성이 아닙니다.'
    );
  }
  return getComputedStyle(node).getPropertyValue(prop);
}

const arrowCss = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);

function css(node, prop, value) {
  if (!value) {
    return getCss(node, prop);
  } else {
    setCss(node, prop, value);
  }
}
