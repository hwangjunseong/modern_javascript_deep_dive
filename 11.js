// //변수에 함수 리터럴을 할당
// var f = function add(x, y) {
//   return x + y;
// };
// //함수 선언문
// function add(x, y) {
//   return x + y;
// }
// //함수 표현식
// var add = function add(x, y) {
//   return x + y;
// };
// //Function 생성자 함수
// var f = new Function("x", "y", " return x + y");
// //es6 화살표 함수
// var add = (x, y) => x + y;

// var add = function add(x, y) {
//   return x + y;
// };
// console.log(add(2, 5));

// //기명 함수 리터럴  단독으로 사용하면 함수 선언문으로 해석,
// //함수 선언문에서는 함수 이름 생략 불가
// function foo() {
//   console.log("bar");
// }
// foo(); //bar
// //함수 리터럴을 피연사자로 사용 => 표현식으로 해석함
// //함수 리터럴에서는 함수 이름 생략 가능
// (function bar() {
//   console.log("bar");
// });
// bar(); //ReferenceError: bar is not defined

// var add = function add(x, y) {
//   return x + y;
// };
// console.log(add(2, 5));

// var add = function foo(x, y) {
//   return x + y;
// };
// console.log(add(2, 5)); //7
// console.log(foo(2, 5)); //ReferenceError: foo is not defined

//함수 참조
console.dir(add); //[Function: add]
console.dir(sub); //undefined
//함수 호출
console.log(add(2, 5)); //7
console.log(sub(2, 5)); //TypeError: sub is not a function
//함수 선언문
function add(x, y) {
  return x + y;
}
//함수 표현식
var sub = function (x, y) {
  return x - y;
};
