const express = require("express")
const publicadoras = require("./router/publicadoras.js");
const generos = require("./router/generos.js");
const jogos = require("./router/jogos.js");
const estudios = require("./router/estudios.js");
const porta = 3000;
const app = express();

app.use(express.json());
app.use("/jogo", jogos);
app.use("/publicadora", publicadoras)
app.use("/generos", generos)
app.use("/estudio", estudios)




app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})