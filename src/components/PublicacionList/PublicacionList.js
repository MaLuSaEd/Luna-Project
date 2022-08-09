import Publicacion from "../Publicacion/Publicacion"
const PublicacionLits = ({dataProducts}) =>{
    return(
        <>
            {dataProducts.map((publi,i) => {
                        
                        return(
                            <div key={i}>
                                <Publicacion key={i}  data = {publi} />
                            </div>
                        ) 
                        })}
        </>
    )
}

export default PublicacionLits