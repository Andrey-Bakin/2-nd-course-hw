// 1
function getMin(a, b) {
  if (a < b) {
    return a;

  } else {
    return b;
  }
}

getMin(8, 4);
getMin(6, 6);

// 2
function number(n) {
  if (n % 2 === 0) {
    return "Число четное";

  } else {
    return "Число нечетное";
  }
}

console.log(number(prompt(`Пожалуйста введите число`)));

// 3.1
function printSquare(num) {
  console.log(num ** 2);
}

printSquare(6)

// 3.2
function getSquare (num) {
  return num ** 2;
}

console.log (getSquare(6))

// 4
let userAge = prompt("Сколько Вам лет?");

function greetUser(age) {

if (age < 0) {
    console.log("Вы ввели неправильное значение");
  }

  else if (age <= 12) {
    console.log("Привет, друг!");
  }

  else {
    console.log("Добро пожаловать!");
  }
}

greetUser(userAge);

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

// 6
function cubeNumber() {
  let num = prompt("Введите число:")
  if(isNaN(Number(num))) {
    return "Введенный переметр не является числом";
  } else {
    return `${num} в кубе равняется ${num ** 3}`
  }
}

console.log(cubeNumber());

// 7
function getArea {
  return Math.PI * this.radius ** 2;
}

function getPerimetr {
  return 2 * Math.PI * this.radius;
}

const circle1 = {
  radius: 5,
  getArea,
  getPerimetr,
};

const circle2 = {
  radius: 10,
  getArea,
  getPerimetr,
};

circle1.getArea();
circle2.getArea();
circle1.getPerimetr();
circle2.getPerimetr();

// 8