import React from 'react';
import './styles.css'

import {FiMenu} from 'react-icons/fi'

const Header: React.FC = () =>{
    return(
        <header>
            <a href="https://github.com/Reis567" target='_blank'rel="noreferrer">
                <h1>
                    Reis567
                </h1>
            </a>
            <FiMenu className='hamburguer'/>

            <nav>
                <h3>
                    <a href="#">

                    Home
                    </a>
                </h3>

                <h3>
                    <a href="#">

                    Compras
                    </a>
                </h3>

                <h3>
                    <a href="#">

                    Favoritos
                    </a>
                </h3>
            </nav>
        </header>
    )
}
export default Header