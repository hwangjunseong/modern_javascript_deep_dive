// function foo() {
//   var x = "local";
//   console.log(x);
//   return x;
// }
// foo();
// // console.log(x); //ReferenceError: x is not defined

// var x = "global";
// function foo() {
//   console.log(x); //undefined
//   var x = "local";
// }
// foo();
// console.log(x); //global

// (function () {
//   var foo = 10;
// })();

// console.log(foo); //ReferenceError: foo is not defined

// var MYAPP = {}; //전역 네임스페이스 객체
// MYAPP.name = "lee";
// console.log(MYAPP.name); //lee

var MYAPP = {}; //전역 네임스페이스 객체
MYAPP.person = {
  name: "lee",
  address: "seoul",
};
console.log(MYAPP.person.name); //lee

var Counter = (function () {
  //private 변수
  var num = 0;

  //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
//private 변수는 외부로 노출되지 않음
console.log(Counter.num); //undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0
