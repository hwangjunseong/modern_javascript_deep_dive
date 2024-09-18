// var x = 1;
// var y = 1;
// var x = 100;
// //초기화 문이 없는 변수 선언문은 무시됨
// var y;

// console.log(x); //100
// console.log(y); //1

// var x = 1;
// if (true) {
//   //x : 전역 변수 => 중복  선언됨
//   //의도치 않게 변수값이 변경됨
//   var x = 10;
// }
// console.log(x); //10

// var i = 10;
// for (var i = 0; i < 5; i++) {
//   console.log(i); //0 1 2 3 4
// }
// console.log(i); //5

// //변수 호이스팅에 의해 이미 foo 변수 선언되었음 (1. 선언 단계)
// //변수 foo는 undefined로 초기화됨(2. 초기화 단계)
// console.log(foo); //undefined

// //변수에 값을 할당 (3. 할당 단계)
// foo = 123;

// console.log(foo); // 123
// //변수 선언은 런타임 이전에 js 엔진에 의해 암묵적으로 실행됨
// var foo;

// var foo = 123;
// var foo = 456;
// let bar = 123;
// //let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언 허용 안함
// let bar = 456; //SyntaxError: Identifier 'bar' has already been declared

//전역 변수
// let foo = 1;
// {
//   //지역 변수
//   let foo = 2;
//   let bar = 3;
// }
// console.log(foo); // 1
// console.log(bar); //ReferenceError: bar is not defined

//전역 스코프
let i = 10;
//함수 레벨 스코프
function foo() {
  let i = 100;
  //블록 레벨 스코프
  for (let i = 1; i < 3; i++) {
    console.log(i); // 1 2
  }
  //함수 레벨 스코프
  console.log(i); //100
}
//전역 스코프
foo();
console.log(i); // 10

// console.log(foo1); //ReferenceError: Cannot access 'foo1' before initialization
// let foo1;

//var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행됨
//변수 선언문 이전에 변수 참조 가능
console.log(foovar); //undefined

var foovar;
console.log(foovar); //undefined

foovar = 1;
console.log(foovar); //1

//런타임 이전에 선언 단계가 실행된다. 변수는 아직 초기화되지 않음
//초기화 이전의 일시적 사각지대에서는 변수를 참조 불가능 => 스코프의 시작 지점부터 초기화 시작 지점 전까지
// console.log(foolet); //ReferenceError: Cannot access 'foolet' before initialization

let foolet; //변수 선언문에서 초기화 단계 실행됨
console.log(foolet); //undefined

foolet = 1; //할당문에서 할당 단계 실행
console.log(foolet); //1

// let foolet2 = 1; // 전역 변수
// {
//   console.log(foolet2); //ReferenceError: Cannot access 'foolet2' before initialization
//   let foolet2 = 2; //지역변수
// }

//전역 변수
var x = 1;
//암묵적 전역
y = 2;
//전역 함수
function foo3() {}
// console.log(window.x);
// console.log(window.y);
// console.log(window.foo3);

console.log(globalThis.y); //2

// const foo4; //SyntaxError: Missing initializer in const declaration

// //let과 마찬가지로 블록레벨스코프, 변수 호이스팅이 발생하지 않는 것처럼 동작
// {
//   //   console.log(foo4); //ReferenceError: Cannot access 'foo4' before initialization
//   const foo4 = 1;
//   console.log(foo4);
// }
// //블록 레벨 스코프
// console.log(foo4); //ReferenceError: foo4 is not defined

// const foo5 = 1;
// foo5 = 1; //TypeError: Assignment to constant variable.

//대문자로 선언해서 상수임을 드러냄
const TAX_RATE = 0.1;

//세전 가격
let preTaxPrice = 100;

//세후 가격
// let afterTaxPrice = preTaxPrice * (1 + TAX_RATE);
// console.log(afterTaxPrice); //110.00000000000001
let afterTaxPrice = preTaxPrice + TAX_RATE * preTaxPrice;
console.log(afterTaxPrice); //110

const person = {
  name: "lee",
};
//객체는 변경 가능한 값
person.name = "hwang";
console.log(person); //{ name: 'hwang' }
