const strObj = new String("Hwang");
console.log(Object.getPrototypeOf(strObj) === String.prototype); //true

const numObj = new Number(1.5);
//toFixed는 Number.prototype의 프로토타입 메서드
//Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환
console.log(numObj.toFixed()); //2

//isInteger은 Number의 정적 메서드
//Number.isInteger는 인수가 정수인지 검사하여 결과를 Boolean으로 반환
console.log(Number.isInteger(0.5)); //false

//원시 값과 래퍼 객체
const str = "hello";
//원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작
console.log(str.length); //5
console.log(str.toUpperCase()); //HELLO

const str1 = "hi";
//원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환됨
console.log(str1.length); //2
console.log(str1.toUpperCase()); //HI
//래퍼 객체로 프로퍼티에 접근, 메서드 호출 후 다시 원시값으로 되돌림
console.log(typeof str1); //string

//1.식별자 str2는 문자열을 값으로 가짐
const str2 = "hello";
//2.식별자 str2는 암묵적으로 생성된 래퍼 객체를 가리킴
//식별자 str2의 값 "hello"는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당됨
//래퍼 객체에 name 프로퍼티 동적 추가
str2.name = "Lee";

//3.식별자 str2는 다시 원래의 문자열 , 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다
//2에서 생성한 래퍼 객체는 아무도 참조하지 않는 상태여서 가비지 컬렉션의 대상이 됨

//4. 식별자 str2는 새롭게 암묵적으로 생성된(2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다
console.log(str2.name); //undefined

//5. 식별자 str2는 다시 원래의 문자열 , 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다
//4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태여서 가비지 컬렉션 대상
console.log(typeof str2, str2); //string hello

const num = 1.5;
//원시 타입인 숫자가 래퍼 객체인 Number 객체로 변환됨
console.log(num.toFixed()); //2

//래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌림
console.log(typeof num, num); //number 1.5

//전역 객체
console.log(globalThis === this); //false =>
//모듈 시스템이 도입된 이후 Node.js의 전역 스코프에서 `this`는 모듈 자체를 가리킴.
//즉, Node.js에서 `this`는 파일의 `module.exports`를 참조
console.log(globalThis === global); //true
console.log(this === module.exports); // true
console.log(this); //{}
// //문자열 F를 16진수로 해석하여 10진수로 변환하여 반환
// //브라우저에서
// window.parseInt("F", 16); //15
// parseInt("F", 16); //window 생략하고 parseInt로만 가능 ,15
// window.parseInt === parseInt; //true

//var 키워드로 선언한 전역 변수
//브라우저에서
// var foo = 1;
// console.log(window.foo);
// //선언하지 않는 변수에 값을 암묵적 전역. bar는 전역 변수가 아님, 전역 객체의 프로퍼티
// bar = 2; // window.bar = 2
// console.log(window.bar); // 2
// //전역 함수
// function baz() {
//   return 3;
// }
// console.log(window.baz()); // 3

//브라우저에서
// let foo = 123;
// console.log(window.foo); // undefined

//빌트인 전역 프로퍼티
//전역 프로퍼티는 window를 샹락하고 참조 가능
//브라우저에서
// console.log(window.Infinity === Infinity); //true
// console.log(3 / 0); //Infinity
// console.log(-3 / 0); //-Infinity
// console.log(typeof Infinity); //number

//NaN
//브라우저에서
// console.log(window.NaN); //NaN
// console.log(Number("xyz")); //NaN
// console.log(1 * "string"); //NaN
// console.log(typeof NaN); //number

//undefined
//브라우저에서
// console.log(window.undefined); //undefined
var ppzz;
console.log(ppzz); //undefined
console.log(typeof undefined); //undefined

//빌트인 전역 함수
//eval
//표현식인 문
console.log(eval("1+2"));
//표현식이 아닌문
console.log(eval("var x= 5")); //undefined

//eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다
console.log(x);

