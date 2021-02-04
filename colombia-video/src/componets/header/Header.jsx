import React from 'react'


import '../../assets/css/header.css'

import Logo from '../../assets/imagenes/logo.png'


function Header({children}){

    return(
        <header className="header">
            <img className="header__img" src={Logo} alt="colombia Video"/>
            {children}
        </header> 
    )
}

export default Header
