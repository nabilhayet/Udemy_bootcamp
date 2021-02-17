const firstBold = document.querySelector('b')
const paragraphTag = firstBold.parentElement
paragraphTag.children

paragraphTag.nextSibling // It's gonna return only text node
paragraphTag.previousSibling // It's gonna return only text node

paragraphTag.nextElementSibling // It's gonna return next sibling element
paragraphTag.previousElementSibling // It's gonna return previous sibling element

const image = document.createElement('img')
image.src = 'https://www.google.com/search?q=bird+images&sxsrf=ALeKk03aORcgsL8c-o04q36DH1yxFwkPAA:1613519568751&tbm=isch&source=iu&ictx=1&fir=i2OJ6m6JQMEtwM%252CSAKj2GyllloQJM%252C_&vet=1&usg=AI4_-kQoSRgE8LHtf6kf1gKKKhPp9lfMiQ&sa=X&ved=2ahUKEwjdwu7lzO_uAhWupFkKHRUGBSEQ9QF6BAgOEAE&biw=1416&bih=710#imgrc=i2OJ6m6JQMEtwM'
document.querySelector('body').appendChild(image);

paragraphTag.append("Hi, How are you?")
paragraphTag.prepend("What's up?")

const h2 = document.createElement('h2')
h2.append('Birds are beautiful !!')
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2)

const con = document.querySelector('#container')
for (let i = 0; i < 100; i++) {
    let button = document.createElement('button')
    button.innerText = 'Hey!'
    con.appendChild(button)
}

const firstLi = document.querySelector('li')
const ul = firstLi.parentElement
ul.removeChild(firstLi)