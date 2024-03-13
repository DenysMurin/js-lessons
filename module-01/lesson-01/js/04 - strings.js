// !concatenation
const firstName = "Denys";
const lastName = "Murin";
// const fullName = firstName + " " + lastName;
const fullName = "Hello" + " " + firstName + " " + lastName + "!";
console.log("🚀 ~ fullName:", fullName);

const fullName_2 = `hello ${firstName} ${lastName}`;

console.log("🚀 ~ fullName_2:", fullName_2);

// !шаблонные ряды
const quantity = 15;
// для шаблона обязатеьны одинарные обратные кавычки на букве ё, не двойные
const orderMsg = `You ordered ${quantity + 100} boots`;
console.log("orderMsg:", orderMsg);

const companyName = `Cyberdyne Systems`;
const repairBoots = 150;
const defenceBoots = 50;
const msg = `${companyName} has ${repairBoots + defenceBoots} bots in stock`;

console.log(msg);

// !количество символов в строке //индексация элементов
const message = `this string has a long length`;
console.log(message.length);
const index3 = message[10];
console.log(`index for 3:`, index3);
const lastSymbol = message[message.length - 1];
console.log("lastSymbol:", lastSymbol);
