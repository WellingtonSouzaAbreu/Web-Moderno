import React from 'react'
import Title from './Title.css'

export default props => {
    return (
        <h2 className="title" onClick={e => e.target.innerText = 'Calculadora monstra'}>
            {props.text}
        </h2>
    )
}