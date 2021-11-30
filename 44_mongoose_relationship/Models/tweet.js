const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!')
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

// const makeTweets = async () => {
//     const u = new User({ username: 'chickenfan99', age: 61 })
//     const tweet1 = new Tweet({ text: 'omg I love chicken', likes: 0 })
//     tweet1.user = user
//     user.save()
//     tweet1.save()
// }

// makeTweets()

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t);
}

findTweet()