import './conocePortman.css';
import imagenBares from './img/garden-table-g439d1b755_1280.png';
import imagenRutas from './img/direction-gdc7ab742c_1280.png';
import { Link } from 'wouter';

function SecceciónConocePortman(){
    return (
        <section className="row">
            <div className="col-lg-12" data-aos='zoom-in-up'>
                <h2 className="text-center tituloSecciones">CONOCE PORTMAN</h2>
                <p>Si nunca has visitado Portman, aqui tienes lugares, bares, resturantes y muchas para que puedo disfrutrar al maximo de Portman</p>
            </div>
                <article className="row" data-aos='zoom-in'>
                    <div className="col-lg-6 text-center">
                        <img src={imagenBares} alt="Logo Sugerencias" width="300px" height="200px"></img>
                        <h2>Nuestra Gastronomia</h2>
                        <p>Aqui podras descubrir todos los bares y resturantes de Portman con todas sus valoraciones de sus clientes, ubicación, y la forma de contacto con todos los bares y resturantes de Portman</p>
                        <Link className="btn border-dark" to='/Gastronomia'> Leer Mas &raquo;</Link>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={imagenRutas} alt="Logo Nuestra Historia" width="200px" height="200px"></img>
                        <h2 >Nuestras Rutas</h2>
                        <p>Si quieres saber los senderos y rutas por los montes aqui tee podras informar de su duracion de cada ruta y como se debe acceder, en Portman hay muchas rutas y paisajes que podras visitar</p>
                        <Link className="btn border-dark" to='/Rutas'>Leer Mas &raquo;</Link>
                    </div>
                </article>
        </section>
    )
}
export default SecceciónConocePortman;