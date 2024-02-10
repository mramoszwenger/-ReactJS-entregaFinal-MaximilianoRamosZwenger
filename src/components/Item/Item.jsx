import React from 'react'
import './item.css';

const Item = ({services}) => {
  return (
    <div className='global__itemContainer'>
      <div className="row">
        {services.map((service, indice) => (
          <div key={service.id} className="col-md-4 mb-4 text-center">
            <div className="card h-100 itemList__services__card">
              <div className="card-body">
                <h3 className='itemList__services__name'>{service.nombre}</h3>
                <h3 className='itemList__services__price'>Desde ${service.precio}</h3>
                <h4 className='itemList__services__description'>{service.descripcion}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Item