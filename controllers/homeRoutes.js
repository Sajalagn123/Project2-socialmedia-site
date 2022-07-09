
//These are all the view routes for your application
const router = require('express').Router();
const { User, Product } = require('../models');
const authy = require('../utils/helpers');

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get('/', async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const dbProducts = await Product.findAll({
      include: [{
        model: User,
      }]
    });
    res.render('home', {
      products: products,
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
        // model: Product,
        attributes: ['id', 'name', 'price', 'image'],
      }]
    });
    // const product1 = dbProduct.get({ plain: true });
    res.render('products', {
      product: dbProduct,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // res.render('productpage');
});

// router.get('/category', authy, async (req, res) => {
//   try {
//     const dbProducts = await Product.findAll({
//       include: [{
//         model: Product,
//         attributes: ['id', 'name', 'price', 'imageUrl'],
//       }]
//     });
//     res.render('category', {
//       products: dbProducts,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/category/:id', authy, async (req, res) => {
//   try {
//     const dbproducts = await Product.findByPk(req.params.id, {
//       include: [{
//         model: Product,
//         attributes: ['id', 'name', 'price', 'imageUrl'],
//       }],
//     });
//     res.render('category', {
//       products: dbproducts,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/register', async (req, res) => {
  try {
    const dbUsers = await User.findAll();
    res.render('register', {
      users: dbUsers,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.get('/checkout', async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      // include: [{
      //   // model: Product,
      //   attributes: ['id', 'name', 'price', 'imageUrl'],
      // }]
    });
    res.render('checkout', {
      products: dbProducts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect('/');
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
