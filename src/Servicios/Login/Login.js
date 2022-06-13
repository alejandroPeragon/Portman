const ENDPOINT = 'http://www.portman.es/api/tokens/create';

function GetLogin({email, password}){
    return fetch(ENDPOINT ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
          },
        body : JSON.stringify({email, password})
    }).then(response => {
        return response.json()
    }).catch((error) => {
        console.error(error);
    });
}
export default GetLogin;