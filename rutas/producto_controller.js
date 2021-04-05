const express = require('express');

app = express();

const data = [
    {
        id : 123,
        categoria : "Polo",
        nombre : "Polo Levis",

    },{
        id : 124,
        categoria : "Polos", 
        nombre : "Polo Rambo",

    }
];

/* Listar productos */
app.get('/producto', (req,res) => {
    res.json({
        data : data
    })
});

/* Guardar producto */
app.post('/producto', (req,res) => {
    res.json(
        {
            message: "Guardado"
        }
    )
});

/* Borrar producto */
app.delete('/producto/:id', (req,res) => {
    let id = req.params.id;
    res.json(
        {
            message: `Producto ${id} Eliminado`
        }
    )
});

/* Actualizar producto */
app.put('/producto/:id', (req,res) => {
    let id = req.params.id;
    res.json(
        {
            message : `Producto ${id} Actualizado`
        }
    )
});

module.exports = app;