/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); //= 명시적 형 변환
console.log(typeof YEAR + ''); //= 암시적 형 변환

// undefined, null
let days = null;
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width));

let w = window.parseFloat(width); //= 'px' 는 버리고 소수점 숫자만 받아냄
let w2 = window.parseInt(width); //= 소수점까지 버리고 정수만
console.log(w); //= 105.3
console.log(w2); //= 105

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log('----------');
console.log(Boolean(friend)); //=false
console.log(Boolean(bankbook)); //=false
console.log(Boolean(0)); //=false
console.log(Boolean(NaN)); //=false
console.log(Boolean('')); //=false
console.log(Boolean(1)); //=true
console.log(Boolean(0)); //=false

//- 느낌표 1개 (!) 는 부정을 의미. 느낌표 2개 (!!) 는 부정의 부정으로 결국 긍정을 의미.
console.log('암시적 형 변환 :' + !false); //=true
