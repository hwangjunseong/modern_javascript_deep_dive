// var ak;
// console.log(ak);
// ak = 1;
// console.log(ak);
// console.log(num1);
// var num1 = 1;
// if (true) {
//   var num1 = 7;
//   //블록 스코프가 지역변수 말하는거
//   //   const num2 = 3; // 블록 스코프 => 블록 안에서 선언이 되었다면 그 밖에선 사용 불가능
//   //   let num3 = 5; // 블록 스코프 => 블록 안에서 선언이 되었다면 그 밖에선 사용 불가능
//   let num3 = 5;
//   const num2 = 3; //초기화 이후 값 못바꿈
//   num3 = 21;
//   //속도 느림
//   console.log(num1 + " x " + num2 + " = " + num3);
//   //template 문자열
//   console.log(`${num1} x ${num2} = ${num3}`);
// }
// // console.log(num1, num2, num3);
// console.log(num1);
// const arr = [1, 2, 3];
// arr.forEach(console.log);

//code runner 단축키 ctrl alt n
//code runner 확장 플러그인은 node.js환경을 사용해 js를 실행한다
//클라이언트 web api인 alert 함수같은거 없는듯
// console.log(score); //undefined
// score = 80; //값 할당
// var score; //변수 선언
// console.log(score); //80

// //camelCase => 변수나 함수이름에 사용
// var firstName;

// //snake case
// var first_name;

// //PascalCase => 생성자 함수, 클래스 함수
// var FirstName;

// //typeHungarianCase
// var strFirstName; //type+식별자
// var $elem = document.getElementById("myid"); //DOM노드
// var observable$ = fromEvent(document, "click"); //RxJs 옵저버블
// console.log(num1);
// var num1 = 1;

// //리터럴 표현식
// 10;
// ("hello");

// //식별자 표현식(선언이 미지 존재한다고 가정)
// su1m;
// person.name;
// arr2[1];

// //연산자 표현식
// 10 + 20;
// sum = 10;
// sum !== 10;
// //함수/메서드 호출 표현식(선언이 미지 존재한다고 가정)
// square();
// person.getName();
// function foo() {
//   return {};
//   //ASI 동작 결과 => return; {};
//   //개발자 예측 => return {};
// }
// console.log(foo()); //undefined

// //표현식이 아닌 문은 값으로 사용불가
// var foo = var x;
// var template = '<ul>\n\t<li><a href="#">home</a></li>\n</ul>';
// console.log(template);
// var template = `<ul>
//     <li><a href="#">home</a></li>
// </ul>`;
// console.log(template);
// var first = "junseong";
// var last = "hwang";
// //es5 문자열 연결
// console.log("my name is " + first + " " + last + ".");
// //es6 표현식 삽입
// console.log(`my name is ${first} ${last} .`);
// var foo = "lee";
// foo = null;

// var key = Symbol("key");
// console.log(typeof key); //symbol
// //객체 생성
// var obj = {};
// //이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용
// obj[key] = "value";
// console.log(obj[key]); //value

// var foo;
// console.log(typeof foo);
// foo = 10;
// console.log(typeof foo);
// foo = "hello";
// console.log(typeof foo);
// foo = true;
// console.log(typeof foo);
// foo = null;
// console.log(typeof foo);
// foo = Symbol();
// console.log(typeof foo);
// foo = {}; ///객체
// console.log(typeof foo);
// foo = []; //배열
// console.log(typeof foo);
// foo = function () {}; //함수
// console.log(typeof foo);

// var x = 10;
// var result = if(x % 2) {result= "odd"}else{result= "even"}
// "CAT" && "DOG";

// //블록문
// {
//   var foo = 10;
// }
// //제어문
// var x = 1;
// if (x < 10) {
//   x++;
// }
// //함수 선어문
// function foo() {
//   return a + b;
// }

// var x = 1;
// if (x < 10) x++;
// else if (x > 10) x--;
// else x += 2;
// var x = 1;
// var result = x % 2 ? "홀수" : "짝수";

// var num = 2;
// //0은 false
// var kind = num ? (num > 0 ? "양수" : "음수") : "0";
// console.log(kind); //양수

// var month = 11;
// var monthName;
// switch (month) {
//   case 1:
//     monthName = "Jan";
//     break;
//   case 2:
//     monthName = "Feb";
//     break;
//   case 3:
//     monthName = "March";
//     break;
//   case 4:
//     monthName = "April";
//     break;
//   case 5:
//     monthName = "May";
//     break;
//   case 6:
//     monthName = "June";
//     break;
//   case 7:
//     monthName = "July";
//     break;
//   case 8:
//     monthName = "August";
//     break;
//   case 9:
//     monthName = "September";
//     break;
//   case 10:
//     monthName = "October";
//     break;
//   case 11:
//     monthName = "Nov";
//     break;
//   case 12:
//     monthName = "December";
//     break;
//   default:
//     monthName = "invaldi month";
// }

