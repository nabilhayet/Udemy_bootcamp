const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('common'))

app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method.toUpperCase(), req.path);
    next()
})

app.use('/dogs', (req, res, next) => {
    console.log("I love Dogs");
    next()
})

const verifyPassword = (req, res, next) => {
    const { password } = (req.query);
    if (password === 'chickennugget') {
        next()
    }
    res.send('Sorry you need a password')
}

// app.use((req, res, next) => {
//     const { password } = (req.query);
//     if (password === 'chickennugget') {
//         next()
//     }
//     res.send('Sorry you need a password')
// })

// app.use((req, res, next) => {
//     console.log("This is my First middleware");
//     return next()
//     console.log("This is my First middleware - After calling next()");
// })

// app.use((req, res, next) => {
//     console.log("This is my Second middleware");
//     return next()
// })

app.get('/', (req, res) => {
    console.log(`Reques time: ${req.requestTime}`);
    res.send('Home Page!')
})

app.get('/dogs', (req, res) => {
    console.log(`Reques time: ${req.requestTime}`);
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My Secret is very secret')
})

app.use((req, res) => {
    res.status(404).send('Not Found!')
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})