// //빈 객체 생성
// const person = new Object();
// //프로퍼티 추가
// person.name = "lee";
// person.sayHello = function () {
//   console.log(`hi my name is ` + this.name);
// };
// console.log(person); //{ name: 'lee', sayHello: [Function (anonymous)] }
// person.sayHello(); //hi my name is lee
// //(Object, String ,Number, Boolean, Function, Array, Date, RegExp, Promise)
// const strObj = new String("lee");
// console.log(typeof strObj); //object
// console.log(strObj); //[String: 'lee']

// const numObj = new Number(123);
// console.log(typeof numObj); //object
// console.log(numObj); //[Number: 123]

// const boolObj = new Boolean(true);
// console.log(typeof boolObj); //object
// console.log(boolObj); //[Boolean: true]

// const func = new Function("X", "return x+x");
// console.log(typeof func); //function
// console.dir(func); //[Function: anonymous]

// const arr = new Array(1, 2, 3);
// console.log(typeof arr); //object
// console.dir(arr); //[ 1, 2, 3 ]

// //RegExp 생성자 함수에 의한 정규 표현식 생성
// const regExp = new RegExp(/ab+c/i);
// console.log(typeof regExp); //object
// console.log(regExp); ///ab+c/i

// const date = new Date();
// console.log(typeof date); //object
// console.log(date); //2024-09-18T08:01:43.891Z

// const circle1 = {
//   radius: 5,
//   getDiameter() {
//     return 2 * this.radius;
//   },
// };
// const circle2 = {
//   radius: 10,
//   getDiameter() {
//     return 2 * this.radius;
//   },
// };
// console.log(circle2.getDiameter()); //20

//생성자 함수
function Circle(radius) {
  //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
//인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); //10
console.log(circle2.getDiameter()); //20

//함수는 다양한 방식으로 호출됨
function foo() {
  console.log(this);
}

//일반 함수 호출
//전역 객체 => node.js는 global, 브라우저는 window
foo();
{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
} */
}

//es6 프로퍼티 축약 표현
const obj = { foo };

//메서드로서 호출
obj.foo(); //{ foo: [Function: foo] }

//생성자 함수로서 호출
const inst = new foo(); //foo {}

//일반 함수로서 호출
const circle3 = Circle(15);
//일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환함
console.log(circle3); //undefined
//일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킴
console.log(radius); //15

const circle4 = Circle(20);
console.log(radius); //20

