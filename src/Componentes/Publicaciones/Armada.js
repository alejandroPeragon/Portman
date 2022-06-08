import fotoArmada from './img/fondoHistoria.jpg';

function Aramada(){    
    return(
        <section>
            <h1 className='col-12'>La Armada Española entrando al Puerto de Portman</h1>
            <div className='container'>
                <img className="col-12" src={fotoArmada} alt="Card image" width='700px' height='700px'></img>                
                <p className='col-12'>En esta imagen podemos observar la entrada de  la Armada España en el antiguo puerto de Portman, que demuestra que nuestro puerto era uno de los mas importantes de España, como hemos dicho anteriormente esta imagen fue realizada al comienzos de la primera guerra mundial en 1914</p>
                <p className='col-12'>Tambien queremos agradecer a la vecina de Portman que nos ha cedido esta historica foto </p>
            </div>
        </section>
    )
}
export default Aramada;