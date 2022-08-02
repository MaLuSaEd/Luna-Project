import '../Publicaciones/Publicaciones.scss'
import '../Publicacion/Publicacion'
import PublicacionDetailContainer from '../PublicacionDetailContainer/PublicacionDetailContainer'
import publicaciones_list from '../../utils/publicacionesMock'
import { useState, useEffect } from 'react'
const GetPublicacion = ({id}) => {
    
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
        <>
            {listPublicaciones.map(publi => {
                if(publi.id === id){
                        return(
                                <>
                                <PublicacionDetailContainer key={publi.id}  img = {publi.img} autor={publi.autor} nombre={publi.nombre} descripcion={publi.descripcion} stock={publi.stock} precio={publi.precio} id = {publi.id} />
                                </>
                        )
                }else{
                    return (<></>)
                }
                        })}
        </>
    )
}

export default GetPublicacion
