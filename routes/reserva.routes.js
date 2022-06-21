const express = require("express");
const router = express.Router();

const ReservaController = require("../controllers/ReservaController");

router.get("/reservas", ReservaController.getAll);
// router.get("/reservas/:id", ReservaController.getById);
// router.get("/reservas/:dni", ReservaController.getByDni);
// router.get("/reservas/:hotelId", ReservaController.getByHotelId);
// router.get("/reservas/:fechaEntrada", ReservaController.getByEntrada);
// router.get("/reservas/:fechaSalida", ReservaController.getBySalida);

module.exports = router;