import React from 'react' //React usado para converter JSX
import ReactDOM from 'react-dom'

import Estilo from './componentes/pratica/estilo.css'

import Lateral from './componentes/pratica/Lateral.jsx'
import LogoUser from './componentes/pratica/LogoUser.jsx'

// import Pai from './componentes/Pai.jsx'
// import Filho from './componentes/Filho.jsx'
// {/* <Pai nome="Paulo" sobrenome="Silva">  {/* Instância de classe, ou function */}
//     {/* Como passar os filhos por aqui, fora do componente, podendo definir a quantiade de filhos */}
//     <Filho nome="Pedro" />
//     <Filho nome="Paulo" />
//     <Filho nome="Maria" />
// </Pai> */}

// Dados recebidos em props são somente leitura
// Sentença JSX
ReactDOM.render(
    <Calculator />
    , document.getElementById('pagina-root'))

// Semelhante ao jquery, a sentença JSX é convertida em JS
// $('<h1>').html('React 1') 

