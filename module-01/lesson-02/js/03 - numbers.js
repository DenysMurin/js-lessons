//! арифметические функции
let elementWidth = "50px";
console.log("elementWidth:", elementWidth);
// определяет число - до целого, и без единиц измерения
console.log("elementWidth:", Number.parseInt(elementWidth));

let elementHeigth = "200.74px";
// покажет просто значение в скобках
console.log("elementHeigth:", elementHeigth);
// обрежет
console.log("elementHeigth:", Number.parseInt(elementHeigth));

// с плавающей точкой
console.log("elementHeigth:", Number.parseFloat(elementHeigth));
// !округление
const value = 27.9;
// округляет вверх
console.log(Math.ceil(value));
// округление вниз
console.log(Math.floor(value));
// по правилам математики
console.log(Math.round(value));
