// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true
    }
    else {
        return false
    }
}

// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if (arr.length !== 0) {
        return arr[arr.length - 1]
    }
    else {
        return null
    }
}

function capitalize(message) {
    let result = ''
    let firstLetter = message[0].toUpperCase()
    result = firstLetter
    result = result + message.slice(1)
    return result
}

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (num < 1 || num > 7) {
        return null
    }
    else {
        return days[num - 1]
    }
}
