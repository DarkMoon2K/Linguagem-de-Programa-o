const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
const b9 = document.getElementById('b9')
const b0 = document.getElementById('b0')
const clear = document.getElementById('clear')
const soma = document.getElementById('+')
const menos = document.getElementById('-')
const multi = document.getElementById('x')
const div = document.getElementById('%')
const result = document.getElementById('=')
let visor = Number(document.getElementById('visor').innerText)
let resultado = 0
let operacao = 0

const limparALL = () => {
    operacao = 0
    resultado = 0
    visor = 0
    document.getElementById('visor').innerHTML = visor
}

const limpar = () => {
    visor = 0
    document.getElementById('visor').innerHTML = visor
}

const adNum = (n) => {
    if(visor !== 0){
        visor += n
        visor = Number(visor)
    }else{
        visor = n
        visor = Number(visor)
    }
    document.getElementById('visor').innerHTML = visor
}

const ad1 = () => {
    adNum('1')
}
const ad2 = () => {
    adNum('2')
}
const ad3 = () => {
    adNum('3')
}
const ad4 = () => {
    adNum('4')
}
const ad5 = () => {
    adNum('5')
}
const ad6 = () => {
    adNum('6')
}
const ad7 = () => {
    adNum('7')
}
const ad8 = () => {
    adNum('8')
}
const ad9 = () => {
    adNum('9')
}
const ad0 = () => {
    adNum('0')
}
 
const fSomar = () => {
    if(operacao === 0 && visor !== 0){
        resultado = visor
        operacao = 1
        limpar()
    }else{
        resultado += visor
        document.getElementById('visor').innerHTML = resultado
        visor = 0
    }
}

const fSub = () => {
    if(operacao === 0 && visor !== 0){
        resultado = visor
        operacao = 2
        limpar()
    }else{
        resultado -= visor
        document.getElementById('visor').innerHTML = resultado
        visor = 0
    }
}

const fMulti = () => {
    if(operacao === 0 && visor !== 0){
        resultado = visor
        operacao = 3
        limpar()
    }else{
        resultado *= visor
        document.getElementById('visor').innerHTML = resultado
        visor = 0
    }
}

const fDiv = () => {
    if(visor === 0 || (operacao !== 0 && resultado === 0)){
        document.getElementById('visor').innerHTML = 'ERROR'
    }else{
        if(operacao === 0){
            resultado = visor
            operacao = 4
            limpar()
        }else{
            resultado /= visor
            document.getElementById('visor').innerHTML = toFixed(4)
            visor = 0
        }
    }
}

const fResultado = () => {
    switch(operacao){
        case 1:
            resultado += visor
            document.getElementById('visor').innerHTML = resultado
            break;
        case 2:
            resultado -= visor
            document.getElementById('visor').innerHTML = resultado
            break;
        case 3:
            resultado *= visor
            document.getElementById('visor').innerHTML = resultado
            break;
        case 4:
            if(visor === 0 || (operacao !== 0 && resultado === 0)){
                document.getElementById('visor').innerHTML = 'ERROR' 
                limparALL
            }else{
                resultado /= visor
                document.getElementById('visor').innerHTML = resultado.toFixed(4)
                break;  
            }
    }
    visor = 0
    operacao = 0
    resultado = 0
}


b1.addEventListener('click',ad1)
b2.addEventListener('click',ad2)
b3.addEventListener('click',ad3)
b4.addEventListener('click',ad4)
b5.addEventListener('click',ad5)
b6.addEventListener('click',ad6)
b7.addEventListener('click',ad7)
b8.addEventListener('click',ad8)
b9.addEventListener('click',ad9)
b0.addEventListener('click',ad0)
clear.addEventListener('click', limparALL)
soma.addEventListener('click', fSomar)
menos.addEventListener('click', fSub)
multi.addEventListener('click', fMulti)
div.addEventListener('click', fDiv)
result.addEventListener('click', fResultado)
