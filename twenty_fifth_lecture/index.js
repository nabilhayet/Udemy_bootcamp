const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log('You clicked me!!')
}

function scream() {
    console.log('Stop Doing this !!')
}
btn.onmouseenter = scream;

const v3 = document.querySelector('#v3')
v3.addEventListener('click', function () {
    alert('Do You like me?')
})

// v3.addEventListener('click', scream, { once: true })

// const hello = document.querySelector('#hello')
// const goodbye = document.querySelector('#goodbye')

// hello.addEventListener('click', function () {
//     console.log('hello')
// })

// goodbye.addEventListener('click', function () {
//     console.log('goodbye')
// })

const v4 = document.querySelector('#v4')
const h2 = document.querySelector('h2')
v4.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor
    h2.innerText = newColor

})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

