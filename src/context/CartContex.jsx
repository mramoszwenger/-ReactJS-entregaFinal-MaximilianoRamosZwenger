import React, {useState, createContext} from "react";

export const CartContex = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [totalCount,setTotalCount] = useState(0)

    const addService = (servicio,cantidad) => {
        console.log(servicio)
        console.log(cantidad)
    }

    const removeService = () => {}

    const emptyCart = () => {}

    const servicesCount = () => {}

    const totalServices = () => {}

    return(
        <CartContex.Provider value={{
            cart,
            total,
            totalCount,
            addService,
        }}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider