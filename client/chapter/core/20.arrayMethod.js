/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// - Array.isArray
//> 배열의 static method. 배열인지 아닌지 확실하게 알려줌.
//> 함수 안의 밸리데이션 용도로 자주 사용됨.

//- Object.prototype.toString()
//> 그 대상이 어떤 형태를 가지고 있는지를 문자열로 반환해줌.
//> 예: Object.prototype.call([]) ---> 결과: [object Array]
//> 예: Object.prototype.call([]).slice(8, -1) ---> 결과: 'Array'
//> 예: Object.prototype.call([]).slice(8, -1).toLowerCase ---> 결과: 'array'

// = typeof 보다 type 을 정확하게 체크할 수 있는 유틸 함수
// 화살표 함수
const isArray = (data) =>
  Object.prototype.call([]).slice(8, -1).toLowerCase === 'array';

// 일반함수
function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

// 화살표 함수
const isNull = (data) =>
  Object.prototype.call([]).slice(8, -1).toLowerCase === 'null';

// 일반함수
function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

let arr = [10, 100, 1000, 10, 10000];

/* 요소 순환 -------------------------------------------------------------- */

// forEach : 값을 반환하지 않음

// arr.forEach((item,index)=>{
//   // console.log( item );
// })

people.forEach((item) => {
  console.log(item.name);
});

const span = document.querySelectorAll('span');

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();
// console.log(arr);

// splice : 배열의 내용 제거
arr.splice(1, 0, 5, 13);
console.log(arr);

// sort
// - compare function
//> 반환값 < 0 : a 가 b 보다 앞에 있어야 한다.
//> 반환값 == 0 : a 와 b 의 순서를 바꾸지 않는다.
//> 반환값 > 0 : b 가 a 보다 앞에 있어야 한다.

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */
const user = ['선범', '효윤', '준석'];

// concat
const newArray = arr.concat(user);
const newArray2 = [...arr, ...user, 'javascript', 'hi'];
console.log(newArray);
console.log(newArray2);

// slice
const slice = arr.slice(2, 5); // 2번째 부터 5번째 전까지 퉤!
console.log(slice);

// * 2023년에 나온 신상 3개
// toSorted
const toSorted = arr.toSorted((a, b) => {
  return b - a;
});

console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css'); // 2번째 부터, 제거될 갯수 0, javascript, css 추가해줘
console.log(toSpliced);

// map
const job = people.map((item, index) => {
  return `<div>${item.profession}</div>`;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

console.log(job);

// const job2 = people.map((item, index) => {
//   return /* html */ `
//     <div class="userCard">
//       <div class="imageField">
//         <img src="${item.imageSrc}" alt="" />
//       </div>
//       <span>이름:${item.name}</span>
//       <span>직업:${item.profession}</span>
//       <span>나이:${item.age}</span>
//     </div>
//   `;
// });

// job2.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });

// 피플 자료구조에서 나이만 모아놓은 배열이 필요하다. => 가공처리 나이 -1 내보내고 싶다.
const newAge = people.map((item) => {
  return item.age - 1;
});
console.log(newAge);

// function render(){

//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(10)); // 10 이 몇번째에 있는지

// lastIndexOf
console.log(arr.lastIndexOf(10));

// includes
console.log(arr.includes(1000));

/* 요소 찾기 -------------------------------------------------------------- */

// find : 해당 아이템 하나를 반환!
const find = people.find((item) => {
  return item.name === '김희소';
});

console.log(find);

// findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
const filter = people.filter((item) => {
  return item.id > 2;
});

console.log(filter);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

// console.log(totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split
const stringToArray = str.split(' ');
console.log(stringToArray);

// join
const arrayToString = stringToArray.join('/');
console.log(arrayToString);

//map, filter, reduce 제일 많이 씀