//생성자 함수
function Circle(radius) {
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
//인스턴스 생성
const circle5 = new Circle(15);

//생성자 함수
function Circle(radius) {
  //암묵적으로 인스턴스가 생성되고 this에 바인딩된다 => 런타임 이전에
  console.log(this); //Circle {}
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle6 = new Circle(15);
console.log(circle6); //Circle { radius: 15, getDiameter: [Function (anonymous)] }

// //생성자 함수
// function Circle(radius) {
//   //. /암묵적으로 인스턴스가 생성되고 this에 바인딩된다 => 런타임 이전에
//   console.log(this); //Circle {}
//   //2. 인스턴스 초기화 => this에 바인딩되어 있는 인스턴스를 초기화함
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
//   //3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환함

//   //명시적으로 객체를 반환하면 암묵적인 this 반환 무시됨
//   return {};
// }

// //인스턴스 생성 => Circle 생성자 함수는 암묵적으로 this를 반환함
// const circle7 = new Circle(15);
// console.log(circle7); //{}

//생성자 함수
function Circle(radius) {
  //. /암묵적으로 인스턴스가 생성되고 this에 바인딩된다 => 런타임 이전에
  console.log(this); //Circle {}
  //2. 인스턴스 초기화 => this에 바인딩되어 있는 인스턴스를 초기화함
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  //3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환함

  //명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가  반환됨
  return 100;
}

//인스턴스 생성 => Circle 생성자 함수는 암묵적으로 this를 반환함
const circle8 = new Circle(15);
console.log(circle8); //Circle { radius: 15, getDiameter: [Function (anonymous)] }

//함수는 객체임
function foo2() {}

//함수는 객체이므로 프로퍼티를 소유할 수 있음
foo2.prop = 10;
//함수는 객체이므로 메서드를 소유할 수 있음
foo2.method = function () {
  console.log(this.prop);
};
foo2.method(); //10

function foo3() {}
//일반 함수 호출 => [[Call]]이 호출됨
foo3();
//생성자 함수로서 호출 => [[Construct]]가 호출됨
new foo3();

//일반 함수 정의: 함수 선언문, 함수 표현식
function foo4() {}
const bar = function () {};
//프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수
//메서드로 인정 안됨
const baz = {
  x: function () {},
};
//일반 함수로 정의된 함수만이 constructor임
new foo4(); //foo4{}
new bar(); //bar{}
new baz.x(); // x{}
//화살표 함수 정의
const arrow = () => {};
// new arrow(); //TypeError: arrow is not a constructor
//메서드 정의 : es6 메서드 축약 표현만 메서드로 인정함
const obj4 = {
  x() {},
};
// new obj4.x(); //TypeError: obj4.x is not a constructor

function foo5() {}
//일반 함수로서 호출 => [[Call]]이 호출됨 모든 함수 객체가 가지고 있음
foo5();

//생성자 함수로서 호출
//[[Construct]]가 호출 [[Construct]]를 갖지 않는다면 에러 발생
new foo5();

//생성자 함수로서 정의되지 않은 일반 함수
function add(x, y) {
  return x + y;
}
//생성자 함수로서 정의하지 않은 일반 함수 new 연산자와 함께 호출
let insts = new add();

//함수가 객체를 반환하지 않았으므로 반환문이 무시됨
//빈 객체가 생성되어 반환됨
console.log(insts); //{}

//객체를 반환하는 일반 함수
function createUser(name, role) {
  return { name, role };
}
//일반 함수를 new 연산자와 함께 호출
insts = new createUser("lee", "admin");
//함수가 생성한 객체를 반환함
console.log(insts); //{ name: 'lee', role: 'admin' }

//생성자 함수
function Circle(radius) {
  //암묵적으로 인스턴스가 생성되고 this에 바인딩된다 => 런타임 이전에
  console.log(this); //Circle {}
  //인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  //함수가 명시적으로 return 값을 가지지 않으면 기본적으로 undefined를 반환
}
//new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다
const circle9 = Circle(5);
console.log(circle9); //undefined

//일반 함수 내부의 this는 전역 객체를 가리킴
console.log(radius); // 5
console.log(getDiameter()); //10

// circle9.getDiameter(); //TypeError: Cannot read properties of undefined (reading 'getDiameter')

function Circle1(radius) {
  //이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined
  if (!new.target) {
    //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환함
    return new Circle1(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
//new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호츨된다
const circle10 = Circle1(5);
console.log(circle10.getDiameter()); //10

function Circle2(radius) {
  //생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
  //this에 바인딩함. 이떄 this와 Circle2는 프로토타입에 의해 연결됨

  //이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체를 가리킴
  //즉 this와 Circle2는 프로토타입에 의해 연결되지 않음
  if (!(this instanceof Circle2)) {
    //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환함
    return new Circle1(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
//new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호츨된다
const circle11 = Circle2(5);
console.log(circle11.getDiameter()); //10

let obj3 = new Object();
console.log(obj3); //{}
obj3 = Object();
console.log(obj3); //{}

let f = new Function("x", "return x**x");
console.log(f); //[Function: anonymous]

f = Function("x", "return x**x");
console.log(f); //[Function: anonymous]

const str = String(123);
console.log(str, typeof str); //123 string

const num = Number(123);
console.log(num, typeof num); //123 number

const bool = Boolean("true");
console.log(bool, typeof bool); //true boolean
