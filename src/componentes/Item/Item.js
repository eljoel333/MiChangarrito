// import './Item.css'
import { Link } from 'react-router-dom'
import { useState, createContext, useContext } from "react";

const Item = ({id, title, thumbnail, price, cat}) => {

 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}{cat}
                </h2>
            </header>
            <picture>
                <img src={thumbnail} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/category/'${cat}'/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item