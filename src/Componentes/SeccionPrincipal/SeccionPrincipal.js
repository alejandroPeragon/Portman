import { Link } from 'wouter';
import './SeccionPrincipal.css';

function SeccionPrincipal(){
   
    return(        
        <section className="row align-content-center">
            <div className="col-lg-12 ">
                <h2 data-aos='zoom-in-up' className="text-center tituloSecciones">PORTMAN</h2>                
            </div>
            <div data-aos="zoom-in">
                <p className='col-12'>Bienvenidos a la página oficial de Portman, su función es poner a su disposición, toda la información de Portman</p>
                <div className='col-2'></div>
                <ul className="col-10">
                    <li>Puedes descubrir las ultimas noticias del el pueblo de Portman</li>
                    <li>Estan toda la información bares y rutas turisticas para lo que no conozcan Portman</li>
                    <li>Tambien para los habitantes de Portman ponemos a su servicio un formliario de Sugerencias y Quejas para el pueblo</li>
                </ul>
                <p className='col-12'>Para no perderte ninguna noticia que publiquemos te puedes <Link to='/Registrarse'>Registrar</Link> para poder comentar en todas nuestras noticias</p>
            </div>
        </section>
    )
}
export default SeccionPrincipal;