import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

  const [services,setServices] = useState([]);

  useEffect(()=>{

      const fetchData = async () => {
          try {
              const response = await fetch("./services.json");
              const data = await response.json()
              setServices(data)
          }catch(error){
              console.log("error en el fetch " + error)
          }
      }

      fetchData()

  },[])

  return (
    <div className='global__itemContainer'>

    <div className="itemList__container">
      <div className="itemList__content">
        <h2 className='itemList__greeting'>{greeting}</h2>
        
        <p className='itemList__description'>Brindamos Soluciones IT a medida, acompañando a nuestros clientes en los procesos de mejora y modernización de sus negocios desde una perspectiva tecnológica integral, y maximizando al mismo tiempo esfuerzos para reducir el impacto medioambiental, al gestionar y mantener la infraestructura tecnológica. Un cuidado optimo y eficiente evita el reemplazo deliberado de dispositivos, provocando pérdidas económicas en su negocio, y un efecto ecológico negativo.</p>

        <p>Ayudamos a cuidar de una herramienta fundamental para lograr el crecimiento de los negocios e impulsamos a avanzar en su desarrollo a través de la innovación y de una asesoraría personalizada, concientizando en el uso responsable y aprovechamiento eficiente de los dispositivos tecnológicos.</p>
      </div>
    </div>

    <div className="container">
        <div className="row">
          {
            services.length === 0 ? <h3 className='text-center'>No hay productos para mostrar...</h3> : <ItemList services={services}/>
          }
        </div>
      </div>

    </div>

  );
}

export default ItemListContainer;