const add = document.querySelector('#add')
const substrat = document.querySelector('#subtract')

const action = document.querySelector('.action')
const timer = document.querySelector('.timer')

const reset = document.querySelector('#reset')
const stop = document.querySelector('#stop')

stop.style.display = 'none'
start.style['display']  = 'block'


let x;

start.addEventListener('click', ()=>{
    start.style['display']  = 'none'
    if(timer.textContent > 0){
        x = setInterval(()=>{
            timer.textContent = timer.textContent - 1
            if(timer.textContent == 0) {
                clearInterval(x)
                add.disabled  = false
                substrat.disabled  = false
                stop.style.display = 'none'
                start.style['display']  = 'block'

            }else {
                add.disabled = true
                substrat.disabled  = true
                stop.style.display = 'block'
                start.style['display']  = 'none'
            }
        },1000);
    }
})

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
        clearInterval(x)
});

stop.addEventListener('click', ()=>{
    clearInterval(x)
    start.style.display = 'block'
    stop.style.display = 'none'
});