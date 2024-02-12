import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [service,setService] = useState([]);

  const {id} = useParams();

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

    },[])

  return (
    <div>
      <ItemDetail service={service}/>
    </div>
  )
}

export default ItemDetailContainer