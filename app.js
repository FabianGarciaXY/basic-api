// Setting up Express
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()) // Indicacamos que vamos a usar el formato JSON

/*============   Main route   =============*/
app.get('/', (req, res) => {
    res.send('Hi World!!!');
});


/*=============================================
=                   HTTP METHODS              =
    GET

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



/*============  Starting server  =============*/
app.listen(port, () => {
    console.log('Server Started');

});