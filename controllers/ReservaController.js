const db = require("../models");
const reservas = db.reservas;
const Op = db.Sequelize.Op;

const reservaModel = require("../models").category;

const reservaController = {};

reservaController.getAll = (req, res) => {
    
  reservas.findAll({include: [{ model:reservaModel}]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};

reservaController.getById = (req, res) => {
  
  const id = req.params.id;

  reservas.getById(id, {include: [{ model:reservaModel}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving order with id=" + id
      });
    });
};

reservaController.getByDni = (req, res) => {
  
  const dni = req.params.dni;

  reservas.getByDni(dni, {include: [{ model:reservaModel}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Order with dni=${dni}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders with dni=" + dni
      });
    });
};

reservaController.getByHotelId = (req, res) => {
  
  const hotelId = req.params.hotelId;

  reservas.getByHotelId(hotelId, {include: [{ model:reservaModel}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order with hotelId=${hotelId}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders with hotelId=" + hotelId
      });
    });
};

reservaController.getByEntrada = (req, res) => {
  
  const fechaEntrada = req.params.fechaEntrada;

  reservas.getByEntrada(fechaEntrada, {include: [{ model:reservaModel}]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find order with fechaEntrada=${fechaEntrada}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders with fechaEntrada=" + fechaEntrada
      });
    });
};


module.exports = reservaController;