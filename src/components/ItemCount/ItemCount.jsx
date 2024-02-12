import React, {useState} from 'react'

const ItemCount = ({initial}) => {

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
        alert("Se agregaron " + contador + " equipo/s")
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