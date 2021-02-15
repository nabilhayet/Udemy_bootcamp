function validUserNames(words) {
    const result = words.filter(word => word.length < 10);
    return result;
}

function allEvens(arr) {
    return arr.every(num => num % 2 === 0)
}

const prices = [3, 6, 9, 12, 45]

const total = prices.reduce((accumulator, price) => accumulator + price)

const total = prices.reduce((accumulator, price) => accumulator + price, 0)

const lowestPrice = prices.reduce((min, currValue) => {
    if (currValue < min) {
        return currValue;
    } else {
        return min;
    }
})