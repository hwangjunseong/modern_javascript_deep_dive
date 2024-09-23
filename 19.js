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
function PersonIn(name) {
  this.name = name;
}
const meIn = new PersonIn("lee");
//PersonIn.prototype이 meIn 객체의 프로토타입 체인 상에 존재 => true로 평가됨
console.log(meIn instanceof PersonIn); //true
//Object.prototype이 meIn 객체의 프로토타입 체인 상에 존재 => true로 평가됨
console.log(meIn instanceof Object); //true

//instanceof의 연산자 동작이해를 위해 프로토타입 교체
//프로토타입으로 교체할 객체
const parentIn = {};

//프로토타입의 교체
Object.setPrototypeOf(meIn, parentIn);

//PersonIn 생성자 함수와 parentIn 생성자 객체는 연결되어있지 않음
console.log(PersonIn.prototype === parentIn); //false
console.log(parentIn.constructor === PersonIn); //false

//PersonIn.prototype이 meIn 객체의 프로토타입 체인 상에 존재 안해서 false로 평가됨 => 프로토타입 교체해서
console.log(meIn instanceof PersonIn); //false

//Object.prototype이 meIn 객체의 프로토타입 체인 상에 존재하므로 true로 평가됨
console.log(meIn instanceof Object); //true

//parentIn 객체를 PersonIn 생성자 함수의 prototype 프로퍼티에 바인딩함
PersonIn.prototype = parentIn;
//PersonIn.prototype이 meIn 객체의 프로토타입 체인 상에 존재해서 true로 평가됨
console.log(meIn instanceof PersonIn); //true

//instanceof 함수
function isInstanceof(instance, constructor) {
  //프로토타입 취득
  const prototype = Object.getPrototypeOf(instance);

  //재귀 탈출 조건
  //prototype이 null이면 프로토타입 체인의 종점에 도달한 거
  if (prototype === null) return false;

  //프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true 반환
  //else => 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인함
  return (
    prototype === constructor.prototype || isInstanceof(prototype, constructor)
  );
}
console.log(isInstanceof(meIn, PersonIn)); //true
console.log(isInstanceof(meIn, Object)); //true
console.log(isInstanceof(meIn, Array)); //false

const Person0 = (function () {
  function Person0(name) {
    this.name = name;
  }

  //생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
  Person0.prototype = {
    sayHello() {
      console.log(`hi! my name is ${this.name}`);
    },
  };
  return Person0;
})();
const mei = new Person0("Lee");

// constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도  instanceof는 영항 받지 않음
console.log(mei.constructor === Person0); //false
console.log(mei.constructor === Object); //true

//Person0.prototype이 mei객체의 프로토타입 체인 상에 존재해서 true로 평가됨
console.log(mei instanceof Person0); //true

//Object.prototype이 mei객체의 프로토타입 체인 상에 존재해서 true로 평가됨
console.log(mei instanceof Object); //true

//직접 상속
//프로토타입이 null인 객체 생성. 생성된 객체는 프로토타입 체인의 종점에 위치함
//obj7 -> null
let obj7 = Object.create(null); //두 번째 인수 생략한거
console.log(Object.getPrototypeOf(obj7) === null); //true
//Object.prototype을 상속받지 못함
// console.log(obj7.toString()); //TypeError: obj7.toString is not a function

//obj7 -> Object.prototype -> null (프로토타입 체인 관계)
//obj7은 {}과 동일
obj7 = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj7) === Object.prototype); //true

//obj7 -> Object.prototype -> null
//obj7은 {x: 1}과 동일
obj7 = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
console.log(obj7); //{ x: 1 }
console.log(obj7.x); //1

//데이터 프러퍼티 정의 => 디스크립터
//위 아래 동일
obj7 = Object.create(Object.prototype);
obj7.x = 1;
console.log(obj7); //{ x: 1 }
console.log(obj7.x); //1

console.log(Object.getPrototypeOf(obj7) === Object.prototype); //true

