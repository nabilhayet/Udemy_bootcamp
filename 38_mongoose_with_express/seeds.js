const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!')
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

const seedProducts = [
    {
        name: 'Eggplant',
        price: 2.99,
        category: 'vegetable'
    },
    {
        name: 'Banana',
        price: 0.99,
        category: 'fruit'
    },
    {
        name: 'Kale',
        price: 1.99,
        category: 'vegetable'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })

// const p = new Product({
//     name: 'Apple',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// })
//     .catch(e => {
//         console.log(e);
//     })


