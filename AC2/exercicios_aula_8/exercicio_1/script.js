let botao = document.getElementById('botao')
let divisao = document.getElementById('div1')
const cores = ['white','red', 'blue', 'pink', 'yellow', 'white', 'orange', 'gray', 'purple', 'coral']
function mudarCor() {
    divisao.style.backgroundColor = cores[Math.floor(Math.random()* (10 + 1 + 1)) + 1]
}

botao.addEventListener('click', mudarCor)

