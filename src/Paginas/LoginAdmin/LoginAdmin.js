import { useState } from "react";
import { Link } from "wouter";
import useUser from "../../Hooks/useUser/useUser";

function LoginAdmin(){
    const [email, setNombre] = useState("");
    const [password, setContraseña] = useState("");    
    const {loginAdmin, mensajeLogin} = useUser();
    function controlarFormulario(event){
        event.preventDefault();
        console.log({email, password})
        loginAdmin({email, password});         
    }

    return (
        <div className='row'>
            <form className="col-12 align-content-center form-group centrar" onSubmit={controlarFormulario}>
                <label className="mr-2">Email</label>
                <input type="text" className="form-control mr-5" placeholder="Email" value={email} onChange={(e) => setNombre(e.target.value)}></input>
                <label className="mr-2 mb-1">Contraseña</label>
                <input type="password" className="form-control mr-5 mb-2" placeholder="Contraseña" value={password} onChange={(e) => setContraseña(e.target.value)}></input>
                
                <div className="col-2 boton d-flex">
                    <button className="btn btn-outline-dark flex-colunm">Entrar</button>                    
                </div>                
                <p className='col-12 text-left text-danger'>{mensajeLogin}</p>
                <Link to='/'>
                    <h5>Volver al Inicio</h5>
                </Link>
            </form>
            <div className='espacio'></div>
        </div>
    )
}
export default LoginAdmin;