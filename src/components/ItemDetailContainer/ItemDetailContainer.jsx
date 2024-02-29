import React, {useState,useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const [service,setService] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
      const fetchData = async () => {
          try {
              const response = await fetch("/services.json");
              const data = await response.json()
              const serv = data.find((p)=>p.id == id)
              setService(serv)
          }catch(error){
              console.log("Error en el fetch " + error)
          }
      }

      fetchData()

  },[])
    
  return (
    <div className='itemDetali__container'>
      <ItemDetail service={service}/>
    </div>
  )
}

export default ItemDetailContainer