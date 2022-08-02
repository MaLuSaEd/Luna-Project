import '../CountPublicacion/CountPublicacion.scss'
import  {useState} from 'react'

export default function CountPublicacion({stock, action}){

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

    return( 
        <div className='container-col'>
            <p> Quedan: {stockVar}</p>
            <div className='container-row'>
                <button onClick ={action}> Comprar </button>
                <div className='countProd'>
                    <button onClick={subtractNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick = {addNumber}>+</button>
                </div>
            </div>
            
        </div>
        

    )
}