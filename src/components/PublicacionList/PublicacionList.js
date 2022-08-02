import Publicacion from "../Publicacion/Publicacion"
const PublicacionLits = ({dataProducts}) =>{
    return(
        <>
            {dataProducts.map(publi => {
                        return(
                            <>
                                <Publicacion key={publi.id}  img = {publi.img} autor={publi.autor} nombre={publi.nombre} descripcion={publi.descripcion} stock={publi.stock} precio={publi.precio} id = {publi.id} />
                            </>
                        ) 
                        })}
        </>
    )
}

export default PublicacionLits