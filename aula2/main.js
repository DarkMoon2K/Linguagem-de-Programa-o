const email = texto          => {
    const nomeSeparado = texto.split(" ")
    const primeiroNome = nomeSeparado[0].toLowerCase()
    const ultimoNome = nomeSeparado[nomeSeparado.length - 1].toLowerCase()
    return primeiroNome + "." + ultimoNome + "@facens.br"
}

console.log(email("Kaua Henrique Seraphim"))

const numerosPares = intervalo => {
    texto = ""
    for(i = 0; i <= intervalo; i++){
        if(i % 2 != 0){
            texto += i + "|"
        }
    }
    return texto
}

console.log(numerosPares(100))

const lista = [20,30,40]

console.log(lista);