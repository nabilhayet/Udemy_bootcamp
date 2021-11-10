// fetch('http://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('RESPONSE', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('DATA PARSED', data)
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log('OH NO!!', e)
//     })

// axios.get('http://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(e => {
//         console.log('ERROR!!', e)
//     })



const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('http://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log('ERROR!!', e)
    }
}

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await getJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}

const getJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res)
        return res.data.joke;
    } catch (e) {
        return 'NO JOKES Available'
    }

}
button.addEventListener('click', addNewJoke)