//객체 리터럴은 반드시 괄호로 둘러싼다
const o = eval("({a: 1})");
console.log(o); //{ a: 1 }

//함수 리터럴은 반드시 괄호로 둘러싼다
const f = eval("(function(){return 1;})");
console.log(f); //[Function (anonymous)]
console.log(f()); //1

//인수로 전달받은 문쟈열 코드가 여러 개의 문으로 이루어져 있음 -> 모든 문 실행 후 마지막 결과값 반환
console.log(eval("1+2; 3+4;")); //7
//eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적 수정
const x1 = 1;
function foo() {
  //eval 함수가 런타임에 foo 함수의 스코프를 동적으로 수정
  eval("var x1 = 2;");
  console.log(x1); // 2
}
foo();
console.log(x1); //1

const x2 = 1;
function foo2() {
  "use strict";
  //엄격 모드에서는 eval 함수 자신의 자체적인 스코프 생성
  eval("var x2 = 2; console.log(x2)"); //2
  console.log(x2); // 1
}
foo2();
console.log(x2); //1

const x3 = 1;
function foo3() {
  eval("var x3 = 2; console.log(x3)"); //2
  //let, const 키워드를 사용한 변수 선언문은 strict mode 적용됨
  //블록 스코프라 eval 내부의 블록에서만 x3 유효 => foo3 함수 내부의 x3와 다른 변수
  eval("const x3 = 3; console.log(x3)"); //3

  console.log(x3); // 2 => foo3 함수 내부의 x3
}
foo3();
console.log(x3); //1

//isFinite
console.log(isFinite(0)); //true
console.log(isFinite(2e64)); //true
console.log(isFinite("10")); //true
console.log(isFinite(null)); // null -> 0 ->true
//인수가 무한수 또는 NaN으로 평가되는 값 => false 반환
console.log(isFinite(Infinity)); //false
console.log(isFinite(-Infinity)); //false
console.log(isFinite(NaN)); //false
console.log(isFinite("HELLO")); //false
console.log(isFinite("2005/12/12")); //false

//isNaN
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false
console.log(isNaN("blabla")); //true
console.log(isNaN("10")); //false
console.log(isNaN("10.12")); //false
console.log(isNaN("")); //0 false
console.log(isNaN(" ")); //0 false
//불리언
console.log(isNaN(true)); //false true -> 1
console.log(isNaN(null)); //false null->0
//undefined
console.log(isNaN(undefined)); //true undefined -> NaN
//객체
console.log(isNaN({})); //true {}->NaN
//date
console.log(isNaN(new Date())); //false new Date() -> Number
console.log(isNaN(new Date().toString())); //true String-> NaN

//parseFloat
//문자열을 실수로 해하여 변환
console.log(parseFloat("3.14")); //3.14
console.log(parseFloat("10.00")); //10
//공백으로 구분된 문자열은 첫 번째 문자열만 변환함
console.log(parseFloat("34 53 66")); //34
console.log(parseFloat("40 years")); //40
//첫 번째 문자열을 숫자로 변환할 수 없다면 NaN 반환
console.log(parseFloat("he was 40")); //NaN
//앞뒤 공백은 무시
console.log(parseFloat("60 ")); //60

//parseInt
console.log(parseInt("10")); //10
console.log(parseInt("10.123")); //10
//전달받은 인수가 문자열이 아니라면 문자열로 변환 후 정수로 해석
console.log(parseInt(10)); //10
console.log(parseInt(10.123)); //10
//두 번째 인수로 진법 전달가능
console.log(parseInt("10", 2)); //"10"을 2진수로 해석 -> 2
console.log(parseInt("10", 8)); ////"10"을 8진수로 해석 -> 8
console.log(parseInt("10", 16)); //"10"을 16진수로 해석 -> 16

//기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 떄
//Number.prototype.toString 메서드 사용
const x0 = 15;
//10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환
console.log(x0.toString(2)); //"1111" 15를 2로 나누고 몫 0될 떄 까지 = > 나머지들을 거꾸로 배열
//문자열 "1111"을 2진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(parseInt(x0.toString(2), 2)); // 2진수 "1111"은 1X2**3 + 1X2**2 + 1X2**1+ 1X2**0 = 15

