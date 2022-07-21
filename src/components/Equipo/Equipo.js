import Integrante from "../Integrante/Integrante"
import './Equipo.scss'
const Equipo = () => {
    return(
        <div>
            <h1>EQUIPO</h1>
            <div className="Integrantes">
                <div className="Integrantes_fila">
                    <Integrante img = "MartinaLasalle.gif" nombre = "Martina Lasalle" descripcion = "SOCIÓLOGA | EDITORA DE LIBROS Y REVISTAS CULTURALES Y CIENTÍFICAS | ORGANIZADORA DE EVENTOS CULTURALES Y CIENTÍFICOS"  />
                    <Integrante img = "OsvaldoTonkonoff.gif" nombre = "Osvaldo Tonkonoff" descripcion = "DIRECTOR GENERAL DE LUNA NUEVA ORG | GESTOR CULTURAL | SONIDISTA | PRODUCTOR | EDITOR | DJ - MUSICALIZADOR PROFESIONAL | REMIXER | RADIO HOST"  />
                </div>
            </div>
        </div>
    )
}

export default Equipo
