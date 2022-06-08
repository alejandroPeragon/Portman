import { useState } from "react";
import { Link } from "wouter";
import useUser from "../../Hooks/useUser/useUser";
import './registrarse.css';
function Registrarse(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correcto, setCorrecto] = useState(true);
    const {registrarse} = useUser();

    let vadilacionEmail =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let vadilacionTelefono = /^\d{9}/;
    //let correcto = true;

    function manejarFormulario(event){
        event.preventDefault();
        if(name==='' || password==='' || vadilacionEmail.test(email) || telefono.length==9){
            //correcto=false;
            setCorrecto(false);
        }else{
            //correcto=true;
            setCorrecto(true);
            registrarse({name, email, password, telefono});
        }        
    }

    return(
        <main>
            <section className="row fondoLogin separacion">
                <form className="align-content-center form-inline centrar texto" onSubmit={manejarFormulario}>
                    <label className="mr-2 ">Nombre de Usuario</label>
                    <input type="text" className="form-control mr-5" placeholder="Nombre de Usuario" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label className="mr-2 mb-1 ">Contraseña</label>
                    <input type="password" className="form-control mr-5 mb-2" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label className="mr-2 ">Correo Electronico</label>
                    <input type="text" className="form-control mr-5" placeholder="Correo Electronico" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label className="mr-2 ">Telefono</label>
                    <input type="number " className="form-control mr-5" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                    {!correcto ? <p classNameName='text-danger'>Tienes que rellenar todos los campos</p> : ''}
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