var x = "global";
function foo() {
  var x = "local";
  console.log(x);
}
foo(); //local
console.log(x); //global

// function foo() {
//   var x = 1;
//   var x = 2;
//   console.log(x); //2
// }
// foo();

// function bar() {
//   let x = 1;
//   //let, const 키워드로 선언된 변수 =>같은 스코프 내에 중복 선언 허용 x
//   let x = 2;
// }
// bar();

// var x = "global x";
// var y = "global y";
// function outer() {
//   var z = "outer's local z";
//   console.log(x); // "global x";
//   console.log(y); //"global y";
//   console.log(z); // "outer's local z";
//   function inner() {
//     var x = "inner's local x";
//     console.log(x); // "inner's local x";
//     console.log(y); //"global y";
//     console.log(z); // "outer's local z";
//   }
//   inner();
// }
// outer();
// console.log(x); //  "global x";
// console.log(z); //ReferenceError z는 정의되지않음

//전역 함수
function foo() {
  console.log("global function foo");
}
function bar() {
  //중첩 함수
  function foo() {
    console.log("local function foo");
  }
  foo(); //local function foo
}
bar();

var x = 1;
if (true) {
  //var 키워드로 선언된 변수는 함수의 코드 블록만을 지역 스코프로 인정함
  //함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역변수
  //x는 전역 변수, 이미 선언된 전역 변수 x가 있어서 x는 중복 선언됨
  //변수 값이 변경됨
  var x = 10;
}
console.log(x); // 10

var i = 0;
for (var i = 0; i < 5; i++) {
  console.log(i); //0 1 2 3 4
}
//값 변경됨
console.log(i); //5

var x = 1;
function foo1() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo1(); //1
bar(); //1
//bar 함수의 상위 스코프가 무엇인지에 따라 결정됨
//1. 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다
//2. 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정한다

console.log("================================");
//전역 함수
function foo() {
  console.log("global function foo");
}
function bar() {
  foo(); //local function foo

  //중첩 함수
  function foo() {
    console.log("local function foo");
  }
  foo(); //local function foo
}
bar();
