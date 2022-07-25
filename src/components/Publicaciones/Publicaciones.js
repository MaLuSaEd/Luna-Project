import '../Publicaciones/Publicaciones.scss'
import '../Publicacion/Publicacion'
import Publicacion from '../Publicacion/Publicacion'
const Publicaciones = () => {

    return(
        <div>
            <div className="Publicaciones">
                <div className="Publicaciones_fila">
                < Publicacion img = 'peligrosfumarcama.webp' autor ='Mariana Enriquez'  nombre= 'Los peligros de fumar en la cama' descripcion= 'Doce cuentos en los que lo terroríﬁco se inﬁltra en lo cotidiano. Doce relatos perturbadores que llevan el género de terror a una nueva dimensión.' stock = {6} />
                </div>
            </div>
        </div>
    )
}

export default Publicaciones