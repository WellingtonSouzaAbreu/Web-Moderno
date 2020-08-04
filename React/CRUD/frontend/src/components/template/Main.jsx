import React from 'react'
import './Main.css'
import Header from './Header.jsx'

export default props =>
<React.Fragment>
    <Header {...props}/> {/* Propriedades do main estão sendo propagadas para o header */}
    <main className="content container-fluid">
        <div className="p-3 mt-3">
            {props.children}
        </div>
    </main>
</React.Fragment>