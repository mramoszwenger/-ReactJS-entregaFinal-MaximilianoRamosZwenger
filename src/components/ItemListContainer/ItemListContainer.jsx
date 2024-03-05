import {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection,getDoc,getDocs,query,where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [services,setServices] = useState([]);
    const {category} = useParams()
    const [showItemList, setShowItemList] = useState(true);

    useEffect(()=>{

        const ourServices = category ? query(collection(db,"services"),where("categoria","==",category)) : collection(db,"services")

        getDocs(ourServices).then((ans) => {
            const newServices = ans.docs.map((doc) => {
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setServices(newServices)
        })

        setShowItemList(!category);

    },[category])

  return (
    <div className='global__itemContainer'>

        {showItemList && (
        <div className="itemList__container">
            <div className="itemList__content">
                <h2 className='itemList__title'>Soluciones para Potenciar tu Negocio</h2>
                
                <p className='itemList__description'>Brindamos Soluciones IT a medida, acompañando a nuestros clientes en los procesos de mejora y modernización de sus negocios desde una perspectiva tecnológica integral, y maximizando al mismo tiempo esfuerzos para reducir el impacto medioambiental, al gestionar y mantener la infraestructura tecnológica. Un cuidado optimo y eficiente evita el reemplazo deliberado de dispositivos, provocando pérdidas económicas en su negocio, y un efecto ecológico negativo.</p>

                <p>Ayudamos a cuidar de una herramienta fundamental para lograr el crecimiento de los negocios e impulsamos a avanzar en su desarrollo a través de la innovación y de una asesoraría personalizada, concientizando en el uso responsable y aprovechamiento eficiente de los dispositivos tecnológicos.</p>
            </div>
        </div>
        )}

        <div>
            {
                services.length == 0 ? <h3 className='text-center'>No hay servicios para mostrar...</h3> : <ItemList services={services}/>
            }
        </div>

    </div>
  );
}

export default ItemListContainer