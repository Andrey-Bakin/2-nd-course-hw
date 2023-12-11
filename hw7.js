// Задание 8 - hw5 (Игра № 1)
function getSeason(month) {
  if (month == 12 || month == 1 || month == 2) {
    return "Зима";
  } else if (month >= 3 && month <= 5) {
    return "Весна";
  } else if (month >= 6 && month <= 8) {
    return "Лето";
  } else if (month >= 9 && month <= 11) {
    return "Осень";
  } else {
    return "Введен неверный параметр!";
  }
}

alert(getSeason(prompt("Введите номер месяца")));

// Задание № 1
let str = "js";
console.log(str.toUpperCase());

// Задание № 2
function searchStart(arr, str) {
  const filteredArr = [];

  arr.forEach((el) => {
    if (el.toLowerCase().startsWith(str)) {
      filteredArr.push(el);
    }
  });

  return filteredArr;
}

console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));

// Задание № 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание № 4
const numbs = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbs));
console.log(Math.max(...numbs));

// Задание № 5
function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * maxValue);
}

console.log(getRandomInt(1, 10));

// Задание № 6
function getRandomArrNumbers(n) {
  const arr = [];
  let i = n / 2;
  i = Math.floor(i);
  for (let index = 0; index < i; index++) {
    arr.push(Math.round(Math.random() * n));
  }
  return arr;
}

getRandomArrNumbers(7);

// Задание № 7
function getRound(a, b) {
  return Math.round(Math.random() * b);
}

console.log(getRound(3, 9));

// Задание № 8
let currentDate = new Date();
console.log(currentDate);

// Задание № 9
let myDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(myDate);

// Задание № 10
function fullDate(date) {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return `Дата: ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} - это ${
    days[date.getDay()]
  }\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(fullDate(new Date()));

// Задание № 11 (Игра № 2)
let gameFruits = [
  "Яблоко",
  "Груша",
  "Дыня",
  "Виноград",
  "Персик",
  "Апельсин",
  "Мандарин",
];
gameFruits = gameFruits.sort(() => Math.random() - 0.5);
alert(gameFruits);

let firstEl = prompt("Чему равнялся первый элемент массива?");
let lastEl = prompt("Чему равнялся последний элемент массива?");

if (firstEl === gameFruits[0] && lastEl === gameFruits[gameFruits.length - 1]) {
  alert("Поздравляем! Вы угадали оба элемента");
} else if (
  firstEl === gameFruits[0] ||
  lastEl === gameFruits[gameFruits.length - 1]
) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы не угадали ниодного элемента.");
}
