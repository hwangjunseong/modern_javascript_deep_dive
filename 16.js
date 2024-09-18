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
