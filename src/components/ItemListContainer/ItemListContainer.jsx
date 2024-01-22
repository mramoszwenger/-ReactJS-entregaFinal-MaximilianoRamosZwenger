import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemList__container">
      <div className="itemList__content">
        <h2>{greeting}</h2>
        <p>Brindamos Soluciones IT a medida, acompañando a nuestros clientes en los procesos de mejora y modernización de sus negocios desde una perspectiva tecnológica integral, y maximizando al mismo tiempo esfuerzos para reducir el impacto medioambiental, al gestionar y mantener la infraestructura tecnológica. Un cuidado optimo y eficiente evita el reemplazo deliberado de dispositivos, provocando pérdidas económicas en su negocio, y un efecto ecológico negativo.</p>

        <p>Ayudamos a cuidar de una herramienta fundamental para lograr el crecimiento de los negocios e impulsamos a avanzar en su desarrollo a través de la innovación y de una asesoraría personalizada, concientizando en el uso responsable y aprovechamiento eficiente de los dispositivos tecnológicos.</p>
      </div>
    </div>
  );
}

export default ItemListContainer;