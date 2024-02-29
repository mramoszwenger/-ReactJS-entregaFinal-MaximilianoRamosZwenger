import React from 'react';

const CartItem = ({servicio,removeService}) => {

    return (
        <div>
            <h3>{servicio.servicio.nombre}</h3>
            <img src={servicio.servicio.img} alt={servicio.servicio.nombre}/>
            <p>Cantidad: {servicio.cantidad}</p>
            <p>Costo estimado: ${servicio.servicio.precio*servicio.cantidad}</p>
            <button onClick={()=> removeService(servicio.servicio.id)}>Eliminar servicio</button>
        </div>
    );
};

export default CartItem;