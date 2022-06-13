import { useState } from 'react';
import { Link } from 'wouter';
import useUser from '../../Hooks/useUser/useUser';
import './entrar.css';
import imagenFondo from './img/portm_n_01_9.JPG';
import ayax_loader from './img/ayax-loader.gif';

function Login(){
    const [email, setNombre] = useState("");
    const [password, setContraseña] = useState("");    
    const {login,mensajeLogin, buscando} = useUser();

    function controlarFormulario(event){
        event.preventDefault();
        console.log({email, password})
        login({email, password});         
    }

    return(
        <main>
            <section className="fondoLogin separacion">
                <form className="align-content-center form-group centrar texto" onSubmit={controlarFormulario}>
                    <label className="mr-2">Email</label>
                    <input type="text" className="form-control mr-5" placeholder="Email" value={email} onChange={(e) => setNombre(e.target.value)}></input>
                    <label className="mr-2 mb-1">Contraseña</label>
                    <input type="password" className="form-control mr-5 mb-2" placeholder="Contraseña" value={password} onChange={(e) => setContraseña(e.target.value)}></input>
                    <p className="texto">¿No tienes Cuenta? <Link to='/Registrarse'>Registrate</Link> para estar informado de todas las noticias de Portman</p>                        
                    <p className='col-12 text-left text-danger'>{mensajeLogin}</p>
                    <div className="col-2 boton">
                        <button className="btn btn-outline-dark">Entrar</button>                        
                    </div>                    
                    <Link to='/'>
                        <h5>Volver al Inicio</h5>
                    </Link>
                </form>                                    
            </section>
        </main>
    )
}
export default Login;