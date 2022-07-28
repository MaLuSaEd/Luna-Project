import Publicacion from "../Publicacion/Publicacion"
const PublicacionLits = ({dataProducts}) =>{
    return(
        <>
            {dataProducts.map(publi => {
                        return(
                            <div className="Publicaciones_publicacion">
                                <Publicacion key={publi.id}  img = {publi.img} autor={publi.autor} nombre={publi.nombre} descripcion={publi.descripcion} stock={publi.stock} />
                            </div>
                        ) 
                        })}
        </>
    )
}

export default PublicacionLits