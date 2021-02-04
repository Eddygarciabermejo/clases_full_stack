import React from 'react'

import User from '../../../assets/imagenes/user-icon.png'

import '../../../assets/css/header.css'


 
function MenuHeader(){
    return(
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={User} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    )
}

export default MenuHeader
