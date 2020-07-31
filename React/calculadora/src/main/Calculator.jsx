import React, { Component } from 'react'
import './Calculator.css'

import Button from './../components/Button.jsx'
import Display from '../components/Display.jsx'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props) //Necessário para que os componentes filhos possam acessar os metodos do pai
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {  //Atributos manipulados: Current, operation, values, clearDisplay
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true }) /* Com o clear display true, o proximo dígito limpa-o */
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation // Current operation pega a operação anterior para ser resolvida

            const values = [...this.state.values]

            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) //Evals = Calcula se for uma expressão válida
            }catch(e){
                values[0] = this.state.values[0] // Se der erro ele apenas repete o valor
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation, //Se for igual, passará a ser nulo
                current: equals ? 0 : 1, // Se for igual, zera o current
                clearDisplay: !equals, //Se for diferente de igual, limpa o display
                values
            })
        }

    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current // Indice corrente
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] // Clonando todos os dados
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        /* const addDigit = n => this.addDigit(n)  //Dentro de render representa o objeto atual
        const setOperation = op => this.setOperation(op) */

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />

            </div>
        )
    }
}