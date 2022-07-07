/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { Product } = require('../../models');


router.get('/list', function (req, res) {

  //res.send('products list');
  Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    });

});

router.get('/mylist', function (req, res) {

  if (req.session.loggedIn) {
    //res.send('products list');
    Product.findAll({ where: { user_id: req.session.userId } })
      .then((products) => {
        res.status(200).json(products);
      });
  } else {
    res.send('not logged in');
  }

});

router.post('/add', (req, res) => {
  //res.send('received data')

  var name = req.body.name;
  var price = req.body.price;
  var description = req.body.description;
  var image = req.body.image;

  const data =
    {
      product_name: name,
      price: price,
      description: description,
      image: image,
      user_id: req.session.userId
    };

  Product.create(data)
    .then((product) => {

      let output = { status: 'success' };
      res.status(200).json(output);

    })
    .catch((err) => {
      console.log(err);
      res.status(200).json(err);
    });

});

router.post('/remove', function (req, res) {

  if (req.session.loggedIn) {
    Product.destroy({ where: { id: req.body.productId } });
    let output = { status: 'success' };
    res.status(200).json(output);
  } else {
    res.send('not logged in');
  }

});



module.exports = router;