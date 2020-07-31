class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        idade = idade //Sem o this não se pode acessar o método fora do objeto
    }
    dizerOi = () => { console.log('Oi pessoal') }
    dizerIdade() { console.log(`Tenho ${this.idade} anos`) }
}

let ana = new Pessoa('Wellington', 20)
// ana.dizerOi()
// console.log(ana.nome)
// console.log(ana.idade) //Undefined
// ana.dizerIdade()

function Humano(nome, idade) {
    this.nome = nome
    idade = idade  // Não deixa ele visível fora do objeto
    this.dizerOla = () => { console.log('Olá!') }
    dizerNome = () => { console.log(`Me chamo ${this.nome}`) } // Só pode ser acessado dentro do objeto
    this.dizerIdade = () => {
        console.log(`Minha idade é ${idade}`)
        dizerNome()
    }

}

const joao = new Humano('João', 99)
// joao.dizerOla()
// console.log(joao.nome)
// joao.dizerIdade()
// joao.dizerIdade()

function criarSer(nome, sexo) {
    return {
        nome,
        sexo,
        dizerBlaBla() { console.log('BlaBla!') },
        set nome(valor) { console.log('Foi setado') } // Permite contorle de acesso
    }
}

const tico = criarSer('Tico', 'Macho')
// console.log(tico.nome)
// tico.dizerBlaBla()

function Carro(modelo, cor, ano) {
    this.modelo = modelo
        this.cor = cor
        this.ano = ano
        this.rodarRodas = () => {
            let roda1 = new Roda('Soft', false, 'dianteira esquerda')
            let roda2 = new Roda('Hign', true, 'dianteira direita')
            let roda3 = new Roda('Medium', true, 'traseira esquerda')
            let roda4 = new Roda('Soft', false, 'traseira direita')
            roda1.rodar()
            roda2.rodar()
            roda3.rodar()
            roda4.rodar()
        }
}

function Roda(tipo, calota, posicao) {
    this.tipo = tipo
    this.calota = calota
    this.posicao = posicao
    this.rodar = () => {
        let cal = this.calota ? 'com' : 'sem'
        console.log(`Rodando roda ${this.tipo} ${cal} calota, ${this.posicao}`)
    }
}

let lamborguini = new Carro('Gallardo', 'verde', 2019)
lamborguini.rodarRodas()