import React, {useState,useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const [service,setService] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
      const newDoc = doc(db,"services",id)

      getDoc(newDoc).then(ans => {
        const data = ans.data()
        const newService = {id: ans.id,...data}
        setService(newService)
      })
      .catch(error => console.log(error))

  },[])
    
  return (
    <div className='itemDetali__container'>
      <ItemDetail service={service}/>
    </div>
  )
}

export default ItemDetailContainer