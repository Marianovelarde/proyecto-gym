const express = require('express');
const userRoutes = require('../routes/userRoutes');
const pagosRoutes = require('../routes/pagosRoutes')

const router = express.Router();

router.use('/users', userRoutes);
router.use('/pagos', pagosRoutes)

module.exports = router;