import React from 'react'
import './Button.css'

/* Quanto menos componentes com estado(class), melhor */
export default (props) => {
    let classes = 'button ' //Classe aplicada independente de tudo //Espaço necessário
    classes += props.operation ? 'operation' : '' /* Classe são aplicadas de acordo com as propriedades */
    classes += props.double ?'double' : '' 
    classes += props.triple ?'triple' : ''
    // O conteudo de 'classes' será passado como parametro
    return (
    <button 
        onClick={e => props.click(props.label)} /* Recebe o valor do botão clicado */
        className={classes}>
        {props.label}
    </button>
    )
}

