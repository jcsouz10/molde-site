const express = require('express');
const app = express();

module.exports = 
    app.use("/api/post", (req, res, next) => {
    if (req.body.name && req.body.product !== "") {
        res.send("Pedido realizado")
        next()
    }
    else if (req.body.name === "")
        res.status(406).send("Pedido nao realizado, informe o nome")
    else if (req.body.product === "")
        res.status(406).send("Pedido nao realizado, informe o produto")
    })


