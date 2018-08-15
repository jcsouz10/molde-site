const express = require('express');
const port = 9000;
const app = express();
const bodyParser = require('body-parser');

let name = "";
let product = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.post('/api/post', (req, res) => {
    console.log(req.body)
    name = req.body.name;
    product = req.body.product;

    if (name && product !== "")
        res.send("Pedido realizado")  
    else   
        res.send("Pedido nao realizado")    
})

app.get("/", (req, res) => {
    res.send(`O cliente foi ${name} e o pedido foi ${product}`);
});

app.listen(port, () => {
    console.log(`Server working on port ${port}`)
})

