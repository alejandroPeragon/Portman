import { useState } from "react";
import { Link } from "wouter";
import useUser from "../../Hooks/useUser/useUser";

function LoginAdmin(){
    const [email, setNombre] = useState("");
    const [password, setContraseña] = useState("");    
    const {loginAdmin} = useUser();
    function controlarFormulario(event){
        event.preventDefault();
        console.log({email, password})
        loginAdmin({email, password});         
    }

    return (
        <div className='row'>
            <form className=" col-12 align-content-center form-group centrar" onSubmit={controlarFormulario}>
                <label className="mr-2">Nombre de Usuario</label>
                <input type="text" className="form-control mr-5" placeholder="Nombre de Usuario" value={email} onChange={(e) => setNombre(e.target.value)}></input>
                <label className="mr-2 mb-1">Contraseña</label>
                <input type="password" className="form-control mr-5 mb-2" placeholder="Contraseña" value={password} onChange={(e) => setContraseña(e.target.value)}></input>
                
                <div className="col-2 boton d-flex">
                    <button className="btn btn-outline-dark flex-colunm">Entrar</button>
                    {/*!buscando ? <img src={ayax_loader} className='flex-colunm' width='50px'></img> : ''*/}
                </div>
                {/*!comprobacion ? <p classNameName='text-danger'>El correo electronico o la contraseña son icorrectos</p> : ''*/}
                <Link to='/'>
                    <h5>Volver al Inicio</h5>
                </Link>
            </form>
        </div>
    )
}
export default LoginAdmin;