const router = require('express').Router();


const reservaRoutes = require('./routes/reserva.routes');

router.use('/reservas', reservaRoutes);

module.exports = router;