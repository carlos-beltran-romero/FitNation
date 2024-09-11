'use strict';
const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectId;
const Reservas = function () {
};

Reservas.prototype.connectDb = function (callback) {
    MongoClient.connect("mongodb+srv://FitNation:SLnbTf7sPwTP45@fitnation.6sdic43.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
        function (err, database) {
            if (err) {
                console.log(err);
                callback(err);
            }
            db=database.db('FitNation').collection('reservas');
            console.log("Conexión correcta");
            callback(err, database);
        });
};

/*      AÑADIR A LA BDD     */

Reservas.prototype.add = function (reserva, callback) {
    return db.insertOne(reserva, callback);
};

/*      RECUPERAR DE LA BDD     */

Reservas.prototype.get = function (_id, callback) {
    return db.find({_id: ObjectId(_id)}).toArray(callback);
};

Reservas.prototype.getAll = function (callback) {
    return db.find({}).toArray(callback);
};

/*      ACTUALIZAR EN LA BDD     */

Reservas.prototype.update = function (_id, updatedReserva, callback) {
    delete updatedReserva._id;
    return db.updateOne(
    {_id: ObjectId(_id)}, {$set: updatedReserva}, callback);
};
    

/*      BORRAR DE LA BDD     */

Reservas.prototype.remove = function (_id, callback) {
    return db.deleteOne({_id: ObjectId(_id)}, callback);
};

Reservas.prototype.removeAll = function (callback) {
    return db.deleteMany({}, callback);
};
    

module.exports = new Reservas();







