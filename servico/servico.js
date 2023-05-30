import fatosHistoricos from "../dados/fatos.js";

export default function servicoBuscarFato(ano){
   
    for(let fato of fatosHistoricos){
        if(fato.Ano === ano){
            return fato.Fato
        }
    }
}