//윤년 계산 알고리즘
//1 연도가 4로 나누어떨어지는 해 는 윤년이다
//2. 연도가 4로 나누어 떨어지더라도 연도가 100으로 나누어 떨어지는 해는 평년이다
//3.연도가 400으로 나누어 떨어지는 해는 윤년이다
//2000년은 윤년으로 2월 29일 , 윤년이 아니면 2월 28일임
// var year = 2000;
// var month = 2;
// var days = 0;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;
//   case 2:
//     days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
//     break;
//   default:
//     console.log("invalid month");
// }
// console.log(days);

// for (var i = 0; i < 2; i++) {
//   console.log(i);
// }
// for (;;) {
//   console.log("무한루프");
// }

// var count = 0;
// while (count < 3) {
//   console.log(count++);
// }
// var count = 0;
// do {
//   console.log(count++);
// } while (count < 3);

//foo라는 레이블 식별자가 붙은 레이블 문
// foo: console.log("foo");
// foo: {
//   console.log(1);
//   break foo; //foo라는 레이블 블록문 탈출
//   console.log(2);
// }
// //outer라는 식별자가 붙은 레이블 for문
// outer: for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     //내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문 사용
//     if (i + j === 3) break outer;
//     console.log(`내부 [${i}, ${j}]`);
//   }
// }
// console.log("Done");

// //String.prototype.indexof 메서드
// var string = "Hello, World";
// var search = "l";
// var index;
// //문자열은 유사 배열이기에 for문을 순회 가능
// for (var i = 0; i < string.length; i++) {
//   if (string[i] === search) {
//     index = i;
//     break;
//   }
// }
// console.log(index);
// console.log(string.indexOf(search));

//String.prototype.match와 동일
// var string = "Hello, World";
// var search = "l";
// var count = 0;
// //문자열은 유사 배열이기에 for문을 순회 가능
// for (var i = 0; i < string.length; i++) {
//   if (string[i] !== search) continue;
//   count++;
// }
// console.log(count);
// const regexp = new RegExp(search, "g");
// console.log(regexp);
// console.log(string.match(regexp).length);

// var x = 10;
// var str = x.toString();
// console.log(typeof str, str);
// console.log(typeof x, x);

// var x = 10;
// var str = x + "";
// console.log(typeof str, str);
// console.log(typeof x, x);

// console.log(1 + "2"); //"12"
// console.log(5 * "2"); //"10"
// `1+1 = ${1 + 1}`;
// // console.log(`1+1 = ${1+1}`);
// // console.log(Symbol() + "");

// console.log({} + "");
// console.log(Math + "");
// console.log([] + "");
// console.log([10, 20] + "");
// console.log(function () {} + "");
// console.log(Array + "");

// console.log(1 - "1");
// console.log(1 * "10");
// console.log(1 / "one");
// console.log("1" > 0);

// //문자열 타입
// console.log(+"");
// console.log(+"0");
// console.log(+"1");
// console.log(+"string");
// //불리언 타입
// console.log(+true);
// console.log(+false);

// //nul 타입
// console.log(+null);

// //undefined타입
// console.log(+undefined);

// //Symbol 타입
// // console.log(+Symbol()); //TypeError: Cannot convert a Symbol value to a number
// //객체 타입
// console.log(+{});
// console.log(+[]);
// console.log(+[10, 20]);
// console.log(+function () {});

//빈 문자열, 빈 배여르 null, false는 0으로 true는 1로 변환
//객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 됨
// if ("") console.log(1);
// if (true) console.log(2);
// if (0) console.log(3);
// if ("str") console.log(4);
// if (null) console.log(5);

// function isTruthy(v) {
//   return !!v;
// }
// console.log(isTruthy("0"));
// console.log(isTruthy({}));
// console.log(isTruthy([]));

// //String 생성자 함수 new 연산자 없이
// String(NaN);
// String(Infinity);
// String(true);
// String(false);
// //Object.prototype.toString 메서드
// (1).toString();
// NaN.toString();
// Infinity.toString();
// false.toString();
// true.toString();
// //문자열 연결 연산자 이용
// 1 + "";
// NaN + "";
// Infinity + "";
// true + "";
// false + "";

//Number 생성자 함수 new 연산자 없이
// Number(NaN);
// Number(Infinity);
// Number(true);
// Number(false);
// //parseInt. parseFloat
// parseInt("1");
// parseInt("-1");
// parseFloat("10.53");

// //단항 산술 연산자를 이용하는 방법
// +"0";
// +"-1";
// +"10.53";
// +true; //1
// +false; //0
// //+산술 연산자를 이용하는 방법
// "0" * 1; //0
// "-1" * 1; //-1
// "10.53" * 1; //10,53
// true * 1; //1
// false * 1; //0

