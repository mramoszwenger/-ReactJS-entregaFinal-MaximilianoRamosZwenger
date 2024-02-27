import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({services}) => {

  return (
      <div className='itemListContainer'>
        {
          services.map((service)=>{
            return(
              <Item key={service.id} service={service}/>
            )
          })
        }
      </div>
  )
}

export default ItemList


