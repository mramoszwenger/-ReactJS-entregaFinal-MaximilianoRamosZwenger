import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart__widget__container">
            <img src="/src/assets/carro-compra.png" alt="carrito" className="cart__icon" />
            <p className="cart__count">0</p>
        </div>
    );
}

export default CartWidget;