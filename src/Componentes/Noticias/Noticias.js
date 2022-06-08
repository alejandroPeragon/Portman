import { Link } from "wouter";

function Noticia(props){
    return(        
        <div className="col-lg-4">
            <div className="card" >
                {console.log(props.contenidos.imagen)}
                <img className="card-img-top" src={props.contenidos.imagen} alt="Card image"></img>
                <div className="card-body">
                    <h4 className="card-title">{props.contenidos.Titulo}</h4>
                    <p className="card-text">{props.contenidos.DescripcionCorta}</p>
                    <Link className='btn btn-primary' to={'/Noticia/'+props.contenidos.ID}>Mas Información</Link>
                </div>
            </div>
        </div>        
    )
}
export default Noticia;