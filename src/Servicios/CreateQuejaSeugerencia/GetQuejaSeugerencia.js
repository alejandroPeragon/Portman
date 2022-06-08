const ENDPOINT = 'http://www.portman.es/api/SugerenciaQueja';
function CreateQuejaSeugerencia({Nombre, Apellidos, email, Contenido}){
    return fetch(ENDPOINT,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },          
        body : JSON.stringify({Nombre, Apellidos, email, Contenido})
    }).then(response => {
        return response;
    })
        
}
export default CreateQuejaSeugerencia;