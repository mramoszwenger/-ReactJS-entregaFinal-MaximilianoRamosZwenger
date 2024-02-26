import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({service}) => {

  return (
    <Link to={`/detalle/${service.id}`}>

      <div className='global__itemContainer'>
        <div className="row">
          <div key={service.id} className="col-md-4 mb-4 text-center">
            <div className="card h-100 itemList__services__card">
              <div className="card-body">
                <img src={service.img} alt={service.nombre} className='itemList__service__img'/>
                <h3 className='itemList__services__name'>{service.nombre}</h3>
              </div>
            </div>
          </div> 
        </div>
      </div>

    </Link>   
  )
}

export default Item;