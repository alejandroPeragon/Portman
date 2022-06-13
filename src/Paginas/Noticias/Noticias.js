import './noticias.css';
import imagenNoticias from './fondoNoticias.jpg';
import Menu from '../../Componentes/Menu/Menu';
import useGetAllNoticias from '../../Hooks/useGetAllNoticias/useGetAllNoticias';
import Noticia from '../../Componentes/Noticias/Noticias';
import Cargando from '../../Componentes/Cargando/Cargando';

function Noticias(){

    let listaNoticias = useGetAllNoticias();
    
    function recorrerNoticias(noticias){
        return <Noticia key={noticias.ID} contenidos={noticias}></Noticia>
    }

    return (
        <main className=''>
            <Menu></Menu>
            <div><img className='altura' src={imagenNoticias}></img></div>
            <section className='container'>                
                <div className='row'>                    
                    {listaNoticias.buscando ? <Cargando></Cargando> : listaNoticias.noticia.map(recorrerNoticias)}                    
                </div>
            </section>
        </main>
    )
}
export default Noticias;