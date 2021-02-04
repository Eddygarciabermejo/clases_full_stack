import React from 'react'

import './style.css'

function Main() {
    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" class="input" placeholder="Buscar..." />
        </section>
    )
}

export default Main