function GetComentarios({Contenido, id_noticia, id_user, token}){    
    console.log({Contenido, id_noticia, id_user, token});
    const ENDPOINT = 'http://www.portman.es/api/comentarios';
    return fetch(ENDPOINT,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token
          },
        body : JSON.stringify({Contenido, id_noticia, id_user})
    }).then(response => {
        //console.log(response.id_noticia);
        return response;    
    })
}
export default GetComentarios;