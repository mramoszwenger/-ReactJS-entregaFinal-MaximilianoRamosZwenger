import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial,unit,onAdd}) => {

    const [contador,setContador] = useState(1);

    const incrementar = () => {
        setContador(contador+1)
    }

    const decrementar = () => {
        if(contador > initial){
            setContador(contador-1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }

  return (
    <div className="itemCount__container">
        <p className="itemCount__value">{unit}: {contador}</p>
        <div className="itemCount__buttons">
            <button className="itemCount__button" onClick={decrementar}>-</button>
            <button className="itemCount__button" onClick={agregarCarrito}>AGREGAR SERVICIOS</button>
            <button className="itemCount__button" onClick={incrementar}>+</button>
        </div>
    </div>
  )
}

export default ItemCount;