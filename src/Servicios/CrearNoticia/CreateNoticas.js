const ENDPOINT = 'http://www.portman.es/api/noticias';
function CreateNoticia({titulo, descripcion, image, descripcionCorta, token}){
    console.log(token);
    console.log({titulo, descripcion, image, descripcionCorta})
    return fetch(ENDPOINT ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token,
          },          
        body : JSON.stringify({titulo, descripcion, image, descripcionCorta, token})
    }).then(response => {
        console.log(response);
        return response.text();
    }).then(response => {
        //console.log(response);
        //return response.json()
    }).catch((error) => {
        console.error(error);
    });
}
export default CreateNoticia;