import { useState } from 'react';
import useUser from '../../Hooks/useUser/useUser';
import './SeccionFormulario.css';

function SeccionFormulario(){
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [Contenido, setContenido] = useState("");
    const [enviando, setEnviado] = useState(false)
    let {createQuejaSeugerencia, mensajeRegistro} = useUser();

    function controlarFormulario(event){
        event.preventDefault();
        setEnviado(true);
        createQuejaSeugerencia({Nombre, Apellidos, email, Contenido});
    }

    function mensajes(){
        return mensajeRegistro.data != undefined ? <p className='text-suscess'>La sugerencia o la queja se enviado</p>:<p className='text-danger'>Rellena y comprueba todos los campos</p> 
    }

    return(
        <div className="row">
            <div className="col-xl-12" id='formulario' data-aos='zoom-in-up'>                
                <h2 className="text-center tituloSecciones">TU OPINION IMPORTA</h2>                                
                <form className="align-content-center centrar-form form-group" onSubmit={controlarFormulario}>
                    <label className="mr-2">Nombre</label>
                    <input type="text" className="form-control mr-5" placeholder="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <label className="mr-2 mb-1">Apellidos</label>
                    <input type="text" className="form-control mr-5 mb-2" placeholder="Apellidos" value={Apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    <label className="mr-2">Correo Electronico</label>
                    <input type="text" className="form-control mr-5" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label className="mr-2">Sugerencia y Quejas</label>
                    <textarea className="form-control mr-2" cols="60" rows="6" value={Contenido} onChange={(e) => setContenido(e.target.value)}></textarea>
                    <button className="btn btn-outline-dark">Enviar</button>
                    {enviando ? mensajes() : ''}
                </form>
            </div>
        </div>                
    );
}
export default SeccionFormulario;