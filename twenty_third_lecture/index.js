function rolldie(num = 1) {
    return Math.floor(Math.random() * num) + 1
}

const nums = [1, 3, 5, 6, 7, 8, 9, 345, 567]
Math.max(...nums)

const cats = ['Blue', 'Scout', 'Rocket']

const allPets = [...cats]

function sum() {
    return arguments.reduce((total, el) => total + el) // This wont work, as we can not call reduce on arguments.
}

function sum(...nums) {
    return nums.reduce((total, el) => total + el) // This will work as nums is a parameter.It's called rest. Its not available in arrow function
}
sum(3, 5, 7)

const scores = [234, 567, 123, 987, 765, 543, 321]
const [gold, silver] = scores // gold & silver will hold 1st & 2nd Element.

const user = {
    name: 'Nabil Hayet',
    age: 25,
    sex: 'M',
    Height: '5.9'
}

const { email } = user // it's equiv to const email = user.email 
const { name: naamastey, died = 'N/A' } = user // It will create new variable called naamastey using name key 

function bio({ name, age }) {
    return ` Name is: ${name} and age is: ${age}`
}