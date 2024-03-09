import React, { useState, useContext } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc, doc } from 'firebase/firestore';
import { CartContex } from '../../context/CartContex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './CheckOut.css';

const CheckOut = () => {
    const { cart, emptyCart, totalServices } = useContext(CartContex);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !surname || !phone || !email || !emailValidation) {
            setError('Completar los campos requeridos');
            return;
        }

        if (email !== emailValidation) {
            setError('El Correo Electrónico no coincide');
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
            surname,
            phone,
            email,
        };

        Promise.all(
            orden.items.map(async (serviceOrder) => {
                const serviceRef = doc(db, 'item', serviceOrder.id);
                // Aquí podrías realizar alguna acción con serviceRef si es necesario
            })
        )
            .then(() => {
                addDoc(collection(db, 'ordenes'), orden)
                    .then((docRef) => {
                        setError('');
                        setOrderId(docRef.id);
                        emptyCart();
                    })
                    .catch((error) => {
                        console.log(error);
                        setError('Se produjo un error al crear la orden');
                    });
            });
    };

    return (
        <div className='checkout__container'>
            <div className='checkout__formContainer'>
                <h3 className="mb-4 checkout__title">Ingresa tus datos para completar la solicitud</h3>

                <form onSubmit={handleSubmit} className="mb-4 checkout__form">
                    <ul>
                        {cart.map((s) => (
                            <li key={s.servicio.id} className="list__summaryServices">
                                {s.servicio.nombre} ({s.cantidad})
                            </li>
                        ))}
                    </ul>

                    <div className="form__group">
                        <div className="input-with-icon">
                            <label htmlFor="name" className="visually-hidden">
                                Nombre
                            </label>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="input-icon" />
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe tu nombre"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="surname">Apellido</label>
                            <input
                                name="surname"
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">
                                <FontAwesomeIcon icon={faPhone} /> Teléfono
                            </label>
                            <input
                                name="phone"
                                type="text"
                                className="form-control"
                                placeholder="Teléfono"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Correo Electrónico"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="emailValidation">Email Confirmación</label>
                            <input
                                name="emailValidation"
                                type="email"
                                className="form-control"
                                placeholder="Confirmar Correo Electrónico"
                                onChange={(e) => setEmailValidation(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 checkout__button">Solicitar Servicio/s</button>

                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {orderId && (
                            <p>
                                ¡Gracias por confiar en nosotros! Tu número de control es: {orderId}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;