import { Link } from 'wouter';
import './Footer.css';
import logo from './img/logo.png';

function PieDePagina (){

    return(
        <footer className="container-fluid fondoFooterr">            
        <section className='row'>

            <div className="col-4 logo">
            <Link to='/'><img src={logo} alt='logo' width='100px'></img></Link>
            </div>

            <div className="col-4 logo">
                <h4>Nuestra Secciones</h4>
                <ul className="navbar-nav mr-auto">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="Nuestra Historia/NuestraHistoria.html">Nuestra Historia</a></li>
                    <li><a href="Noticias/noticias.html">Noticias</a></li>
                    <li><a href="Conoce Portman/ConocePortman.html">Conoce Portman</a></li>
                </ul>
            </div>
            
            <div className="col-4">
                <h4>Información</h4>
                <ul>
                    <li className='enlace'>Aviso Legal</li>
                    <li className='enlace'>Politica de Privacidad</li>
                    <li className='enlace'>Politica de Cookies</li>
                </ul>
            </div>            
            </section>
        </footer>
    );
    
}
export default PieDePagina;