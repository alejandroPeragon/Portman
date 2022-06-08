function GetIdBlog(id){
    const ENDPOINT = `http://www.portman.es/api/blog/${id}`;
    return fetch(ENDPOINT,{
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(
        response => {
            //console.log(response);
            return response.json();
        }
    ).then(
        response => {
            console.log(response.data);
            return response.data;
        }
    )
}
export default GetIdBlog;