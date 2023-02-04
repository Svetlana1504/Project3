// import './style/normalize.css'
import './style/main.css'
// import './img/logo.svg'
// import './img/iphone_14.png'
// img.src= Iphone_14
// import './img/Apple.jpg'

const button = document.querySelector('.btn')
button.addEventListener('click', (event) => {
    event.preventDefault()
    const inputForm = document.querySelector('.form')
let tel = document.querySelector('.form-input-tel');
let name = document.querySelector('.form-input-name')

function clearValue () {
    tel.value = ''
}

 if (!Number(tel.value)) {
    alert('Введите номер телефона')
    clearValue()
    tel.classList.add('bord')
} else if (tel.value.length < 10) {
    alert('Ошибка в данных')
    clearValue()
    tel.classList.add('bord')
} else {
    alert('Вы отправили форму')
    tel.classList.toggle('bord')
    clearValue()
}
})



document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(elem) {
        elem.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('nav').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition-topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})






const mobileButtonMenu = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.nav')

mobileButtonMenu.addEventListener('click', () => {
   mobileMenu.classList.toggle('menu-open')
})