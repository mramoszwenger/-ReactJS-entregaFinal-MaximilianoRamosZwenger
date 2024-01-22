import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget-container">
            <img src="/carro-compra.png" alt="carrito" className="cart-icon" />
            <p className="cart-count">0</p>
        </div>
    );
}

export default CartWidget;