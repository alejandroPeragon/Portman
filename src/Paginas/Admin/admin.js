import { useState } from "react";
import Cargando from "../../Componentes/Cargando/Cargando";
import useSugerenciaQuejas from "../../Hooks/useSugerenciaQuejas/useSugerenciaQuejas";
import useUser from "../../Hooks/useUser/useUser";

function Admin(){
    const [titulo, setTitulo] = useState("");
    const [descripcion, setContenido] = useState("");
    const [descripcionCorta, setDescripcionCorta] = useState("");
    const [image, setImagen] = useState("");

    let {crearNoticia} = useUser();
    let {sugerenciaQueja} = useSugerenciaQuejas();

    function controlarFormulario(event){
        event.preventDefault();
        console.log(image);
        let formdata = new FormData();
        formdata.append('titulo', titulo);
        formdata.append('descripcion', descripcion);
        formdata.append("image", image);
        formdata.append('descripcionCorta', descripcionCorta);
        crearNoticia({titulo, descripcion, image, descripcionCorta});
    }

    function recorrerSugerencias(sugerencias){
        return <ul key={sugerencias.id}>
                    <p>Nombre y Apellidos: {sugerencias.Nombre},{sugerencias.Apellidos}</p>
                    <p>Correo Electronico: {sugerencias.email}</p>
                    <p>Sugerencia o Queja: {sugerencias.Contenido}</p>
                </ul>
    }
    return(
        <section className='row '>
            <h1 className='col-12'>Panel de Administracion</h1>
            <article className='centrar'>
                <h3>Crear Noticia</h3>
                <form className='col-12 form-group' onSubmit={controlarFormulario} method="post" encType="multipart/form-data">
                    <label className="mr-2" className="mr-2">Titulo</label>
                    <input className="form-control mr-5" type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                    
                    <label className="mr-2">Contenido</label>
                    <textarea className="form-control mr-5" cols='10' rows='10' value={descripcion} onChange={(e) => setContenido(e.target.value)}></textarea>
                    
                    <label className="mr-2">Descripcion Corta</label>
                    <input className="form-control mr-5"type='text' value={descripcionCorta} onChange={(e) => setDescripcionCorta(e.target.value)}></input>
                    
                    <label className="mr-2">Imagen (Subir la imagen a el siguiente <a href='https://freeimage.host/' target='_blank'>enlace</a>) si tienes algun problema consulta el <a href='#'>tutorial</a></label>
                    <input className="form-control mr-5" id='file-id' type='text' onChange={(e) => setImagen(e.target.value)}></input>
                    <button className="btn btn-outline-dark">Crear Noticia</button>
                </form>

                <h3>Sugerencias Y Queja</h3>
                    {sugerenciaQueja===null ? <Cargando></Cargando> : sugerenciaQueja.map(recorrerSugerencias)}
            </article>
        </section>
    )
}
export default Admin;