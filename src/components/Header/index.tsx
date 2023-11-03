import React, {useState, useEffect} from 'react';
import './styles.css'

import {FiMenu} from 'react-icons/fi'

const Header: React.FC = () =>{

    const [menuOpen, setMenuOpen] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 764) {
            setMenuOpen(true);
          } else {
            setMenuOpen(false);
          }
        };
      
        // Adicione o ouvinte de evento e especifique a função de limpeza
        window.addEventListener('resize', handleResize);
      
        // Retire o ouvinte de evento quando o componente é desmontado
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return(
        <header>
            <a href="https://github.com/Reis567" target='_blank'rel="noreferrer">
                <h1>
                    Reis567
                </h1>
            </a>
            <FiMenu className='hamburguer' onClick={()=>{
                setMenuOpen(!menuOpen)
                }}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            />
            {menuOpen && (

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
            )}
        </header>
    )
}
export default Header