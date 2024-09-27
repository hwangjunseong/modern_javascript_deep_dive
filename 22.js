const circle = {
  //프로퍼티 : 객체 고유의 상태 데이터
  radius: 5,
  //메서드 : 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    //자신이 속한 객체의 프로퍼티나 다른 메서드 참조하려고
    //자신이 속한 객체인 circle을 참조
    return 2 * circle.radius;
  },
};

console.log(circle.getDiameter());

//생성자 함수 방식으로 인스턴스를 생성하는 경우
//생성자 함수로 인스턴스를 생성하려면 생성자 함수가 존재해야함
//생성자 함수를 정의하는 시점에는 아직 인스턴스 생성 전이라 생성자
//함수가 생성할 인스턴스를 가리키는 식별자를 알 수 없다

//자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자 : this

//객체 리터럴
const circle1 = {
  radius: 5,

  getDiameter() {
    //this가 메서드를 호출한 객체를 가리킴
    return 2 * this.radius;
  },
};
console.log(circle1.getDiameter());

//생성자 함수
function Circle(radius) {
  //this는 생성자 함수가 생성할 인스턴스를 가리킴
  this.radius = radius;
}
Circle.prototype.getDiameter = function () {
  //this는 생성자 함수가 생성할 인스턴스를 가리킴
  return 2 * this.radius;
};
//인스턴스 생성
const circle2 = new Circle(5);
console.log(circle2.getDiameter()); //10

//this는 어디서든 참조 가능
//전역에서 this => 브라우저에선 window, node js에선  global scope에서 사용한다면 this는 {}
//브라우저 가정
console.log(this); //window
function square(number) {
  //일반 함수 내부에서 this는 전역 객체 window 가리킴
  console.log(this); //window
  return number * number;
}
square(2);
const person = {
  name: "John",
  getName() {
    //메서드 내부에서 this는 메서드를 호출한 객체를 가리킴
    console.log(this); //{ name: 'John', getName: [Function: getName] }
    return this.name;
  },
};
console.log(person.getName()); //John
function Person(name) {
  this.name = name;
  //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스 가리킴
  console.log(this); //Person { name: 'Lee' }
}
const me = new Person("Lee");

//this 바인딩은 함수 호출 방식에 따라 동적으로 결정됨
const foo = function () {
  console.dir(this);
};

//동일한 함수도 다양한 방식으로 호출할 수 있음
//1. 일반 함수 호출
//foo 함수 내부의 this는 전역 객체 window를 가리킴(브라우저 가정)
foo(); //window

//2. 메서드 호출
//foo 함수를 프로퍼티 값으로 할당하여 호출
//foo 함수 내부의 this는 메서드를 호출한 객체 obj 가리킴
const obj = { foo };
obj.foo(); //{ foo: [Function: foo] }

//3. 생성자 함수 호출
//foo 함수를 new 연산자와 함께 생성자 함수로 호출
//foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스 가리킴
new foo(); //foo {}

//4.Function.prototype.apply/call/bind 메서드에 의한 간접 호출
//foo 함수 내부의 this는 인수에 의해 결정됨
const bar = { name: "bar" };
foo.call(bar); //{ name: 'bar' }, call: 함수를 즉시 호출하며, 첫 번째 인수로 this 값을 지정
foo.apply(bar); //{ name: 'bar' },  call과 동일하지만, 함수의 인수를 배열로 전달
foo.bind(bar); //bind는 call과 apply와 달리 즉시 함수를 호출하지 않고, 새로운 함수를 반환하는 것이 차이점
foo.bind(bar)(); //{ name: 'bar' }

//일반 함수 호출
//브라우저 가정
function foo2() {
  console.log("foo2", this); //window
  function bar() {
    console.log("bar", this); //window
  }
  bar();
}
foo2();
console.log(10);
//var 키워드로 선언한 전역 변수 전역 객체의 프로퍼티
var value = 1;
//const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티 x
//const value = 2;

//브라우저 가정
const obj2 = {
  value: 100,
  foo() {
    console.log("foo this", this); //foo this { value: 100, foo: [Function: foo] }
    console.log("foo this.value", this.value); //foo this.value 100
    //메서드 내에서 정의한 중첩 함수
    function bar() {
      console.log("bar this", this); //window
      console.log("bar this.value", this.value); //1
    }
    //메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면
    //중첩 함수 내부의 this에는 전역 객체가 바인딩됨
    bar();
  },
};

obj2.foo();

//브라우저 가정
//callback 함수가 일반 함수로 호출된다면 콜 백 함수 내부의 this에도 전역 객체 바인딩
const obj3 = {
  value: 100,
  foo() {
    console.log("foo this", this); //foo this { value: 100, foo: [Function: foo] }
    console.log("foo this.value", this.value); //foo this.value 100
    //콜백 함수 내부의 this에는 전역 객체가 바인딩
    setTimeout(function () {
      console.log("callback this", this); //window
      console.log("callback this.value", this.value); //1
    });
  },
};
obj3.foo();
const obj4 = {
  value: 100,
  foo() {
    //this 바인딩(obj)을 변수 that에 할당한다
    const that = this;
    //콜백 함수 내부에서 this 대신 that을 참조
    setTimeout(function () {
      console.log(that.value); //100
    }, 100);
  },
};
obj4.foo();

