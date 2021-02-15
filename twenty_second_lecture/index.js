const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(function (el) {
    console.log(el)
})

for (let el of numbers) {
    console.log(el);
}

constdoubles = numbers.map(function (num) {
    return num * 2;
})

function cleanNames(arr) {
    const newArray = arr.map(function (value) {
        return value.trim();
    });
    return newArray
}

const greet = str => {
    return (`Hey ${str}!`);
}

console.log("Hello Nabil....");
setTimeout(() => {
    console.log("Are you still there?....")
}, 3000)

setInterval(() => {
    console.log(Math.random());
}, 2000)