const image = document.getElementById('unicorn')
const heading = document.getElementById('mainheading')

const doneTodos = document.querySelectorAll('.done')
const checkbox = document.querySelector('input[type=checkbox]')

const span = document.querySelector('span')
span.innerText = 'Disgusting'

const image = document.querySelector('img')
image.src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg'
image.alt = 'chicken'

window.getComputedStyle(h1).fontSize // It shows the actual font-size in css

const div = document.querySelector('#container')
div.style.textAlign = "center";

const image = document.querySelector('img')
image.style.width = '150px';
image.style.borderRadius = '50%'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const spans = document.querySelectorAll('span')
let i = 0
for (let span of spans) {
    span.style.color = colors[i];
    i = i + 1
}

const h2 = document.querySelector('h2')
h2.classList.add('border')
h2.classList.remove('border')
h2.getAttribute('fontSize')
h2.setAttribute('fontSize', '120px')

const lis = document.querySelectorAll('li')

for (let li of lis) {
    li.classList.toggle('highlight')
}


