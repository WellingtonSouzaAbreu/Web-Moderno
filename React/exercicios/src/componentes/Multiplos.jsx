import React from 'react'

// Export = exporta mas necessita ser importado por destructuring
// Export default = export e é chamado pelo nome que desejar

// Pode-se exportar variáveis diretamente, porém devems ser importadas com destructuring {}
export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default {
    BoaTarde, BoaNoite
}


