import './Menu.css';
import fondoIndex from './img/fondoConoceP.jpg';
import fondoSuegerncias from './img/fondoContacto.jpg';
import fondoHistoria from './img/fondoHistoria.jpg';
import fondoConoce from './img/FondoConocePortman.jpg';

function Carusel(){
    return(
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul>
            <div class="carousel-inner">
                
                <div class="carousel-item active">                
                    <img src={fondoIndex} alt="Chicago" className='img-fluid altura' ></img>                    
                    <div class="carousel-caption">
                        <h1>Portman</h1>                        
                    </div>   
                </div>
                
                <div class="carousel-item">
                    <img src={fondoConoce} alt="Los Angeles" className='img-fluid altura'></img>                    
                    <div class="carousel-caption">
                        <h1>Conoce Portman</h1>
                        <p>No te pierdas ningina noticia</p>
                        <button className='btn btn-outline-dark'>Mas Información</button>
                    </div>
                </div>

                <div class="carousel-item">                    
                    <img src={fondoSuegerncias} alt="Los Angeles" className='img-fluid altura'></img>                    
                    <div class="carousel-caption">
                        <h1>Sugerencia Y Queja</h1>
                        <p>Cualquier sugerencia o queja sobre el pueblo de portman </p>
                        <button className='btn btn-outline-dark'>Mas Información</button>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src={fondoHistoria} alt="Los Angeles" className='img-fluid altura'></img>                    
                    <div class="carousel-caption">
                        <h1>Conoce La Historia de Portman</h1>                        
                        <button className='btn btn-outline-dark'>Mas Información</button>
                    </div>
                </div>
                                                
            </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span></a>

                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span></a>
                
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span></a>
        </div>
    )
}
export default Carusel;