const express = require('express');

app = express();

const data = [
    {
        id: 123,
        nombre: "Polos",

    },{
        id: 124,
        nombre: "Pantalones",

    }
];

/* Listar categorías */
app.get('/categoria', (req,res) => {
    res.json({
        data : data
    })
});

/* Guardar categoría */
app.post('/categoria', (req,res) => {
    res.json(
        {
            message: "Guardado"
        }
    )
});

/* Borrar categoría */
app.delete('/categoria/:id', (req,res) => {
    let id = req.params.id;
    res.json(
        {
            message: `Categoría ${id} Eliminada`
        }
    )
});

/* Actualizar categoría */
app.put('/categoria/:id', (req,res) => {
    let id = req.params.id;
    res.json(
        {
            message : `Categoría ${id} Actualizada`
        }
    )
});

module.exports = app;
