
//THIS index file is the entry point of our API(data) routes,
//it will bring in all api routes and export 1 router middleware
//that will be used to handle all requests to the API


const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
router.use('/users', userRoutes);
router.use('/products', productRoutes);
module.exports = router;


