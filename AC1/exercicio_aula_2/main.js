// Exercicio 1 
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const us = new Usuario('Joao', 20);
const us1 = new Usuario('Maria', 30);
const us2 = new Usuario('Pablo',  18);
const us3 = new Usuario('Matheus',  15);

let usuarios = [us,us1,us2,us3];
let nomeM = usuarios.map((pessoa) => pessoa.nome.toUpperCase());
console.log("Exercicio 1:" + nomeM);

//Exercicio 2
let menorDeIdade = usuarios.filter((pessoa)=> pessoa.idade <= 18);

//Exercicio 3
let primeiroComMaisDe25 = usuarios.find((pessoa) => pessoa.idade >= 25);

// Exercicio 1
let numeros = []
for(i = 0; i <= 100; i++){
    numeros.push(i)
};
 
const numerosI =  numeros.filter(n => n % 2 !== 0 );
console.log("Exercicio 1: " + numerosI);
console.log();
console.log("Exercicio 2: ");
menorDeIdade.forEach(pessoa => {
    return console.log(pessoa.nome)    
});
console.log();
console.log("Exercicio 3: " + primeiroComMaisDe25.nome)
console.log();


// Exercicio 4
numeros = numeros.filter(n => n % 2 == 0);
numeros = numeros.map(n => n * 2);
console.log("Exercicio 4: " + numeros)
console.log()

//Exercicio 5
class Animal {
    constructor(nome){
    this.nome = nome

    }
    emitirSom(){

    }
}

class Cachorro extends Animal{
   
    
    emitirSom(){
        return console.log('AuAuAuAu')
    }
}

class Gato extends Animal{
    
    emitirSom(){
        return console.log('MiauMiau')
    }
}

const auau = new Cachorro('Toto')
const miumiu = new Gato('Garfield')

console.log("Exercicio 5: ")
auau.emitirSom()
miumiu.emitirSom()
console.log()

//Exercicio 6
class Livro {
    constructor(nome, paginas){
        this.nome = nome
        this.paginas = paginas
    }
}

let livros = [new Livro("livro1", 250), new Livro('livro2', 490), new Livro('livro3', 593)]

livros = livros.filter(l => l.paginas >= 300)

console.log("Exercicio 6: " );
livros.forEach(livro => {
    console.log(livro.nome)
});
console.log();

//Exercicio 7
class Carro {
    constructor(marca, ano){
        this.marca = marca
        this.ano = ano
    }
}

const carros = [new Carro('Nissan', 2007),new Carro('Toyota', 2004),new Carro('Honda', 2012),new Carro('Toyota', 2011)]

const primeiroToyota = carros.find(c => c.marca == 'Toyota')
console.log("Exercicio 7: ")
console.log(primeiroToyota)
const maisNovos = carros.filter(c =>  c.ano >= 2010)
console.log(maisNovos)
console.log()

//Exercicio 8
class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

const produtos = [new Produto('produto1', 50.00),new Produto('produto2', 70.00),new Produto('produto3', 120.00),]

const preçoAumentado = produtos.map(p => (p.preco * 1.10).toFixed(2))
console.log("Exercicio 8: " + preçoAumentado);
console.log();

const caro = produtos.find(p => p.preco >= 100)
caro.nome = 'Produto Caro'
console.log("Exercicio 9: " + caro.nome)
console.log();

numeros = []
for(i = 0; i <= 100; i++){
    numeros.push(i)
};

numeros = numeros.filter(n => n % 3 == 0).map(n => n * n)

console.log("Exercicio 10: " + numeros)