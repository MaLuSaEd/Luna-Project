import './Integrante.scss'
export default function Integrante({img, nombre, descripcion}){
    return(
        <div className='Integrante'>

            <div className='Imagen'><img src = {` /assets/Integrantes/${img}`} alt="img-integrante"/> </div>
            <p>{nombre}</p>
            <p>{descripcion}</p>
        </div>
    )
}