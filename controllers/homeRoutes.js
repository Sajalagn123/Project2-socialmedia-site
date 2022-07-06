//These are all the view routes for your application
const router = require('express').Router();
const { User } = require('../models/User');
const authy = require('../utils/helpers');

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get('/', async (req, res) => {
 try {
  const user = await User.findAll();
  res.render('home', { user,
  loggedIn: req.session.loggedIn });
 } catch (err) {
  console.log(err);
  res.status(500).json(err);
 }
});

router.get('/product', (req, res) => {
  //this will render the view otherpage.handlebars
  res.render('otherpage');
});

router.get('/otherprofile', (req, res) => {
  //this will render the view otherpage.handlebars
  res.render('otherpage');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('otherpage');
});

module.exports = router;
