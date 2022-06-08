function Comentarios(props){

    return(
        <section className='border '>
            <h5>{props.comentarios.user.Nombre}</h5>
            <small>{props.comentarios.user.FechaCreacion}</small>
            <p>{props.comentarios.Contenido}</p>
        </section>
    )
}
export default Comentarios;