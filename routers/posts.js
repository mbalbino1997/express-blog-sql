const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("lista dei post")
});

router.get("/:id", (req, res) => {
    res.send(`Dettagli del post ${req.params.id}`)
});

router.post("/", (req, res) => {
    res.send("Creazione nuovo post")
});

router.put("/:id", (req, res) => {
    res.send(`Modifica totale del post ${req.params.id}`)
});

router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`)
});

router.delete("/:id", (req, res) => {
    res.send(`Eliminazione della pizza ${req.params.id}`)
});

module.exports = router;