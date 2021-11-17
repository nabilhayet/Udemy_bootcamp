const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!')
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

// Creating Schema for my model and database

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// Creating Model for my class

const Product = mongoose.model('Product', productSchema)

// Creating an instance of the product class

const bike = new Product({ name: 'Tire Pump', price: 15.30, categories: ['Cycling', 'Safety'] })
bike.save()
    .then(data => {
        console.log("IT Worked")
        console.log(data)
    })
    .catch(err => {
        console.log("Oh No");
        console.log(err.errors.name.properties.message);
    })

// Creating Static class of ProductSchema

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}
Product.fireSale().then(res => console.log(res))

// Creating instance method of productSchema

productSchema.methods.greet = function () {
    console.log("Hello ji Hello ji Meno sone lagte ho")
    console.log(`Greet from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat)
    return this.save()
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' })
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

findProduct()

// When we try to update something we have to set validators = true to check the validations we set before
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 15.30 }, { new: true, runValidators: true })