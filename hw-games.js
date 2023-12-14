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

  // Задание № 11 - hw7 (Игра № 2)
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