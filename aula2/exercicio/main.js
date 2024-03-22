// Exercicio 1 
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const us = new Usuario('Joao', 20)
const us1 = new Usuario('Maria', 30)
const us2 = new Usuario('Pablo',  18)
const us3 = new Usuario('Matheus',  15)

let usuarios = [us,us1,us2,us3]
let nomeM = usuarios.map((pessoa) => pessoa.nome.toUpperCase());
let menorDeIdade = usuarios.filter((pessoa)=> pessoa.idade <= 18);
let primeiroComMaisDe25 = usuarios.find((pessoa) => pessoa.idade >= 25);

let numeros = []
for(i = 0; i <= 100; i++){
    numeros.push(i)
};

numeros =  numeros.filter(n => n % 2 == 0 );
numeros = numeros.map(n => n * 2);

class Animal {
    constructor(nome){
    this.nome = nome

    }
    emitirSom(){

    }
}

class Cachorro extends Animal{
   
    
    emitirSom(){
        return 'AuAuAuAu'
    }
}

class Gato extends Animal{
    
    emitirSom(){
        return 'MiauMiau'
    }
}

const auau = new Cachorro('Toto')
const miumiu = new Gato('Garfield')

class Livro {
    constructor(nome, paginas){
        this.nome = nome
        this.paginas = paginas
    }
}

let livros = [new Livro("livro1", 250), new Livro('livro2', 490), new Livro('livro3', 593)]

ivros = livros.filter(l => l.paginas >= 300)

class Carro {
    constructor(marca, ano){
        this.marca = marca
        this.ano = ano
    }
}

const carros = [new Carro('Nissan', 2007),new Carro('Toyota', 2004),new Carro('Honda', 2012),new Carro('Toyota', 2011)]

const primeiroToyota = carros.find(c => c.marca == 'Toyota')
const maisNovos = carros.filter(c =>  c.ano >= 2010)

class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

const produtos = [new Produto('produto1', 50.00),new Produto('produto2', 70.00),new Produto('produto3', 120.00),]

const preçoAumentado = produtos.map(p => (p.preco * 1.10).toFixed(2))

const caro = produtos.find(p => p.preco >= 100)
caro.nome = 'Produto Caro'
console.log(caro.nome)


numeros = []
for(i = 0; i <= 100; i++){
    numeros.push(i)
};

numeros = numeros.filter(n => n % 3 == 0).map(n => n * n)

console.log(numeros)