// //boolean 생성자 함수를 new 연산자 없이 호출
// Boolean("x"); //true
// Boolean("false"); //true
// Boolean(undefined); //false
// Boolean(NaN); //false
// Boolean(null); //false
// Boolean({}); //true
// Boolean([]); //true
// //!부정 논리 연산자를 두 번 사용하는 방법
// //문자열 타입 => 불리언 타입
// !!"x"; //true
// !!{}; //true
// !![]; //true
// console.log("Cat" && "Dog");

// const o = {};
// o.a = 1;
// console.log(o);
// //객체 내에 변수가 변수 값을 교체 가능
// o.a = 2;
// console.log(o);
// o = { b: 1 }; //재할당은 불가능
// console.log(o);
// var str = "hello"; //str은 hello가 저장된 메모리 공간의 첫 번쨰 메모리 셀 주소 가리킴
// str = "world"; //str은 world가 저장된 메모리 공간의 첫 번쨰 메모리 셀 주소 가리킴

// var str = "string";
// console.log(str[0]);
// console.log(str.length);
// console.log(str.toUpperCase);
// //문자열의 원시 값이라 변경 불가능
// str[0] = "K";
// console.log(str);

// var score = 80;
// var copy = score;
// console.log(copy);
// console.log(score);
// score = 100;
// console.log(copy);
// console.log(score);

// const o = { x: { y: 1 } };
// //얕은 복사
// const c1 = { ...o };
// console.log(c1 === o); //false
// console.log(c1.x === o.x); //true

//lodash의 cloneDeep을 사용한 깊은 복사
//npm install lodash

// const v1 = 1;
// //깊은 복사
// const c1 = v1;
// console.log(c1 === v1); //true
// const o = { x: 1 };
// //얕은 복사
// const c2 = o;
// console.log(c2 === o); //true

// const person = {
//   name: "lee",
// };
// //참조 값을 복사 => 얕은 복사
// //copy와 person은 동일한 참조 값을 갖는다
// var copy = person;
// //copy와 person은 동일한 객체를 참조한다
// console.log(copy === person);

// //copy 통해 객체 변경
// copy.name = "jun";
// //person 통해 객체 변경
// person.name = "hwnag";

// console.log(person);
// //위아래 동일
// console.log(copy);

// const person1 = {
//   name: "lee",
// };
// const person2 = {
//   name: "lee",
// };
// console.log(person1 === person2); //false
// console.log(person1.name === person2.name); //true

// let a = {};
// let b = a; // 참조에 의한 복사

// console.log(a == b); // true, 두 변수는 같은 객체를 참조합니다.
// console.log(a === b); // true

// let user = { name: "John" };

// let admin = user;

// admin.name = "Pete"; // 'admin' 참조 값에 의해 변경됨

// //alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함

// console.log(user === admin); //false =>참조 값 비교
// console.log(user.name === admin.name); //fa

// let admin = user;

// admin.name = "Pete"; // 'admin' 참조 값에 의해 변경됨

// console.log(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함

// console.log(user === admin); //true => 객체의 참조 값 비교
// console.log(user.name === admin.name); //true => 원시 값 비교

// var done = true;
// var message = "";
// if (done) message = "완료";
// //if문은 단축 평가로 대체 가능
// message = done && "완료";
// console.log(message); //"완료"

// var done = false;
// var message = "";
// if (!done) message = "미완료";
// //if문은 단축 평가로 대체 가능
// message = done || "미완료";
// console.log(message); //"미완료"

// var done = true;
// var message = "";
// if (done) message = "완료";
// else message = "미완료";
// console.log(message); //완료
// //if문은 단축 평가로 대체 가능
// message = done ? "완료" : "미완료";
// console.log(message); //"완료"
// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가
// var elem = null;
// // var value = elem.value;
// var value = elem && elem.value; //null

// function getStringLength(str) {
//   str = str || "";
//   return str.length;
// }
// console.log(getStringLength()); //0
// console.log(getStringLength("hi")); //2
// //es6 매개변수 기본설정
// function getStringLength(str = "") {
//   return str.length;
// }
// console.log(getStringLength()); //0
// console.log(getStringLength("hi")); //2

// var elem = null;
//elem이 undefined 또는 null 인경우 undefined를 반환, 그렇지 않으면 우항의 프로퍼티 참조를 이어감
// var value = elem?.value;
// console.log(value); //undefined
// var elem = null;
// var value = elem && elem.value;
// console.log(value); //null

// var str = "";
// //문자열 길이를 참조
// var length = str && str.length;
// //문자열 길이를 참조 못함
// console.log(length); //""

//문자열의 길이를 참조, 좌항 연산자가 false로 평가되는 Falsy 값이라도
//null 또는 undefined가 아니면 우항의 프로퍼티 참조 이어감
// var str = false;
// var length = str?.length;
// console.log(length); //undefined

// var foo = null ?? "default string";
// console.log(foo); //"default string"

//좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환
// var foo = undefined ?? "default string";
// console.log(foo); //undefined
