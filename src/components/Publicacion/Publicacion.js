import './Publicacion.scss'
import '../CountPublicacion/CountPublicacion'
import CountPublicacion from '../CountPublicacion/CountPublicacion'
import Modal from '../Modal/Modal'
import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
export default function Publicacion({data}){
    const [isOpen, setIsOpen] = useState(false);
    const { addProductToCart} = useContext(CartContext)
    const addToCart = (e) => {
        addProductToCart(data)
    }
    return(
       
            <div className='Publicacion'>
                 <Link to = {`/Editorial/${data.id}`}> 
                <div className='Publicacion-imgBx' ><img className='Publicacion-imgBx-Imagen' src = {` /assets/Publicaciones/${data.img}`} alt="img-publicacion"/> </div>
                </Link>
                <div className='Publicacion-details'>
                    <p className='Publicacion-details-Nombre'>{data.nombre}</p>
                    <p className='Publicacion-details-Autor'> {data.autor}</p>
                    <p className='Publicacion-details-precio'>${data.precio}</p>
                    {/* <p className='Publicacion-details-Descripcion'>{descripcion}</p>*/}
                    <button className= "primaryBtn" onClick={() => setIsOpen(true)}>
                        Ver Mas
                    </button>
                    {isOpen && <Modal setIsOpen={setIsOpen} id = {data.id}/> }
                </div>
                <CountPublicacion stock = {data.stock}/>
                <button onClick={addToCart}>AGREGAR AL CARRITO</button>
            </div>
  
            
    )
}