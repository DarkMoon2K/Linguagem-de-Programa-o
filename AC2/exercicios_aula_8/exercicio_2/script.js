let contador = 1
let botao = document.getElementById("botao")
let input = document.getElementById("item")
let p =  document.getElementById("p")
let div = document.getElementById("div")

const adicionarItem = () => {
    if(input.value !== ''){
        paragrafo = document.createElement('p')
        texto = document.createTextNode(contador.toString() + " - " + input.value)
        paragrafo.appendChild(texto)
        div.insertBefore(paragrafo, p)
        contador += 1
    }else{
        alert("O é preciso escrever o nome de um item para adiciona-lo na lista")
    }
}

botao.addEventListener('click', adicionarItem)

