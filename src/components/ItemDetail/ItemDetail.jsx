import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({service}) => {
  return (
    <div>
        <h3>{service.nombre}</h3>
        <img src={service.img} alt={service.nombre}/>
        <h4>Desde ${service.precio}</h4>
        <p>{service.descripcion}</p>

        <ItemCount initial={1} category={service.categoria}/>
    </div>
  )
}

export default ItemDetail