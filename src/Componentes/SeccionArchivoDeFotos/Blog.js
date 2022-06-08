import { Link } from 'wouter';
import './archivoFotos.css';
import laChapa from './img/PortadaLaChapa.jpg';
import fotoArmada from './img/fondoHistoria.jpg';
import fotoVertidos from './img/vertidos.jpg';
import huertaPaturro from './img/pat05_33_5.jpg';

function SeccionBlog(){
    return (
        <section className='row'>            
            <div className="col-lg-12" data-aos='zoom-in-up'>
                <h2 className="text-center tituloSecciones">NUESTRA HISTORIA</h2>
                <p>Puedes acceder a nuestro blog que por cada publicación te explicamos la historia de Portman, desde la epoca de los cartagineses y romanos, con todos sus grandes acontecimientos</p>
            </div>
            <section className="row centrarBlog" data-aos="zoom-in">
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
            </section>
        </section>
    )
}
export default SeccionBlog;