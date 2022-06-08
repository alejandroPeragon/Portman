import { useEffect, useState } from "react"
import GetIdNoticias from "../../Servicios/NoticiaId/GetNoticiaId";

function useGetNoticiasId(id){
    const [noticia, setNoticia] = useState([]);
    
    function noticiasId(){
        GetIdNoticias(id).then(response => {setNoticia(response)});
        console.log(noticia)
    }
    useEffect(noticiasId, [])

    return {noticia}
}
export default useGetNoticiasId