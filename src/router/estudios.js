const express = require("express")
const router = express.Router()

const estudios = require("../controllers/estudios.js")
const data = require("../middlewares/data.js");
const nomezator = require("../middlewares/nomezator.js")

router.post("/",nomezator,data,  (req, res) => {
    const body = req.body;
    const code = estudios.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = estudios.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = estudios.show(req.params.id);
    res.json(code);
});

router.put("/:id",nomezator,data,  (req, res) => {
    const body = req.body;
    const code = estudios.update(body, req.params.id, data);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    estudios.destroy(req.params.id);
    res.json();
})

module.exports = router;