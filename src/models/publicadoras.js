let proximoId = 2;

const model = (body, id=proximoId++,data=0) => {
    if(body.nome != undefined &&
        body.nome != ""        
    ){
        if(data==0){
            return {
                id: id,
                nome: body.nome,
                criado_em: body.data
            }   
        }
        else{
           return {
            id: id,
            nome: body.nome,
            criado_em: data,
            atualizado_em: body.data
           } 
        }
    }
}
module.exports = model;