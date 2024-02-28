import React, { useContext } from 'react';
import { CartContex } from '../../context/CartContex';

const Cart = () => {

    const {cart} = useContext(CartContex)

  return (
    <div>
        <h3>Carrito</h3>
        {cart.length == 0 ? <>
        <h4>No hay servicios agregados</h4>
        </> : <h4>Lista de servicios</h4>
        }
    </div>
  )
}

export default Cart