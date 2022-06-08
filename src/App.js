//import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'wouter';
import PieDePagina from './Componentes/Footer/Footer';
import Index from './Paginas/Inicio/Index';
import Noticias from './Paginas/Noticias/Noticias';
import Login from './Paginas/Entrar/Entrar';
import Registrarse from './Paginas/Registrarse/Registrarse';
import { UserContextProvider } from './Contextos/UserContext/UserContext';
import ContenidoNoticia from './Componentes/Noticia/Noticia';
import Admin from './Paginas/Admin/admin';
import LoginAdmin from './Paginas/LoginAdmin/LoginAdmin';
import Gastronomia from './Paginas/Nuestra Gastronomia/Gastronomia';
import NuestraRutas from './Paginas/Nuestras Rutas/NuetrasRutas';
import NuestraHistoria from './Paginas/Nuestra Historia/NuestraHistoria';
import Aramada from './Componentes/Publicaciones/Armada';
import Desastre_Portman from './Componentes/Publicaciones/Desastre Portman';
import Portman_Romanos from './Componentes/Publicaciones/Portman y los Romanos';
import El_Faro_La_Chapa from './Componentes/Publicaciones/La Chapa';

function App() {
  
  return (    
    <UserContextProvider>
      <Route path='/' component={Index}></Route>
      <Route path='/Blog' component={NuestraHistoria}></Route>
        <Route path='/Blog/Armada' component={Aramada}></Route>
        <Route path='/Blog/La-Chapa' component={El_Faro_La_Chapa}></Route>
        <Route path='/Blog/Desastre-Portman' component={Desastre_Portman}></Route>
        <Route path='/Blog/Portman-Romanos' component={Portman_Romanos}></Route>
      <Route path='/Noticias' component={Noticias}></Route>
      <Route path='/Noticia/:id' component={ContenidoNoticia}></Route>
      <Route path='/Gastronomia' component={Gastronomia}></Route>
      <Route path='/Rutas' component={NuestraRutas}></Route>
      <Route path='/NuestrasRutas'></Route>
      <Route path='/Entrar' component={Login}></Route>
      <Route path='/Registrarse' component={Registrarse}></Route>
      <Route path='/Admin' component={LoginAdmin}></Route>
      <Route path='/PanelDeControl' component={Admin}></Route>
      <PieDePagina></PieDePagina>      
    </UserContextProvider>
  );
}

export default App;
