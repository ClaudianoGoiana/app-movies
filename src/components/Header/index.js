import { Link } from 'react-router-dom';
import Style from './Header.module.css';
function Header() {
    return (
        <header className={Style.header}>
            
            <Link to="/"><span>CGMovies</span></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>                
           </nav>
        </header>



    );
}       

export default Header;