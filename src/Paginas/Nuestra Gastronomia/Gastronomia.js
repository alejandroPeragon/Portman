import Menu from '../../Componentes/Menu/Menu';
import fondoGastronomia from './img/fondoGastronomia.jpg';
import cubano from './img/cubano.jpeg';
import cegarra from './img/cegarra.jpeg';
import pacos from './img/pacos.jpeg';
import lastre from './img/lastre.jpeg';
import portus from './img/portus.jpeg';
import barnuevo from './img/barnuevo.jpeg';
import hotel_portman from './img/hotel_portman.jpg';

function Gastronomia(){
    return (
        <section>
            <Menu></Menu>
            <div><img className='altura img-fluid' height='250px' width='50px' src={fondoGastronomia}></img></div>
            <div className='container'>
                <div className='row'>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='250px' width='50px' src={pacos} alt='imagen los pacos'></img>
                        <h3 className='card-title'>Los Tres Pacos</h3>
                        <p className=''>Restaurante especialidad para comidas y cenas su especialidad la fritura de pescado</p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 9:00 a 00:00</li>
                            <li><strong>Los Miercoles Cerrado</strong></li>
                            <p>Telefono: 968 54 84 98</p>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/37.5823121,-0.8579829/los+tres+pacos+portman/@37.5860824,-0.8597639,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd633ef4285356d5:0x3067ea7ed193fa07!2m2!1d-0.8531047!2d37.5898083'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='250px' width='50px' src={cegarra} alt='imagen los pacos'></img>
                        <h3 className='card-title'>Casa Cegarra</h3>
                        <p className=''>Unos de los restaurantes mass famosos por su magnifico caldero</p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 10:00 a 17:00</li>
                            <li><strong>Los lunes Cerrado</strong></li>
                            <p>Telefono: 968 54 80 57</p>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/37.5823121,-0.8579829/cegarra+portman/@37.5854446,-0.8597513,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd633f9e340839fb:0xf83e2320b687bf97!2m2!1d-0.8527939!2d37.5885741'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='250px' width='50px' src={barnuevo} alt='imagen los pacos'></img>
                        <h3 className='card-title'>Bar Nuevo</h3>
                        <p className=''>Bar ubicado en el centro del pueblo solo para desayunos y aperitivos </p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 6:00 a 14:00</li>
                            <li><strong>Los domingos Cerrado y en verano sabados por la tarde </strong></li>
                            <p>Telefono: 968 54 81 03</p>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir//bar+nuevo+portman/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd633fbbea8b0827:0x7fa096b17f0f1c6b?sa=X&ved=2ahUKEwiGm464maX4AhUNiVwKHaApDe4Q9Rd6BAg_EAQ'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='350px' width='50px' src={portus} alt='imagen los pacos'></img>
                        <h3 className='card-title'>Bar PortusMagnus</h3>
                        <p className=''>Bar que preparan comidas y cenas, su especialidad hacer bocadillos y pizzas </p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 11:00 a 2:00</li>
                            <li><strong>Los lunes Cerrado</strong></li>
                            <p>Telefono: 626 09 23 00</p>                            
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/37.5823121,-0.8579829/portus+magnus/@37.5859211,-0.8589745,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd633ef45cda382b:0x6adb949bee2ae292!2m2!1d-0.8513857!2d37.5892103'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='250px' width='50px' src={cubano} alt='imagen los pacos'></img>
                        <h3 className='card-title'>El Cubano</h3>
                        <p className=''>Chiringinto y restaurante, especialidad en preparar pescado y paellas de marisco, tiene dos lo cales el restaurante y un Chirigito a parte</p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 10:00 a 18:00</li>
                            <li><strong>NO CIERRA NINGUN DIA</strong></li>
                            <p>Telefono:  633 57 90 66</p>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/37.5823121,-0.8579829/el+cubano+portman/@37.5847891,-0.856038,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd633ef4e8e2d6c9:0x70875670d53e867!2m2!1d-0.8417971!2d37.5803349'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='250px' width='50px' src={lastre} alt='imagen los pacos'></img>
                        <h3 className='card-title'>El Chirigito del el Lastre</h3>
                        <p className=''>Chirigito ubicado en playa del lastre, su especialidad pescado a la plancha y carne </p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 11:00 a 19:00</li>
                            <li><strong>NO CIERRA NINGUN DIA</strong></li>
                            <p>Telefono: 868081242</p>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/37.5823121,-0.8579829/chiringuito+el+lastre/@37.5847891,-0.856038,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd633f964dbe044d:0x1cd35f4d5f85a424!2m2!1d-0.8434215!2d37.5806264'>Ubicacion</a></p>
                        </div>
                    </article>
                    <article className='card col-lg-4 col-xl-3 col-md-2 col-lg-4 col-xl-3 col-md-6 col-lg-4 col-xl-3 '>
                        <img className='card-img-top' height='250px' width='50px' src={hotel_portman} alt='imagen los pacos'></img>
                        <h3 className='card-title'>Ciao Ciao</h3>
                        <p className=''>Este restaurante esta ubicado en el Holtel Portman, y esta abierto para todo el publico y es un italiano</p>
                        <div className=''>
                            <p className='text-center'><strong>Horario</strong></p>
                            <li>Todos los Dias</li>
                            <li>De 11:00 a 19:00</li>
                            <li><strong>NO CIERRA NINGUN DIA</strong></li>
                            <p>Telefono: 968 92 81 11</p>
                            <p><a className='btn btn-dark' href='https://www.google.com/maps/dir/37.5823121,-0.8579829/hotel+portman+restaurante/@37.5864866,-0.8605053,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd633ef65418ae63:0xa2906dd6f990ea91!2m2!1d-0.8550486!2d37.5906612'>Ubicacion</a></p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default Gastronomia;