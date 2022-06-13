import { useState } from "react";
import useGetNoticiasId from "../../Hooks/useNoticiaId/useNoticiaId";
import useUser from "../../Hooks/useUser/useUser";
import Cargando from "../Cargando/Cargando";
import Comentarios from "../Comentarios/Comentarios";
import Menu from "../Menu/Menu";

function ContenidoNoticia(props){
    const {comentarios} = useUser();
    const [Contenido, setContenido] = useState();

    let noticiaId = useGetNoticiasId(props.params.id);

    function recorrerComentarios(comentarios, index){        
        return (
            <section>                
                <Comentarios key={index} comentarios={comentarios}></Comentarios>
            </section>
        );
    }

    function manejarFormularioComentarios(event){
        event.preventDefault();
        let id_noticia = noticiaId.noticia.ID;
        console.log({ Contenido, id_noticia});
        comentarios({Contenido, id_noticia});
    }

    return(
        <section>            
            <div className='container'>                
                <h1>{noticiaId.noticia.Titulo}</h1>

                <div className='row d-flex'>                        
                    <img className="card-img-top flex-colunm" src={noticiaId.noticia.imagen} alt="Card image" width='50%'></img>
                    <p className='flex-colunm'>{noticiaId.noticia.Descripcion}</p>
                </div>

                <h2>Comentarios</h2>            
                {noticiaId.noticia.length!==0 ? noticiaId.noticia.Comentarios.map(recorrerComentarios) : <Cargando></Cargando>}

                <form onSubmit={manejarFormularioComentarios}>
                    <h4>Escribe tu Comentario</h4><br></br>
                    <p>Te tienes que registrar para comentar en la noticias</p>
                    <textarea cols='30' rows='10' value={Contenido} onChange={(e) => setContenido(e.target.value)}></textarea><br></br>
                    <button className='btn btn-outline-dark'>Enviar Tu Comentario</button>
                </form>
                
            </div>
        </section>
    )
}
export default ContenidoNoticia;