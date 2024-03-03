import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const campoError = (campo) => {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
  };

  const campoValido = (campo) => {
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
  };

  const validarNombre = (nombre) => {
    const regexNombre = /^[A-Za-z\s]+$/;
    return regexNombre.test(nombre);
  };

  const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexCorreo.test(correo);
  };

  const limpiarFormulario = () => {
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validar nombre
    if (!nombre.trim()) {
      campoError(document.getElementById('nombre'));
      return;
    } else if (!validarNombre(nombre)) {
      campoError(document.getElementById('nombre'));
      return;
    } else {
      campoValido(document.getElementById('nombre'));
    }

    // Validar correo
    if (!correo.trim()) {
      campoError(document.getElementById('correo'));
      return;
    } else if (!validarCorreo(correo)) {
      campoError(document.getElementById('correo'));
      return;
    } else {
      campoValido(document.getElementById('correo'));
    }

    // Validar mensaje
    if (!mensaje.trim()) {
      campoError(document.getElementById('mensaje'));
      return;
    } else {
      campoValido(document.getElementById('mensaje'));
    }

    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        body: new FormData(e.target),
      });

      const datos = await response.json();

      // Limpiar el formulario después del envío exitoso
      limpiarFormulario();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='contact__container'>
      
      <div className="container-fluid contact__subContainer">
      
        <div className="contact__head row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="contact__title">Contactanos</h2>
            <p className="contact__description">Dejanos tus datos y en breve alguien de nuestro equipo se pondrá en contacto contigo.</p>
          </div>
        </div>

        <div className="contact__background">

          <form className="contact__form needs-validation" action="/api/mailer" method="post" id="formularioWeb" noValidate onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
              <input type="text" className="form-control" id="nombre" placeholder='Su nombre y apellido' value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
              {/* Mensaje de error */}
              <div className="invalid-feedback">Por favor ingresa tu nombre. No se permiten números.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="correo" placeholder="Su correo electronico" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
              {/* Mensaje de error */}
              <div className="invalid-feedback">Por favor ingresa un correo electrónico válido.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" placeholder="Su mensaje..." rows="7" value={mensaje}onChange={(e) => setMensaje(e.target.value)} required></textarea>
              {/* Mensaje de error */}
              <div className="invalid-feedback">Por favor ingresa tu mensaje.</div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary submit__button">Contactar</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;