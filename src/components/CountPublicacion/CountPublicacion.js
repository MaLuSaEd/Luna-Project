import '../CountPublicacion/CountPublicacion.scss'
import  {useState} from 'react'

export default function CountPublicacion({stock, setQuantitySelected}){

    const [contador, setContador]  = useState(0)
    const [stockVar, setStock] = useState(stock)

    const addNumber = () =>{
        if (0 < stockVar){
            setContador(contador + 1)
            setStock(stockVar - 1)
        }
    }

    const subtractNumber = () => {
        if (contador > 0){
            setContador(contador - 1)
            setStock(stockVar + 1)
        }
    }

    const onAdd = () => {
        setQuantitySelected(contador)
    }

    return( 
        <div className='container-col'>
            <p> Quedan: {stockVar}</p>
            <div className='container-row'>
                
                <div className='countProd'>
                    <button onClick={subtractNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick = {addNumber}>+</button>
                </div>
            </div>
            <button onClick ={onAdd}> COMPRAR </button>
            
        </div>
        

    )
}