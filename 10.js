var counter = {
  num: 0, //프로퍼티
  increase: function () {
    //메서드
    this.num++;
  },
};

var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`my name is ${this.name}`);
  },
};
console.log(typeof person); //object
console.log(person); //{ name: 'Lee', sayHello: [Function: sayHello] }

var empty = {};
console.log(typeof empty); //object

var person = {
  firstName: "flask", //식별자 이름 규칙 준수 0
  first_name: "flask", //식별자 이름 규칙 준수 0
  FirstName: "flask", //식별자 이름 규칙 준수 0
  firstNameLan: "flask", //식별자 이름 규칙 준수 0

  "last-name": "django", //식별자 이름 규칙 준수 x
};
console.log(person);
// {
//     firstName: 'flask',
//     first_name: 'flask',
//     FirstName: 'flask',
//     firstNameLan: 'flask',
//     'last-name': 'django'
//   }

var obj = {};

var key = "hello";
obj[key] = "world";
console.log(obj); //{ hello: 'world' }

var foo = {
  "": "",
};
console.log(foo); //{ '': '' }

var foo = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo); //{ '0': 1, '1': 2, '2': 3 }

var foo = {
  var: "",
  function: "",
};
console.log(foo); //{ var: '', function: '' }

var foo = {
  name: "jun",
  name: "hwang",
};
console.log(foo); //{ name: 'hwang' }

var circle = {
  radius: 5,
  getDiameter: function () {
    //메서드
    return 2 * this.radius;
  },
};
console.log(circle.getDiameter()); // 10

var person = {
  name: "jun",
};

//마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); //jun
//대괄호 표기법에 의한 프로퍼티 접근
console.log(person["name"]); //jun
// console.log(person[name]); //ReferenceError: name is not defined

var person = {
  name: "jun",
};
console.log(person.age); //undefined

var person = {
  "last-name": "hwang",
  1: 10,
};
// console.log(person."last-name");//SyntaxError:
// console.log(person.last - name);ReferenceError: name is not defined
// console.log(person[last-name]); //ReferenceError: last_name is not defined
console.log(person["last-name"]); //hwang

// console.log(person.1);//SyntaxError:
// console.log(person."1");//SyntaxError:
console.log(person[1]); //10
console.log(person["1"]); //10

var person = {
  name: "jun",
};
person.name = "hwnag";
console.log(person); //{ name: 'hwnag' }

var person = {
  name: "jun",
};
person.age = 20;
console.log(person); //{ name: 'jun', age: 20 }

var person = {
  name: "jun",
};
person.age = 20;
delete person.age;
console.log(person); //{ name: 'jun' }
delete person.address; // person 객체에 address 프로퍼티 존재 x, 에러 발생 x
console.log(person); //{ name: 'jun' }

// var x = 1,
//   y = 2;

// var obj = {
//   x: x,
//   y: y,
// };
// console.log(obj); //{ x: 1, y: 2 }

let x = 1,
  y = 2;

const obj2 = {
  x,
  y,
};
console.log(obj2); //{ x: 1, y: 2 }

var prefix = "prop";
var i = 0;
var obj = {};
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

const prefix1 = "prop";
let i1 = 0;
const obj1 = {
  [`${prefix1} - ${++i1}`]: i1,
  [`${prefix1} - ${++i1}`]: i1,
  [`${prefix1} - ${++i1}`]: i1,
};

console.log(obj1); //{ 'prop - 1': 1, 'prop - 2': 2, 'prop - 3': 3 }

var obj = {
  name: "jun",
  sayHi: function () {
    console.log("hi " + this.name);
  },
};
obj.sayHi(); //hi jun

const obj3 = {
  name: "jun",
  sayHi() {
    console.log("hi " + this.name);
  },
};
obj.sayHi(); //hi jun
