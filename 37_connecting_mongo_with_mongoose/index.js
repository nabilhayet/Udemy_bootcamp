const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!')
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.2, rating: 'R' },
    { title: 'Alien', year: 2003, score: 8.5, rating: 'R' },
    { title: 'The Iron Giant', year: 1987, score: 8.7, rating: 'R' },
    { title: 'Stand By Me', year: 2009, score: 8.9, rating: 'R' },
    { title: 'Monster', year: 2012, score: 7.2, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT Worked")
        console.log(data)
    })