const obj5 = {
  value: 100,
  foo() {
    //콜백 함수에 명시적으로 this를 바인딩
    setTimeout(
      function () {
        console.log(this.value); //100
      }.bind(this),
      100
    );
  },
};
obj5.foo();

const objArr = {
  value: 100,
  foo() {
    //화살표 함수 내부의 this는 상위 스코프의 this를 가리킴
    setTimeout(() => {
      console.log(this.value); //100
    }, 100);
  },
};
objArr.foo();
//메서드 호출
const personme = {
  name: "John",
  getName() {
    //메서드 내부의 this는 메서드를 호출한 객체에 바인딩됨
    return this.name;
  },
};
//메서드 getName을 호출한 객체는 personme
console.log(personme.getName()); //John;

const anotherPerson = {
  name: "John",
};
//getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = personme.getName;

//getName 메서드를 호출한 객체는 ansotherPerson
console.log(anotherPerson.getName()); //John

//getName 메서드를 변수에 할당
const getName = personme.getName;

//getName 메서드를 일반 함수로 호출
console.log(getName()); //undefined => node js에서 this는 {}여서
console.log(getName()); //"" 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티
//일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같음

function PersonPro(name) {
  this.name = name;
}
PersonPro.prototype.getName = function () {
  return this.name;
};
const mep = new PersonPro("jun");
//getName 메서드를 호출한 객체는 mep
console.log(mep.getName()); //jun

PersonPro.prototype.name = "Kim";
console.log(PersonPro.prototype.getName()); //Kim
console.log(mep.getName()); //jun

//생성자 함수
function Circle1(radius) {
  //생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스 가리킴
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
//반지름이 5인 Circle 객체 생성
const circle3 = new Circle1(5);
//반지름이 10인 Circle 객체 생성
const circle4 = new Circle1(10);

console.log(circle3.getDiameter()); //10
console.log(circle4.getDiameter()); //20

//일반 함수 호출
const circle5 = Circle1(15);
//일반 함수로 호출된 Circle1에는 반환문 없으면 => 암묵적 undefined 반환
console.log(circle5); //undefined
//일반 함수로 호출된 Circle 내부의 this는 전역 객체 가리킴
console.log(radius); //15

//Function.prototype.apply/call/bind 메서드에 의한 간접 호출
function getThisBinding() {
  return this;
}
//this로 사용할 객체
const thisArg = { a: 1 };
//브라우저 가정
console.log(getThisBinding()); //window
//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩함
console.log(getThisBinding.apply(thisArg)); //{ a: 1 }
console.log(getThisBinding.call(thisArg)); //{ a: 1 }

function getThisBinding1() {
  console.log(arguments);
  return this;
}
//this로 사용할 객체
const thisArg1 = { a: 1 };
//apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다
console.log(getThisBinding1.apply(thisArg, [1, 2, 3]));
//[Arguments] { '0': 1, '1': 2, '2': 3 }
//{ a: 1 }

//call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한
console.log(getThisBinding1.call(thisArg, 1, 2, 3));
//[Arguments] { '0': 1, '1': 2, '2': 3 }
//{ a: 1 }

function convertArgsToArray() {
  //유사배열 arguments
  console.log(arguments);
  //arguments 객체를 배열로 변환
  //Array.prototype.slice를 인수 없이 호출하면 배열의 복사본 생성
  const arr1 = Array.prototype.slice.call(arguments);
  const arr2 = Array.prototype.slice.apply(arguments);
  console.log(arr1, arr2); //[ 1, 2, 3 ] [ 1, 2, 3 ]
  return arr1;
}
convertArgsToArray(1, 2, 3);

//bind 메서드는 첫 번째 인수로 전달한 thisArg로 this 바인딩이
//교체된 getThisBinding 함수를 새롭게 생성해 반환한다
console.log(getThisBinding.bind(thisArg)); //[Function: bound getThisBinding]
console.log(getThisBinding.bind(thisArg)()); //{ a: 1 }

const personb = {
  name: "John",
  foo(callback) {
    //1
    setTimeout(callback, 100);
  },
};

personb.foo(function () {
  //2
  console.log(`hi my name is ${this.name}`);
  console.log(`hi my this is ${this}`);

  //node js라 undefined
});
//foo의 콜백함수가 호출되기 이전인 1의 시점에서 this는 foo 메서드릃 호출한 객체인 personb를 가리킴
//personb.foo의 콜백 함수가 일반 함수로서 호출되는 2의 시전에 this는 전역 객체 window를 가리킴
//node js라면 {}가리킴

const personbb = {
  name: "John",
  foo(callback) {
    //bind 메서드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  },
};

personbb.foo(function () {
  console.log(`hi my name is ${this.name}`); //hi my name is John
});
