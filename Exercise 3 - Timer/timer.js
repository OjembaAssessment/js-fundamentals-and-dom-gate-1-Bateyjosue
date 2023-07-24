const add = document.querySelector('#add')
const substrat = document.querySelector('#subtract')

const action = document.querySelector('.action')
const timer = document.querySelector('.timer')


add.addEventListener('click', ()=>{
    let value  = timer.textContent
    timer.textContent = parseInt(value, 10) + 1
});