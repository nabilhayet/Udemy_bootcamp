const square = function (x) {
    return x * x
}
const square = {
    area(length) {
        return length * length;
    },
    perimeter(length) {
        return length * 4;
    }
}
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return 'EGG'
    }
}

function uppercaseMessage(msg) {
    try {
        console.log(msg.toUpperCase());
    } catch (e) {
        console.log("Please pass a string !!!")
    }
}