/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// * 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments);
  // > 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? arguments
  // > arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구해보자!

  let total = 0;

  //= 1. for 문으로 처리한 경우
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  //   // console.log(arguments[i])
  // }

  //= 2. for..of 문으로 처리하 ㄴ경우
  // for (let key of arguments) {
  //   total += key;
  // }

  //= 3. forEach 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  //= 4. slice 를 빌려써서 배열로 만들기 (얘는 instance method!)
  // let realArray = Array.prototype.slice.call(arguments);
  // console.log(realArray);

  // realArray.forEach(function(item)){
  //   total += item;
  // }

  //= 5. Array.from() (얘는 static method!)
  // let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // Object.prototype.toString(); //* instance method
  // Object.entries; //* static method

  //= 6. spread sytax
  // let arr = [10, 50, 100];

  let realArray = [...arguments];
  // let realArray = [...arguments, ...arr];
  // console.log(realArray);

  // realArray.forEach((item) => {
  //   total += item;
  // });

  //= 7. Array.reduce
  //- forEach 와 다른 점: reduce 는 return 값이 있다는 점

  return realArray.reduce((acc, item) => {
    return acc + item;
  }, 0);

  // return total;
};

const result = calculateTotal(1000, 500, 200, 6500, 100);
// console.log(result);

// * 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// * 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};
//> 보통은 익명 함수식을 많이 사용합니다.

// * 콜백 함수 (표현)식
// let callbackFunctionExpression = function (isActive, success, fail) {
//   // callback();
//   if (isActive) {
//     success();
//   } else {
//     fail();
//   }
// };

// callbackFunctionExpression(
//   true,
//   function () {
//     console.log('성공!');
//   },
//   function () {
//     console.log('실패!');
//   }
// );

// --- callback 함수 다른 예시
const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    // success(url);
  } else {
    // fail();
  }
};

movePage(
  'www.naver.com',
  function (url) {
    console.log('성공. 몇초 뒤 해당 페이지로 이동합니다.');
    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  },
  function () {
    console.log('올바르지 않은 주소입니다.');
  }
);

// * 함수 선언문 vs. 함수 (표현)식

// = 즉시 실행 함수 (표현)식
// = Immediately Invoked Function Expression
let IIFE;

// = 변수의 보호
// = 은닉화 incapsulation (캡슐화)
//> var 를 사용하던 시절에는 블록 안의 변수를 보호하기 위해 함수를 사용했었음.

// 클로저 closure

const MASTER = (function (g) {
  console.log(g);

  var x = 10;
  let uid = 'abcdef';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    },
  };
})(window);

// console.log(x);
console.log(MASTER);
console.log(MASTER.getKey());
console.log(MASTER.setKey('새로운 비밀번호'));
console.log(MASTER.getKey());

//> 소괄호 없이는 사용할 수 없기 때문에 소괄호로 감싸줌. 이러면 함수 탄생!
//> 이렇게 만들면 함수 스코프를 강제로 생성해서 변수들이 영향을 받지 않도록 함.
//> 따라서 console.log(x) 에서 x 를 찍을 수 없음.
//> 변수에 해당 (함수) 를 담으면 함수 안의 return 값이 변수 안에 담김.
