setTimeout(function () {
  console.log("1");
}, 0);

console.log("2");

setTimeout(function () {
  console.log("3");
}, 2000);

console.log("4");

wait3seconds(() => console.log("5"));

console.log("6");

function wait3seconds(AnonymousFunction) {
  let i = 0;
  const now = new Date();

  // new Date()를 하면 현재 시각을 ms단위까지 가져올 수 있습니다.
  // 아래의 while 조건문은 3초를 기다리는 동작이라 생각해주세요.
  while (new Date() - now < 3000) {
    // i에 숫자를 더하는 것은 아무런 의미가 없고 그냥 의미 없는 동작이라도 하게 하기 위해 넣었습니다.
    ++i;
  }
  AnonymousFunction();
}
