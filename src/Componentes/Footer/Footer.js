import { Link } from 'wouter';
import './Footer.css';
import logo from './img/logo.png';

function PieDePagina (){

    return(
        <footer className="container-fluid fondoFooterr">            
        <section className='row'>

            <div className="col-sm-12 border-bottom border-dark col-lg-4 border-left border-dark">
            <Link to='/'><img src={logo} className='centrarLogo' alt='logo' width='150px'></img></Link>
            </div>

            <div className="col-sm-12 border-bottom border-dark col-lg-4 border-left border-dark text-center">
                <h4>Nuestra Secciones</h4>
                <ul className="navbar-nav mr-auto">
                    <li><Link className='hover enlace'to='/'>Inicio</Link></li>
                    <li><Link className='hover enlace' to='/Blog'>Nuestra Historia</Link></li>
                    <li><Link className='hover enlace' to='/Noticias'>Noticias</Link></li>
                    <li className="dropdown nav-item">
                        <a href="#" className="hover dropdown-toggle enlace" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">Conoce Portman</span> <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><Link className='hover enlace' to='/Gastronomia'>Gastronomia</Link></li>
                            <li><Link className='hover enlace' to='/Rutas'>Rutas</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div className="col-sm-12 border-bottom border-dark col-lg-4 border-left border-dark text-center">
                <h4>Información</h4>
                <ul className="navbar-nav mr-auto">
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