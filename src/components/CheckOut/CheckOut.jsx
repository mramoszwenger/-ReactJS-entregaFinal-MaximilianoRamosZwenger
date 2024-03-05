import React, { useState,useContext } from 'react';
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from 'firebase/firestore';
import { CartContex } from '../../context/CartContex';

const CheckOut = () => {

    const {cart,emptyCart,cartCount,totalServices} = useContext(CartContex)

    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [emailValidation,setEmailValidation] = useState("")
    const [error,setError] = useState("")
    const [orderId,setOrderId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !surname || !phone || !email || !emailValidation){
            setError("Completar los campos requeridos")
            return;
        }

        if(email !== emailValidation) {
            setError("El Correo Electrónico no coincide")
            return;
        }

        const db = getFirestore()

        const orden = {
            items: cart.map((s) => ({
                id: s.servicio.id,
                nombre: s.servicio.nombre,
                cantidad: s.cantidad
            })),
            total: totalServices(),
            fecha: new Date(),
            name,
            surname,
            phone,
            email
        }

        Promise.all(
            orden.items.map(async (serviceOrder) => {
                const serviceRef = doc(db,"item",serviceOrder.id);
            })
        )
        .then(() => {
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef) => {
                setError("")
                setOrderId(docRef.id)
                emptyCart()
            })
            .catch((error) => {
                console.log(error)
                setError("Se produjo un error al crear la orden")
            })
        })
    }

    return (
        <div>

            <h3>Ingresa tus datos</h3>

            <form onSubmit={handleSubmit}>

                <ul>
                    {cart.map((s) => (
                        <li key={s.servicio.id} className='list__summaryServices'>{s.servicio.nombre} ({s.cantidad})</li>
                    ))}
                </ul>

                <div>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input name="name" type='text' placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="surname">Apellido</label>
                        <input name="surname" type='text' placeholder="Apellido" onChange={(e) => setSurname(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="phone">Teléfono</label>
                        <input name="phone" type='text' placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" type='email' placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="emailValidation">Email Confirmacion</label>
                        <input name="emailValidation" type='email' placeholder="Confirmar Correo Electrónico" onChange={(e) => setEmailValidation(e.target.value)}/>
                    </div>

                    <button type='submit'>Confirmar compra</button>

                    {error && <p style={{color: "red"}}>{error}</p>}

                    {orderId && (
                        <p>¡Gracias por confiar en nosotros! Tu número de control es: {orderId}</p>
                    )}
                </div>

            </form>
        </div>
    )
}

export default CheckOut