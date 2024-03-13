console.log("5 > 4:", 5 > 4);
// !неявное превращение.
// число 7 становится 7
console.log("10>='7':", 10 >= "7");
//идет превращение в рядковый тип, и по таблице юникод, кто имеет меньший номер
// в о вниманеи беретсят только 1 символ из "12"
console.log("'2'>'12':", "2" > "12");
console.log("'2'<'12':", "2" < "12");

console.log("'4'== 4:", "4" == 4);
console.log("'6'=== 6:", "6" === 6);
console.log("'false'=== false:", "false" === false);
console.log("1==true:", 1 == true);
console.log("1===true:", 1 === true);
// тут приведет к сравненияю числе(false=0)
console.log("0==false:", 0 == false);
console.log("0===false:", 0 === false);
// Р и р имеют разные код - по первой букве
console.log("'Papaya'< 'papaya':", "Papaya" < "papaya");
console.log("'Papaya'=== 'papaya':", "Papaya" === "papaya");
console.log("undefined == null:", undefined == null);
console.log("undefined === null:", undefined === null);
