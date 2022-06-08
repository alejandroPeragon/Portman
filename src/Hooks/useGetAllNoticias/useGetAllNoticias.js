import { useEffect, useState } from "react";
import GetAllNoticias from "../../Servicios/Noticias/GetAllNoticias";

function useGetAllNoticias(){
    const [noticia, setNoticias] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function noticias(){
        setBuscando(true);
        GetAllNoticias().then(response => { setNoticias(response) });
        console.log(noticia);
        setBuscando(false);
    }
    useEffect(noticias, []);

    function formatearFecha(fecha){
        //"2022-05-21T00:06:39.000000Z"
        let año, mes, dia, hora, min;
        año = fecha.slice(0,4);
        mes = fecha.slice(6,7);
        dia = fecha.slice(8,10);

        hora = fecha.slice(12,13);
        min = fecha.slice(15,16);

        return {
            año,
            mes,
            dia,
            hora,
            min
        }
    }

    return {
        noticia, 
        buscando, 
        formatearFecha
    };
}
export default useGetAllNoticias;