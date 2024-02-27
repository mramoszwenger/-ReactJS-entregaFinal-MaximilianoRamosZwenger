import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({service}) => {

  return (
    <Link to={`/detalle/${service.id}`}>

      <div className='global__itemContainer'>
        <div className='itemList__cardContainer'>
          <div key={service.id} className="text-center">
            <div className="card itemList__services__card">
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