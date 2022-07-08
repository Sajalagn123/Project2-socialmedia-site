/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { User } = require('../../models');


//this get routes will return all data of example table from the database
router.post('/doregister', async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  //console.log(email, password);

  const data =
    {
      username: email,
      password: password,
    };

  User.create(data)
    .then((user) => {

      let output = {status:'success'};
      res.status(200).json(output);

    })
    .catch((err) => {
      console.log(err);
      res.status(200).json(err);
    });
});

router.post('/dologin', (req, res) => {
  //res.send('received data')
  var email = req.body.email;
  var password = req.body.password;
  //console.log(email, password);

  const condition =
  {
    where: {
      username: email,
      password: password,
    }
  };

  User.findAll(condition)
    .then((user) => {
      // eslint-disable-next-line eqeqeq
      if (user.length != 0) {
        req.session.loggedIn = true;
        req.session.email = email;
        req.session.userId = user[0].getDataValue('id');

        let output = {status:'success'};
        res.status(200).json(output);
      } else {

        let output = {status:'failure'};
        res.status(200).json(output);

      }

    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });

});


router.get('/isloggedin', function (req, res) {

  if (req.session.loggedIn) {
    let output = {status:'success'};
    res.status(200).json(output);
  } else {
    let output = {status:'failure'};
    res.status(200).json(output);
  }
});

module.exports = router;
