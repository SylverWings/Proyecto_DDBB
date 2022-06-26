const express = require("express");
const router = express.Router();

const reservaController = require("../controllers/reservaController");

router.get("/reservas", reservaController.getAll);
router.get("/reservas/:id", reservaController.getById);
router.get("/reservas/:dni", reservaController.getByDni);
router.get("/reservas/:hotelId", reservaController.getByHotelId);
router.get("/reservas/:fechaEntrada", reservaController.getByEntrada);
// router.get("/reservas/:fechaSalida", reservaController.getBySalida);


module.exports = router;