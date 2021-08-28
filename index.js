
const express = require('express')


const app = express()

app.use(express.static('./'))

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`)
