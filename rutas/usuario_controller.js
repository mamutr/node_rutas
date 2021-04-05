const express = require('express');

app = express();

const data = [
    {
        id : 123,
        nombre : "ventas",
        password : "1234",

    },{
        id : 124,
        nombre : "logistica", 
        password : "1234",

    }
];

/* Listar usuarios */
app.get('/usuario', (req,res) => {
    res.json({
        data : data
    })
});

/* Guardar producto */
app.post('/usuario', (req,res) => {
    res.json(
        {
            message: "Guardado"
        }
    )
});

/* Borrar producto */
app.delete('/usuario/:id', (req,res) => {
    let id = req.params.id;
    res.json(
        {
            message: `Usuario ${id} Eliminado`
        }
    )
});

/* Actualizar producto */
app.put('/usuario/:id', (req,res) => {
    let id = req.params.id;
    res.json(
        {
            message : `Usuario ${id} Actualizado`
        }
    )
});

module.exports = app;