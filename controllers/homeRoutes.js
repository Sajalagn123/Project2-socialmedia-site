//These are all the view routes for your application
const router = require('express').Router();
const { User } = require('../models/User');

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get('/', async (req, res) => {
 try {
  const UserData = await User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
 });
 req.session.save(() => {
  req.session.loggedIn = true;
  req.status(200).json(UserData);
 });
}
catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get('/otherpage', (req, res) => {
  //this will render the view otherpage.handlebars
  res.render('otherpage');
});

module.exports = router;
