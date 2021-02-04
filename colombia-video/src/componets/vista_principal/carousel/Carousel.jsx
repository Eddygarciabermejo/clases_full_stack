import React from 'react'
import Item from './items/Itme'

import './style.css'

function Carousel(){
    return(
        <>
        <h3 class="categories__title">Mi lista</h3>

        <section class="carousel">
            <div class="carousel__container">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </section>
        </>
    )
}

export default Carousel