import React from 'react'

import Google from '../../../assets/imagenes/google-icon.png'
import Twitter from '../../../assets/imagenes/twitter-icon.png'

import './style.css'


function Hero(){
    return(
        
        <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form">
            <input className="input" type="text" placeholder="Correo"/>
            <input className="input" type="password" placeholder="Contraseña"/>
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={Google}/> Inicia sesión con Google</div>
            <div><img src={Twitter}/> Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
        </section>
      </section>
    )
}

export default Hero