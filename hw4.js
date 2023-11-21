// 1
for (let i = 0; i < 2; i++) {
    console.log ("Привет!");
}

// 2
for (let i = 1; i <= 5; i++) {
    console.log (i);
}

// 3
for (let a = 7; a <= 22; a++) {
    console.log (a);
}

// 4
let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
}

for (let key in obj) {
    console.log(`${key} - зарплпта ${obj[key]} долларов.`)
}

// 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num ++;
}

console.log (n);
console.log (num);

