const db = [{id:1,
    nome:"RPG",
    criado_em:'2024-09-04',
    atualizado_em:"2024-09-04"
}];

const model = require("../models/generos.js")

const store = (body) => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 200;
    }
    return 400;
}

const show = (id) => db.find((el) => el.id == id);

const index = () => db;

const update = (body, id) => {
    const index = db.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id),db[index].criado_em);
    if(index != -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400;
}

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);
    if(index != -1){
        db.splice(index, 1);
    }
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}