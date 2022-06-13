function Comentarios(props){

    function formatearFecha(fecha){
        //"2022-05-21T00:06:39.000000Z"
        let año, mes, dia, hora, min;
        año = fecha.slice(0,4);
        mes = fecha.slice(5,7);
        dia = fecha.slice(8,10);

        hora = fecha.slice(11,13);
        min = fecha.slice(14,16);

        return dia+' : '+mes+' : '+año+', '+hora+':'+min
        
    }


    return(
        <section className='border '>
            <h5>{props.comentarios.user.Nombre}</h5>
            <small>{formatearFecha(props.comentarios.FechaCreacion)}</small>
            <p>{props.comentarios.Contenido}</p>
        </section>
    )
}
export default Comentarios;