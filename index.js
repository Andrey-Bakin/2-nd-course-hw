// 1
let a = 20;
alert (a)

// 2
let year;
alert (year = 'Год выпуска первого iPhone - 2007')

// 3
let creator;
alert (creator = 'Создатель языка JavaScript - Брендан Эйх')

// 4
let x = 10;
let y = 2;
alert (x + y);
alert (x - y);
alert (x * y);
alert (x / y);

// 5
let s = 2;
alert (redult = s ** 5);

// 6
let a1 = 9;
let b = 2;
alert (a1 % b);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8
let age = prompt('Сколько вам лет?');
alert (age);

// 9
let user = {
    name: 'Андрей',
    age: 20,
    isAdmin: true,
}
user["city of residence"] = 'Рязань';
user.age = 35;
delete user["city of residence"];
let info = prompt("Какую информацию вы хотите узнать о пользователе?");
alert(user[info]);

// 10
let name = prompt('Как Вас зовут?')
alert (`Привет, ${name}!`)