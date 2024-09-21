//이름과 주소 속성을 갖는 객체
const person = {
  name: "jun",
  address: "seoul",
};
console.log(person); //{ name: 'jun', address: 'seoul' }

//반지름은 원의 상태를 나타내는 데이터이며 원의 지름, 둘레 ,넓이를 구하는 것은 동작
const circle = {
  radius: 5, //반지름
  //원의 지름
  getDiameter() {
    return 2 * this.radius;
  },
  //원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
  //원의 넓이
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};
console.log(circle);
// {
//     radius: 5,
//     getDiameter: [Function: getDiameter],
//     getPerimeter: [Function: getPerimeter],
//     getArea: [Function: getArea]
//   }
console.log(circle.getDiameter()); //10
console.log(circle.getPerimeter()); //31.41592653589793
console.log(circle.getArea()); //78.53981633974483

//생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}
//반지름 1인 인스턴스 생성
const circle1 = new Circle(1);

//반지름 2인 인스턴스 생성
const circle2 = new Circle(2);

//Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
//getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유함
//getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 좋음
console.log(circle1.getArea === circle2.getArea); //false
console.log(circle1.getArea()); //3.141592653589793
console.log(circle2.getArea()); //12.566370614359172

//상속을 통해 하나의 메서드 공유
//생성자 함수
function CircleNew(radius) {
  this.radius = radius;
}
//CircleNew 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
//공유해서 사용할 수 있도록 프로토타입에 추가함
//프로토타입은 CircleNew 생성자 함수의 prototype 프로퍼티에 바인딩되어 있음
CircleNew.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};
//인스턴스 생성
//반지름 1인 인스턴스 생성
const circle3 = new CircleNew(1);

//반지름 2인 인스턴스 생성
const circle4 = new CircleNew(2);

//CircleNew 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
//프로토타입 CircleNew.prototype으로부터 getArea 메서드를 상속받음
//CircleNew 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유함
console.log(circle3.getArea === circle4.getArea); //true
console.log(circle3.getArea()); //3.141592653589793
console.log(circle4.getArea()); //12.566370614359172

const obj = {};
const parent = { x: 1 };
//getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
//setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.x); //1

const person1 = { name: "jun" };
//person1 객체는 __proto__ 프로퍼티를 소유하고 있지 않음
console.log(person1.hasOwnProperty("__proto__")); //false

//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
//   }
//모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용 가능
console.log({}.__proto__ === Object.prototype); //true

// const parent1 = {};
// const child1 = {};

// //child1의 프로토타입을 parent1로 설정
// child1.__proto__ = parent1;
// //parent1의 프로토타입을 child1로 설정
// parent1.__proto__ = child1; //TypeError: Cyclic __proto__ value

//objEnd는 프로토타입 체인의 종점임 => Object.prototype을 상속받을 수 없음
const objEnd = Object.create(null);
//objEnd는 Object.prototype을 상속받을 수 없음
console.log(objEnd.__proto__); //undefined

//따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 것이 좋음
console.log(Object.getPrototypeOf(objEnd)); //null

const obj2 = {};
const parent2 = { x: 1 };

//obj2 객체의 프로토타입을 취득
console.log(Object.getPrototypeOf(obj2)); // obj2.__proto__
//{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

//obj2 객체의 프로토타입을 교체
console.log(Object.setPrototypeOf(obj2, parent2)); //obj2.__proto__ = parent2
//}[[Prototype]]: Objectx: 1[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

console.log(obj2.x); //1

//함수 객체는 prototype 프로퍼티를 소유한다 =>prototype 프로퍼티가 생성자 함수가 만든 인스턴스의 프로토타입을 가리킴
console.log(function () {}.hasOwnProperty("prototype")); //true
//일반 객체는 prototype 프로퍼티를 소유하지 않음
console.log({}.hasOwnProperty("prototype")); //false

//화살표 함수는 non-constructor
const Person = (name) => {
  this.name = name;
};
//non-constructor는 prototype 프로퍼티를 소유하지 않음
console.log(Person.hasOwnProperty("prototype")); //false
//non-constructor는 프로토타입을 생성하지 않음
console.log(Person.prototype); //undefined

//es6 메서드 축약 표현으로 정의한 메서드는 non-constructor
const objMethod = {
  foo() {},
};

//non-constructor는 prototype  프로퍼티를 소유안함
console.log(objMethod.hasOwnProperty("prototype")); //false
console.log(objMethod.foo.hasOwnProperty("prototype")); //false
//non-constructor는 프로토타입을 생성하지 않음
console.log(objMethod.foo.prototype); //undefined

//생성자 함수로 객체를 생성한 후 __proto__ 접근자 프로퍼티와 prototype 프로퍼티로 프로토타입 객체에 접근
//생성자 함수
function Person1(name) {
  this.name = name;
}
const me = new Person1("lee");

//Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다
console.log(Person1.prototype === me.__proto__); //true

//생성자 함수
function Person2(name) {
  this.name = name;
}

const me2 = new Person2("jun");
//me2 객체의 생성자 함수는 Person2
console.log(me2.constructor === Person2); //true

//obj3 객체를 생성한 생성자 함수는 Object임
const obj3 = new Object();
console.log(obj3.constructor === Object); //true

//add 함수 객체를 생성한 생성자 함수는 Function
const add = new Function("a", "b", "return a+b");
console.log(add.constructor === Function); //true

//생성자 함수
function Person3(name) {
  this.name = name;
}
//me3 객체를 생성한 생성자 함수는 Person3
const me3 = new Person3("Hwang");
console.log(me3.constructor === Person3); //true

//객체 리터럴
const obj4 = {};

//함수 리터럴
const add4 = function (a, b) {
  return a + b;
};

//배열 리터럴
const arr = [1, 2, 3];

//정규 표현식 리터럴
const regexp = /is/gi;

//obj5 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성한 객체
const obj5 = {};

//obj5 객체의 생성자 함수는 Object 생성자 함수
console.log(obj5.constructor === Object);

//2.Object 생성자 함수에 의한 객체 생성
//슈도 코드에 나온 것처럼 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다
let obj6 = new Object();
console.log(obj);

//1. new.target이 undefined이거나 Object가 아닌 경우 => new 연산자 사용 x면 undefined 됨
//프로토타입 체인 생성 : 인스턴스 -> Foo.prototype -> Object.prototype 순
class Foo extends Object {}
new Foo(); //Foo {}

//3. 인수가 전달된 경우에는 인수를 객체로 변환함
//Number 객체 생성
obj6 = new Object(123);
console.log(obj6); //Number {123} //[Number: 123]

//String 객체 생성
obj6 = new Object("123");
console.log(obj6); //String {"123"} //[String: '123']

//fooj 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했음
function fooj() {}

//하지만 constructor 프로퍼티를 통해 확인해보면 fooj의 생성자 함수는 Function 생성자 함수임
console.log(fooj.constructor === Function); //true

//(constructor)함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성됨
console.log(Person4.prototype); //{}constructor: ƒ Person4(name)[[Prototype]]: Object

//생성자 함수
function Person4(name) {
  this.anem = name;
}

//생성자 함수로서 호출할 수 없는 함수인 non-constructor는 프로토타입이 생성되지 않는다
//화살표 함수는  non-constructor
const PersonArrow = (name) => {
  this.name = name;
};
// non-constructor는 프로토타입이 생성되지 않는다
console.log(PersonArrow.prototype); //undefined

// console.log(global.Object === Object); //true => 서버사이드 환경(node.js 환경)
// console.log(Window.Object === Object); //true => 브라우저 환경

const objLi = { x: 1 };
//객체 리터럴에 의해 생성된 objLi 객체는 Object.prototype을 상속받음
console.log(objLi.constructor === Object); //true
console.log(objLi.hasOwnProperty("x")); //true

const objConstruct = new Object();
objConstruct.x = 1;
//Object 생성자 함수에 의해 생성된 objConstruct 객체는 Object.prototype 상속받음
console.log(objConstruct.constructor === Object); //true
console.log(objConstruct.hasOwnProperty("x")); //true

// function PersonNew(name) {
//   this.name = name;
// }
// const me4 = new PersonNew("Lee");

function PersonNew(name) {
  this.name = name;
}
//프로토타입 메서드
PersonNew.prototype.sayHello = function () {
  console.log(`hi my name is ${this.name}`);
};

const me5 = new PersonNew("Lee");
const you = new PersonNew("Hwang");

me5.sayHello(); //hi my name is Lee
you.sayHello(); //hi my name is Hwang

//프로토타입 체인
function PersonChain(name) {
  this.name = name;
}
//프로토타입 메서드
PersonChain.prototype.sayHello = function () {
  console.log(`hi my name is ${this.name}`);
};

const me6 = new PersonChain("Lee");
//hasOwnProperty는 Object.prototype의 메서드
console.log(me6.hasOwnProperty("name")); //true
//me6 객체는 Object.prototype의 메서드인 HASOwnProperty 호출가능 =>
//me6 객체는 PersonChain.prototyp과 Object.prototypE를 상속받음
//me6 객체의 프로토타입은 PersonChain.prototype임
console.log(Object.getPrototypeOf(me6) === PersonChain.prototype); //true
console.log(Object.getPrototypeOf(PersonChain.prototype) === Object.prototype); //TRUE

//Object.prototype.hasOwnProperty 메서드의 this에는 me6객체가 바인딩됨
console.log(Object.prototype.hasOwnProperty.call(me6, "name")); //true

