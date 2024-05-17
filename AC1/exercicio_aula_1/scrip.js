const texto = document.getElementById('texto');

let numero1 = prompt("Digite o primeiro numero:");
while(Number.isNaN(Number(numero1))){
    alert("Você digitou um valor invalido")
    numero1 = prompt("Digite o primeiro numero:")
};
let numero2 = prompt("Digite o segundo numero:");
while(Number.isNaN(Number(numero2))){
    alert("Você digitou um valor invalido")
    numero2 = prompt("Digite o segundo numero:")
};
let operacao = prompt("Digite uma das operações(+,-,x,/) ");
while(operacao != '+' && operacao != '-' && operacao != 'x' && operacao != '/'){
    alert("Operação invalida")
    operacao = prompt("Digite uma das operacoes(+,-,x,/) ")
}
let resultado;

switch(operacao){
case "+":
    resultado = Number(numero1) + Number(numero2)
    break;
case "-":
    resultado = Number(numero1) - Number(numero2)
    break;
case "x":
    resultado = Number(numero1) * Number(numero2)
    break;
case "/":
    resultado = Number(numero1) / Number(numero2)
    break;
};

texto.innerHTML += `<p>Resutaldo da sua operação: ${resultado} </p>`;

let numero100 = Number(prompt("Digite um numero qualquer:"));

texto.innerHTML += `<p>`
for(i = 0; i <= numero100; i++){
    if(i % 2 == 0){
        texto.innerHTML += `${i},` 
    }
}
texto.innerHTML += `</p>`

let textoGenerico = prompt("Digite uma frase aleatoria");
texto.innerHTML += `<p>Sua frase tem ${textoGenerico.length} caracteres</p>`

let nome = prompt("Digite seu nome completo")
const nomeSeparado = nome.split(" ")
const primeiroNome = nomeSeparado[0].toLowerCase()
const ultimoNome = nomeSeparado[nomeSeparado.length - 1].toLowerCase()

const email = primeiroNome + "." + ultimoNome + "@facens.br"

texto.innerHTML += `<p>Seu email: ${email}</p>`;



