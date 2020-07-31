import React, { Component } from 'react'

// Classes tem a vantagem de possuirem status e ciclo de vida(permite saber quando um elemento é destruído, possibilitando alguma ação)
export default class Saudacao extends Component {

    state = { // State é uma propriedade semelhante a props, porém pode ser alterado
        tipo: this.props.tipo, //State pega valores default de props
        nome: this.props.nome
    }

    constructor(props){
        super(props) // Necessita o super para as propriedades serem adicionadas ao component
        this.setTipo = this.setTipo.bind(this) //Isso faz com que o Saudação seja o this
    }

    setTipo(e) { // Dados recebidos em props são somente leitura
        this.setState({ tipo: e.target.value }) //Para manipular o componene deve-se utilizar o state
        /* let i = 1
        setInterval(() =>{
            this.setState({tipo: ++i})
        },1000) */
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state // Extrai eleemntos de props
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
                <input type="text" placeholder="3323"/>
            </div>
        )
    }
}