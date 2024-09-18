//선언식
// main(); // can hoisting!
// function main() {
//   console.log("can hoisting!");
// }

//표현식
// main(); // Uncaught TypeError: main is not a function
// const main = function () {
//   console.log("can't hoisting!");
// };

class MyClass {
  constructor() {
    this.name = "MyClass";
  }

  method() {
    // 일반 함수에서 this
    setTimeout(function () {
      console.log(this.name); // undefined (this가 setTimeout 함수의 문맥에 바인딩됨)
    }, 100);

    // 화살표 함수에서 this
    setTimeout(() => {
      console.log("arrow", this.name); // "MyClass" (상위 스코프의 this를 참조)
    }, 100);
  }
}

const obj = new MyClass();
obj.method();

// const obj = {
//   document: {
//     title: "Hello World! It's obj.document.title :)",
//   },
//   arrow: () => {
//여기서 this는 전역으로 선언된 global을 가라킴
//     console.log(this.document.title);
//   },
//   delayedFuntionArrow: function () {
//     setTimeout(() => {
//       console.log(this.document.title);
//     }, 1000);
//   },
//   delayedArrowFuntion: () => {//여기서 this는 전역으로 선언된 global을 가라킴
//     setTimeout(function () {
// 일반함수는 현재 위치에서 this를 찾는다
//       console.log(this.document.title);
//     }, 1000);
//   },
// };

// obj.arrow();
// obj.delayedFuntionArrow();
// obj.delayedArrowFuntion();
