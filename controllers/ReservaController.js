const db = require("../models");
const reservas = db.reservas;
const Op = db.Sequelize.Op;

let hotel = require("../models").hotels;
let cliente = require("../models").clientes;

const ReservaController = {};

ReservaController.getAll = (req, res) =>{

    reservas.findAll()
    .then(data =>{
        res.send(data);
    })
    .catch(error =>{
        res.status(404).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    })
};
