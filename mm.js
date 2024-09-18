let message = "Hello!";
let phrase = message;

// let user = {
//   name: "John",
// };
// let user = { name: "John" };

// let admin = user; // 참조값을 복사함

// let user = { name: "John" };

// let admin = user;

// admin.name = "Pete"; // 'admin' 참조 값에 의해 변경됨

// alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함
// let a = {};
// let b = a; // 참조에 의한 복사

// alert(a == b); // true, 두 변수는 같은 객체를 참조합니다.
// alert(a === b); // true

// let a = {};
// let b = {}; // 독립된 두 객체

// alert(a == b); // false

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // 새로운 빈 객체

// // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
// for (let key in user) {
//   clone[key] = user[key];
// }

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
// clone.name = "Pete"; // clone의 데이터를 변경합니다.

// alert(user.name); // 기존 객체에는 여전히 John이 있습니다.
// // Object.assign(dest, [src1, src2, src3...])

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
// Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name); // user = { name: "Pete" }

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = Object.assign({}, user);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// alert(user.sizes.height); // 182

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++; // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.
