import fotoVertidos from './img/vertidos.jpg';
import fotoAntigua from './img/fotoAntigua.jpg';

function Desastre_Portman(){    
    return(
        <section>
            <h1 className='col-12'>El Desastre de Portman</h1>
            <div className='container'>
                <img src={fotoVertidos} alt="Card image" width='100%'></img>
                <p>El origen del ocaso del ecosistema llegó en 1945 con la reanudación de la minería a cielo abierto y en 1957 con la creación del lavadero Roberto. La principal protagonista durante este periodo fue la empresa Peñarroya. Esta empresa reactivó un sector en decadencia y creó nuevos puestos de trabajo en una localidad que había tenido problemas económicos durante décadas. Sin embargo, Peñarroya no tuvo en cuenta criterios ambientales y optó por arrojar los residuos del lavadero de flotación directamente al mar. Las instituciones públicas le denegaron los permisos para realizar los vertidos por su alta toxicidad y por los perjuicios que se generarían en el sector pesquero hasta en dos ocasiones, pero Peñarroya consiguió influir en el regulador para que cambiara de opinión y estableció el lavadero de flotación más grande de Europa.</p>
                <img src={fotoAntigua} width='50%' alt='image'></img>
                <p>Entre 1957 y 1990, Peñarroya vertió 7.000 toneladas diarias de residuos compuestos por una mezcla de tierra, zinc, cadmio, restos reactivos y plomo. Las consecuencias fueron escalofriantes: el lodo fue ganándole terreno al mar paulatinamente en un ecosistema en el que las arenas de Portmán se tiñeron de negro.</p>
                <p>Según los propios habitantes de Portmán, cada mes había que desplazar la tubería que depositaba los estériles porque ya se habían comido el mar y se tuvieron que establecer subsidios para los pescadores. El Ayuntamiento de La Unión intentó frenar los vertidos en las décadas de 1960 y 1970 para no comprometer el valor turístico de la zona, pero las autoridades nacionales se negaron, pues la explotación minera generaba buena parte de la producción de plata y de hierro de España. Greenpeace realizó una campaña en Portmán para bloquear el dragado de vertidos en 1986</p>
                <p>Finalmente, debido a la pérdida de rentabilidad del negocio y a la presión social, Peñarroya vendió sus derechos de explotación y propiedades a Portmán Golf. En 1990 se interrumpieron los vertidos. En total, el lodo ganó 12 kilómetros al mar y 14 metros de profundidad a través de las 60 millones de toneladas de estériles arrojadas desde el lavadero Roberto. Donde antaño encontrábamos un ecosistema con riqueza biológica, ahora la oscuridad de los restos químicos y minerales nos muestran la huella de una actividad económica sin escrúpulos ambientales.</p>
            </div>
        </section>
    )
}
export default Desastre_Portman;