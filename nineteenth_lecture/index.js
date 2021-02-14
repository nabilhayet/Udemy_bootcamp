for (let i = 0; i <= 5; i++) {
    console.log('Da ba dee da ba daa')
}
for (let i = 25; i >= 0; i -= 5) {
    console.log(i)
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum + 1);


let guess = parseInt(prompt("Enter your first guess"))
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high !!")
    } else {
        guess = prompt("Too low")
    }
}
console.log(`You got it bro!. It took you ${attempts} guesses!`)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
    console.log(num * num)
}

