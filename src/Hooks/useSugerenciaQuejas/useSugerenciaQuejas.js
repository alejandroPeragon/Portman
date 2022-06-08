import { useEffect, useState } from "react"
import GetSugerenciasQuejas from "../../Servicios/GetSugerenciasQuejas/GetSugerenciasQuejas"

function useSugerenciaQuejas(){
    const [sugerenciaQueja, setSugerenciaQueja] = useState(null);
    const [buscando, setBuscando] = useState(true);

    function sugerenciasQuejas(){
        setBuscando(true);
        GetSugerenciasQuejas().then(response => {setSugerenciaQueja(response)})
        console.log(sugerenciaQueja)
        setBuscando(false);
    }
    useEffect(sugerenciasQuejas, [])
    
    return {buscando, sugerenciaQueja}
}
export default useSugerenciaQuejas;