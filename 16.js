// const o = {};
// o.[[Prototype]] ; //SyntaxError: Unexpected token '['
// console.log(o.__proto__); //[Object: null prototype] {}
// [[Value]], [[Writable]], [[Enumerable]], [[Configurable]];

// const person = {
//   name: "lee",
// };
// //프로퍼티 어트리뷰터 정보를 제공하는 프로퍼티 디스크립터 객체를 반환함
// console.log(Object.getOwnPropertyDescriptor(person, "name")); //{ value: 'lee', writable: true, enumerable: true, configurable: true }

// const person = {
//     name: "lee",
//   };
// //프로퍼티 동적 생성
// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person));
// {
//     name: {
//       value: 'lee',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 20, writable: true, enumerable: true, configurable: true }
//   }

const person = {
  //데이터 프로퍼티
  firstName: "junseong",
  lastName: "Hwang",

  //fullName은 접근자 함수로 구성된 접근자 프로퍼티
  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter함수
  set fullName(name) {
    //배열 비구조화 할당
    [this.firstName, this.lastName] = name.split(" ");
  },
};

//데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person.firstName + " " + person.lastName); //junseong Hwang

//접근자 프로퍼티를 통한 프로퍼티 값 지장
//접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출됨
person.fullName = "issac Lee";
console.log(person); //{ firstName: 'issac', lastName: 'Lee', fullName: [Getter/Setter] }

//접근자 프로퍼티를 통한 프로퍼티 값 참조
//접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
console.log(person.fullName); //issac Lee

// //firstName은 데이터 프로퍼티
// //데이터 프로퍼티가 갖는 프로퍼티 어트리뷰터 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]];
// let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
// console.log(descriptor);
// {
//     value: 'issac',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
// //fullName은 접근자 프로퍼티
// //접근자 프로퍼티가 갖는 프로퍼티 어트리뷰터 [[Get]], [[Set]], [[Enumerable]], [[Configurable]];
// descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
// console.log(descriptor);
// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
// }

//일반 객체의 __proto__는 접근자 프로퍼티
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
// }
//함수 객체의 __proto__는 데이터 프로퍼티
const someFunc = function somefunc() {
  return;
};
console.log(Object.getPrototypeOf(someFunc)); //{} => 프로토타입 체인에서 확인

console.log(Object.getOwnPropertyDescriptor(someFunc, "__proto__")); //undefined

const person1 = {};

