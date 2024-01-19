import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <>

            <h1>LOGO</h1>

            <ul>
                <li>
                  <a>Inicio</a>
                </li>
                <li>
                  <a>Nosotros</a>
                </li>
                <li>
                  <a>Servicios</a>
                </li>
                <li>
                  <a>Contacto</a>
                </li>
            </ul>

            <CartWidget/>

        </>
    )
}

export default NavBar;