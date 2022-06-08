import laChapa from './img/PortadaLaChapa.jpg';
import mortero from './img/Pozo-de-mortero.jpg';
import barbeta from './img/Barbeta.jpg';

function El_Faro_La_Chapa(){
    
    return(        
        <section>
            {console.log('a')}
            <h1 className='col-12'>El Faro y la Bateria de la Chapa</h1>

            <div className='container'>
                <img src={laChapa} alt="Card image" width='100%'></img>
                <p>Los avances tecnológicos que se venían dando desde el siglo XIX cambiaban en poco tiempo los dispositivos e ingenios bélicos de cada época. Así, en los años veinte de la pasada centuria, y tras los progresos en el arte militar ensayados durante la Primera Guerra Mundial, las fortificaciones marítimas de Cartagena (y de otras bases navales) estaban totalmente desfasadas. El gobierno de Primo de Rivera aprobó entonces el Plan de Defensa de 1926, </p>
                <img alt='image' src={mortero} width='50%'></img>
                <p>por que se realizó un despliegue defensivo estableciendo unas poderosas baterías agrupadas en diversos puntos del litoral cartagenero, que podían mantener a raya una escuadra enemiga a varias decenas de kilómetros de las aguas portuarias cartageneras. Los cañones que caracterizaron este plan defensivo fueron los de la marca británica Vickers.</p>
                <img alt='image' src={barbeta} width='50%'></img>
                <p>Por tanto, la batería de La Chapa formó parte del complejo defensivo establecido en el monte de Cenizas. Se montaron cuatro cañones de 152,4 mm en 1930, que quedaron operativos a finales del año siguiente. Al igual que otros puntos militares de Cartagena, tuvo un papel relevante en el conflicto civil que estalló poco después (1936-1939). </p>
                <p>Sin embargo, conforme avanzaron los años fue perdiendo valor estratégico en el conjunto de las defensas de Cartagena, hasta que quedó fuera de servicio en 1994, como consecuencia de una gran reforma que afectó a las Fuerzas Armadas españolas de fin de siglo. Sus piezas fueron entonces desmontadas y vendidas al chatarrero, mientras que el edificio, abandonado, sufrió un metódico expolio que lo ha llevado a la ruina.</p>
            </div>
        </section>
    )
}
export default El_Faro_La_Chapa;