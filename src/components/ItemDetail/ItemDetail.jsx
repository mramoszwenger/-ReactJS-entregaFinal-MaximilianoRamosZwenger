import React from 'react'

const ItemDetail = ({service}) => {
  return (
    <div>
        <h3>{service.nombre}</h3>
        <img src={service.img} alt={service.nombre}/>
        <h4>Desde ${service.precio}</h4>
        <p>{service.descripcion}</p>
    </div>
  )
}

export default ItemDetail