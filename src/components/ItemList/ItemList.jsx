import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({services}) => {

  return (
    <Item services={services}/>
  );

}

export default ItemList;
