import React, { useState, useContext } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc, doc } from 'firebase/firestore';
import { CartContex } from '../../context/CartContex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './CheckOut.css';

const CheckOut = () => {
    const { cart, emptyCart, totalServices } = useContext(CartContex);

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [orderId, setOrderId] = useState('');

    const validateName = (value) => {
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(value);
    };

    const validatePhone = (value) => {
        const regex = /^[0-9]+$/;
        return regex.test(value);
    };

    const validateEmail = (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError('');
        setPhoneError('');
        setEmailError('');
        setGeneralError('');

        if (!name || !company || !phone || !email || !emailValidation) {
            setGeneralError('Todos los campos son requeridos para poder procesar la solicitud');
            return;
        }

        if (!validateName(name)) {
            setNameError('Por favor, ingresa un nombre válido (solo letras y espacios).');
            return;
        }

        if (!validatePhone(phone)) {
            setPhoneError('Por favor, ingresa un número de teléfono válido (solo números).');
            return;
        }

        if (email !== emailValidation || !validateEmail(email) || !validateEmail(emailValidation)) {
            setEmailError('El Correo Electrónico no coincide o no es válido');
            return;
        }

        const orden = {
            items: cart.map((s) => ({
                id: s.servicio.id,
                nombre: s.servicio.nombre,
                cantidad: s.cantidad,
            })),
            total: totalServices(),
            fecha: new Date(),
            name,
            company,
            phone,
            email,
        };

        Promise.all(
            orden.items.map(async (serviceOrder) => {
                const serviceRef = doc(db, 'item', serviceOrder.id);
            })
        )
            .then(() => {
                addDoc(collection(db, 'ordenes'), orden)
                    .then((docRef) => {
                        setGeneralError('');
                        setOrderId(docRef.id);
                        emptyCart();
                    })
                    .catch((error) => {
                        console.log(error);
                        setGeneralError('Se produjo un error al crear la orden');
                    });
            });
    };

    return (
        <div className='checkout__container'>
            <div className='checkout__formContainer'>
                <h3 className="mb-4 checkout__title">Ingresa tus datos para completar la solicitud</h3>

                <form onSubmit={handleSubmit} className="mb-4 checkout__form">
                    <ul className='summary__checkout'>
                        {cart.map((s) => (
                            <li key={s.servicio.id} className="list__summaryServices">
                                {s.servicio.nombre} ({s.cantidad})
                            </li>
                        ))}
                    </ul>

                    <div className="form__group">

                        <div>
                            <label htmlFor="name" className="form__label">Nombre y Apellido</label>
                            <div className="input__container">
                                <FontAwesomeIcon icon={faUser} className="input__icon"/>
                                <input name="name" type="text" className="input__form" placeholder="Tu Nombre y Apellido" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            {nameError && <p style={{ color: 'red' }} className='error__message'>{nameError}</p>}
                        </div>

                        <div>
                            <label htmlFor="company" className="form__label">Empresa</label>
                            <div className="input__container">
                                <FontAwesomeIcon icon={faBriefcase} className="input__icon"/>
                                <input name="company" type="text" className="input__form" placeholder="Nombre de la Empresa" onChange={(e) => setCompany(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="form__label">Teléfono</label>
                            <div className="input__container">
                                <FontAwesomeIcon icon={faPhone} className="input__icon"/>
                                <input name="phone" type="text" className="input__form" placeholder="Un Número de Contacto" onChange={(e) => setPhone (e.target.value)}/>
                            </div>
                            {phoneError && <p style={{ color: 'red' }} className='error__message'>{phoneError}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="form__label">Correo</label>
                            <div className="input__container">
                                <FontAwesomeIcon icon={faEnvelope} className="input__icon"/>
                                <input name="email" type="email" className="input__form" placeholder="Un Correo Electrónico" onChange={(e) => setEmail (e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="emailValidation" className="form__label">Correo</label>
                            <div className="input__container">
                                <FontAwesomeIcon icon={faEnvelope} className="input__icon"/>
                                <input name="emailValidation" type="email" className="input__form" placeholder="Confirma el Correo Electrónico" onChange={(e) => setEmailValidation (e.target.value)}/>
                            </div>
                            {emailError && <p style={{ color: 'red' }} className='error__message'>{emailError}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 checkout__button">Solicitar Servicio/s</button>

                        {generalError && <p style={{ color: 'red' }} className='error__message'>{generalError}</p>}

                        {orderId && (
                            <p className='confirmation__message'>¡Gracias por confiar en nosotros! Tu número de control es: {orderId}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;