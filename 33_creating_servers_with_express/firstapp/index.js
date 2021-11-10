const express = require("express")
const app = express()

// app.use((req, res) => {
//     console.log("We Got a new request!!")
//     res.send("Hello, WE got your request")

// })

// Use Nodemon to automatically restart the server when something is chnaged!
// npm i -g nodemon

app.get('/', (req, res) => {
    res.send("Welcome to Home Page!")
})

app.get('/cats', (req, res) => {
    res.send('MEAOW!!')
})

app.post('/cats', (req, res) => {
    res.send("This is post request!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!")
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params

    res.send(`Browsing the ${subreddit} ${postId} request`)
})

app.get('/search', (req, res) => {
    console.log(req.query)
    const { q } = req.query
    if (!q) {
        res.send("Sorry, Nothing found for this query")
    } else {
        res.send(`This is query for ${q}`)
    }

})

app.get('*', (req, res) => {
    res.send("I don't know that path!!")
})



app.listen(3000, () => {
    console.log("Listening on port 3000!")
})
