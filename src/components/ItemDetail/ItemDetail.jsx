import React, {useState,useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContex } from '../../context/CartContex';

const ItemDetail = ({service}) => {

    const [cart,setCart] = useState(false)

    const {addService} = useContext(CartContex)

    const onAdd = (count) => {
        setCart(true)
        addService(service,count)
    }

    return (
        <div className="itemDetail__container">
            <h3 className="itemDetail__title">{service.nombre}</h3>
            <div className="itemDetail__flexContainer">
                <img className="itemDetail__image" src={service.img} alt={service.nombre} />
                <div className="itemDetail__infoContainer">
                    <h4 className="itemDetail__price">Desde ${service.precio}</h4>
                    <p className="itemDetail__description">{service.descripcion}</p>
                    <div className="itemDetail__countContainer">
                        {cart ? <Link to={'/carrito'}>Ver Carrito</Link> : <ItemCount initial={1} unit={service.unidades} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;