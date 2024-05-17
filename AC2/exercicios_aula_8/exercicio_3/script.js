const botao = document.getElementById('button')
const botao10 = document.getElementById('button10')
const botao100 = document.getElementById('button100')
let valor = Number(document.getElementById('valor').innerText)

const somar = (v) => {
    valor += v
    document.getElementById('valor').innerHTML = valor
}

const somar1 = () => {
    somar(1)
}

const somar10 = () => {
    somar(10)
}

const somar100 = () => {
    somar(100)
}

botao.addEventListener('click', somar1)
botao10.addEventListener('click', somar10)
botao100.addEventListener('click', somar100)