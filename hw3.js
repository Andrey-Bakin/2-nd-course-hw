//1
let password = 'пароль';
let askPassword = prompt('Введите пароль');

if (askPassword == 'пароль') {
	console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
};

//2
let c = prompt ('Введите число')

if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Не верно');
};

//3
let d = prompt ('Введите число');
let e = prompt ('Введите число');

if ((d > 100) || (e > 100)) {
    console.log('Верно');
} else {
    console.log('Не верно');
};

//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert (Number(a) + Number(b));

// 5
let monthNumber = prompt('Введите номер месяца')

switch (monthNumber) {
	case '1':
		console.log('Январь - второй месяц зимы');
		break;
	case '2':
		console.log('Февраль - третий месяц зимы');
		break;
    case '3':
        console.log('Март - первый месяц весны');
        break;
    case '4':
        console.log('Апрель - второй месяц весны');
        break;
    case '5':
         console.log('Май - третий месяц весны');
        break; 
    case '6':
        console.log('Июнь - первый месяц лета');
        break;
    case '7':
        console.log('Июль - второй месяц лета');
        break;
    case '8':
        console.log('Август - третий месяц лета');
        break;
    case '9':
        onsole.log('Сентябрь - первый месяц осени');
        break;
    case '10':
        console.log('Октябрь - второй месяц осени');
        break;
    case '11':
        console.log('Ноябрь - третий месяц осени');
        break;
    case '12':
        console.log('Декабрь - первый месяц зимы');
        break;
	default: console.log('номер месяца больше 12, или введено неверное значение');
		break;
}
// 7
let x = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(x)) {
  alert('Нужно вписать число');
} else if (x % 2 === 0) {
  alert('Число четное'); 
} else {
  alert('Число нечетное'); 
}

// 8
let clientOS = 1; // или 0
clientOS === 0 ? console.log(`Установите версию приложения для iOS по ссылке`) 
: console.log(`Установите версию приложения для Android по ссылке`);

// 9
let deviceOS = 1; // или 0
let clientDeviceYear = 2010;

if ((deviceOS === 1) && (clientDeviceYear >= 2015)) {
    console.log(`Установите версию приложения для Android по ссылке`);
} else if ((deviceOS === 1) && (clientDeviceYear < 2015)) {
    console.log(`Установите облегченную версию приложения для Android по ссылке`);
} else if ((deviceOS === 0) && (clientDeviceYear >= 2015)) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} else {
    console.log(`Установите облегченную версию приложения для iOS по ссылке`);
}