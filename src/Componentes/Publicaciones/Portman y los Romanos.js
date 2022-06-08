import exacvaciones from './img/Excavaciones_de_la_Villa_del_Paturro_en_Portman.jpg';
import huertaPaturro from './img/pat05_33_5.jpg';
import MuseoPortman from './img/MuseoPortman.jpg';

function Portman_Romanos(){
    
    return(
        <section>
            <h1 className='col-12'>Portman y los Romanos</h1>

            <div className='container'>
                <img src={huertaPaturro} alt="Card image" width='100%'></img>
                <p> El Portus Magnus romano La ambición romana por conocer, conquistar y dominar el Mar Mediterráneo provocó su pronta llegada a la Bahía de Portmán, a la que denominaron Portus Magnus, Gran Puerto. Contó durante la época de dominación romana de la Península Ibérica con una gran influencia sobre los demás puertos de la ruta imperial por su situación privilegiada, al encontrarse en las cercanías de las minas de hierro y plomo, así como por su proximidad al mar, lo que permitió el desarrollo de industrias relacionadas con la pesca, como la de salazones.</p>
                <img src={exacvaciones} alt="Card image" width='50%'></img>
                <p>Su desembarco en la zona propició el nacimiento de una villa conocida actualmente como Huerto del Paturro, lugar que fue muy rico y de gran influencia, debido principalmente a una industria minera muy activa y grandes explotaciones agrícolas. Además, se encontraba comunicada con Roma por dos vías, la terrestre a través de uno de los ramales de la Vía Augusta, y marítima mediante la Bahía. La villa romana compartía varias características con otros ejemplos encontrados en España e Italia, pero carece de un elemento que sí se puede observar en la mayoría de ellas, barrio marítimo.</p>
                <img src={MuseoPortman} alt="Card image" width='50%' ></img>                
                <p>A través de las excavaciones arqueológicas en el Huerto del Paturro se han rescatado gran parte de sus muros, construidos en mampostería irregular y característicos mosaicos romanos como el pavimento 'tridinium', el más grande de la Región de Murcia, con una extensión de aproximadamente 60 metros cuadrados. Han sido hallados también otros mosaicos de menor dimensión que, junto a las ánforas, monedas y lingotes de hierro y plomo, se encuentran expuestos en el Centro Arqueológico Hospital de la Caridad de Portmán. Estas huellas de la Historia de la zona permiten apreciar el gran legado que los romanos dejaron en Portus Magnus.</p>
            </div>
        </section>
    )
}
export default Portman_Romanos;