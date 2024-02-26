import React from 'react';
import './Error.css';
import errorImage from '/src/assets/img/error-404.jpg';

function Error() {
  return (
    <div className="error__container">
      <div className="error__image__container">
        <img className="error__image" src={errorImage} alt="Error" />
      </div>
    </div>
  );
}

export default Error;