// !явное приведение типов
console.log(String(5));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(typeof String(null));
console.log(String(undefined));

// !неявное приведение -сшивание, конкатенация
console.log("5" + 3 + 1);
console.log("5" + true);
console.log("5" + false);

const result = 5 + 3 + "1";
console.log("result:", typeof result);
console.log("result:", result);

// !преаращиние тиипов: числа
// явное
console.log(Number("5"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
// не является числом
console.log(Number(undefined));
// то же
console.log(Number("jacob"));
console.log(Number("25px"));
// неЯвное - попытка все привести к числу
console.log(Number("5" * 2));
console.log(Number("10" - 5));
console.log(Number(5 + true));
console.log(Number(5 - true));
console.log(Number("5px" - false));
