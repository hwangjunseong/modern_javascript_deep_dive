// let foo = 1; //블록 외부에서 사용 가능
// {
//   console.log(foo);
//   // foo가 정의되지 않는다는 에러가 아닌 초기화되지 않았다는 에러가 발생
//   // Cannot access 'foo' before initialization
//   let foo = 2; //  // foo가 이 블록에서 새로 선언됨
// }

// const arr = [1, 2, 3, 4];

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(arr[i]), 1000);
// }
// undefined undefined undefined undefined

// var add = new Function("x", "y", "return x+y");
// console.log(add(2, 5)); //7

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();
console.log(add1(1, 2)); //13

// var add2 = (function () {
//   var a = 10;
//   return new Function("x", "y", "return x+y+a");
// })();
// console.log(add2(1, 2)); //ReferenceError: a is not defined

// const add = (x, y) => x + y;
// console.log(add(1, 2)); //3

// function add(x, y) {
//   return x + y;
// }
// console.log(add(2)); //NaN

// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 5, 10)); //7

// function add(x, y) {
//   console.log(arguments); //[Arguments] { '0': 2, '1': 5, '2': 10 }
//   return x + y;
// }
// console.log(add(2, 5, 10)); //7

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number")
//     throw new Error("인수는 모두 숫자 값이어야함");
//   return x + y;
// }
// console.log(add(2)); //Error: 인수는 모두 숫자 값이어야함
// console.log(add("a", "b")); //Error: 인수는 모두 숫자 값이어야함

// function add(a, b, c) {
//   a = a || 0;
//   b = b || 0;
//   c = c || 0;

//   return a + b + c;
// }
// console.log(add(1, 2, 3)); //6
// console.log(add(1, 2)); //3
// console.log(add(1)); //1
// console.log(add()); //0

function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}
console.log(add(1, 2, 3)); //6
console.log(add(1, 2)); //3
console.log(add(1)); //1
console.log(add()); //0

function foo() {
  return;
}
console.log(foo()); //undefined

//매개변수 primitive는 원시 값 전달받음, 매개변수 obj는 객체 전달받음
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}
//외부 상태
var num = 100;
var person = { name: "Lee" };
console.log(num); //100

console.log(person); //{ name: 'Lee' }

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달 됨
changeVal(num, person);
//원시 값은 그대로임
console.log(num); //100
//객체는 원본 내용이 바뀌었음
console.log(person); //{ name: 'Kim' }

console.log(
  (function () {
    var a = 3;
    var b = 5;
    return a + b;
  })()
); //8

// (function foo() {
//   var a = 3;
//   var b = 5;
//   return a + b;
// })();
// console.log(foo());
// function (){}();
// function foo(){}();

// (function () {})();
// (function () {})();
// !(function () {})();
// +(function () {})();

var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();
console.log(res); //15
res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(res); //15

function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10);
//재귀 함수 사용
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}
countdown(10);

function factorial(n) {
  //탈출 조건
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(10)); //3628800

//함수 표현식
var factorial = function foo(n) {
  //탈출 조건
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(10)); //3628800

function factorial1(n) {
  //탈출 조건
  if (n <= 1) return 1;
  var res = n;
  while (--n) res *= n;
  return res;
}
console.log(factorial1(10)); //3628800

function outer() {
  var x = 1;
  //중첩 함수
  function inner() {
    var y = 2;
    //외부 함수의 변수 참조 가능
    console.log(x + y);
  }
  inner();
}
outer();

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); //i전달 , f 호출
  }
}
var logAll = function (i) {
  console.log(i); //0 1 2 3 4
};
//반복 호출할 함수 인수로 전달
repeat(5, logAll);
var logOdds = function (i) {
  if (i % 2) console.log(i);
};
repeat(5, logOdds); //1 3

// document.getElementById("myButton").addEventListener("click", function () {
//   console.log("button clicked");
// });
// setTimeout(function () {
//   console.log("1초 경과");
// }, 1000);

//callback함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});
console.log(res); // [2, 4, 6]

//callback 함수를 사용하는 고차 함수 filter
var res = [1, 2, 3].filter(function (item) {
  return item % 2;
});
console.log(res); //[1, 3]
//callback 함수를 사용하는 고차 함수 reduce
var res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(res); //6

var count = 0;
//순수 함수 increase는 동일한 인수가 전달되면 항상 동일한 값을 반환
function increase(n) {
  return ++n;
}
//순수 함수가 반환한 결과값을 변수에 재할당해서 상태 변경
count = increase(count);
console.log(count); //1
count = increase(count);
console.log(count); //2

var count = 0;
//비순수 함수 increase
function increase() {
  return ++count; //함수의 외부 상태에 의존하며 외부 상태를 변경함
}
//비순수 함수는 외부 상태(count)를 변경해서 상태 변화 추적 어려움
increase();
console.log(count); //1
increase();
console.log(count); //2
