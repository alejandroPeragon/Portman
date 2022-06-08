const ENDPOINT = 'http://www.portman.es/api/noticias';
function CreateNoticia(formdata, token){
    console.log(token);
    //console.log({titulo, descripcion, image, descripcionCorta})
    return fetch(ENDPOINT ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-type': 'multipart/form-data',
            "Cookie": "XSRF-TOKEN=eyJpdiI6Inl4L0d4MmhRSnA2NDZMM0MzMENWeUE9PSIsInZhbHVlIjoieTJsaDNLalZZVEtJaXo3R0J4OGtMWFdCSkNTRHFMdklBTTJaTnZVZDd3NmRWQ245Rmg2b0pPN25qSmFlWHNITlhSV21sWVpGclZhcTFCczdhTEg5MlpuTHlQTmZVT2tYRkVrdXFESDhCUzlLeHdveXdVcWJHVWRUTDZ5Z0VxckUiLCJtYWMiOiI0MjJiYTYwYTk4ZGNkOWIzODQ4ZjdhNjAxNWFmZTRjNGEwMjBhZTdiNTQwMDZkZmNmOWIyYzYzZWJmNmZlNjBmIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImF4cnhZVXhLb2JVOVBtMUtJLzdOcFE9PSIsInZhbHVlIjoiOUpUbU9GMW9uek9sb0lFNlJyWk5ldjdaNjd5aDROVFZrZkdtQUVXeDYrSVFiVEtHUHJSakcyMXdNeVVCQVorRXZmYzdLVVF3MHY4bFU0cTNGNXdCekJYSU43R1pUQVh1RlFvYlAwdXhUdnVydlR3YkJaYmdoUDZJY21rbzZtYW8iLCJtYWMiOiJhMzNmZjk1ZmE3ZDU1YTcyZjZhZmFkNmNlZmQzY2UzZTEzNTUyZjI1MWNiYzAyZDBjZjgzY2Q4ZjJjMDMwZmFjIiwidGFnIjoiIn0%3D",
            'Authorization' : token,
          },          
        body : JSON.stringify({formdata})
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