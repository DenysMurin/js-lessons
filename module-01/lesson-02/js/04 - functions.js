//! объявление и вызов функиции
// в круглых - параметры, в фигурных - результат работы
// строка 6 - только лишь говорит о том, что будет такая функция, но пока выполнять ее не надо
// строка 7 - действие
// строка 9 - вызов. только после этого будет результат
function multiply() {
  console.log(5 + 3);
}
multiply();

//повернення значення
function multiply(number_1, number_2) {
  // let number_1 = 5;
  // let number_2 = 3;
  const result = number_1 * number_2;
  return result;
}
const result_1 = multiply(5, 3);
console.log("степень:", Math.pow(result_1, 3));
console.log("result_1:", result_1 + 10);

//! порядок выполнения и видимость

function fnA() {
  console.log("inside fnA");
  return function fnB() {
    console.log("===>inside fnB<====");
  };
}
console.log("before fnA execution");

const fnB = fnA();

console.log("after fnA execution");
// -------
console.log("before fnB execution");
fnB();
console.log("after fnB execution");

// порядок выполнения
console.log("--------------------------------------------------------------");
function fnC() {
  console.log("inside fnC");
}
function fnD() {
  console.log("inside fnD");
}
function fnE() {
  console.log("inside fnE");
}
console.log("before fnC execution");
fnC();
console.log("after fnC execution");
console.log("before fnD execution");
fnD();
console.log("after fnD execution");
console.log("before fnE execution");
fnE();
console.log("after fnE execution");

console.log("--------------------------------------------------------------");
// !расчет функции массы тела

function calcBMI(weight, height) {
  // w=88.3
  // h=1.75
  const comaToDotWeight = weight.replace(",", ".");
  const comaToDotHeight = height.replace(",", ".");
  // две строчки можно не использовать
  //   const weightToNumber = Number.parseFloat(comaToDotWeight);
  //   const heightToNumber = Number.parseFloat(comaToDotHeight);

  // const result = weightToNumber / heightToNumber ** 2;
  const result = comaToDotWeight / comaToDotHeight ** 2;
  // способы выведения данных
  return result.toFixed(2);
  // return Math.round(result * 100) / 100;
  // return Number(result.toFixed(2))
}
const bmi = calcBMI("88,3", "1,75");

console.log(bmi);
