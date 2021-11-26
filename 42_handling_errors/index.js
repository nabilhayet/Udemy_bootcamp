const express = require('express')
const app = express()
const morgan = require('morgan')

const AppError = require('./AppError')

app.use(morgan('tiny'))

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
    //  res.send('Sorry you need a password')
    // res.status(401)
    throw new AppError('Password required!', 401)
}

app.get('/', (req, res) => {
    console.log(`Reques time: ${req.requestTime}`);
    res.send('Home Page!')
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`Reques time: ${req.requestTime}`);
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My Secret is very secret')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403)
})

app.use((req, res) => {
    res.status(404).send('Not Found!')
})

// app.use((err, req, res, next) => {
//     console.log("*******************************");
//     console.log("*******************************");
//     console.log("*******************************");
//     res.status(500).send("Oh My God Error!")
//     console.log(err);
//     next(err)

// })

app.use((err, req, res, next) => {
    const { status = 500 } = err
    const { message } = 'Something went wrong!'
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})