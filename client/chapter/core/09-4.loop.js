/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty() {
  //   return '이게 된다고..?';
  // },
};

// * in 문 : 객체 안에 내가 원하는 값 (property) 있어?

const key = 'nickName';
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

Object.prototype.nickName = 'tiger';
// > 진짜 object 의 진짜 능력을 강제로 조종... (이런 코드를 보면 도망치세요 - 범쌤)

// console.log(javaScript.hasOwnProperty(key));
// > in 문을 쓰는 것 보다 정확하게 체크 됨. 내가 그 속성을 가지고 있는지 확인할 수 있는 방법.

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// > 진짜 진짜 Object 의 prototype (원본) 을 call (불러와서) javaScript 에 사용할거라는 뜻

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// > Object.prototype 를 {} 로 작성 가능함.

// - 배열 객체 순환에 사용할 경우?
const tens = [10, 100, 1000, 10000];
for (let key in tens) {
  console.log(tens[key]);
}

// > for ... in 객체를 순환하는 용도로 사용이 가능함.
// > 배열은 좀.. 그래요. 인덱스의 순서가 중요한 array 에서는 사용할 수 없다고 mdn 에도 기술되어있음
