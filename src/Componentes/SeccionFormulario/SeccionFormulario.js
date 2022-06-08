import { useState } from 'react';
import useUser from '../../Hooks/useUser/useUser';
import './SeccionFormulario.css';

function SeccionFormulario(){
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [Contenido, setContenido] = useState("");
    let {createQuejaSeugerencia} = useUser();

    function controlarFormulario(event){
        event.preventDefault();
        //console.log({nombre, apellidos, email, contenido});
        createQuejaSeugerencia({Nombre, Apellidos, email, Contenido});
    }

    return(
        <div className="row">
            <div className="col-xl-12" data-aos='zoom-in-up'>                
                <h2 className="text-center tituloSecciones">TU OPINION IMPORTA</h2>                                
                <form className="align-content-center form-group centrar" onSubmit={controlarFormulario}>
                    <label className="mr-2">Nombre</label>
                    <input type="text" className="form-control mr-5" placeholder="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <label className="mr-2 mb-1">Apellidos</label>
                    <input type="text" className="form-control mr-5 mb-2" placeholder="Apellidos" value={Apellidos} onChange={(e) => setApellidos(e.target.value)}></input>
                    <label className="mr-2">Correo Electronico</label>
                    <input type="text" className="form-control mr-5" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label className="mr-2">Quejas y Dudas</label>
                    <textarea className="form-control mr-2" cols="60" rows="6" value={Contenido} onChange={(e) => setContenido(e.target.value)}></textarea>
                    <button className="btn btn-outline-dark">Enviar</button>
                </form>
            </div>
        </div>                
    );
}
export default SeccionFormulario;