
//These are all the view routes for your application
const router = require('express').Router();
const { User, Product} = require('../models');
const authy = require('../utils/helpers');

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get('/', authy, async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'imageUrl'],
      }]
    });
    res.render('home', {
      products: dbProducts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/product/:id', authy, async (req, res) => {
  try {
    const dbProduct = await Product.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: ['id', 'name', 'price', 'imageUrl'],
      }]
    });
    res.render('product', {
      product: dbProduct,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.render('productpage');
});

router.get('/category', authy, async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      include: [{
        model: Product,
        attributes: ['id', 'name', 'price', 'imageUrl'],
      }]
    });
    res.render('category', {
      products: dbProducts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/:id', authy, async (req, res) => {
  try {
    const dbproducts = await Product.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: ['id', 'name', 'price', 'imageUrl'],
      }],
    });
    res.render('category', {
      products: dbproducts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;