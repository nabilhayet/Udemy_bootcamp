const express = require('express')
const app = express()
const User = require('./models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const path = require('path')
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open!');
    })
    .catch(err => {
        console.log('Oh no Error');
        console.log(err);
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const sessionOptions = { secret: 'notagoodsecret', resave: false, saveUninitialized: false }

app.use(session(sessionOptions))
app.use(express.urlencoded({ extended: true }))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}

app.get('/', (req, res) => {
    console.log('This is my homepage')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body
    // const hash = await bcrypt.hash(password, 12)
    // const user = new User({
    //     username,
    //     password: hash
    // })
    const user = new User({ username, password })
    await user.save()
    req.session.user_id = user._id
    res.redirect('/secret')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/login')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})