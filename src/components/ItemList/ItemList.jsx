import React from 'react'
import Item from '../Item/Item'

const ItemList = ({services}) => {

  return (
    <div>
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


