import Menu from '../../Componentes/Menu/Menu';
import './ConocePortman.css';
import fondoGastronomia from './img/fondoGastronomia.jpg';

function Gastronomia(){
    return (
        <section className='row'>
            <Menu></Menu>
            <div><img className='altura img-fluid' src={fondoGastronomia}></img></div>
            <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                <img className='card-img-top' src='' alt='imagen los pacos'></img>
                <h3 className='card-title'>Los Tres Pacos</h3>
                <p className='card-body'>aaaaaaaaaaaaaaaaaaaa</p>
                <div className=''>
                    <span>Iconos</span>
                </div>
            </article>
            <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                <img className='card-img-top' src='' alt='imagen los pacos'></img>
                <h3 className='card-title'>Los Pacos</h3>
                <p className='card-body'>Casa Cegarra</p>
                <div className=''>
                    <span>Iconos</span>
                </div>
            </article>
            <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                <img className='card-img-top' src='' alt='imagen los pacos'></img>
                <h3 className='card-title'>Bar Nuevo</h3>
                <p className='card-body'>aaaaaaaaaaaaaaaaaaaa</p>
                <div className=''>
                    <span>Iconos</span>
                </div>
            </article>
            <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                <img className='card-img-top' src='' alt='imagen los pacos'></img>
                <h3 className='card-title'>Bar PortusMagnus</h3>
                <p className='card-body'>aaaaaaaaaaaaaaaaaaaa</p>
                <div className=''>
                    <span>Iconos</span>
                </div>
            </article>
            <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                <img className='card-img-top' src='' alt='imagen los pacos'></img>
                <h3 className='card-title'>Los Pacos</h3>
                <p className='card-body'>El Cubano</p>
                <div className=''>
                    <span>Iconos</span>
                </div>
            </article>
            <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                <img className='card-img-top' src='' alt='imagen los pacos'></img>
                <h3 className='card-title'>Los Pacos</h3>
                <p className='card-body'>El Chirigito del el Lastre</p>
                <div className=''>
                    <span>Iconos</span>
                </div>
            </article>
        </section>
    )
}
export default Gastronomia;