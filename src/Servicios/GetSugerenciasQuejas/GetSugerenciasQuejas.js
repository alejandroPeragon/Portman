const ENDPOINT = 'http://www.portman.es/api/SugerenciaQueja';
function GetSugerenciasQuejas(){
    return fetch(ENDPOINT,{        
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          }
    }).then(
        response => {         
            return response.json();
        }
    ).then(
        response => {
            console.log(response.data);
            return response.data;
        })
}
export default GetSugerenciasQuejas;