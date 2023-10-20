import {NavLink} from 'react-router-dom'
import '../../styles/layout/Header.scss'
import IconMenu from '../../icons/IconMenuHeader';
import { useState } from 'react';

const Header = () => {

    const [menu, setMenu] = useState(true)

    const abrirMenu = () => setMenu(!menu)

    
    return ( 
        <header className='cabecalho'>
            <div className='logo'>
                <img src="/logo.png" alt="Logo da empresa" />
            </div>

            {
                menu ? 
                <nav>
                <div>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
                <div>
                    <NavLink to={'/produtos'}>Produtos</NavLink>
                </div>
                <div>
                    <NavLink to={'/contato'}>Contato</NavLink>
                </div>
                <div>
                    <NavLink to={'/sobre'}>Sobre</NavLink>
                </div>
                </nav>
                :
                <div/>
            }
            
            <button onClick={abrirMenu}>
                <IconMenu width={30} height={30} color='#000'/>
            </button>
        </header>
     );
}
 
export default Header;