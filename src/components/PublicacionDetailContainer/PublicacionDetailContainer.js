import './PublicacionDetailContainer.scss'
import '../CountPublicacion/CountPublicacion'
import CountPublicacion from '../CountPublicacion/CountPublicacion'
import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function PublicacionDetailContainer({img,autor, nombre, descripcion,precio, stock}){

    const [quantitySelected, setQuantitySelected] = useState(0) 
    
    return(
        <div className='cont-col'>
            <div className='Publicacion'>
                <div className='Publicacion-imgBx' ><img className='Publicacion-imgBx-Imagen' src = {` /assets/Publicaciones/${img}`} alt="img-publicacion"/> </div>
                <div className='Publicacion-details'>
                    <p className='Publicacion-details-Nombre'>{nombre}</p>
                    <p className='Publicacion-details-Autor'> {autor}</p>
                    <p className='Publicacion-details-precio'>${precio}</p>
                    <p className='Publicacion-details-Descripcion'>{descripcion}</p>
                </div>
            </div>
            {console.log(quantitySelected)}
            {
                quantitySelected > 0 ? <Link to = '/Apoyo'> TERMINAR COMPRA </Link>: <CountPublicacion stock = {stock} setQuantitySelected = {setQuantitySelected}/>
            }
            
            
        </div>
    )
}