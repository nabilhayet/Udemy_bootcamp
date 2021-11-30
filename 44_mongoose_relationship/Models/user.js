const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!')
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new User({
        first: 'Nabil',
        last: 'Hayet'
    })
    u.addresses.push({
        // _id: { id: false },
        street: '123 Seasme St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id)
    user.addresses.push(
        {
            street: '99 3rd ST.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}
addAddress('61a56e7b917e5216c13ddb6b')

// makeUser()
