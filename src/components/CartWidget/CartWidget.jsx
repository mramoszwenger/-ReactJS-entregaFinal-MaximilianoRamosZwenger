import React, {useContext} from 'react';
import './CartWidget.css';
import { CartContex } from '../../context/CartContex';

const CartWidget = () => {

    const {totalCount} = useContext(CartContex)

    return (
        <div className="cart__widget__container">
            <img src="src/assets/img/carro-compra.png" alt="carrito" className="cart__icon"/>
            {totalCount !== 0 && (
            <p className="cart__count">{totalCount}</p>
            )}
        </div>
    );
}

export default CartWidget;