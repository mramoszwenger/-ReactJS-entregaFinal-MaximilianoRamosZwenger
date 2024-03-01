import React, { useContext } from 'react';
import { CartContex } from '../../context/CartContex';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {

    const {cart,removeService,emptyCart,totalServices} = useContext(CartContex)

  return (
    <div className="cart__itemsContainer">
        <div className="cart__items">
            {cart.length === 0 ? (
                <>
                    <h4>No hay servicios agregados</h4>
                    <Link to={"/"}><button>Volver al Inicio</button></Link>
                </>
            ) : (
                <>
                  {cart.map((s) => (
                      <CartItem key={s.servicio.id} servicio={s} removeService={removeService} />
                  ))}
                </>
            )}
        </div>

        {cart.length > 0 && (
            <div className="cart__summaryContainer">
                <h3>Resumen Servicios a Contratar</h3>
                <h4 className='cart__summaryTotal'>Costo estimado: ${totalServices()}</h4>
                <button className='cart__summaryButton' onClick={emptyCart}>Vaciar Carrito</button>
            </div>
        )}
    </div>
  )
}

export default Cart