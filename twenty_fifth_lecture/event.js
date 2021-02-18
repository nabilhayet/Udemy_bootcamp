const btn = document.querySelector('button').addEventListener('click', function () {
    alert('clicked!')
})

// const input = document.querySelector('input')
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })
// input.addEventListener('keyup', function () {
//     console.log('KEYUP')
// })

// window.addEventListener('keydown', function (e) {
//     console.log(e.code)
// })

const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
const lis = document.querySelectorAll('li');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const userInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    const userInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(userInput.value, tweetInput.value)
    userInput.value = ''
    tweetInput.value = ''
})

const addTweet = (userInput, tweetInput) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(userInput)
    newTweet.append(bTag)
    newTweet.append(`- ${tweetInput}`)
    tweetsContainer.append(newTweet)
}
tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();

})

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');
// let productInput = form.elements.product;
// let quantityInput = form.elements.qty;
// const ul = document.querySelector('#list')

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     addList(productInput.value, quantityInput.value)
//     productInput = '';
//     quantityInput = '';
// })

// const addList = (productInput, quantityInput) => {
//     const li = document.createElement('li');
//     li.append(quantityInput);
//     li.append(productInput);
//     ul.appendChild(li)
// }

// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')

// input.addEventListener('input', function (e) {
//     if (input.value !== '') {
//         h1.innerText = `Welcome, ${input.value}`
//     } else {
//         h1.innerText = 'Enter Your Username'
//     }

// })




