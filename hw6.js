// 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) {
      break;
    } 
}

// 2
const numbs = [1, 5, 4, 10, 0, 3];

numbs.forEach((el, index) => {
	console.log(`${index}: ${el}`);
});

// 3
const numbs = [1, 3, 5, 10, 20];
const str = numbs.join(' ');
console.log(str);

// 4
let arr = [];
for (let i = 0; i < 3; i++){
    let inArr = [];
    for (let x = 0; x < 3; x++) {
        inArr.push(1);
    }
    arr.push(inArr);
}
console.log(arr)

// 5
let arr = [1, 1, 1];
products.push(2, 2, 2);
console.log(arr); 

// 6
const catalog = [9, 8, 7, 'a', 6, 5];
const result = catalog.sort();
result.pop();
result.reverse();
console.log(result);

// 7
const numbs = [9, 8, 7, 6, 5];
const guessNumber = Number(prompt('Введите пожалуйста число'));
if (numbs.includes(guessNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// 8
const letters = "abcdef";
const unletters = letters.split("").reverse().join("");
console.log(unletters);

// 9
const doubleArr = [
    [1, 2, 3],
    [4, 5, 6]
];
const arr = doubleArr.flat();
console.log(arr);

// 10
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbs.length - 1; i++) {
    console.log(numbs[i] + numbs[i + 1]);
};

// 11
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sqaredNumbs(arr) {
    return arr.map((num) => num * num);
}

sqaredNumbs(arr);

// 12
function getLengthWords(words) {
    return words.map((word) => word.length);
}

getLengthWords = (["слово", "", "слог", "длинное предложение", "буква"]);

// 13
function filterPositive(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

filterPositive([-1, 0, 5, -10, 56]); 
filterPositive([-25, 25, 0, -1000, -2]); 
