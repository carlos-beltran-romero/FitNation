const express = require('express');
const app = express();
const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080;
const baseAPI = '/api/v1';
const cors = require('cors');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(logger('dev'));

const reservas = require('./routes/reservas');
const reservasService = require('./routes/reservas-service');
app.use('/reservas', reservas);


const server = http.createServer(app);
reservasService.connectDb(function (err) {
    if (err) {
        console.log('Could not connect with MongoDB – reservasService');
        process.exit(1);
    }
    server.listen(PORT, function () {
        console.log('Server up and running on localhost:' + PORT);
    });
});

app.get('/', function (req, res) {
    res.status(200).send('Reserva Capturada');
});
app.use(express.static(path.join(__dirname, 'public')));


