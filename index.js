import express from 'express'
import servicoBuscarFato from './servico/servico.js';
import validaAno from './servico/validaAno.js';

const app = express()

app.get('/', (req, res)=>{
    
    let anoFato = req.query.ano
    if(anoFato){
        if(validaAno(anoFato) === true){
            let fato = servicoBuscarFato(anoFato)
            res.json({ano: fato})
        }else{
            res.status(400).json({'erro':'Ano Invalido!'})
        }
    }else{
        res.status(200).json({'mensagem':'Informe uma data entre 1920 e 2022.'})   
    }
})

app.listen(8080, ()=>{
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    console.log(`Servidor Rodando na porta 8080, desde: ${dia}/${mes+1}/${ano} - ${horas} Hrs : ${minutos} min`)
})