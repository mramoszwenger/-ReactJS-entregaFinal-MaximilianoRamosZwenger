import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {

  const [service,setService] = useState([]);

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch("./services.json");
          const data = await response.json()
          const service = data.find((s)=>s.id == id)
          setService(service)
        }catch(error){
          console.log("Error en el fetch " + error)
        }
      }

      fetchData()

    },[id])

  return (
    <div>
      <ItemDetail service={service}/>
    </div>
  )
}

export default ItemDetailContainer