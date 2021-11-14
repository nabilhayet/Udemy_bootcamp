const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol haha'
    },
    {
        username: 'Bob',
        comment: 'Ola komostas'
    },
    {
        username: 'Skyler',
        comment: 'I like gardenning'
    },
    {
        username: 'Park',
        comment: 'Woof woof woff'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment })
    res.redirect('/comments')
})


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log(req.body)
    const { meat, qty } = req.body
    res.send(`You have ordered ${meat} with qty:${qty}`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})

