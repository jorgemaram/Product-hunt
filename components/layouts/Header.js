import React from 'react';
import Buscar from '../ui/Buscar';
import Navbar from './Navbar';
import Link from 'next/link';


const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Buscar/>
                    <Navbar/>
                </div>
                <div>
                    <p>Hola Jorge</p>
                    <button type='button'>Cerrar sesión</button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Crear cuenta</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;