//10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환
console.log(x0.toString(8)); //"17"
//10진수 15를 8로 나눈 몫 : 1, 나머지 7 =>  나머지들을 거꾸로 -> 17
//문자열 17을 8진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(parseInt(x0.toString(8), 8)); //8진수 "17" => 1X8**1 + 7X8**0 = 15

//10진수 15를 16진수로 변환하여 그 결과를 문자열로 반환
console.log(x0.toString(16)); // "f"
//문자열 "f"를 16진수로 해석하고 그 결과를 10진수 정수로 반환
console.log(parseInt(x0.toString(16), 16)); //15

//숫자값을 문자열로 변환
console.log(x0.toString()); //"15"
//문자열 "15"를 10진수로 해석하고 그 결과를 10진수 정수로 변환
console.log(parseInt(x0.toString())); //15

//16진수 리터럴 0xf를 16진수로 해석하고 10진수 정수로 반환
console.log(parseInt("0xf")); //15
console.log(parseInt("f", 16)); //15

//2진수 리터럴 0b로 시작 => 해석 못함 -> 0 이후 무시됨
console.log(parseInt("0b10")); //0
//8진수 리터럴 0o 해석 못함
console.log(parseInt("0o10")); //0

//"A" 10진수로 해석 불가
console.log(parseInt("A0")); //NaN
//"2" 2진수로 해석 불가
console.log(parseInt("2", 2)); //NaN

console.log(parseInt("1A0")); //1
console.log(parseInt("102", 2)); //2
console.log(parseInt("58", 8)); //5
console.log(parseInt("FG", 16)); //15

//encodeURI / decodeURI
const uri = "https://www.google.co.kr?name=이&job=programmer&teacher";
//encodeURI는 완전한 uri를 전달받아 이스케이프 처리를 위해 인코딩함
const enc = encodeURI(uri);
console.log(enc); //https://www.google.co.kr?name=%EC%9D%B4&job=programmer&teacher
//decodeURI :인코딩된 uri를 인수로 전달받아 이스케이프 처리 이전으로 디코딩
const dec = decodeURI(enc);
console.log(dec); //https://www.google.co.kr?name=이&job=programmer&teacher

//URI의 쿼리 스트링
const uriComp = "name=이&job=programmer&teacher";
//encodeURIComponent 는 인수로 전달된 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주
//쿼리 스트링 구분자로 사용되는 = ? & 까지 인코딩
let enc1 = encodeURIComponent(uriComp);
console.log(enc1); //name%3D%EC%9D%B4%26job%3Dprogrammer%26teacher

let dec1 = decodeURIComponent(enc1);
console.log(dec1); //name=이&job=programmer&teacher

//encodeUri는 매개변수로 전달된 문자열을 완전한 URI 전체라고 간주
//쿼리 스트링 구분자로 사용되는 = ? & 을 인코딩 X
enc1 = encodeURI(uriComp);
console.log(enc1); //name=%EC%9D%B4&job=programmer&teacher

dec1 = decodeURI(enc1);
console.log(dec1); //name=이&job=programmer&teacher

//암묵적 전역
//전역변수 호이스팅 발생
console.log(x5); //undefined
//전역 변수가 아닌 전역 객체의 프로퍼티 y2 => 호이스팅 발생 x
// console.log(y2); //ReferenceError: y2 is not defined

var x5 = 10;
function foo5() {
  //선언하지 않은 식별자에 값 할당
  y2 = 20; //window.y2 = 20;
}
foo5();
//선언하지 않은 식별자 y2를 전역에서 참조 가능
console.log(x5 + y2); //30

delete x5; //전역 변수 삭제 안됨
delete y2; //프로퍼티 삭제됨
console.log(x5); //10
// console.log(y2); //ReferenceError: y2 is not defined
