import React, {useState, createContext} from "react";

export const CartContex = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addService = (servicio,cantidad) => {
        setCart([...cart, { servicio, cantidad }]);

        if (existingItem !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItem].cantidad += cantidad;
            setCart(updatedCart);
        } else {
            setCart([...cart, { servicio, cantidad }]);
        }
    }

    const removeService = (serviceId) => {
        const updatedCart = cart.filter(item => item.servicio.id !== serviceId);
        setCart(updatedCart);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const cartCount = () => {
        return cart.reduce((count, item) => count + item.cantidad, 0);
    }

    const totalServices = () => {
        return cart.reduce((total, item) => total + (item.servicio.precio * item.cantidad), 0);
    }

    return(
        <CartContex.Provider value={{
            cart,
            addService,
            removeService,
            emptyCart,
            cartCount,
            totalServices
        }}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider