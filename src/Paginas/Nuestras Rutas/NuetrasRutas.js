import Menu from '../../Componentes/Menu/Menu';
import './ConocePortman.css';
import fondoRutas from './img/1644520025664.jpg';
import calzada from './img/calzada.jpg';
import cenizas from './img/cenizas.jpeg';
import laChapa from './img/faro.jpg';
import vias from './img/vias.JPG';
import iconoBici from './img/iconoBici.png';
import iconoCaminar from './img/iconoCaminar.png';

function NuestraRutas(){
    return (
        <section>
            <Menu></Menu>
            <div><img className='altura img-fluid' src={fondoRutas}></img></div>
            <div className='container'>
                <div className='row'>            
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' src={cenizas} alt='imagen Las Cenizas'></img>
                        <h3 className='card-title'>Las Cenizas</h3>                        
                        <p className='card-body'>Esta bateria fue construida para proteger la costa, con dos cañones y un puesto de vigilancia, esta ruta son 10Km mas o menos de subida</p>
                        <div>
                            <img src={iconoBici}></img>
                            <img src={iconoCaminar} width='43px'></img>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/Portman,+Portman/Bater%C3%ADa+de+Cenizas,+30389+Cartagena,+Murcia/@37.5866106,-0.8451059,15z/data=!4m13!4m12!1m5!1m1!1s0xd633ef644f4fb7b:0xd8d015b9457ccc9d!2m2!1d-0.8547877!2d37.5911456!1m5!1m1!1s0xd633d4527480a7d:0x97ad017aa33eb2be!2m2!1d-0.8224642!2d37.5789536?hl=es'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' src={calzada} alt='imagen Las Cenizas'></img>
                        <h3 className='card-title'>Calzada Romana</h3>
                        <p className='card-body'>Esta calzada fue construida por los romanos, y nos lleva a la subida de la bateria de Cenizas, y esta ruta son mas o menos 5Km de subida </p>
                        <div>
                            <img src={iconoBici}></img>
                            <img src={iconoCaminar} width='43px'></img>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/Portman,+Portman/Calzada+Romana+Monte+Cenizas,+Cartagena/@37.6016229,-0.8795438,14z/data=!4m14!4m13!1m5!1m1!1s0xd633ef644f4fb7b:0xd8d015b9457ccc9d!2m2!1d-0.8547877!2d37.5911456!1m5!1m1!1s0xd633dd4d3086ccf:0x12e141792a96a4d6!2m2!1d-0.8266132!2d37.593349!3e0?hl=es'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' src={laChapa} alt='imagen Las Cenizas'></img>
                        <h3 className='card-title'>Faro de de Portman y la Bateria de la Chapa</h3>
                        <p className='card-body'>Esta bateria su fnción era vigilar lo barcos que entraban al puerto de Portman, y aqui se quedaban los militares que estaban de maniobras</p>
                        <div>
                            <img src={iconoBici}></img>
                            <img src={iconoCaminar} width='43px'></img>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/Portman,+Portman/Bater%C3%ADa+de+La+Chapa,+Pasaje+la+Chapa,+Cartagena/@37.5866106,-0.8449755,15z/data=!4m13!4m12!1m5!1m1!1s0xd633ef644f4fb7b:0xd8d015b9457ccc9d!2m2!1d-0.8547877!2d37.5911456!1m5!1m1!1s0xd633e90bff0bc3b:0xf2e95ba889971389!2m2!1d-0.8402313!2d37.5783967?hl=es'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' src={vias} alt='imagen Las Cenizas'></img>
                        <h3 className='card-title'>Las Vias del Tren</h3>
                        <p className='card-body'>Este tren era el ecargado de llevar los minerales a las fabricas para su limpieza y su tratamiento, esta ruta puedes conseguir un paiseje completo de el pueblo de Portman y su bahia</p>
                        <div>                            
                            <img src={iconoCaminar} width='43px'></img>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/Portman,+Portman/Tren+Minero/@37.593174,-0.8484505,15z/data=!4m14!4m13!1m5!1m1!1s0xd633ef644f4fb7b:0xd8d015b9457ccc9d!2m2!1d-0.8547877!2d37.5911456!1m5!1m1!1s0xd633fab0d74c0a3:0x202035e839250454!2m2!1d-0.852629!2d37.5939172!3e0?hl=es'>Ubicacion</a></p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default NuestraRutas;