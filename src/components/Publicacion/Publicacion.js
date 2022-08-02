import './Publicacion.scss'
import '../CountPublicacion/CountPublicacion'
import CountPublicacion from '../CountPublicacion/CountPublicacion'
import Modal from '../Modal/Modal'
import React, { useState } from "react";
export default function Publicacion({img,autor, nombre, descripcion,precio, stock,id}){
    const [isOpen, setIsOpen] = useState(false);
    return(
            <div className='Publicacion'>
                <div className='Publicacion-imgBx' ><img className='Publicacion-imgBx-Imagen' src = {` /assets/Publicaciones/${img}`} alt="img-publicacion"/> </div>
                <div className='Publicacion-details'>
                    <p className='Publicacion-details-Nombre'>{nombre}</p>
                    <p className='Publicacion-details-Autor'> {autor}</p>
                    <p className='Publicacion-details-precio'>${precio}</p>
                    {/* <p className='Publicacion-details-Descripcion'>{descripcion}</p>*/}
                    <button className= "primaryBtn" onClick={() => setIsOpen(true)}>
                        Ver Mas
                    </button>
                    {isOpen && <Modal setIsOpen={setIsOpen} id = {id}/> }
                </div>
                <CountPublicacion stock = {stock}/>
                            </div>
            
            
    )
}