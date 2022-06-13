import { useState } from "react";
import { Link } from "wouter";
import useUser from "../../Hooks/useUser/useUser";
import './registrarse.css';
function Registrarse(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const {registrarse, mensajeRegistro} = useUser();
    const [enviando, setEnviado] = useState(false)

    function manejarFormulario(event){
        event.preventDefault();
        setEnviado(true);
        console.log(mensajeRegistro)
        console.log({name, email, password, telefono})
        registrarse({name, email, password, telefono});        
    }

    function mensajes (){        
        return mensajeRegistro.data != undefined ? <p className='text-suscess'>El usuario a sido creado</p>:<p className='text-danger'>Los campos escritos son incorrectos o ya existen</p> 
    }

    return(
        <main>
            <section className="row fondoLogin ">
                <form className="align-content-center form-group centrar texto" onSubmit={manejarFormulario}>
                    <label className="mr-2 ">Nombre de Usuario</label>
                    <input type="text" className="form-control mr-5" placeholder="Nombre de Usuario" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label className="mr-2 mb-1 ">Contraseña</label>
                    <input type="password" className="form-control mr-5 mb-2" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label className="mr-2 ">Correo Electronico</label>
                    <input type="text" className="form-control mr-5" placeholder="Correo Electronico" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label className="mr-2 ">Telefono</label>
                    <input type="number " className="form-control mr-5" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>                  
                    {enviando ? mensajes() : ''}
                    <div className="col-2">                            
                        <button className="btn btn-outline-dark">Registrarse</button>
                    </div>
                    <Link to='/'>
                        <h5>Volver al Inicio</h5>
                    </Link>
                </form>
            </section>
        </main>
    )
}
export default Registrarse;