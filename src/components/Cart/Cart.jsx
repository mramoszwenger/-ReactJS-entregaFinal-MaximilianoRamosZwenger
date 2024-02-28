import React, { useContext } from 'react';
import { CartContex } from '../../context/CartContex';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart} = useContext(CartContex)

  return (
    <div>
        <h3>Carrito</h3>
        {cart.length == 0 ? <>
        <h4>No hay servicios agregados</h4>
        <Link to={"/"}><button>Volver al Inicio</button></Link>
        </> : <h4>Mapeo de servicios agregados</h4>
        }
    </div>
  )
}

export default Cart