console.log(Object.getPrototypeOf(Object.prototype) === null); //true

console.log(me6.foo); //undefined

console.log(me6.hasOwnProperty("name")); //true => 스코프 체인에서 me6 식별자를 검색함

//오버라이딩과 프로퍼티 섀도잉
const Person5 = (function () {
  //생성자 함수
  function Person5(name) {
    this.name = name;
  }
  //프로토타입 메서드
  Person5.prototype.sayHello = function () {
    console.log(`hi my name is ${this.name}`);
  };
  //생성자 함수 반환
  return Person5;
})(); //즉시 실행 함수
const me7 = new Person5("Lee");
me7.sayHello(); //hi my name is Person5

//인스턴스 메서드
me7.sayHello = function () {
  console.log(`hey!! my name is ${this.name}`);
};
//인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려짐 => 오버라이딩
me7.sayHello(); //hey!! my name is Person5

//프로퍼티를 삭제하는 경우

//인스턴스 메서드를 삭제
delete me7.sayHello;
//인스턴스 메서드 없으니 프로토타입 메서드 호출됨
me7.sayHello(); //hi my name is Lee

//프로토타입 체인을 따라 프로토타입 메서드가 삭제되지 않음
delete me7.sayHello;
//프로토타입 메서드가 호출됨
me7.sayHello(); //hi my name is Lee

//프로토타입 메서드 변경
Person5.prototype.sayHello = function () {
  console.log(`hey!! my name is ${this.name}`);
};
me7.sayHello(); //hey!! my name is Lee

//프로토타입 메서드 삭제
delete Person5.prototype.sayHello;
// me7.sayHello(); //TypeError: me7.sayHello is not a function

//프로토타입의 교체
const Person6 = (function () {
  //생성자 함수
  function Person6(name) {
    this.name = name;
  }
  //생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
  Person6.prototype = {
    sayHello() {
      console.log(`hi my name is ${this.name}`);
    },
  };

  //생성자 함수 반환
  return Person6;
})(); //즉시 실행 함수
const me8 = new Person6("Lee");

//프로토타입을을 교체해서 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
console.log(me8.constructor === Person6); //false
//프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색됨
console.log(me8.constructor === Object); //true
console.log(15);
console.log(Person6.prototype); //{ sayHello: [Function: sayHello] }
// 프로토타입으로 교체한 객체 리터럴에는 constructor 프로퍼티 없음
// constructor 프로퍼티는 js 엔진이 프로토타입을 생성할 때 암묵적으로 추가한 프러퍼티

//프로토타입으로 교체한 객체 리터럴에 constructor 프로퍼티를 추가혀여 프로토타입의 constructor 프로퍼티를 되살림
const Person7 = (function () {
  //생성자 함수
  function Person7(name) {
    this.name = name;
  }
  //생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
  Person7.prototype = {
    //constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person7,
    sayHello() {
      console.log(`hi my name is ${this.name}`);
    },
  };

  //생성자 함수 반환
  return Person7;
})(); //즉시 실행 함수
const me9 = new Person7("Lee");
//constructor 프로퍼티가 생성자 함수를 가리킴
console.log(me9.constructor === Person7); //true
console.log(me9.constructor === Object); //false

//인스턴스에 의한 프로토타입 교체

function Person8(name) {
  this.name = name;
}
const me0 = new Person8("Hwang");

//프로토타입으로 교체할 객체
const parent0 = {
  sayHello() {
    console.log(`hi my name is ${this.name}`);
  },
};
//me0 객체의 프로토타입을 parent0 객체로 교체
Object.setPrototypeOf(me0, parent0);
//아래와 동일
//me0.__proto__ = parent0;
me0.sayHello(); //hi my name is Hwang

//프로토타입 교체해서 constructor 프로퍼티와 생성자 함수 간의 연결 파괴됨
console.log(me0.constructor === Person8); //false
//프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색됨
console.log(me0.constructor === Object); //true

//되살리기
function Person9(name) {
  this.name = name;
}
const me1 = new Person9("Hwang");

//프로토타입으로 교체할 객체
const parent3 = {
  //constructor 프로퍼티와 생성자 함수 간의 연결을 설정
  constructor: Person9,

  sayHello() {
    console.log(`hi my name is ${this.name}`);
  },
};

//생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person9.prototype = parent3;

//me1 객체의 프로토타입을 parent3 객체로 교체
Object.setPrototypeOf(me1, parent3);
//me1.__proto__ = parent3;
me1.sayHello(); //hi my name is Hwang

//constructor 프로퍼티가 생성자 함수를 가리킴
console.log(me1.constructor === Person9); //true
console.log(me1.constructor === Object); //false

//생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킴
console.log(Person9.prototype === Object.getPrototypeOf(me1)); //true

//instanceof 연산자
