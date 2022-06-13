import { useCallback, useContext, useState } from "react";
import { useLocation } from "wouter";
import Context from "../../Contextos/UserContext/UserContext";
import GetComentarios from "../../Servicios/Comentarios/GetComentarios";
import CreateNoticia from "../../Servicios/CrearNoticia/CreateNoticas";
import CreateQuejaSeugerencia from "../../Servicios/CreateQuejaSeugerencia/GetQuejaSeugerencia";
import GetLogin from "../../Servicios/Login/Login";
import GetRegistro from "../../Servicios/Registro/Registro";

function useUser(){
    const {token, setToken} = useContext(Context);
    const [comprobacion, setComprobacion] = useState(true);
    const [nombre, setNombre] = useState(null);    
    const [mensajeLogin, setMensajeLogin] = useState('');    
    const [mensajeRegistro, setMensajeRegistro] = useState('');    
    const [buscando, setBuscando] = useState(true);
    const [, navegar] = useLocation();

    function login({email, password}){        
        setBuscando(true);
        GetLogin({email, password}).then(response => {
            let tokenUsuario = response.token_type + ' ' + response.access_token;
            window.sessionStorage.setItem('token', tokenUsuario);
            window.sessionStorage.setItem('iduser', response.id);
            window.sessionStorage.setItem('name', response.name);
            setToken(response.access_token); // Guardar el token del usuario que se ha logeado en el useState del Contexto
            // Si la respuesta no hay nada es que el correo o la contraseña intruducidos estan mal entones con este esta mostramos un mensaje al usuario
            if (response.access_token === undefined){ 
                setComprobacion(false);
                setMensajeLogin(response.errors.email);
            }else{
                setComprobacion(true);
                setNombre(response.name);
                navegar('/');                
            }
        })
        setBuscando(true);
    }
    useCallback(login, [setToken]);

    function loginAdmin({email, password}){
        GetLogin({email, password}).then(response => {
            console.log(response.Admin)
            if(response.Admin==1){
                let tokenUsuario = response.token_type + ' ' + response.access_token;
                window.sessionStorage.setItem('tokenAdmin', tokenUsuario);
                console.log('a')
                navegar('/PanelDeControl');
                // Si la respuesta no hay nada es que el correo o la contraseña intruducidos estan mal entones con este esta mostramos un mensaje al usuario
                if (response.access_token === undefined){ 
                    setComprobacion(false);
                }else{
                    setComprobacion(true);                
                    navegar('/PanelDeControl');
                }
            }else{
                setMensajeLogin('Las creedenciales estan mal')
            }        
        })
    }

    function crearNoticia({titulo, descripcion, image, descripcionCorta}){
        let token = window.sessionStorage.getItem('tokenAdmin');
        CreateNoticia({titulo, descripcion, image, descripcionCorta, token}).then(response => 
            {console.log(response)})
    }

    function createQuejaSeugerencia({Nombre, Apellidos, email, Contenido}){
        CreateQuejaSeugerencia({Nombre, Apellidos, email, Contenido}).then(response => {setMensajeRegistro(response)})
    }

    function registrarse({name, email, password, telefono}){
        GetRegistro({name, email, password, telefono}).then(response => {setMensajeRegistro(response)})
    }
    
    function comentarios({Contenido, id_noticia}){
        let id_user = parseInt(window.sessionStorage.getItem('iduser'));
        let token = window.sessionStorage.getItem('token');        
        console.log({Contenido, id_noticia, id_user, token})        
        GetComentarios({Contenido, id_noticia, id_user, token}).then(response => {console.log(response.id_noticia)})        
    }

    function logout(){
        setToken(null);
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('iduser');
        window.sessionStorage.removeItem('status');
        window.sessionStorage.removeItem('tokenAdmin');
    }
    useCallback(logout, [setToken])

    return {
        isLogeado:Boolean(token),
        login,
        loginAdmin,
        logout,
        registrarse,
        comentarios,
        crearNoticia,
        createQuejaSeugerencia,
        comprobacion,
        buscando,
        token,
        nombre,
        mensajeLogin,
        mensajeRegistro,        
    }
}
export default useUser;