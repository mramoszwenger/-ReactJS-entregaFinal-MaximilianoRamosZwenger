import React from 'react';
import './CartItem.css';

const CartItem = ({servicio,removeService}) => {

    return (
        <div className="cartItem__container">
            <div className="cartItem__imgContainer">
                <img src={servicio.servicio.img} alt={servicio.servicio.nombre} className="cartItem__image" />
            </div>
            <div className="cartItem__descriptionContainer">
                <h3 className="cartItem__title">{servicio.servicio.nombre}</h3>
                <p className="cartItem__quantity">Cantidad: {servicio.cantidad}</p>
                <p className="cartItem__price">Costo estimado: ${servicio.servicio.precio * servicio.cantidad}</p>
                <button className="cartItem__button" onClick={() => removeService(servicio.servicio.id)}>
                    Eliminar servicio
                </button>
            </div>
        </div>
    );
};

export default CartItem;