import PublicacionDetailContainer from '../components/PublicacionDetailContainer/PublicacionDetailContainer'
import publicaciones_list from '../utils/publicacionesMock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    useEffect(()=>{
        const getProducts =  new Promise((resolve, reject) => {
            setTimeout(()=>{resolve(publicaciones_list)})
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
    const id = useParams().id
    return (
        <>
        {listPublicaciones.map((publi, i) => {
            if(publi.id.toString() === id.toString()){
                    return(
                            <div key={i}>
                                <PublicacionDetailContainer  img = {publi.img} autor={publi.autor} nombre={publi.nombre} descripcion={publi.descripcion} stock={publi.stock} precio={publi.precio} id = {publi.id} />
                            </div>
                    )
            }else{
                return (<></>)
            }
                    })}
        </>
    )
}
export default Details