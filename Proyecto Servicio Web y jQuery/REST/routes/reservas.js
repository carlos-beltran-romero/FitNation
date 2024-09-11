'use strict';
const express = require('express');
const router = express.Router();
const reservasService = require('./reservas-service');

/*      RESERVAS DE EJEMPLO PARA PROBAR POSTMAN  
    {
        "Nombre": "Carlos",
        "Apellidos": "Beltrán Romero",
        "Fecha Nacimiento": "10-10-1998",
        "Sexo": "Hombre",
        "DNI": "12345678A",
        "Telefono": "123456789",
        "Instalacion": "Piscina",
        "Numero personas": 2,
        "Fecha Reserva": "10-06-2023",
        "Hora Reserva": "10:00"
    },
    {
        "Nombre": "César",
        "Apellidos": "Cerrolaza Salas",
        "Fecha Nacimiento": "05-06-2000",
        "Sexo": "Hombre",
        "DNI": "54294861A",
        "Telefono": "987654321",
        "Instalacion": "Pista de Padel",
        "Numero personas": 5,
        "Fecha Reserva": "11-05-2023",
        "Hora Reserva": "10:00"
    },
    {
        "Nombre": "Javier",
        "Apellidos": "García García",
        "Fecha Nacimiento": "10-10-1998",
        "Sexo": "Hombre",
        "DNI": "44627255A",
        "Telefono": "453627189",
        "Instalacion": "Pista de Padel",
        "Numero personas": 2,
        "Fecha Reserva": "10-06-2023",
        "Hora Reserva": "10:00"
    },
    {
        "Nombre": "Javier",
        "Apellidos": "García García",
        "Fecha Nacimiento": "10-10-1998",
        "Sexo": "Hombre",
        "DNI": "44627255A",
        "Telefono": "453627189",
        "Instalacion": "Pista de Tenis",
        "Numero personas": 4,
        "Fecha Reserva": "16-06-2023",
        "Hora Reserva": "16:00"
    },
    {
        "Nombre": "María",
        "Apellidos": "Lista Vela",
        "Fecha Nacimiento": "14-04-2001",
        "Sexo": "Mujer",
        "DNI": "67589320A",
        "Telefono": "234567890",
        "Instalacion": "Pista de Fútbol",
        "Numero personas": 20,
        "Fecha Reserva": "17-05-2023",
        "Hora Reserva": "17:00"
    }
*/


/*      METODOS GLOBALES       */

router.get('/', function (req, res) {
    reservasService.getAll((err, reservas) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reservas.length == 0) {
            res.status(500).send({
                msg: "reservas null"
            });
        } else {
            res.status(200).send(reservas);
        }
    });
});

router.post('/', function (req, res) {
    let reserva = req.body;
    reservasService.add(reserva, (err, reserva) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reserva.length != 0) {
            res.status(201).send({
                msg: 'Reservas creadas!'
            });
        }
    });
});

router.delete('/', function (req, res) {
    reservasService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'Reservas eliminadas!'
            });
        }
    });
});

/*      METODOS ESPECÍFICOS       */

router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    reservasService.get(_id, (err, reserva) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reserva.length == 0) {
            res.status(500).send({
                msg: "reservas null"
            });
        } else {
            res.status(200).send(reserva);
        }
    });
});



router.delete('/:_id', function (req, res) {
    let _id = req.params._id;//COMPLETAR;  
    reservasService.remove(_id, (err) => {
        if (err) {
            res.status(500).send({ msg: err });
        } else {
            res.status(200).send({
                msg: 'Reserva eliminada!'
            });
        }
    });
});



router.put('/:_id', function (req, res) {
    const _id = req.params._id;
    const updatedReserva = req.body;
    reservasService.update(_id, updatedReserva, (err,
        numUpdates) => {
        if (err) {
            res.status(500).send({ msg: err });
        } else if (numUpdates.modifiedCount === 0) {
            res.status(500).send({
                msg: 'no actualizada'
            });
        } else {
            res.status(200).send({
                msg: 'Reserva actualizada!'
            });
        }
    });
});




module.exports = router; 