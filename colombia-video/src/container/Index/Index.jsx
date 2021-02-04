import React from 'react'

import Header from '../../componets/header/Header'
import HeaderMenu from '../../componets/vista_principal/menu-header/MenuHeader'
import Main from '../../componets/vista_principal/main/Main'
import Carousel from '../../componets/vista_principal/carousel/Carousel'
import Footer from '../../componets/footer/Footer'

import './styles.css'

function Index(){
    return(
        <>
            <Header>
                <HeaderMenu/>
            </Header>
            <Main/>
            <Carousel/>
            <Carousel/>
            <Carousel/>
            <Footer/>
        </>

    )
}

export default Index