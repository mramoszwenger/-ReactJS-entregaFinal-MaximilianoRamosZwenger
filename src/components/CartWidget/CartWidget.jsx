import React, {useContext} from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContex } from '../../context/CartContex';

const CartWidget = () => {

    const {cartCount} = useContext(CartContex)

    return (
        <Link to="/carrito" className="cart__widget__container">
            <img src="src/assets/img/carro-compra.png" alt="carrito" className="cart__icon"/>
            {cartCount !== 0 && <p className="cart__count">{cartCount}</p>}
        </Link>

    );
}

export default CartWidget;