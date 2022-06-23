const db = require("../models");
const reservas = db.reservas;
const Op = db.Sequelize.Op;

let hotel = require("../models").hotels;
let cliente = require("../models").clientes;

const reservaController = {};

reservaController.getAll = (req, res) =>{

    reservas.findAll()
    .then(data =>{
        res.send(data).json({
            success: true,
            message: "Get all reservas retrivered successfully",
            data: data
        });
    })
    .catch(error =>{
        res.status(404).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    })
};

reservaController.getById = (req, res) => {
    const id = req.params.id;

    reservas.findByPk(id, {include: [{ model:categoryModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movies with id= " + id
        });
      });
};

reservaController.getByDni = async(req, res) =>{
    const dni = req.params.dni;
    const reservaDni = await res.json(reservas.findByDni(dni));
    return reservaDni;    
};

reservaController.getByHotelId = async(req, res) =>{
    const hotelId = req.params.hotelId;
    const reservaHotel = await res.json(reservas.findByHotelId(hotelId));
    return reservaHotel;
};

reservaController.getByEntrada = async(req, res) =>{
    const fechaEntrada = req.params.fechaEntrada;
    const reservaEntrada = await res.json(reservas.findByEntrada(fechaEntrada));
    return reservaEntrada;
};


module.exports = reservaController;