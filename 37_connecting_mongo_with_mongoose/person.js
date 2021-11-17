const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!')
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.pre('save', async function () {
    console.log("About to Save!!");
})

personSchema.post('save', async function () {
    console.log('Just Saved!!');
})

personSchema.virtual('fullname').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema)