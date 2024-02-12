import React, {useState} from 'react';

const ItemCount = ({initial,category}) => {

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
        alert("Se agregaron " + contador + " " + category)
    }

  return (
    <div>
        <p>{category}: {contador}</p>
        <button onClick={decrementar}>-</button>
        <button onClick={agregarCarrito}>Agregar Servicio</button>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount