/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//> () => {} 화살표 함수에는 argments 가 없다. 따라서 function(...){ argments }의 기능을 대신하는 (...rest) parameter를 사용해야 한다.
//> 매개변수 밖에서 쓰면 기존의 spread syntax다.
let calcAllMoney = (...args) => {
  // let total = 0;
  // args.forEach((item) => (total += item));

  return args.reduce((acc, item) => acc + item);
};
const result = calcAllMoney(1_000, 500, 200, 2_000);
console.log(result);

// 화살표 함수와 this

// 함수 선언문
function normalFunction() {}

// 함수 표현식
const expressionFunction = function () {};

// 화살표 함수식
const arrowFunction = () => {};
// normalFunction, expressionFunction는 컨스트럭터가 없다. 즉, 함수로써의 기능만 수행한다. 따라서 가볍다.

/* 컨스트럭터란? 
function Button() {}
const a = Button();       // 리턴된 값이 a, 리턴값이 없다면 undefined
const b = new Button();   // new 키워드를 붙이면 b에는 객체가 담긴다.
new 기능을 컨스트럭터에서 지원한다.
즉, new 키워드를 붙여서 객체를 생성하는 생성자 함수가 되거나, 붙이지 않아 일반 함수가 되는데 이를 구분하기가 힘들기 때문에 arrowFunction에서는 컨스트럭터를 지원하지 않는다.
*/

// 객체 안에서 this
// 객체의 메서드을 정의할 때는 화살표 함수보다 일반 함수가 더 좋다? yes
// 메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋다? yes

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log(this);

    this.grades.forEach(function (item) {
      this.total += item;
    });
    console.log(this.total);
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
