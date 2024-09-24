// function foo() {
//   x = 10;
//   ("use strict");
// }
// foo();
// console.log(x); //10

//즉시 실행 함수의 선두에 strict mode 적용
(function () {
  "use strict";
  //do something
  console.log("local strict");
})();

//함수 단위
(function () {
  //non -strict mode
  var let = 10;
  function foo() {
    "use strict";
    // let = 20; //SyntaxError: Unexpected strict mode reserved word
  }
  foo();
})();

//strict mode가 발생시키는 에러
// (function () {
//   "use strict";
//   x = 1;
//   //   console.log(x); //ReferenceError: x is not defined
// })();

// (function () {
//   "use strict";
//   var x = 1;
//   delete x; //SyntaxError: Delete of an unqualified identifier in strict mode.
//   function foo(a) {
//     delete a; //SyntaxError: Delete of an unqualified identifier in strict mode.
//   }
//   delete foo; //SyntaxError: Delete of an unqualified identifier in strict mode.
// })();

// (function () {
//   "use strict";
//   function foo(x, x) {
//     return x + x;
//   }
//   console.log(foo(1, 2)); //SyntaxError: Duplicate parameter name not allowed in this context
// })();

// (function () {
//   "use strict";
//   //SyntaxError: Strict mode code may not include a with statement
//   with ({ x: 1 }) {
//     console.log(x);
//   }
// });

//strict mode 적용에 의한 변화
(function () {
  "use strict";
  function foo() {
    console.log(this); //undefined
  }
  foo();

  function Foo() {
    console.log(this); //Foo {}
  }
  new Foo();
})();

(function (a) {
  "use strict";
  //매개변수에 전달된 인수를 재할당하여 변경
  a = 2;
  //변경된 인수가 arguments 객체에 반영 안됨
  console.log(arguments); //[Arguments] { '0': 1 }
})(1);
