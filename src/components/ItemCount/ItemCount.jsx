import React, {useState} from 'react'

const ItemCount = () => {

    const [contador,setContador] = useState(1);

    const incrementar = () => {
        setContador(contador+1)
    }
    
    const decrementar = () => {
        if(contador > 1){
            setContador(contador-1)
        }
    }

    const agregarCarrito = () => {
        alert("Servicio agregado " + contador)
    }

  return (
    <div>
        <p>{contador}</p>
        <button onClick={decrementar}>-</button>
        <button onClick={agregarCarrito}>Agregar Servicio</button>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount