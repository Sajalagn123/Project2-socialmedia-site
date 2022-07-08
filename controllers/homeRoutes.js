//These are all the view routes for your application
const router = require('express').Router();

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/otherpage', (req, res) => {
  //this will render the view otherpage.handlebars
  res.render('otherpage');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/products', (req, res) => {
  res.render('products');
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.send('logout success!');
});

module.exports = router;
