const express = require('express');
const port = 9000;
const app = express();
const bodyParser = require('body-parser');

const checkRequest = require('./checkRequest.js');

let name = "";
let product = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.post('/api/post', checkRequest, (req, res) => {
    console.log('foi')
})

app.get("/", (req, res) => {
    res.send(`O cliente foi ${name} e o pedido foi ${product}`);
});

app.listen(port, () => {
    console.log(`Server working on port ${port}`)
})

