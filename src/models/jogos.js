const estudios = require ('../controllers/estudios.js')
const publicadoras = require ('../controllers/publicadoras.js')
const generos = require('../controllers/generos.js')


let proximoId = 2;

const model = (body, id = proximoId++, data = 0) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        estudios.show(body.estudio_id) &&
        publicadoras.show(body.estudio_id) &&
        generos.show(body.estudio_id) &&
        body.lancamento != undefined &&
        body.lancamento != ""
        
    ){
        if(data == 0){
            return {
                id: id,
                nome: body.nome,
                publicadora_id: body.publicadora_id,
                genero_id: body.genero_id,
                estudio_id: body.estudio_id,
                lancamento: body.lancamento,
                criado_em: body.data,
            }

        }else{
            return{
                id: id,
                nome: body.nome,
                publicadora_id: body.publicadora_id,
                genero_id: body.genero_id,
                estudio_id: body.estudio_id,
                lancamento: body.lancamento,
                criado_em: data,
                atualizado_em: body.data
            }
        }
    }
}
module.exports = model;