const myProto = { x: 10 };
//임의의 객체를 직접 상속받음
//obj7 -> myProto -> Object.prototype -> null
obj7 = Object.create(myProto);
console.log(obj7); //{}
console.log(obj7.x); //10
console.log(Object.getPrototypeOf(obj7) === myProto); //true

//생성자 함수
function PersonInheri(name) {
  this.name = name;
}

//obj7 -> PersonInheri.prototype -> Object.prototype -> null
//obj7 = new PersonInheri("lee")와 동일
obj7 = Object.create(PersonInheri.prototype);
obj7.name = "lee";
console.log(obj7.name); //lee
console.log(Object.getPrototypeOf(obj7) === PersonInheri.prototype); //true

const objend = { a: 1 };
objend.hasOwnProperty("a"); // true;
// objend.propertyIsEnumberable("a"); //TypeError: objend.propertyIsEnumberable is not a function

//프로토타입이 null인 객체, 프로토타입 체인의 종점에 위치하는 객체 생성
const objEnd1 = Object.create(null);
objEnd1.a = 1;
console.log(Object.getPrototypeOf(objEnd1) === null); //true

//objend는 Object.prototype의 빌트인 메서드 사용 불가
// console.log(objEnd1.hasOwnProperty("a")); //TypeError: objEnd1.hasOwnProperty is not a function

//Object.prototype의 빌트인 메서드는 객체를 직접 호출하지 않음
console.log(Object.prototype.hasOwnProperty.call(objEnd1, "a")); //true

const myPrototype = { x: 10 };
//객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받기 가능
const obj0 = {
  y: 20,
  //객체를 직접 상속받음
  //obj0 -> myPrototype -> Object.prototype -> null
  __proto__: myPrototype,
};
//위 아래 동일
const obj00 = Object.create(myPrototype, {
  y: { value: 20, writable: true, enumerable: true, configurable: true },
});
console.log(obj0.x, obj0.y); //10 , 20
console.log(Object.getPrototypeOf(obj0) === myPrototype); //true

//정적 프로퍼티/메서드
//생성자 함수
function PersonStatic(name) {
  this.name = name;
}
//프로토타입 메서드
PersonStatic.prototype.sayHello = function () {
  console.log(`hi my name is ${this.name}`);
};
//정적 프로퍼티
PersonStatic.staticProp = "static prop";
//정적 메서드
PersonStatic.staticMethod = function () {
  console.log("staticMethod");
};
const meStatic = new PersonStatic("Lee");
//생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출함
PersonStatic.staticMethod(); //staticMethod
//정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출 불가
//인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 함
// meStaic.staticMethod(); //TypeError: meStaic.staticMethod is not a function
meStatic.sayHello(); //hi my name is Lee
console.log(meStatic.staticProp); //undefined

//Object.create는 정적 메서드
const objst = Object.create({ name: "Hwang" });

//Object.prototype.hasOwnProperty는 프로토타입 메서드
console.log(objst.hasOwnProperty("name")); //false

function FooSt() {
  //프로토타입 메서드
  //this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경해도 동일한 효과 얻을 수 있음
  FooSt.prototype.x = function () {
    console.log("x prototype");
  };
}
const fooObj = new FooSt();
//프로토타입 메서드를 호출하려면 인스턴스를 생성해야 함
fooObj.x(); //x prototype

//정적 메서드
FooSt.x = function () {
  console.log("x static");
};

//정적 메서드는 인스턴스를 생성하지 않아도 호출 가능
FooSt.x(); //x static

//프로퍼티 존재 확인
const personin = {
  name: "hwang",
  address: "Seoul",
};
//personin 객체에 name 프로퍼티 존재
console.log("name" in personin); // true

//personin 객체에 address 프로퍼티 존재
console.log("address" in personin); // true
//personin 객체에 age 프로퍼티 존재x
console.log("age" in personin); // false

console.log("toString" in personin); // true

