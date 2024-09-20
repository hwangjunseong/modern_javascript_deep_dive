//js 함수는 일급객체

//1.무명의 리터럴로 생성 가능 => 런타임에 생성 가능
//2. 함수는 변수에 저장 가능
//함수 표현식은 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다
//함수 선언문은 런타임 이전에 자바스크립트의 호이스팅(hoisting)에 의해 평가되고, 함수 객체가 미리 생성
//함수 표현식은 런타임(할당 시점)에 평가되어 함수 객체가 생성
//함수 리터럴에서는 함수 이름 생략 가능

const increase = function (num) {
  return ++num;
};
const decrease = function (num) {
  return --num;
};
//2. 함수는 객체에 저장 가능
const auxs = { increase, decrease };
//3. 함수의 매개변수에 전달 가능
//4. 함수의 반환값으로 사용 가능
function makeCounter(aux) {
  let num = 0;
  //aux는 cb함수
  return function () {
    num = aux(num);
    return num;
  };
}

//3. 함수는 매개변수에게 함수를 전달할 수 있다
//makeCounter는 increase 함수를 사용하는 클로저를 반환
//반환된 클로저는 매번 호출될 때 전역 스코프에서 num을 참조하고,
//그 값을 increase 함수로 넘겨 1씩 증가시킨 후 반환

//클로저(Closure)는 자바스크립트에서 함수가 자신이 선언될 때의 렉시컬 환경(Lexical Environment)을 기억하여,
//그 환경에 있는 변수들에 접근할 수 있는 기능을 말함
//쉽게 말해, 함수가 생성될 때의 스코프를 기억하는 함수
const increaser = makeCounter(auxs.increase);
//함수는 자신이 선언된 렉시컬 스코프를 기억함
//함수가 스코프 밖에서 실행되더라도 , 함수는 자신이 선언된 외부 함수의 변수나 상위 스코프의 변수에 접근할 수 있음
//=> 함수를 반환했는데 num을 여전히 기억하고 있는 이유
//외부 함수의 실행이 끝나도 해당 외부 함수의 변수가 사라지지 않고, 클로저 함수에서 계속 사용 가능
console.log(increaser()); //1
console.log(increaser()); // 2

//3. 함수는 매개변수에게 함수를 전달할 수 있다
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2

function square(number) {
  return number * number;
}
console.dir(square); //[Function: square] =>node.js라 console.log와 동일

// console.log(Object.getOwnPropertyDescriptors(square));
// {
//     length: { value: 1, writable: false, enumerable: false, configurable: true },
//     name: {
//       value: 'square',
//       writable: false,
//       enumerable: false,
//       configurable: true
//     },
//     arguments: {
//       value: null,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     caller: {
//       value: null,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     prototype: { value: {}, writable: true, enumerable: false, configurable: false }
//   }

//__proto__는 square 함수의 프로퍼티가 아님
console.log(Object.getOwnPropertyDescriptor(square, "__proto__")); //undefined

//__proto__는 Object.prototype 객체의 접근자 프로퍼티임

//square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받음
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")); //
// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
//   }

//js는 함수의 매개변수와 인수의 개수가 일치하는지 확인 x
function multiply(x, y) {
  console.log(arguments);
  return x + y;
}
//전달안된 인수는 매개변수에서 undefined으로 됨
console.log(multiply());
// [Arguments] {}
// NaN
console.log(multiply(1));
// [Arguments] { '0': 1 }
// NaN
console.log(multiply(1, 2));
// [Arguments] { '0': 1, '1': 2 }
// 3
console.log(multiply(1, 2, 3));
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 3

function multiplyIter(x, y) {
  //iterator
  const iterator = arguments[Symbol.iterator]();
  //iterator의 next 메서드를 호출하여 iterable 객체 순회
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  return x + y;
}
multiplyIter(1, 2, 3);
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

function sum() {
  let res = 0;
  //arguments 객체는 length 프로퍼티가 있는 유사 배열 객체여서 for 문으로 순회가능
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum()); //0
console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //6

function sumArr() {
  //arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  //reduce는 누적합 반환가능
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sumArr(1, 2)); //3
console.log(sumArr(1, 2, 3, 4, 5)); //15

//es6 rest parameter
function sumArray(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sumArray(1, 2)); //3
console.log(sumArray(1, 2, 3, 4, 5)); //15

//caller 프로퍼티
function foo(func) {
  return func();
}
function bar() {
  return `caller : ` + bar.caller;
}
//브라우저에서 실행한 결과
console.log(foo(bar));
// caller : function foo(func) {
//     return func();
//   }
console.log(bar);
// ƒ bar() {
//     return `caller : ` + bar.caller;
//   }

//length 프로퍼티
function foo1() {}
console.log(foo1.length); //0

function bar1(x) {
  return x;
}
console.log(bar1.length); //1

function baz(x, y) {
  return x + y;
}
console.log(baz.length); //2

//name 프로퍼티
//기명 함수 표현식
var namedFunc = function foo3() {};
console.log(namedFunc.name); //foo3

//익명 함수 표현식
var anonymousFunc = function () {};
// es5에서 name 프로퍼티는 빈 문자열을 값으로 갖음
// es6에서는 함수 객체를 가리키는 식별자를 값으로 갖음
console.log(anonymousFunc.name); //anonymousFunc

//함수 선언문
function bar2() {}
console.log(bar2.name); //bar2

//_ _proto_ _ 접근자 프로퍼티
const obj = { a: 1 };
//객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype
console.log(obj.__proto__ === Object.prototype); //true
//객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받음
//hasOwnProperty 메서드는 Object.prototype의 메서드임
console.log(obj.hasOwnProperty("a")); //true =>인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true 반환
console.log(obj.hasOwnProperty("__proto__")); //false =>상속받은 프로퍼티 키인 경우 false 반환

//prototype 프로퍼티
//함수 객체는 prototype 프로퍼티를 소유함
console.log(function () {}.hasOwnProperty("prototype")); //true

//일반 객체는 prototype 프로퍼티를 소유 x
console.log({}.hasOwnProperty("prototype")); //false
