import {NavLink} from 'react-router-dom'
import '../../styles/layout/Header.scss'
import IconMenu from '../../icons/IconMenuHeader';

const Header = () => {
    return ( 
        <header className='cabecalho'>
            <div className='logo'>
                <img src="/logo.png" alt="Logo da empresa" />
            </div>

            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/produtos'}>Produtos</NavLink>
                <NavLink to={'/contato'}>Contato</NavLink>
                <NavLink to={'/sobre'}>Sobre</NavLink>
            </nav>
            <button>
                <IconMenu width={30} height={30} color='#000'/>
            </button>
        </header>
     );
}
 
export default Header;