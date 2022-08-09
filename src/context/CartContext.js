import { createContext , useState} from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([])
    console.log(cartProducts)

    const addProductToCart = (product) => {
        setCartProducts(cartProducts => [...cartProducts, product])
    }

    const clear = () =>{
        setCartProducts([])
    }
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clear
    }
    return(
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}