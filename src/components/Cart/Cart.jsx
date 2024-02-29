import React, { useContext } from 'react';
import { CartContex } from '../../context/CartContex';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const {cart,removeService,emptyCart,totalServices} = useContext(CartContex)

  return (
    <div>
        {cart.length == 0 ? <>
        <h4>No hay servicios agregados</h4>
        <Link to={"/"}><button>Volver al Inicio</button></Link>
        </> : 
              <>
                <h4>Servicios a Solicitar</h4>
                {cart.map((s) => (
                  <CartItem key={s.id} servicio={s} removeService={removeService}/>
                ))}

                <h4>Total: ${totalServices()}</h4>

                <button onClick={emptyCart}>Vaciar Carrito</button>
              </>
        }
    </div>
  )
}

export default Cart