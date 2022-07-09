const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
router.use('/users', userRoutes);

module.exports = router;