//데이터 프로퍼티 정의
Object.defineProperty(person1, "firstName", {
  value: "junseong",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person1, "lastName", {
  value: "Hwang",
});

let descriptor = Object.getOwnPropertyDescriptor(person1, "firstName");
console.log("firstName", descriptor);
// firstName {
//     value: 'junseong',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
//디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값
descriptor = Object.getOwnPropertyDescriptor(person1, "lastName");
console.log("lastName", descriptor);
// lastName {
//     value: 'Hwang',
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

//[[Enumerable]] 값이 false 면 해당 프로퍼티는 for.. in이나 Objects.keys 등으로 열거 불가능
console.log(Object.keys(person1)); //[ 'firstName' ]

//[[Writable]] 값이 false인 경우 해당 프로퍼티의 [[Value]] 값 변경 불가능
//false인데 값을 변경하려하면 에러 발생 x 무시됨
person1.lastName = "Kim";
console.log("lastName", person1.lastName); //lastName Hwang

//[[Configurable]] 값이 false인 경우 해당 프로퍼티를 삭제할수 없음
//false인데 프로퍼티 삭제하면 에러 발생 x, 무시됨
delete person1.lastName;
console.log("lastName", person1.lastName); //lastName Hwang

//[[Configurable]] 값이 false인 경우 해당 프로퍼티를 재정의할 수 없음
// Object.defineProperty(person1, "lastName", {
//   enumerable: true,
// }); //TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person1, "lastName");
console.log("lastName", descriptor);

//접근자 프로퍼티 정의
Object.defineProperty(person1, "fullName", {
  //getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person1, "fullName");
console.log("fullName", descriptor);
// fullName {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: true
// }
//configurable true니까 재정의 가능
person1.fullName = "issac Lee";
console.log(person1); //{ firstName: 'issac', fullName: [Getter/Setter] }

const person2 = {};
Object.defineProperties(person2, {
  //데이터 프로퍼티 정의
  firstName: {
    value: "junseong",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Hwang",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  //접근자 프로퍼티 정의
  fullName: {
    //getter 함수
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    //setter 함수
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});
person.fullName = "issac Lee";
console.log(person); //{ firstName: 'issac', lastName: 'Lee', fullName: [Getter/Setter] }

const person3 = {
  name: "lee",
};

//person3 객체는 확장 가능한 객체임
console.log(Object.isExtensible(person3)); //true
//person3 객체의 확장 금지하기 => 프로퍼티 추가 금지하기
Object.preventExtensions(person3);
console.log(Object.isExtensible(person3)); //false

//프로퍼티 추가 금지
person3.age = 20; //=> strict mode에서는 에러
console.log(person3); //{name : "lee"}

//프로퍼티 추가는 금지이지만 삭제는 가능
delete person3.name;
console.log(person3); //{}

//프로퍼티 정의에 의한 프로퍼티 추가도 금지됨
Object.defineProperty(person, "Age", { value: 30 });
console.log(person3); //{}

const person4 = {
  name: "lee",
};

//person4 객체는 밀봉된 객체가 아님
console.log(Object.isSealed(person4)); //false
//person4객체를 밀봉하여 프로퍼티 추가, 삭제, 재할당 금지
Object.seal(person4);
console.log(Object.isSealed(person4)); //true

//밀봉된 객체는 configurable이 false임
console.log(Object.getOwnPropertyDescriptors(person4));
// {
//     name: {
//       value: 'lee',
//       writable: true,
//       enumerable: true,
//       configurable: false
//     }
// }
//프로퍼티 추가 금지
person4.age = 30; //무시
console.log(person4); //{ name: 'lee' }
//프로퍼티 삭제 금지
delete person4.name; //무시
console.log(person4); //{ name: 'lee' }
//프로퍼티 값 갱신은 가능
person4.name = "Kim";
console.log(person4); //{ name: 'Kim' }

//프로퍼티 어트리뷰터 재정의 불가능
// Object.defineProperty(person4, "name", { configurable: true });
//TypeError: Cannot redefine property: name

const person5 = {
  name: "lee",
};
console.log(Object.isFrozen(person5)); //false
Object.freeze(person5);
console.log(Object.isFrozen(person5)); //true
//동결된 객체는 writable과 configurable이 false
console.log(Object.getOwnPropertyDescriptors(person5));
// {
//     name: {
//       value: 'lee',
//       writable: false,
//       enumerable: true,
//       configurable: false
//     }
//   }
//프로퍼티 추가 금지
person5.age = 20;
console.log(person5); //{ name: 'lee' }

//프로퍼티 삭제 금지
delete person5.name;
console.log(person5); //{ name: 'lee' }

//프로퍼티 값 갱신 금지
person5.name = "Kim";
console.log(person5); //{ name: 'lee' }

//프로퍼티 값 재정의 금지
// Object.defineProperty(person5, "name", { configurable: true });
//TypeError: Cannot redefine property: name

const person6 = {
  name: "lee",
  address: { city: "Seoul" },
};
//얕은 객체 동결
// Object.freeze(person6);
//직속 프로퍼티만 동결됨
console.log(Object.isFrozen(person6)); //true
//중첩 객체는 동결하지 못했음
console.log(Object.isFrozen(person6.address)); //false
// person6.address.city = "Busan";
// console.log(person6); //{ name: 'lee', address: { city: 'Busan' } }

function deepFreeze(target) {
  //객체가 아니거나 동결된 객체는 무시하고 동결되지 않은 객체만 동결함
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    //모든 프로퍼티를 순회하여 재귀적으로 동결함
    //Object.keys는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환
    //forEach 메서드는 배열을 순회하며 배열의 각 요소에 대해 콜백함수 실행
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }

  return target;
}
deepFreeze(person6); //깊은 객체 동결
console.log(Object.isFrozen(person6)); //true
console.log(Object.isFrozen(person6.address)); //true =>중첩 객체까지 동결
person6.address.city = "Busan";
console.log(person6); //{ name: 'lee', address: { city: 'Seoul } }

const person7 = {};

//데이터 프로퍼티 정의
Object.defineProperty(person7, "firstName", {
  value: "junseong",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person7, "lastName", {
  value: "Hwang",
});
//접근자 프로퍼티 정의
Object.defineProperty(person7, "fullName", {
  //getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  //setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person7, "fullName");
console.log("fullName", descriptor);
// fullName {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: true
// }
//configurable true니까 재정의 가능
person7.fullName = "issac Lee";
console.log(person7); //{ firstName: 'issac', fullName: [Getter/Setter] }
console.log(person7.fullName); //issac Hwang
console.log(person7.firstName); //issac
console.log(person7.lastName); //Hwang
