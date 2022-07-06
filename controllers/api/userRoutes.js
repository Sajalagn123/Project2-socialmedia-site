const router = require('express').Router();
const { User } = require('../../models');


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

router.post("/login", async (req,res) => {
  try {
    const UserData = await User.findOne({
      where: {
        email:req.body.email,
      },
    });
    if (!UserData) {
      res.status(401).json({ message: "Invalid Email or Password. Please try again!" });
      return;
    }
    const checkPassword = await UserData.checkPassword(req.body.password);
    if (!checkPassword) {
      res.status(401).json({ message: "Invalid Email or Password. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.sessions,loggedIn = true;
      req.status(200).json({user: UserData, message: "You are now logged in!"});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn){
    req.session.destroy(() => {
      req.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
