const ENDPOINT = 'http://www.portman.es/api/usuarios';

function GetRegistro({name, email, password, telefono}){
    return fetch(ENDPOINT ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
          },
        body : JSON.stringify({name, email, password, telefono})
    }).then(response => {
        return response.json()
    }).catch((error) => {
        console.error(error);
    });
}
export default GetRegistro;