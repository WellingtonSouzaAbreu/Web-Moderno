import React, { Fragment } from 'react'

// React.Fragment envolve elementos mas não é renderizado na tela
/* export default props => [
    <h1 key='h11'>Bom Dia {props.nome}!</h1>,
    <h2 key='h12'>Até Breve!</h2>
] */

//O key otimiza a busca do react quando se busca em um array

export default props =>
    <div>
        <h1>Bom Dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </div>
