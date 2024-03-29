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
                    <div className='cart__emptyContainer'>
                        <h4 className='cart__emptyTitle'>No se han agregado servicios</h4>
                        <Link to={"/"}><button className='cart__backButton'>Volver al Inicio</button></Link>
                    </div>
                </>
            ) : (
                <>
                  {cart.map((s) => (
                      <CartItem key={s.servicio.id} servicio={s} removeService={removeService} />
                  ))}
                  <button className='cart__emptyButton' onClick={emptyCart}>Vaciar Carrito</button>
                </>
            )}
        </div>

        {cart.length > 0 && (
            <div className="cart__summaryContainer">
                <h3 className='cart__summaryTitle'>Resumen de Servicios a Contratar</h3>
                <div className='cart__summaryServices'>
                    <ul>
                        {cart.map((s) => (
                            <li key={s.servicio.id} className='list__summaryServices'>{s.servicio.nombre} ({s.cantidad})</li>
                        ))}
                    </ul>
                </div>
                <h4 className='cart__summaryTotal'>Costo mensual estimado: ${totalServices()}</h4>
                <Link to={"/checkout"}><button className='cart__requestButton'>Solicitar Servicios</button></Link>
            </div>
        )}
    </div>
  )
}

export default Cart