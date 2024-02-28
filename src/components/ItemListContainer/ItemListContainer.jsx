import {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [services,setServices] = useState([]);
    const {category} = useParams()

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch("/services.json");
                const data = await response.json()

                if(category){
                    const filteredServices = data.filter((s) => s.categoria == category)
                    setServices(filteredServices)
                }else{
                    setServices(data)
                }
  
            }catch(error){
                console.log("Error en el fetch " + error)
            }
        }

        fetchData()

    },[category])

  return (
    <div className='global__itemContainer'>

        <div className="itemList__container">
            <div className="itemList__content">
                <h2 className='itemList__title'>Soluciones para Potenciar tu Negocio</h2>
                
                <p className='itemList__description'>Brindamos Soluciones IT a medida, acompañando a nuestros clientes en los procesos de mejora y modernización de sus negocios desde una perspectiva tecnológica integral, y maximizando al mismo tiempo esfuerzos para reducir el impacto medioambiental, al gestionar y mantener la infraestructura tecnológica. Un cuidado optimo y eficiente evita el reemplazo deliberado de dispositivos, provocando pérdidas económicas en su negocio, y un efecto ecológico negativo.</p>

                <p>Ayudamos a cuidar de una herramienta fundamental para lograr el crecimiento de los negocios e impulsamos a avanzar en su desarrollo a través de la innovación y de una asesoraría personalizada, concientizando en el uso responsable y aprovechamiento eficiente de los dispositivos tecnológicos.</p>
            </div>
        </div>

        <div>
            {
                services.length == 0 ? <h3 className='text-center'>No hay servicios para mostrar...</h3> : <ItemList services={services}/>
            }
        </div>

    </div>
  );
}

export default ItemListContainer