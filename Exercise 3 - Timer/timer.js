const add = document.querySelector('#add')
const substrat = document.querySelector('#subtract')

const action = document.querySelector('.action')
const timer = document.querySelector('.timer')

const reset = document.querySelector('#reset')


add.addEventListener('click', ()=>{
    let value  = timer.textContent
    timer.textContent = parseInt(value, 10) + 1
});

substrat.addEventListener('click', ()=>{
    let value  = timer.textContent
    if (+value) {
        timer.textContent = parseInt(value, 10) - 1
    }
});

reset.addEventListener('click', ()=>{
        timer.textContent = 0
});