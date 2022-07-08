const router = require('express').Router();
const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);
const productRoutes = require('./productRoutes');

module.exports = router;
