import './Publicacion.scss'
import '../CountPublicacion/CountPublicacion'
import CountPublicacion from '../CountPublicacion/CountPublicacion'
export default function Publicacion({img,autor, nombre, descripcion, stock}){

    return(
        <div className='Publicacion'>
            <div className='Imagen'><img src = {` /assets/Publicaciones/${img}`} alt="img-publicacion"/> </div>
            <p>{autor}</p>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <CountPublicacion stock = {stock}/>
        </div>
    )
}