const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8080;

app.use( require('./rutas/index') );
// nota: los index se pueden obviar

app.listen(8080, ()=>{
    console.log("Server online in PORT: ", port);
});