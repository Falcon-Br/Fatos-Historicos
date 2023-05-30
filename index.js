import express from 'express'
import servicoBuscarFato from './servico/servico.js';
import validaAno from './servico/validaAno.js';

const app = express()

app.get('/', (req, res)=>{
    
    let anoFato = req.query.ano

    if (validaAno(anoFato) === true){
        let fato = servicoBuscarFato(anoFato)
        res.json({ano: fato})
    }
    res.status(400).json({'Erro':'Ano Invalido!'})
})

app.listen(8080, ()=>{
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    console.log(`Servidor Rodando na porta 8080, desde: ${horas} Hrs : ${minutos} min`)
})