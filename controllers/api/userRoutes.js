const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const UserData = await User.create({
//       // email: req.body.email,
//       password: req.body.password,
//       email: req.body.email,
//     });
//     req.session.save(() => {
//       req.session.loggedIn = true;
//       req.status(200).json(UserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post('/', async (req, res) => {
  try {
    const UserData = await User.create({
      // email: req.body.email,
      password: req.body.password,
      email: req.body.email,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      // res.status(200).json(UserData);
      res.redirect('/');
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log('user login body', req.body);
  try {
    const UserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log('userdata', UserData);
    if (!UserData) {
      res
        .status(401)
        .json({ message: 'Invalid Email or Password. Please try again!' });
      return;
    }
    const passwordValid = await bcrypt.compare(
      req.body.password,
      UserData.password
    );
    console.log('passworddata', passwordValid);
    if (!passwordValid) {
      res
        .status(401)
        .json({ message: 'Invalid Email or Password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.sessions, (loggedIn = true);
      req
        .status(200)
        .json({ user: UserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      req.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
