import './SeccionNoticias.css';
import imagenSerie from './img/serie.jpg';
import useGetAllNoticias from '../../Hooks/useGetAllNoticias/useGetAllNoticias';
import Cargando from '../Cargando/Cargando';
import { Link } from 'wouter';

function SeccionNoticias(){

    let noticias = useGetAllNoticias();        

    function recorrerNoticias(noticias){
        return (
            <article key={noticias.ID} className="col-lg-4 text-center separacionNoticias" data-aos='zoom-in'>
                <img src={imagenSerie} alt="Logo Sugerencias" width="350px" height="200px"></img>
                <h2>{noticias.Titulo}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <p><Link className="btn border-dark" to={'/Noticia/'+noticias.ID} role="button"> Leer Mas &raquo;</Link></p>
            </article>
        )
    }

    function filtrarUltimasNoticias(noticia){
        if(noticia.ID>noticias.noticia.length-2){
            return noticia;
        }
    }

    return(
        <section className='row color'>
            <div data-aos='zoom-in-up'>
                <h2 className='text-center tituloSecciones'>ULTIMAS NOTICIAS</h2>
            </div>           
            
            { noticias.buscando ? <Cargando></Cargando> : noticias.noticia.filter(filtrarUltimasNoticias).map(recorrerNoticias)}            
        </section>
    )
}
export default SeccionNoticias;