// let a = 0.36;
// let b = 1.02;

// let T =
//   a ** (1 / 5) +
//   (b * ((a + b) / (2 * b + a * b))) ** (1 / 4) * (a ** 2 + b ** 2 + 2);

// let natija = T.toFixed(2);
// console.log(natija);

// 2-dars
// let bagaj = 25;

// if (bagaj > 25) {
//   console.log("Yukingiz 25kg dan og'ir");
// } else {
//   console.log("oq yo'l");
// }
// let a = 6;
// let b = 6;
// let c = 6;

// if (a >= b && b >= c) {
//   console.log(a * 2, b * 2, c * 2);
// } else {
//   console.log(Math.abs(a), Math.abs(b), Math.abs(c));
// }

// For, While, Do While
// for (let i = 1; i <= 10; i++) {
//   console.log(i + "-qadam");
// }

// let i = 5;
//
// while (i > 0) {
//   console.log(`sizda ${i}ta jon qoldi`);
//   i--;
// }
// console.log("o'yin tugadi");

// let x = 10;
// do {
//   console.log(x);
// } while (x <= 5);

// let parol;

// do {
//   parol = prompt("Parolni kiriting:");

//   // if (parol !== "1234") {
//   //   alert("Parol noto'g'ri, qayta urinib ko'ring");
//   // }
// } while (parol !== "1234");

// alert("Xush kelibsiz!");

// Function Decloration
// function hello(n){
//     for(let i = 1; i<=10; i++){
//         console.log("salom");

//     }
// }
// hello(11)

// Function Expression
// let salom = function () {
//   console.log("Hi amigo");
// };
// salom();

// Arrow function
// // 1
// let yigindi = (a, b) => console.log(a + b);
// yigindi(11, 5);

// // 2
// let ayirma = (a, b) => {
//   let natija = a - b;
//   console.log(natija);
//   return natija;
// };

// ayirma(11, 5);

// kalla og'riqi
// 1.1
// function ism(a) {
//   console.log("Salom " + a);
// }
// ism("Jo'rabek Abdullayev");

// 1.2
// function son(a, b) {
//   let katta = Math.max(a, b);
//   console.log(katta);
// }
// son(1, 10);

// 1.3
// function number(a) {
//   if (a % 2 === 0) {
//     console.log("Juft");
//   } else {
//     console.log("Toq");
//   }
// }
// number(11);

// 2
// 1-usul
// let soliq = function (a, b) {
//   let foiz = (a / 100) * b;
//   let natija = a + foiz;
//   console.log("Sizdan " + natija + "$");
//   return natija;
// };
// soliq(10, 10);
// 2-usul
let soliq = function (a, b) {
  let natija = a * (b / 100.0 + 1);
  console.log("Sizdan " + natija + "$");
  return natija;
};
soliq(100, 12);

// 3
// let harorat = (a) => {
//   let F = (a * 9) / 5 + 32;
//   console.log(F);
//   return F;
// };
// harorat(100);
