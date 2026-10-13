let a = 0.36;
let b = 1.02;

let T =
  a ** (1 / 5) +
  (b * ((a + b) / (2 * b + a * b))) ** (1 / 4) * (a ** 2 + b ** 2 + 2);

let natija = T.toFixed(2);
console.log(natija);
