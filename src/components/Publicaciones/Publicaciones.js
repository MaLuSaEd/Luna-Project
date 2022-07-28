import '../Publicaciones/Publicaciones.scss'
import '../Publicacion/Publicacion'
import PublicacionLits from '../PublicacionList/PublicacionList'
import publicaciones_list from '../../utils/publicacionesMock'
import { useState, useEffect } from 'react'
const Publicaciones = () => {
    
    useEffect(()=>{
        const getProducts =  new Promise((resolve, reject) => {
            setTimeout(()=>{resolve(publicaciones_list)},2000)
        })
        getProducts
            .then((res) => {  // Respuesta Ok
                //console.log("Productos: ", res)
                setListPublicaciones(res)
            })
            .catch((error) => { // Falla la respuesta 
                console.log("la llamada fallo")
            })
            .finally(() => { //Siempre que termina por ok o fallo
                //setSpinner(false)
            })
    },[])

    
    const [listPublicaciones, setListPublicaciones] = useState([])

    return(
        <div>
            <div className="Publicaciones">
                <PublicacionLits dataProducts={listPublicaciones}/>
            </div>
        </div>
    )
}

export default Publicaciones