console.log(Reflect.has(personin, "name")); //true
console.log(Reflect.has(personin, "address")); //true

console.log(personin.hasOwnProperty("name")); //true
console.log(personin.hasOwnProperty("address")); //true
console.log(personin.hasOwnProperty("toString")); //false

//프로퍼티 열거

//for... in 문의 변수 key에 personin 객체의 프로퍼티 키가 할당됨
for (const key in personin) {
  console.log(key + ":" + personin[key]);
}
//name:hwang
//address:Seoul

//in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인함
console.log("toString" in personin); //true

//for... in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거함
//toString과 같은 Object.prototype의 프로퍼티는 열거되지 않음
for (const key in personin) {
  console.log(key + ":" + personin[key]);
}

//Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체를 반환함
//프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
// {
//     value: [Function: toString],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }

const personfor = {
  name: "hwang",
  address: "Seoul",
  __proto__: { age: 20 }, //프로토타입 체인에 연결된 객체
};
for (const key in personfor) {
  console.log(key + ":" + personfor[key]);
}
// name:hwang
// address:Seoul
// age:20

//Object.getOwnPropertyDescriptor는 직접 객체에 정의된 속성의 디스크립터만 반환하기 때문에,
//__proto__는 직접 정의된 속성이 아니므로 반환되지 않는다
const protoDescriptor = Object.getOwnPropertyDescriptor(personfor, "__proto__");
console.log(protoDescriptor); // undefined

const protoObject = Object.getPrototypeOf(personfor); // __proto__가 가리키는 객체
console.log(protoObject); // { age: 20 }

const ageDescriptor = Object.getOwnPropertyDescriptor(protoObject, "age");
console.log(ageDescriptor);
// { value: 20, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
//   }

const sym = Symbol();
const objsym = {
  a: 1,
  [sym]: 10,
};
for (const key in objsym) {
  console.log(key + ":" + objsym[key]);
}
//a:1

//상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty 메서드 사용
//객체 자신의 프로퍼티인지 확인
const person11 = {
  name: "hwang",
  address: "Seoul",
  __proto__: { age: 20 }, //프로토타입 체인에 연결된 객체
};
for (const key in person11) {
  //객체 자신의 프로퍼티인지 확인함
  if (!person11.hasOwnProperty(key)) continue;
  console.log(key + ":" + person11[key]);
}
// name:hwang
// address:Seoul

const objnxt = {
  2: 2,
  3: 3,
  1: 1,
  b: "b",
  a: "a",
};
for (const key in objnxt) {
  if (!objnxt.hasOwnProperty(key)) continue;
  console.log(key + ":" + objnxt[key]);
}
// 1:1
// 2:2
// 3:3
// b:b
// a:a

const arrfor = [1, 2, 3];
arrfor.x = 10; //배열도 객체여서 프로퍼티 가질 수 있음, 상속받은 프로퍼티 포함될 수 있음
for (const key in arrfor) {
  //프로퍼티 x도 출력
  console.log(key + ":" + arrfor[key]);
  //   0:1
  //   1:2
  //   2:3
  //   x:10
}
//arrfor.length는 3
for (let i = 0; i < arrfor.length; i++) {
  console.log(arrfor[i]); //1 2 3
}
//forEach 메서드는 요소가 아닌 프로퍼티는 제외함
arrfor.forEach((v) => console.log(v)); //1 2 3

//for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당함
for (const value of arrfor) {
  console.log(value); //1 2 3
}

const person12 = {
  name: "hwang",
  address: "Seoul",
  __proto__: { age: 20 }, //프로토타입 체인에 연결된 객체
};
console.log(Object.keys(person12)); //[ 'name', 'address' ]

console.log(Object.values(person12)); //[ 'hwang', 'Seoul' ]

console.log(Object.entries(person12)); //[ [ 'name', 'hwang' ], [ 'address', 'Seoul' ] ]
Object.entries(person12).forEach(([key, value]) => console.log(key, value));
// name hwang
// address Seoul
