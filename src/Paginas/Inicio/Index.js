//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../../Componentes/Menu/Menu';
import SeccionPrincipal from '../../Componentes/SeccionPrincipal/SeccionPrincipal';
import SeccionNoticias from '../../Componentes/SeccionNoticias/SeccionNoticias';
import SeccionFormulario from '../../Componentes/SeccionFormulario/SeccionFormulario';
import SecceciónConocePortman from '../../Componentes/SecceciónConocePortman/SecceciónConocePortman';
import Carusel from '../../Componentes/Carusel/Carusel';
import SeccionBlog from '../../Componentes/SeccionArchivoDeFotos/Blog';

function Index() {
  return (    
    <html>
      <body>
      <Menu></Menu>
      <Carusel></Carusel>
        <main className='container'>
          <SeccionPrincipal></SeccionPrincipal>
          <SeccionNoticias></SeccionNoticias>
          <SecceciónConocePortman></SecceciónConocePortman>
          <SeccionBlog></SeccionBlog>
          <SeccionFormulario></SeccionFormulario>
        </main>
      </body>
    </html>
  );
}

export default Index;
