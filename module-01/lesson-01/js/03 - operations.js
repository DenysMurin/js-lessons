const a = 10;
const b = 5;

const sum = a + b;
console.log("sum:", sum);

const extract = a - b;
console.log("extract:", extract);

const mult = a * b;
console.log("mult:", mult);

const divide = a / b;
console.log("divide:", divide);

const root = a ** b;
console.log("root:", root);

const result_1 = a % 3;
console.log("result_1:", result_1);

// выведи общее количество яблок и винограда, их разницу
const apples = 47;
const grape = 135;
const totalFruits = apples + grape;
console.log("total:", totalFruits);

const extractFruits = apples - grape;
console.log("extract:", extractFruits);

//! комбинированные операторы
let students = 100;
// students = students + 50;
students += 50;
console.log("students:", students);

// !приоритет операторов

const result = 108 + (223 - 2) * 5;
console.log("🚀 ~ result:", result);
