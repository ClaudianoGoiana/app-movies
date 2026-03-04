import Style from './Header.module.css';
function Header() {
    return (
        <header className={Style.header}>
            <span>CGMovies</span>
            <nav>
                <a href="/">Home</a>
                <a href="/movies">Movies</a>
                <a href="/series">Series</a>
            </nav>
        </header>



    );
        

}

export default Header;