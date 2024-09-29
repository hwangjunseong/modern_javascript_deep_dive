var x; //식별자 x가 실행 컨텍스트가 관리하는 스코프에 등록되고 undefined로 초기화됨
x = 1; //소스코드 실행 과정에서 x 변수가 선언된 변수인지
//실행 컨텍스트가 관리하는 스코프에 x 등록되있느지 확인하고 변수 할당문 x= 1 진행

//전역 변수 선언
const x1 = 1;
const y1 = 2;

//함수 정의
function foo(a) {
  //지역 변수 선언
  const x = 10;
  const y = 20;
  //메서드 호출
  console.log(a + x + y); //130
}

//함수 호출
foo(100);
//메서드 호출
console.log(x1 + y1); //3

//실행 컨텍스트의 스택
const x2 = 1;
function foo1() {
  const y = 2;
  function bar() {
    const z = 3;
    console.log(x2 + y + z);
  }
  bar();
}
foo1(); //6

//실행 컨텍스트의 생성과 식별자 검색 과정
var x3 = 1;
const y3 = 2;
function foo3(a) {
  var x3 = 3;
  const y3 = 4;
  function bar(b) {
    const z = 5;
    console.log(a + b + x3 + y3 + z);
  }
  bar(10);
}
foo3(20); //42

console.log(console.hasOwnProperty("log")); //true

let x0 = 1;
if (1) {
  let x0 = 10;
  console.log(x0); //10
}
console.log(x0); //1
