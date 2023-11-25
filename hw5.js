// 1
function num(a, b) {
  if (a < b) {
    return a;

  } else {
    return b;
  }
}

console.log(num(8, 4));
console.log(num(6, 6));

// 2
function number(n) {
  if (n % 2 === 0) {
    return "Число четное";

  } else {
    return "Число нечетное";
  }
}

console.log(number(prompt(`Пожалуйста введите число`)));

// 3
function num(x) {
  return x * x;
}

console.log(num(prompt(`Пожалуйста введите число`)));

// 4
let age = prompt("Сколько Вам лет?", 12);
let printMessage;

if (age < 0) {
  printMessage = function () {
    console.log("Вы ввели неправильное значение");
  }

  } else if (age <= 12) {
  printMessage = function () {
    console.log("Привет, друг!");
  }

  } else {
  printMessage = function () {
    console.log("Добро пожаловать!");

  }
}

printMessage();

// 5
let a = prompt(`Введите первое число`);
let b = prompt(`Введите второе число`);

function examNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return `Одно или оба значения не являются числом`;
    
  } else {
    return a * b;
  }
  
}

console.log(examNumber(a, b));
