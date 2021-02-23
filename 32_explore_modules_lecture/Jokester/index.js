const jokes = require('give-me-a-joke')
const colors = require('colors')

console.log(jokes)

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow)
})

// global package install -> npm i -g cowsay 
// After installing, to change permission to node_modules in my machine type 
// sudo chown -R $USER / usr/local/lib/node_modules 
// To connect global package with local folder like jokester, inside jokester type 'npm link cowsay'

