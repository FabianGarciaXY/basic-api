// Setting up Express
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;
app.use(express.json()) // Indicacamos que vamos a usar el formato JSON

/*============   Main route   =============*/
app.get('/', (req, res) => {
    res.send('Hi World!!!');
});


/*=============================================
=                   HTTP METHODS              =
    GET = Regresar/obtener información
    POST = Crear

    Usamos el metodo GET para crear un 
    endpoind que regresa una lista de personas

=============================================*/

// Esto es un EndoPoint
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);

    const explorer1 = {id: 1, name: 'explorer1'};
    const explorer2 = {id: 2, name: 'explorer2'};
    const explorer3 = {id: 3, name: 'explorer3'};

    const listOfExplorers = [explorer1, explorer2, explorer3];
    // Codigo 200 HTTP OK, y envio de un JSON
    res.status(200).json(listOfExplorers);
});

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`GET by ID Explorers V1 API || ${new Date()}`);

    const explorer = { id: 1, name: 'explorer1'};
    res.status(200).json(explorer);
});

// POST
app.post('/v1/explorers', (req, res) => {
    console.log(`POST explorers V1 API ${new Date()}`);
    
    // Aqui debe de ir la logica para guardar en la base de datos la información recibida
    console.log(req.body) // Parametros del request
    res.status(201).json({ msg: 'Explorer created succesfully'}) // En post se responde con 201
})

/*============  Starting server  =============*/
app.listen(port, () => {
    console.log('Server Started');

});