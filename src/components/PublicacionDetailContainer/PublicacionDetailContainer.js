import './PublicacionDetailContainer.scss'
import '../CountPublicacion/CountPublicacion'
export default function PublicacionDetailContainer({img,autor, nombre, descripcion,precio, stock}){

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
        </div>
    )
}