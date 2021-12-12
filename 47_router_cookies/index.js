const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const shelterRouter = require('./routes/shelters')
const dogRouter = require('./routes/dogs')
const adminRouter = require('./routes/admin')

app.use('/shelters', shelterRouter)
app.use('/dogs', dogRouter)
app.use('/admin', adminRouter)

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies
    res.send(`Hey There! ${name}`)
})
app.get('/setname', (req, res) => {
    res.cookie('name', 'henrineta')
    res.cookie('animal', 'henrevetaa shrimp')
    res.send('Ok Sent you the cookie')
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})