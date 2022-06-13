import { Link } from 'wouter';
import useUser from '../../Hooks/useUser/useUser';
import'./Menu.css';
import menu from './img/menu.png';
import logo from './img/logo.png';

function Menu(){
    const {logout, token, nombre} = useUser();

    function cerrarSesion(){        
        logout();        
    }

    function login(){
        if(token!==null){
            return (
                <div className='d-flex'>
                    <div><p className='col-2'>Hola, {window.sessionStorage.getItem('name')}</p></div>
                    <div><button className='col-1 btn' onClick={cerrarSesion}> Cerrar Sesion</button></div>
                </div>
            )
        }else{
            return  (<div> 
                        <li className="nav-item col-2 text-center">
                            <Link to='/Entrar' className='hover enlace'>Entrar</Link>
                        </li>
                        <li className="nav-item col-2">
                            <Link to='/Registrarse' className='hover enlace'>Registrarse</Link>
                        </li>
                    </div>
                )
        }
    }

    return(
        <div id='cabecera'>
            <header className="col-12 navbar navbar-expand-lg color-menu fixed-top">
                <div className="col-lg-7 ">
                    <nav>
                    <Link to='/'><img src={logo} alt='logo' width='100px'></img></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">                                
                            <img src={menu}></img>
                        </button>
                    </nav>
                </div>
                <div className="col-lg-5 arriba">
                    <div className="collapse row navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ">
                            <li className="nav-item col-2">
                                <Link to='/' className='hover enlace'>Inicio</Link>
                            </li>
                            <li className="nav-item col-2">
                                <Link to='/Blog' className='hover enlace'>Nuestra Historia</Link>
                            </li>
                            <li className="nav-item col-2">
                                <Link to='/Noticias' className='hover enlace'>Noticias</Link>
                            </li>
                            <li className="dropdown nav-item">
                                <a href="#" className="hover dropdown-toggle enlace" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">Conoce Portman</span> <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><Link className='hover enlace' to='/Gastronomia'>Gastronomia</Link></li>
                                    <li><Link className='hover enlace' to='/Rutas'>Rutas</Link></li>
                                </ul>
                            </li>
                            { login() }
                        </ul>                          
                    </div>
                </div>
            </header>
        
        
        </div>
    )
    
}
export default Menu;