import { Link } from 'wouter';
import './NuestraHistoria.css';
import laChapa from './img/PortadaLaChapa.jpg';
import fotoArmada from './img/fondoHistoria.jpg';
import fotoVertidos from './img/vertidos.jpg';
import huertaPaturro from './img/pat05_33_5.jpg';
import fondoNuestraHistoria from './img/fondoNuestraHistoria.jpg';
import Menu from '../../Componentes/Menu/Menu';

function NuestraHistoria(){
    return (
        <section>
            <Menu></Menu>
            <div><img className='altura' src={fondoNuestraHistoria}></img></div>
            <article className='container' data-aos="zoom-in">
                <div className='row centrarBlog'>
                    <div className="col-lg-5 text-center">
                            <img src={fotoArmada} alt="Imagen" width="400px" height="200px"></img>
                            <h2>La Armada Española entrando al Puerto de Portman</h2>
                            <p>Esta foto es realizada en el año 1914, unas de las fotos mas importantes de nuestro blog</p>
                            <p><Link className="btn border-dark" to='/Blog/Armada'>Leer Mas &raquo;</Link></p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img src={laChapa} alt="Imagen" width="400px" height="200px"></img>
                            <h2>La Bateria la Chapa</h2>
                            <p>Unas de las baterias que protegio nuestro mares durante muchos años, junto a la bateria de las Cenizas</p>
                            <p><Link className="btn border-dark" to='/Blog/La-Chapa'>Leer Mas &raquo;</Link></p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img src={fotoVertidos} alt="Imagen" width="400px" height="200px"></img>
                            <h2>El Desastre de Portman</h2>
                            <p>En esta publicación vamos a explicar el como Portman poca a poco se quedo sin su bahía </p>
                            <p><Link className="btn border-dark" to='/Blog/Desastre-Portman'>Leer Mas &raquo;</Link></p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img src={huertaPaturro} alt="Imagen" width="400px" height="200px"></img>
                            <h2>Portman y los Romanos</h2>
                            <p>Portman fue de las primeras poblaciones que pisaron los romanos en su llegada a la peninsula iberica </p>
                            <p><Link className="btn border-dark" to='/Blog/Portman-Romanos'>Leer Mas &raquo;</Link></p>
                        </div>
                </div>
            </article>
        </section>
    )
}
export default NuestraHistoria;