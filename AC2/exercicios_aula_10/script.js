class Pessoa{
    constructor(nome, telefone, email, cpf, rg, Cargo, Setor, Convenio){
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.cpf = cpf
        this.rg = rg
        this.Cargo = Cargo
        this.Setor = Setor
        this.Convenio = Convenio
    }
}

class Cargo{
    constructor(nome, salario){
        this.nome = nome
        this.salario =  salario
    }
}

class Setor{
    constructor(sigla, nome){
        this.sigla = sigla
        this.nome = nome
    }
}

class Convenio{
    constructor(nome, valorT, valorD){
        this.nome = nome
        this.valorT = valorT
        this.valorD = valorD
    }
}

const url = 'https://6647b1e92bb946cf2f9ea1f5.mockapi.io/ex10/pessoais'
const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")
const email = document.getElementById("email")
const cpf = document.getElementById("cpf")
const rg = document.getElementById("rg")
const nomeCargo = document.getElementById("nomeCargo")
const nomeSetor = document.getElementById("nomeSetor")
const salario = document.getElementById("salario")
const sigla = document.getElementById("sigla")
const precoTitular = document.getElementById("precoTitular")
const precoDependente = document.getElementById("precoDependente")
const nomeConvenio = document.getElementById("nomeConvenio")

const botao = document.getElementById("botao")

function enviarDados (){
    if(nome.value && telefone.value && email.value && cpf.value && rg.value && nomeCargo.value && salario.value && nomeSetor.value && sigla.value && nomeConvenio.value && precoTitular.value && precoDependente.value){
        const co1 = new Convenio(nomeConvenio.value, precoTitular.value, precoDependente.value)
        const s1 = new Setor(nomeSetor.value, sigla.value)
        const c1 = new Cargo(nomeCargo.value, salario.value)
        const p1 = new Pessoa(nome.value, telefone.value, email.value, cpf.value, rg.value,c1,s1,co1)
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(p1),
        }).then(function(reponse){
            clear()
            alert("Dados enviados")
        }).catch(function(error){
            clear()
            alert("Erro em enviar os dados")
        })
        
    
    }else{
        alert('Preencha todos os campos antes de enviar os dados')
    }
}

const clear = () => {
    nome.value = ''
    telefone.value = ''
    rg.value = ''
    cpf.value = ''
    email.value = ''
    nomeCargo.value = ''
    nomeConvenio.value = ''
    nomeSetor.value = ''
    salario.value = ''
    sigla.value = ''
    precoDependente.value = ''
    precoTitular.value = ''
}

botao.addEventListener('click', enviarDados)