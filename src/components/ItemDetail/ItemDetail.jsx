import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({service}) => {
    return (
        <div className="itemDetail__container">
            <h3 className="itemDetail__title">{service.nombre}</h3>
            <div className="itemDetail__imageContainer">
                <img className="itemDetail__image" src={service.img} alt={service.nombre}/>
            </div>
            <h4 className="itemDetail__price">Desde ${service.precio}</h4>
            <p className="itemDetail__description">{service.descripcion}</p>

            <div className="itemDetail__countContainer">
                <ItemCount initial={1} unit={service.unidades}/>
            </div>
        </div>
    );
};

export default ItemDetail;